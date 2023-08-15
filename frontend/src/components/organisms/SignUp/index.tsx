import { Divider, Stack } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { InputField } from "../../atoms/inputField";
import Button from "../../atoms/Button";
import {
  EMAILVALIDATION,
  SignUpConstants,
  Stackstyle
} from "./SignUpConstants";
import { theme } from "../../../theme/theme";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WelcomeBackConstants } from "../WelcomeBack/WelcomeBackConstants";
import { ROUTES } from "../../../routes";
import { useAppContext } from "../../../constants";
import { getByEmail } from "../../../services";
import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [useremail, setUserEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isEmailFieldClicked, setIsEmailFieldClicked] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const { setUser } = useAppContext();
  const { loginWithRedirect } = useAuth0();
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setUserEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };
  const handleEmailFieldClick = () => {
    setIsEmailFieldClicked(!isEmailFieldClicked);
  };
  const updateContext = () => {
    setUser((prev) => ({
      ...prev,
      email: useremail
    }));
  };
  return (
    <div>
      <Stack sx={{ width: "516px", marginTop: "100px" }} direction="column">
        <TypographyComponent variant="h1" sx={{ marginBottom: "44px" }}>
          {SignUpConstants.headings.create}
        </TypographyComponent>
        <InputField
          id="email"
          style={{ maxWidth: "516px", maxHeight: "60px" }}
          label={
            isEmailFieldClicked
              ? WelcomeBackConstants.buttonName.email
              : WelcomeBackConstants.buttonName.emaillabel
          }
          value={useremail}
          onFocus={handleEmailFieldClick}
          onChange={handleEmailChange}
          error={!isEmailValid}
        ></InputField>
        {!isEmailValid && (
          <TypographyComponent
            variant="caption1"
            sx={{ color: "error.main", marginBottom: "12px" }}
          >
            {WelcomeBackConstants.Validation}
          </TypographyComponent>
        )}
        {errorMessage && (
          <TypographyComponent
            textAlign={"center"}
            variant="caption1"
            sx={{
              color: "error.main",
              margin: "10px",
              alignSelf: "flex-start"
            }}
            data-testid="errormessage"
          >
            {EMAILVALIDATION}
          </TypographyComponent>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "516px",
            height: "56px",
            borderRadius: "56px",
            margin: "40px 0px 40px 0px"
          }}
          onClick={() => {
            getByEmail(useremail)
              ?.then((response) => {
                if (response.email === useremail) {
                  setErrorMessage(true);
                }
              })
              .catch((err) => {
                if (validateEmail(useremail)) {
                  navigate(ROUTES.CHOOSE_ACCOUNT_TYPE);
                  updateContext();
                }
              });
          }}
        >
          <TypographyComponent variant="body2">
            {SignUpConstants.buttonName.b1}
          </TypographyComponent>
        </Button>

        <TypographyComponent
          variant="caption1"
          sx={{
            textAlign: "center",
            color: theme.palette.textColor.mediumEmphasis
          }}
        >
          {SignUpConstants.headings.login}
        </TypographyComponent>
        <Stack
          direction="row"
          spacing="94px"
          paddingLeft="88px"
          margin={"40px 0px 40px 0px "}
        >
          {SignUpConstants.Nav.map((item, index) => {
            return (
              <Stack
                sx={Stackstyle}
                key={item.alt}
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
                <img src={item.src} width="25px" alt={item.alt} />
              </Stack>
            );
          })}
        </Stack>

        <TypographyComponent
          variant="caption1"
          sx={{
            textAlign: "center",
            color: theme.palette.textColor.mediumEmphasis
          }}
        >
          {SignUpConstants.headings.register[0]}{" "}
          <span
            onClick={() => {}}
            style={{
              cursor: "pointer",
              color: theme.palette.primary.primary500,
              textDecoration: "underline"
            }}
          >
            {SignUpConstants.headings.register[1]}
          </span>{" "}
          {SignUpConstants.headings.register[2]}{" "}
          <span
            onClick={() => {}}
            style={{
              cursor: "pointer",
              color: theme.palette.primary.primary500,
              textDecoration: "underline"
            }}
          >
            {SignUpConstants.headings.register[3]}
          </span>
        </TypographyComponent>

        <Divider
          style={{
            borderTop: `1px solid ${theme.palette.greyColors.stroke}`,
            width: "516px",
            height: "1px",
            margin: "48px 0px 32px 0px "
          }}
        />

        <TypographyComponent
          variant="caption1"
          sx={{
            textAlign: "center",
            color: theme.palette.textColor.mediumEmphasis
          }}
        >
          {SignUpConstants.headings.loginin[0]}{" "}
          <span
            onClick={() => navigate(ROUTES.SIGN_IN)}
            style={{
              cursor: "pointer",
              color: theme.palette.primary.primary500,
              textDecoration: "underline"
            }}
          >
            {SignUpConstants.headings.loginin[1]}
          </span>
        </TypographyComponent>
      </Stack>
    </div>
  );
};

export default SignUp;
