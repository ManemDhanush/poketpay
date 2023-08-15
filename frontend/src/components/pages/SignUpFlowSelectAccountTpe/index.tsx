import { Box, Stack, styled } from "@mui/material";
import { HEADERSTEPPERMENU } from "../../../constants";
import TypographyComponent from "../../atoms/Typography";
import { StepperAndPageTemplate } from "../../templates/StepperAndPage";
import {
  BUSINESSACCOUNT,
  PERSONALACCOUNT,
  SUBTEXT,
  SUBTEXT2,
  SUBTEXT3,
  TEXT
} from "./SignUpFlowSelecetAccountTypeConstants";
import { theme } from "../../../theme/theme";
import { AccountCard } from "../../molecules/AccountCard";
import Personal from "../../../../public/assets/images/personal.svg";
import Business from "../../../../public/assets/images/business.svg";
import { useNavigate } from "react-router-dom";
const StyledStack = styled(Stack)({
  flexDirection: "column",
  marginTop: "15px",
  "@media (min-width: 1200px)": {
    width: "516px"
  },
  "@media (max-width: 700px)": {
    width: "100%"
  },
  "& .business-acc": {
    cursor: "pointer"
  }
});

const Wrapper=styled('div')(`
   & .account-card-custom{
        align-items:self-start;
   }
`)

export const SelectAccountType = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <StepperAndPageTemplate
        labels={HEADERSTEPPERMENU}
        activeStep={2}
        displayBack
        handleBackFn={() => {
          navigate("/");
        }}
      >
        <StyledStack>
          <TypographyComponent
            variant="h1"
            color={theme.palette.textColor.highEmphasis}
            sx={{ marginBottom: "12px" }}
            data-testid="text1"
          >
            {TEXT}
          </TypographyComponent>
          <TypographyComponent
            variant="body3"
            color={theme.palette.textColor.mediumEmphasis}
            sx={{ marginBottom: "32px" }}
          >
            {SUBTEXT}
          </TypographyComponent>
          <AccountCard
            icon={Personal}
            text={PERSONALACCOUNT}
            iconAlt={SUBTEXT2}
            subText={SUBTEXT2}
            margin="20px"
            textVariant={"body2"}
            subTextVariant={"caption1"}
            textColor={theme.palette.textColor.highEmphasis}
            subTextColor={theme.palette.textColor.lowEmphasis}
            
          />
          <Box sx={{ cursor: "pointer" }}>
            <AccountCard
              icon={Business}
              text={BUSINESSACCOUNT}
              iconAlt={SUBTEXT3}
              subText={SUBTEXT3}
              textVariant={"body2"}
              subTextVariant={"caption1"}
              textColor={theme.palette.textColor.highEmphasis}
              subTextColor={theme.palette.textColor.lowEmphasis}
              iconHeight="28.33px"
              iconWidth="26.92px"
              handleClick={() => navigate("/choose-country")}
            />
          </Box>
        </StyledStack>
      </StepperAndPageTemplate>
    </Wrapper>
  );
};
