import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`);
export const Header = styled(Box)(`
  position: fixed;
  top: 24px;
  left: 80px;
  width: 100%;  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 999;
`);
export const Body = styled(Box)(`
display:flex;
justify-content:center;
margin-top:130px;
height:auto;
max-height:75.5vh;
overflow:auto;
::-webkit-scrollbar {
  display: none;
}
`);