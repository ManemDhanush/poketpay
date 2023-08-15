import React from "react";
import { Box, styled } from "@mui/material";
import ApplicationHeader from "../../organisms/ApplicationHeader";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import ButtonComponent from "../../atoms/Button";
import { NAVBARPAGETEMPLATE } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export interface NavbarPageTemplateProps {
  children: React.ReactNode;
  navbar: React.ReactNode;
}

const Wrapper = styled(Box)(`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex; 
  flex-direction: row;
  .typo{
    margin-top:37px;
    margin-left:2.3%;
  } 
  & .MuiButton-root{
  margin-right:2.3%;
 }
`);
const InnerWrapper = styled(Box)(`
  flex-grow:1;
`);

const Body = styled(Box)(`
  margin-top:17px;
  margin-left:2.3%;
  margin-right:2.3%;
  justify-content: "center";
  align-items: "center";
`);

const StyledBox = styled(Box)(`
display: flex; 
flex-direction: row;
justify-content:space-between;
.btn{
width:159px;
height:56px;
border-radius:56px;
margin-top:29px;
margin-left:844px;

}
`);
export const NavbarPageTemplate = ({
  children,
  navbar
}: NavbarPageTemplateProps) => {
  const navigate=useNavigate()
  return (
    <Wrapper sx={{ background: theme.palette.structural.blue }}>
      <Box height={"100vh"}>{navbar}</Box>
      <InnerWrapper>
        <ApplicationHeader />
        <StyledBox>
          <TypographyComponent className="typo" variant="h1">
            {NAVBARPAGETEMPLATE.text}
          </TypographyComponent>
          <ButtonComponent variant="contained" className="btn" onClick={()=>{navigate(ROUTES.SEND_MONEY)}} data-testid="button1">
            <TypographyComponent variant="body2">
              {NAVBARPAGETEMPLATE.buttonText}
            </TypographyComponent>
          </ButtonComponent>
        </StyledBox>
        <Body>{children}</Body>
      </InnerWrapper>
    </Wrapper>
  );
};
