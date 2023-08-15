import { Box, styled } from "@mui/material";
import { REFUND, REFUND_STATUS, steps, texts } from "./transferStatusConstants";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import VerticalStepper from "../../molecules/verticalStepper";

const Wrapper = styled(Box)(`
  & .con{
    display:flex;
    justify-content:space-between;
    width:400px;
    margin-bottom:16px;
  }
  & .MuiStepper-root.MuiStepper-vertical{
    margin-left:-75px;
    margin-top:40px;
  }
`);

export interface TransferStatusProp {
  status: string;
}

export const TransferStatus = (props: TransferStatusProp) => {
  return (
    <Wrapper>
      {texts.map((item) => (
        <Box className="con" key={item.name}>
          <TypographyComponent
            variant="body2"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {item.name}
          </TypographyComponent>
          <TypographyComponent
            variant="body2"
            color={theme.palette.textColor.highEmphasis}
          >
            {item.value}
          </TypographyComponent>
        </Box>
      ))}
      {props.status == "Sending" ? (
        <VerticalStepper steps={steps} activeStep={3} />
      ) : (
        <>
          <TypographyComponent
            paddingTop="35px"
            paddingBottom="20px"
            variant="body1"
          >
            {REFUND}
          </TypographyComponent>
          <TypographyComponent
            variant="body3"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {REFUND_STATUS}
          </TypographyComponent>
        </>
      )}
    </Wrapper>
  );
};
