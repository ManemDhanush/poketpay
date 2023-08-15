import {
  Box,
  FormControl,
  Modal,
  OutlinedInput,
  Stack,
  styled
} from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import {
  BANK_MENU,
  CANCEL_THE_TRANSFER,
  CHOOSE_BANK,
  CONFIRMATION,
  MODALTEXT2,
  NO,
  SEARCH_TEXT,
  YES
} from "./ChooseBankConstants";
import ChevronRight from "../../../../public/assets/images/chevronright.svg";
import { Image } from "../../atoms/image";
import { theme } from "../../../theme/theme";
import ButtonComponent from "../../atoms/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
const StyledStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  "@media (min-width: 1200px)": {
    width: "516px"
  },
  "@media (max-width: 700px)": {
    width: "100%"
  },
  width: "516px",
  height: "60px",
  marginBottom: "4px",
  alignItems: "center",
  padding: "8px 8px 8px 12px"
});
const StyledButton = styled(ButtonComponent)({
  borderRadius: "56px",
  height: "56px",
  boxShadow: `0px 8px 8px ${theme.palette.greyColors.stroke3}, 0px 0px 8px #1414140a, 0px 0px 1px ${theme.palette.greyColors.stroke4} `,
  marginBottom: "5px"
});
const Boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "@media (min-width: 1200px)": {
    width: "564px"
  },
  "@media (max-width: 700px)": {
    width: "100%"
  },
  height: "335px",
  bgcolor: "background.paper",
  borderRadius: "16px"
};

const Wrapper = styled(Stack)(`
  & .card{
      cursor:pointer;
      :hover{
        background:${theme.palette.structural.cardHover}
      }
  }
`);
export const ChooseBank = () => {
  const [openModal, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(!openModal);
  };
  const navigate = useNavigate();

  return (
    <Wrapper>
      <TypographyComponent variant="h1" sx={{ marginBottom: "40px" }}>
        {CHOOSE_BANK}
      </TypographyComponent>
      <Box component="form" noValidate autoComplete="off" marginBottom={"20px"}>
        <FormControl
          sx={{
            "@media (min-width: 1200px)": {
              width: "516px"
            },
            "@media (max-width: 700px)": {
              width: "100%"
            }
          }}
        >
          <OutlinedInput placeholder={SEARCH_TEXT} />
        </FormControl>
      </Box>
      {BANK_MENU.map((item) => (
        <StyledStack
          key={item.id}
          className={item.name === BANK_MENU[4].name ? "card" : ""}
          onClick={() => {
            if (item.name === BANK_MENU[4].name) navigate(ROUTES.BANK_ACCOUNT);
            else navigate("");
          }}
        >
          <Image
            src={item.img}
            alt={item.name}
            style={{ paddingRight: "15px" }}
          />
          <TypographyComponent
            variant="caption1"
            color={theme.palette.textColor.highEmphasis}
          >
            {item.name}
          </TypographyComponent>
          <Image
            src={ChevronRight}
            alt="chevronright"
            style={{ marginLeft: "auto" }}
          />
        </StyledStack>
      ))}
      <StyledButton
        variant="contained"
        sx={{
          width: "218px",
          marginLeft: "143px"
        }}
        data-testid="button1"
        onClick={handleOpen}
      >
        <TypographyComponent variant="body2">
          {CANCEL_THE_TRANSFER}
        </TypographyComponent>
      </StyledButton>
      <Modal open={openModal} data-testid="modal">
        <Box sx={Boxstyle}>
          <TypographyComponent
            variant="h1"
            color={theme.palette.textColor.highEmphasis}
            sx={{ margin: "12.52% 25.26% 5% 35.26%" }}
          >
            {CONFIRMATION}
          </TypographyComponent>
          <TypographyComponent
            variant="body1"
            color={theme.palette.textColor.mediumEmphasis}
            sx={{ margin: "0% 13.50% 15% 22.87%" }}
          >
            {MODALTEXT2}
          </TypographyComponent>
          <Stack gap={"10px"} flexDirection={"row"}>
            <ButtonComponent
              variant="contained"
              onClick={() => navigate(ROUTES.LANDING_PAGE)}
              sx={{
                borderRadius: "56px",
                width: "135px",
                height: "56px",
                marginLeft: "27%",
                backgroundColor: `${theme.palette.primary.primary500}`
              }}
            >
              <TypographyComponent variant="body2">{YES}</TypographyComponent>
            </ButtonComponent>
            <StyledButton
              variant="text"
              sx={{
                width: "135px"
              }}
              onClick={handleOpen}
            >
              <TypographyComponent variant="body2">{NO}</TypographyComponent>
            </StyledButton>
          </Stack>
        </Box>
      </Modal>
    </Wrapper>
  );
};
