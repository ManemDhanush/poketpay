import { Box, Modal, RadioGroup, Stack, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { CONFIRM_TRADING } from "./confirmTradingAddressConstants";
import { AddressRadio } from "../../molecules/AddressRadio";
import ButtonComponent from "../../atoms/Button";
import { InputField } from "../../atoms/inputField";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)(`
    width:38vw;
    min-width:300px;
    max-width:516px;
    & .title{
        margin-bottom:12px;
    }
    & .content{
        margin-top:32px;
    }
    & .content-title{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:12px;
            & .link{
                cursor:pointer;
                text-decoration:underline;  
            }
        }
    & .MuiFormControlLabel-root{
        margin:0;
        margin-left:12px;
        height:132px;
    }
    & .buttons{
        margin-top:40px;
        & .MuiButtonBase-root{
            width:218px;
            height:56px;
            display:block;
            margin:0 auto;
            margin-bottom:20px;
            border-radius:56px;
        }
        & .up-btn{
            box-shadow: 0px 8px 24px rgba(85, 51, 255, 0.24);
        }
        & .down-btn{
            box-shadow: 0px 8px 8px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px rgba(20, 20, 20, 0.12);
        }
    }
    .MuiTextField-root{
        margin:0 auto;
        margin-top:24px;
        width:500px;
    }
    & .typo-inp-container{
      margin-bottom:16px;
    }
    & .disable{
      pointer-events:none;
      opacity:0.3;
    }
`);
const ModalBox = styled(Box)(`
    width:564px;
    box-shadow:none;
    height:306px;
    position:absolute;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
    background:white;
    padding:24px;
    border-radius:16px;
    .MuiTextField-root{
        margin-top:32px;
        margin-bottom:40px;
    }
    .MuiButton-root{
        width:135px;
        height:56px;
        border-radius:56px;
    }
    .btn{
        text-align:center;
    }

`);

export const ConfirmTradingAddress = () => {
  const navigate = useNavigate();
  const [displayEdit, setDisplayEdit] = useState<boolean>(false);
  const [addressValues, setAddressValues] = useState<string[]>(
    CONFIRM_TRADING.addresses
  );
  const [activeAddress, setActiveAddress] = useState<number>(-1);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [addAddress, setAddAddress] = useState<string>("");
  const [allAddress, setAllAddress] = useState<string[]>(
    CONFIRM_TRADING.addresses
  );
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleSetActiveAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveAddress(parseInt(e.target.value));
  };
  const handleSetAddressValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    idx: number
  ) => {
    setAddressValues((prev) => {
      const updatedAddressValues = [...prev];
      updatedAddressValues[idx] = e.target.value;
      return updatedAddressValues;
    });
  };
  const toggleEdit = () => {
    if (activeAddress !== -1) setDisplayEdit((prev) => !prev);
  };
  const handleDisplayModal = () => {
    setDisplayModal((prev) => !prev);
  };
  const handleSetAddAddress = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddAddress(e.target.value);
  };
  const handleSetAllAddress = () => {
    setAllAddress([...addressValues]);
  };
  const handleSave = () => {
    setAllAddress(addressValues);
    setRefresh(!refresh);
    toggleEdit();
  };
  const handleCancel = (idx: number) => {
    setAddressValues((prev) => {
      const updatedAddressValues = [...prev];
      updatedAddressValues[idx] = allAddress[idx];
      return updatedAddressValues;
    });
    toggleEdit();
  };
  useEffect(() => {
    handleSetAllAddress();
  }, [refresh]);
  return (
    <Wrapper>
      <TypographyComponent
        variant="h1"
        className="title"
        color={theme.palette.textColor.highEmphasis}
      >
        {CONFIRM_TRADING.title}
      </TypographyComponent>
      <Stack>
        <TypographyComponent
          variant="body3"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {CONFIRM_TRADING.subtitle + CONFIRM_TRADING.subtitle2}
        </TypographyComponent>
      </Stack>
      <Box className="content">
        <Box className="content-title">
          <TypographyComponent
            variant="body2"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {CONFIRM_TRADING.tradingAddress}
          </TypographyComponent>
          {!displayEdit && (
            <TypographyComponent
              variant="linkText"
              color={theme.palette.primary.primary500}
              className="link"
              onClick={toggleEdit}
            >
              {CONFIRM_TRADING.edit}
            </TypographyComponent>
          )}
        </Box>
        <Box className="content-address">
          <RadioGroup onChange={handleSetActiveAddress}>
            {allAddress.map((item, index) => (
              <Box key={item} className="typo-inp-container">
                {displayEdit && index === activeAddress ? (
                  <InputField
                    label={`Trading address ${index + 1}`}
                    multiline
                    maxRows={3}
                    value={addressValues[index]}
                    onChange={(e) => handleSetAddressValues(e, index)}
                    autoFocus
                    fullWidth
                    data-testid="input-field"
                  />
                ) : (
                  <AddressRadio
                    value={index.toString()}
                    address={allAddress[index]}
                    addressNo={index + 1}
                  />
                )}
              </Box>
            ))}
          </RadioGroup>
        </Box>
        <Box className="buttons">
          {displayEdit && activeAddress !== -1 ? (
            <>
              <ButtonComponent
                variant="text"
                className="up-btn"
                onClick={handleSave}
              >
                <TypographyComponent variant="body2">
                  {CONFIRM_TRADING.save}
                </TypographyComponent>
              </ButtonComponent>
              <ButtonComponent
                variant="contained"
                className="down-btn"
                onClick={() => handleCancel(activeAddress)}
              >
                <TypographyComponent variant="body2">
                  {CONFIRM_TRADING.cancel}
                </TypographyComponent>
              </ButtonComponent>
            </>
          ) : (
            <>
              <ButtonComponent
                variant="text"
                onClick={handleDisplayModal}
                className="up-btn"
              >
                <TypographyComponent variant="body2">
                  {CONFIRM_TRADING.buttonsContent[0]}
                </TypographyComponent>
              </ButtonComponent>
              <ButtonComponent
                variant="contained"
                className={
                  activeAddress === -1 ? "disable confirm-btn" : "confirm-btn"
                }
                data-testid="confirm"
                onClick={() => {
                  navigate("/business-activity");
                }}
              >
                <TypographyComponent variant="body2">
                  {CONFIRM_TRADING.buttonsContent[1]}
                </TypographyComponent>
              </ButtonComponent>
            </>
          )}
        </Box>
      </Box>
      <Modal open={displayModal} disableAutoFocus onClose={handleDisplayModal}>
        <ModalBox>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.highEmphasis}
          >
            {CONFIRM_TRADING.modal.title}
          </TypographyComponent>
          <InputField
            label={CONFIRM_TRADING.modal.label}
            multiline
            maxRows={3}
            fullWidth
            value={addAddress}
            onChange={handleSetAddAddress}
          />
          <Box className="btn">
            <ButtonComponent
              variant="contained"
              onClick={() => {
                setAddressValues((prev) => {
                  const updatedAddressValues = [...prev];
                  updatedAddressValues.push(addAddress);
                  return updatedAddressValues;
                });
                setRefresh(!refresh);
                setAddAddress("");
                handleDisplayModal();
              }}
              disabled={!addAddress.trim()}
            >
              <TypographyComponent variant="body2">
                {CONFIRM_TRADING.modal.btn}
              </TypographyComponent>
            </ButtonComponent>
          </Box>
        </ModalBox>
      </Modal>
    </Wrapper>
  );
};
