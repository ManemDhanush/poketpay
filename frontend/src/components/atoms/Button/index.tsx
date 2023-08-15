import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
    styled,
  } from '@mui/material';
  
  const StyledButton = styled(MuiButton)({
    boxShadow: 'none',
    textTransform: 'none',
  });
  
  const ButtonComponent = ({ children, ...props }: MuiButtonProps) => {
    return <StyledButton {...props}>{children}</StyledButton>;
  };
  
  export default ButtonComponent;