import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";
import { BUTTON_TEXTS, CONTENT, useAppContext } from "../../../constants";
import { InputField } from "../../atoms/inputField";
import ButtonComponent from "../../atoms/Button";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../../routes";

export interface FormValuesType {
  businessName: string;
  regNo: string;
  regAddr: string;
  [key: string]: string;
}

const InnerWrapper = styled(Box)(`
  width:38vw;
  min-width:390px;
  max-width:516px;
  & .form{
    margin-top:15px;
  }
  & span{
    display:block;
  }
  & .input{
    margin-top:32px;
  }
  & .content-title{
    margin-bottom:12px;
  }
  & .content{
    margin-bottom:40px;
  }
  & .form-head{
    display:flex;
    justify-content:space-between;
    margin-bottom:20px;
  }

`);

const Buttons = styled(Box)(`
  display:flex;
  position:absolute;
  left:70%;
  top:89.6%;
  flex-direction:row-reverse;
  & .MuiButtonBase-root{
    border-radius:56px;
    width:135px;
    height:56px;
  }
  & .save{
    margin-left:20px;
  }
  & .cancel{
    box-shadow: 0px 8px 8px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px rgba(20, 20, 20, 0.12);
  }
`);

export const ConfirmBusinessDetailsCard = () => {
  const [displayEdit, setDisplayEdit] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<FormValuesType>(
    CONTENT.confirmDetailsCard.inputFieldValues
  );
  const [displayValues, setDisplayValues] = useState<FormValuesType>(
    CONTENT.confirmDetailsCard.inputFieldValues
  );

  const { setBusiness } = useAppContext();

  const updateContext=()=>{
    setBusiness((prev)=>({
      ...prev,
      name:displayValues.businessName,
      registerNumber:displayValues.regNo,
      registerAddress:displayValues.regAddr

    }))
  }

  const handleSetDisplayEdit = () => {
    setDisplayEdit(true);
  };
  const handleSave = () => {
    setDisplayEdit(false);
    setDisplayValues({ ...formValues });
  };
  const handleCancel = () => {
    setDisplayEdit(false);
    setFormValues({ ...CONTENT.confirmDetailsCard.inputFieldValues });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const { businessName } = useParams();

  useEffect(() => {
    setFormValues((prev) => ({ ...prev, businessName: businessName! }));
    setDisplayValues((prev) => ({ ...prev, businessName: businessName! }));
  }, []);

  return (
    <InnerWrapper>
      <InnerWrapper>
        <TypographyComponent
          variant="h1"
          color={theme.palette.textColor.highEmphasis}
        >
          {CONTENT.confirmDetailsCard.title}
        </TypographyComponent>
        <TypographyComponent
          variant="body3"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {CONTENT.confirmDetailsCard.content_sole}
          <br />
          {CONTENT.confirmDetailsCard.content_sole2}
        </TypographyComponent>
        <Box className="form">
          <Box className="form-head">
            <TypographyComponent
              variant="caption1"
              color={theme.palette.textColor.lowEmphasis}
            >
              {CONTENT.confirmDetailsCard.content_business}
            </TypographyComponent>
            {!displayEdit && (
              <TypographyComponent
                variant="linkText"
                color={theme.palette.primary.main}
                onClick={handleSetDisplayEdit}
              >
                {CONTENT.confirmDetailsCard.content_edit}
              </TypographyComponent>
            )}
          </Box>
          {displayEdit &&
            CONTENT.confirmDetailsCard.inputFieldLabels.map((item) => (
              <InputField
                key={item.label}
                id={item.id}
                fullWidth
                variant="outlined"
                type="textarea"
                multiline
                maxRows={2}
                label={item.label}
                className="input"
                onChange={handleChange}
                value={formValues[item.id]}
              />
            ))}
          {!displayEdit &&
            CONTENT.confirmDetailsCard.inputFieldLabels.map((item) => (
              <Box className="content" key={item.label}>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.textColor.mediumEmphasis}
                  className="content-title"
                >
                  {item.label + ":"}
                </TypographyComponent>
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.textColor.highEmphasis}
                >
                  {displayValues[item.id]}
                </TypographyComponent>
              </Box>
            ))}
        </Box>
      </InnerWrapper>
      <Buttons>
        {!displayEdit && (
          <ButtonComponent
            variant="contained"
            onClick={() => {
              updateContext();
              navigate(ROUTES.YOUR_BUSINESS.confirmTradingAddr)}}
          >
            <TypographyComponent variant="body2">
              {BUTTON_TEXTS.confirm}
            </TypographyComponent>
          </ButtonComponent>
        )}
        {displayEdit && (
          <>
            <ButtonComponent
              variant="contained"
              onClick={handleSave}
              className="save"
            >
              <TypographyComponent variant="body2">
                {BUTTON_TEXTS.save}
              </TypographyComponent>
            </ButtonComponent>
            <ButtonComponent
              variant="text"
              className="cancel"
              onClick={handleCancel}
            >
              <TypographyComponent variant="body2">
                {BUTTON_TEXTS.cancel}
              </TypographyComponent>
            </ButtonComponent>
          </>
        )}
      </Buttons>
    </InnerWrapper>
  );
};
