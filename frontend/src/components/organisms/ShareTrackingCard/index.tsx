import { Card, styled, Stack } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { SHARETRACKINGCARDCONTENTS } from "./ShareTrackingCardConstants";
import sharetrack from "../../../../public/assets/images/sharetracking.svg";
import { Image } from "../../atoms/image";
import email from "../../../../public/assets/images/email.svg";
import copylink from "../../../../public/assets/images/copylink.svg";
import { theme } from "../../../theme/theme";

const Wrapper = styled(Card)(`
  width:548px;
  height:510px;
  border-radius:16px;
`);

const StyledTypography = styled(TypographyComponent)(`
&&.title {
  margin-top: 56px;
  margin-left: 187px;
}
&&.footerText{
  margin-left:39px
}
`);

const CustomEmailIcon = styled(Image)`
  margin: 36px 40px 30px 194px;
`;
const CustomCopyLinkIcon = styled(Image)(`
margin-bottom:30px;
margin-top:36px;
`);
const CustomShareImage = styled(Image)(`
margin-top:44px;
margin-left:187px;
width:175px;
height:126px;
`);

const ShareTrackingCard = () => {
  return (
    <>
      <Wrapper>
        <StyledTypography variant="body1" className="title">
          {SHARETRACKINGCARDCONTENTS.title}
        </StyledTypography>
        <CustomShareImage
          src={sharetrack}
          alt={SHARETRACKINGCARDCONTENTS.shareTrackImageAlt}
        ></CustomShareImage>
        <Stack direction="row">
          <CustomEmailIcon
            src={email}
            alt={SHARETRACKINGCARDCONTENTS.emailIconAlt}
          ></CustomEmailIcon>
          <CustomCopyLinkIcon
            src={copylink}
            alt={SHARETRACKINGCARDCONTENTS.copyLinkIconAlt}
          ></CustomCopyLinkIcon>
        </Stack>
        <StyledTypography variant="body3" className="footerText" color={theme.palette.textColor.mediumEmphasis}>
          {SHARETRACKINGCARDCONTENTS.footerContent}
        </StyledTypography>
      </Wrapper>
    </>
  );
};
export default ShareTrackingCard;
