import { styled, Stack } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { Dropdown } from "../../atoms/dropdown";
import ButtonComponent from "../../atoms/Button";
import { theme } from "../../../theme/theme";
import { useState } from "react";
import {
  CATEGORYMENU,
  LABELTEXTCATEGORY,
  LABELTEXTSIZE,
  LABELTEXTSUBCATEGORY,
  SIZEOFBUSINESSMENU,
  SUBCATEGORYMENU,
  VERIFYACCOUNTCARDSUBTEXT,
  VERIFYACCOUNTCARDTEXT
} from "./verifyAccountCardConstants";
import { CONTINUE, useAppContext } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
const StyledStack = styled(Stack)(`
.btn{
    position:absolute;
    left:70%;
    top:89.6%;
}
"@media (min-width: 1200px)": {
  width: "600px"
}
"@media (max-width: 400px)": {
  width: "100%"
}
        & .Mui-focused.MuiInputLabel-root {
          color: ${theme.palette.textColor.lowEmphasis};
          }
          & .MuiOutlinedInput-root {
            &.Mui-focused fieldset {
              border-bottom:1px solid ${theme.palette.greyColors.stroke};
          }
         
`);
export const VerifyAccountCard = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("");
  const [sizeOfBusiness, setSizeOfBusiness] = useState<string>("");
  const {setBusiness } = useAppContext();
  const isButtonEnabled = category && subcategory && sizeOfBusiness;

  const updateContext = () => {
    setBusiness((prev) => ({
      ...prev,
      sizeOfBusiness: sizeOfBusiness,
      subCategory: subcategory,
      category: category
    }));
  };

  return (
    <>
      <StyledStack>
        <Stack direction="column">
          <TypographyComponent
            sx={{
              color: `${theme.palette.textColor.highEmphasis}`,
              "@media (min-width: 1200px)": {
                width: "516px",
                height: "40px"
              },
              "@media (max-width: 400px)": {
                width: "100%",
                height: "10%"
              },
              marginBottom: "12px"
            }}
            data-testid="textId"
            variant="h1"
          >
            {VERIFYACCOUNTCARDTEXT}
          </TypographyComponent>
          <TypographyComponent
            sx={{
              color: `${theme.palette.textColor.mediumEmphasis}`,
              marginBottom: "44px",
              fontSize: "16px"
            }}
            data-testid="subTextId"
          >
            {VERIFYACCOUNTCARDSUBTEXT}
          </TypographyComponent>
          <Dropdown
            menu={CATEGORYMENU}
            formControlsx={{
              "@media (min-width: 1200px)": {
                width: "516px",
                height: "60px"
              },
              "@media (max-width: 400px)": {
                width: "100%",
                height: "10%"
              },

              marginBottom: "28px"
            }}
            labelText={LABELTEXTCATEGORY}
            handleChange={(value) => setCategory(value)}
            value={category}
            id="categoryId"
            dataId="select1"
          />
          <Dropdown
            menu={SUBCATEGORYMENU}
            formControlsx={{
              "@media (min-width: 1200px)": {
                width: "516px",
                height: "60px"
              },
              "@media (max-width: 400px)": {
                width: "100%",
                height: "10%"
              },
              marginBottom: "28px"
            }}
            labelText={LABELTEXTSUBCATEGORY}
            handleChange={(value) => setSubcategory(value)}
            value={subcategory}
            id="subCategoryId"
            dataId="select2"
          />
          <Dropdown
            menu={SIZEOFBUSINESSMENU}
            formControlsx={{
              "@media (min-width: 1200px)": {
                width: "516px",
                height: "60px"
              },
              "@media (max-width: 400px)": {
                width: "100%",
                height: "10%"
              }
            }}
            labelText={LABELTEXTSIZE}
            handleChange={(value) => setSizeOfBusiness(value)}
            value={sizeOfBusiness}
            id="sizeId"
            dataId="select3"
          />
        </Stack>
        <ButtonComponent
          variant="contained"
          sx={{
            borderRadius: "56px",
            width: "135px",
            height: "56px",
            pointerEvents: isButtonEnabled ? "" : "none",
            backgroundColor: isButtonEnabled
              ? `${theme.palette.primary.primary500}`
              : `${theme.palette.primary.primary100}`
          }}
          data-testid="button1"
          className="btn"
          onClick={() => {
            updateContext();
            navigate(ROUTES.YOUR_DETAILS);
          }}
        >
          <TypographyComponent variant="body2">{CONTINUE}</TypographyComponent>
        </ButtonComponent>
      </StyledStack>
    </>
  );
};
