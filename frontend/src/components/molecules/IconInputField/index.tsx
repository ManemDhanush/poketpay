import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import dropdown from "../../../../public/assets/images/downArrow.svg";
import divider from "../../../../public/assets/images/divider.svg";
import { Box } from "@mui/material";
import ButtonComponent from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { CONTINUE, UK_CODE, useAppContext } from "../../../constants";
import { ROUTES } from "../../../routes";
import { useNavigate } from "react-router-dom";

interface InputFieldProps {
  icon?: string;
  alt?: string;
  label?: string;
  defaultValue?: string;
}

const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root.MuiOutlinedInput-root": {
    borderRadius: "8px"
  },
  "& .input-container": {
    display: "flex",
    alignItems: "center",
    paddingRight: theme.spacing(1)
  },
  "& .icon": {
    marginRight: "14px"
  },
  "& .dropdown-icon": {
    marginRight: "22px"
  },
  "& .divider": {
    marginRight: "16px"
  },
  "& .MuiInputLabel-root": {
    background: "white",
    marginRight: theme.spacing(2)
  }
}));
const Wrapper = styled(Box)(`
    .confirm-button{
      width:135px;
      height:56px;
      border-radius:56px;
      box-shadow: 0px 8px 24px ${theme.palette.structural.btnShadow};
    }
    .confirm-btn-container{
      position:absolute;
      left:70%;
      top:89.6%;
    }
    .disable{
      pointer-events:none;
      opacity:0.3;
    }
    & input[type="number"]::-webkit-outer-spin-button,
    & input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &  .MuiInputBase-root.MuiOutlinedInput-root{
      font-size:${theme.typography.body2.fontSize}
    }
`);
const IconInput: React.FC<InputFieldProps> = ({
  icon,
  alt,
  label,
  defaultValue,
  ...props
}) => {
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length > 10) return;
    else setPhoneNumber(value);
  };
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "e" || evt.key === "+" || evt.key === "-") {
      evt.preventDefault();
    }
  };
  const updateContext = () => {
    setUser((prev) => ({
      ...prev,
      phoneNumber: "+44" + " " + phoneNumber
    }));
  };
  return (
    <Wrapper>
      <StyledTextField
        sx={{ width: "516px" }}
        variant="outlined"
        value={phoneNumber}
        onKeyDown={(e) => handleKeyDown(e)}
        type="number"
        label={label}
        defaultValue={defaultValue}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <>
              <div className="input-container">
                <img src={icon} alt={alt} className="icon" />
                <img
                  src={dropdown}
                  alt="Dropdown Icon"
                  className="dropdown-icon"
                />
                <img src={divider} alt="divider icon" className="divider" />
              </div>
              <TypographyComponent variant="body2">
                {UK_CODE}
              </TypographyComponent>
              &nbsp;
            </>
          )
        }}
        inputProps={{
          maxLength: 10
        }}
      />
      <Box className="confirm-btn-container">
        <ButtonComponent
          variant="contained"
          className={
            phoneNumber.length === 10
              ? "confirm-button"
              : "disable confirm-button"
          }
          data-testid="button"
          onClick={() => {
            navigate(ROUTES.TWO_FACTOR_OTP);
            updateContext();
          }}
        >
          <TypographyComponent variant="body2">{CONTINUE}</TypographyComponent>
        </ButtonComponent>
      </Box>
    </Wrapper>
  );
};

export default IconInput;
