import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Stack,
  Card,
  Menu,
  MenuItem,
  Divider,
  Fade,
  IconButton,
  Typography,
  Box
} from "@mui/material";
import Bell from "../../../../public/assets/images/bell.svg";
import Profile from "../../../../public/assets/images/profile.svg";
import { Image } from "../../atoms/image";
import { AvatarTypography } from "../../molecules/AvatarText";
import { theme } from "../../../theme/theme";
import { IconTypo } from "../../molecules/IconTypo";
import { ROSSGENNER, ROSSGENNERID, MENUITEMS } from "../../../constants";
import { useAuth0 } from "@auth0/auth0-react";
const StyledCard = styled(Card)({
  left: "80px",
  top: "0px",
  width: "100%",
  height: "7.81vh",
  padding: "20px 24px 20px 24px",
  marginTop: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.05)",
  backgroundColor: `${theme.palette.textColor.main}`
});

const ApplicationHeader = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleAvatarClick = (event: {
    currentTarget: React.SetStateAction<null | HTMLElement>;
  }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const { logout } = useAuth0();

  return (
    <StyledCard>
      <Stack direction="row" spacing="18px" alignItems="center">
        <Image src={Bell} alt="Bell" />
        <IconButton
          onClick={handleAvatarClick}
          disableRipple
          data-testid="avatar-button"   
        >
          <AvatarTypography
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            avatar={Profile}
            avatarAlt={Profile}
            text={"Ross Gener"}
            textVariant={"caption1"}
            avatarAndTextGap="12px"
            textColor={theme.palette.textColor.mediumEmphasis}
            avatarSize={"28px"}
            data-testid="avatar button"
          />
        </IconButton>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button"
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleAvatarClose}
          TransitionComponent={Fade}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom"
          }}
          transformOrigin={{
            horizontal: "right",
            vertical: "top"
          }}
          PaperProps={{
            style: {
              width: "190px",
              height: "295px",
              borderRadius: "8px",
              overflow: "hidden",
              marginTop: "5px"
            }
          }}
        >
          <MenuItem>
            <Stack display="flex" direction="column">
              <Typography
                children={ROSSGENNER}
                variant="body2"
                color={theme.palette.textColor.highEmphasis}
              />
              <Typography
                children={ROSSGENNERID}
                variant="caption1"
                color={theme.palette.textColor.lowEmphasis}
              />
            </Stack>
          </MenuItem>
          <Divider />
          {MENUITEMS.map((item, index) => (
            <MenuItem
            onClick={
              index === MENUITEMS.length - 1
                ? () =>
                    logout({
                      logoutParams: {
                        redirectTo: process.env.AUTH0_LOGOUT_URI
                      }
                    })
                : handleAvatarClose
            }
              sx={{ width: "230px", height: "56px" }}
              key={item.id}
            >
                <Box 
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconTypo
                  icon={item.img}
                  text={item.name}
                  textVariant="body2"
                  textColor={theme.palette.textColor.highEmphasis}
                  iconAlt={item.name}
                  iconheight="15.55px"
                  iconwidth="16px"
                />
              </Box>
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </StyledCard>
  );
};

export default ApplicationHeader;
