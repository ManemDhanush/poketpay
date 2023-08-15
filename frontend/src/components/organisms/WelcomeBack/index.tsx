import { IconButton, InputAdornment, Stack, styled } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { InputField } from "../../atoms/inputField";
import Button from "../../atoms/Button";
import { theme } from "../../../theme/theme";
import { CheckboxTypo } from "../../molecules/CheckboxTypo";
import { WelcomeBackConstants, StackStyle } from "./WelcomeBackConstants";
import { useState } from "react";
import { Image } from "../../atoms/image";
import VisbilityIcon from "../../../../public/assets/images/visibility.svg";
import VisibilityOffIcon from "../../../../public/assets/images/visibilityOff.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";
import { getByEmail } from "../../../services";
import { useAppContext } from "../../../constants";
import { useAuth0 } from "@auth0/auth0-react";

const TextFieldStyled = styled(InputField)(`
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border: 1px solid ${theme.palette.greyColors.stroke};
    }
    &.Mui-focused fieldset {
      border: 1px solid ${theme.palette.greyColors.stroke};
      border-bottom:1px solid ${theme.palette.greyColors.stroke};
    }
    color:${theme.palette.textColor.highEmphasis};
    font-size:${theme.typography.body2.fontSize};
    border-radius:8px;
  }
 
  .MuiInputLabel-root{
    font-size:${theme.typography.body2.fontSize};
    color:${theme.palette.textColor.lowEmphasis};
  }

  & .Mui-focused.MuiInputLabel-root {
    color: ${theme.palette.textColor.lowEmphasis};
  }
`);

const WelcomeBack = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFieldClicked, setIsFieldClicked] = useState<boolean>(false);
  const [isEmailFieldClicked, setIsEmailFieldClicked] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const { setCurrentUser } = useAppContext();
  const { loginWithRedirect } = useAuth0();
  const handlePasswordChange = (event: { target: { value: any } }) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };
  const handleEmailFieldClick = () => {
    setIsEmailFieldClicked(!isEmailFieldClicked);
  };
  const handleFieldClick = () => {
    setIsFieldClicked(!isFieldClicked);
  };
  const handleSetCurrentUser = (response: any) => {
    setCurrentUser(response);
  };
  return (
    <form className="welcomeback content">
      <Stack
        sx={{
          "@media (min-width: 1200px)": {
            width: "516px"
          },
          "@media (max-width: 700px)": {
            width: "100%"
          }
        }}
        direction="column"
      >
        <TypographyComponent
          variant="h1"
          sx={{ margin: "40px 0px 40px 0px" }}
          data-testid="typo1"
        >
          {WelcomeBackConstants.headings.create}
        </TypographyComponent>
        {errorMessage && (
          <TypographyComponent
            textAlign={"center"}
            marginBottom={"10px"}
            variant="caption1"
            sx={{ color: "error.main", marginBottom: "10px" }}
            data-testid="errormessage"
          >
            {WelcomeBackConstants.PasswordValidation}
          </TypographyComponent>
        )}
        <TextFieldStyled
          id="email"
          style={{ maxWidth: "516px", maxHeight: "60px", marginBottom: "10px" }}
          label={
            isEmailFieldClicked
              ? WelcomeBackConstants.buttonName.email
              : WelcomeBackConstants.buttonName.emaillabel
          }
          value={email}
          onFocus={handleEmailFieldClick}
          onChange={handleEmailChange}
          error={!isEmailValid}
        ></TextFieldStyled>
        {!isEmailValid && (
          <TypographyComponent
            variant="caption"
            sx={{ color: "error.main", marginBottom: "32px" }}
          >
            {WelcomeBackConstants.Validation}
          </TypographyComponent>
        )}
        <TextFieldStyled
          label={
            isFieldClicked
              ? WelcomeBackConstants.labelPassword
              : WelcomeBackConstants.label
          }
          data-testid="input1"
          onFocus={handleFieldClick}
          onChange={handlePasswordChange}
          style={{ margin: "10px 0px 40px 0px" }}
          type={showPassword ? "text" : "password"}
          endAdornment={
            isFieldClicked && (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  <Image
                    src={showPassword ? VisbilityIcon : VisibilityOffIcon}
                    alt="Toggle Password Visibility"
                    data-testid="image"
                  />
                </IconButton>
              </InputAdornment>
            )
          }
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "516px",
            height: "56px",
            borderRadius: "56px"
          }}
          onClick={(e) => {
            getByEmail(email)
              ?.then((response) => {
                if (
                  response.email === email &&
                  response.password === password
                ) {
                  navigate(ROUTES.LANDING_PAGE);
                  handleSetCurrentUser(response);
                } else {
                  setErrorMessage(true);
                }
              })
              .catch((err) => {
                setErrorMessage(true);
              });
          }}
          data-testid="button1"
        >
          <TypographyComponent variant="body2">
            {WelcomeBackConstants.buttonName.b1}
          </TypographyComponent>
        </Button>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8px",
            width: "516px"
          }}
        >
          <CheckboxTypo
            handleClick={() => {}}
            text={WelcomeBackConstants.headings.checkbox}
          />
          <TypographyComponent
            variant="body3"
            style={{
              cursor: "pointer",
              color: theme.palette.primary.primary500,
              textDecoration: "underline",
              textAlign: "right",
              paddingTop: "10px"
            }}
          >
            {WelcomeBackConstants.headings.trouble}
          </TypographyComponent>
        </div>

        <TypographyComponent
          variant="caption"
          sx={{
            textAlign: "center",
            color: theme.palette.textColor.mediumEmphasis,
            margin: "8px 0px 12px 0px"
          }}
        >
          {WelcomeBackConstants.headings.login}
        </TypographyComponent>
        <Stack direction="row" spacing="94px" paddingLeft="88px">
          {WelcomeBackConstants.Nav.map((item, index) => {
            return (
              <Stack
                sx={StackStyle}
                key={item.altText}
                onClick={() => {
                  if (index === 0) {
                    loginWithRedirect({
                      appState: {
                        returnTo: "/landing-page"
                      },
                      authorizationParams: {
                        connection: "google-oauth2"
                      }
                    });
                  }
                }}
              >
                <img src={item.src} width="25px" alt={item.altText} />
              </Stack>
            );
          })}
        </Stack>
        <Stack>
          <hr
            style={{
              width: "516px",
              height: "1px",
              backgroundColor: theme.palette.greyColors.stroke,
              border: "none",
              margin: "39px 0px 39px 0px "
            }}
          />
        </Stack>
        <TypographyComponent
          variant="caption"
          sx={{
            textAlign: "center",
            color: theme.palette.textColor.mediumEmphasis
          }}
        >
          {WelcomeBackConstants.headings.new}
          <span
            onClick={() => navigate(ROUTES.HOME)}
            style={{
              cursor: "pointer",
              color: theme.palette.primary.primary500,
              textDecoration: "underline"
            }}
          >
            {WelcomeBackConstants.headings.SignUp}
          </span>
        </TypographyComponent>
      </Stack>
    </form>
  );
};

export default WelcomeBack;
