import React, { useState } from "react";
import { Card, styled, Button, Modal } from "@mui/material";
import { ModalProps } from "./ModalHelper";
import { MODAL_CONTENT } from "./ModalConstants";

const ModalWindow: React.FC<ModalProps> = ({ ...props }) => {
  const StyledCard = styled(Card)({
    width: `${props.cardWidth}`,
    height: `${props.cardHeight}`,
    top: `${props.top}`,
    left: `${props.left}`,
    position: "absolute",
    borderRadius: `${props.borderRadius}`
  });

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{MODAL_CONTENT.openText}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledCard>
          {props.popUpWindow}
          {props.needCloseButton && (
            <Button onClick={handleClose}>{MODAL_CONTENT.closeText}</Button>
          )}
        </StyledCard>
      </Modal>
    </div>
  );
};

export default ModalWindow;
