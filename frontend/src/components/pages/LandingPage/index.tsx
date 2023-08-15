import React, { useEffect, useState } from "react";
import { NavbarPageTemplate } from "../../templates/NavbarPage";
import { Box, Modal, styled } from "@mui/material";
import NavBar from "../../organisms/NavBar";
import { HomeHeader } from "../../organisms/HomeHeader";
import SendArrow from "../../../../public/assets/images/sendArrow.svg";
import { TransferStatus } from "../../organisms/TransferStatus";
import TabHeader from "../../organisms/TabHeader";
import ButtonComponent from "../../atoms/Button";
import {
  CANCEL_TRANSFER,
  IMAGE_ALT,
  IMAGE_CAPTION
} from "./landingPageConstants";
import TypographyComponent from "../../atoms/Typography";
import {
  getByEmail,
  getTransactions,
  postUsers,
  updateTransactions
} from "../../../services";
import { Transaction } from "./landingPageUtils";
import { Image } from "../../atoms/image";
import Illustration from "../../../../public/assets/images/person.svg";
import { theme } from "../../../theme/theme";
import { CancelTransferModal } from "../../organisms/CancelTransferModal";
import { useAppContext } from "../../../constants";
import { useAuth0 } from "@auth0/auth0-react";
import { UserDetails } from "../../../utils";
const InnerWrapper = styled(Box)(`
  height:72.52vh;
  overflow:auto;
  ::-webkit-scrollbar {
    display: none;
  }
  & .transfer-box{
    margin-left:36px;
    margin-top:24px;
  }
  & .MuiButton-root{
    padding:16px 30px; 
    border-radius:56px;
  }
  & .cancel-btn{
    width:100%;
    text-align:right;
    margin-top:15px;
    margin-bottom:24px;
  }
  & .MuiAccordionSummary-root{
    height:11.32vh;
  }
  & .MuiPaper-root{
    margin-bottom:16px;
    box-shadow: 0px 1px 5px ${theme.palette.structural.cardShadow};
  }
  & .illustration{
    background:${theme.palette.structural.white};
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  & .container{
    text-align:center;
    .MuiTypography-root{
        width:526px;
        margin:0 auto;
    }
  }
`);

const Boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  borderRadius: "16px"
};

export const LandingPage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [openModal, setOpen] = useState(false);
  const [id, setId] = useState<number>();
  const [getTransaction, setGetTransactions] = useState<boolean>(false);
  const { currentUser, setCurrentUser } = useAppContext();
  const { isAuthenticated, user: authUser } = useAuth0();

  useEffect(() => {
    getTransactions(currentUser?.id!)
      ?.then((response) => {
        setTransactions(response);
      })
      .catch((err) => {});
  }, [currentUser, getTransaction]);

  useEffect(() => {
    if (isAuthenticated) {
      const user: UserDetails = {
        firstName: authUser?.given_name!,
        lastName: authUser?.family_name!,
        city: authUser?.locale!,
        address: authUser?.address!,
        dateOfBirth: authUser?.birthdate!,
        password: "",
        pincode: 0,
        email: authUser?.email!,
        phoneNumber: authUser?.phone_number?.toString()!,
        country: authUser?.address!
      };
      getByEmail(authUser?.email!)
        ?.then((response) => {
          setCurrentUser(response);
          setGetTransactions((prev) => !prev);
        })
        .catch((err) => {
          postUsers(user).then((response) => {
            setCurrentUser(response);
            setGetTransactions((prev) => !prev);
          });
        });
    }
  }, [isAuthenticated]);
  const handleOpen = () => {
    setOpen(!openModal);
  };

  const cancelTransaction = () => {
    handleSetTransaction(id!, "Cancelled").catch(() => {});
    handleOpen();
  };
  const handleSetTransaction = async (id: number, status: string) => {
    setTransactions((previous) => {
      const arr = [...previous];
      arr[
        transactions.findIndex((transaction) => transaction.id === id)
      ].status = status;
      return arr;
    });
    try {
      const data =
        transactions[
          transactions.findIndex((transaction) => transaction.id === id)
        ];
      await updateTransactions(
        {
          ...data,
          status
        },
        currentUser?.id!
      );
    } catch (error) {}
  };
  return (
    <>
      {transactions.length ? (
        <NavbarPageTemplate navbar={<NavBar showOptionalCode />}>
          <InnerWrapper>
            {transactions.map((item) => (
              <HomeHeader
                data-testid="homeheadertest"
                key={item.id}
                icon={SendArrow}
                name={`${item.recipient.firstName} ${item.recipient.lastName}`}
                currencysend={`${item.amount} ${item.fromCurrency}`}
                currencyrecieve={`${item.amountConverted} ${item.toCurrency}`}
                message={item.status}
              >
                <TabHeader />
                <Box className="transfer-box">
                  <TransferStatus status={item.status} />
                </Box>
                {item.status?.toLowerCase() == "sending" && (
                  <Box className="cancel-btn">
                    <ButtonComponent
                      variant="text"
                      onClick={() => {
                        handleOpen();
                        setId(item.id);
                      }}
                      sx={{
                        boxShadow: `0px 8px 8px ${theme.palette.greyColors.stroke3}, 0px 0px 8px #1414140a, 0px 0px 1px ${theme.palette.greyColors.stroke4} `
                      }}
                    >
                      <TypographyComponent variant="body2">
                        {CANCEL_TRANSFER}
                      </TypographyComponent>
                    </ButtonComponent>
                  </Box>
                )}
              </HomeHeader>
            ))}
          </InnerWrapper>
        </NavbarPageTemplate>
      ) : (
        <NavbarPageTemplate navbar={<NavBar showOptionalCode />}>
          <InnerWrapper>
            <Box className="illustration">
              <Box className="container">
                <Image src={Illustration} alt={IMAGE_ALT} />
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.textColor.mediumEmphasis}
                >
                  {IMAGE_CAPTION}
                </TypographyComponent>
              </Box>
            </Box>
          </InnerWrapper>
        </NavbarPageTemplate>
      )}
      <Modal open={openModal} onClose={handleOpen} data-testid="modal">
        <Box sx={Boxstyle}>
          <CancelTransferModal handleOpen={cancelTransaction} />
        </Box>
      </Modal>
    </>
  );
};
