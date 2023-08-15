import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal, styled } from "@mui/material";
import ButtonComponent from "../../atoms/Button";
import Down from "../../../../public/assets/images/downwardarrow.svg";
import { useState } from "react";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";

interface RateConfirmationModalProps {
  text?: string;
  label?: string;
}
const StyledTypography = styled(Typography)`
  &.MuiTypography-body1 {
    width: 383px;
    height: 64px;
    margin-top: 40px;
    margin-left: 40px;
  }
`;
const StyledButton = styled(ButtonComponent)`
  &.MuiButton-root {
    background: primary;
    width: 135px;
    height: 56px;
    border-radius: 56px;
    margin-top: 151px;
    margin-left: 214px;
  }
`;
const Boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "564px",
  height: "335px",
  bgcolor: "background.paper",
  borderRadius: "16px"
};

const RateConfirmationModal: React.FC<RateConfirmationModalProps> = ({
  text,
  label,
  ...props
}) => {
  const [openModal, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!openModal);
  };

  return (
    <div>
      <ButtonComponent onClick={handleOpen}>
        <img src={Down} alt="Down arrow" />
      </ButtonComponent>
      <Modal open={openModal} data-testid="modal">
        <Box sx={Boxstyle}>
          <StyledTypography
            variant="body1"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {text}
          </StyledTypography>
          <StyledButton variant="contained" onClick={handleOpen}>
            <TypographyComponent variant="body2">{label}</TypographyComponent>
          </StyledButton>
        </Box>
      </Modal>
    </div>
  );
};
export default RateConfirmationModal;
