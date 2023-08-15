import { Box } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import logo from "./../../../../public/assets/images/pocketpaylogo.svg";
import { NavBarConstants, StyledRow } from "./NavBarConstants";
import { Chip } from "../../atoms/Chip";
import { NavBarProps } from "./NavBarUtils";

const NavBar = ({ showOptionalCode }: NavBarProps) => {
  return (
    <Box
      style={{
        width: "14.4rem",
        height: "100vh",
        border: `1px solid ${theme.palette.greyColors.stroke}`,
        background: `${theme.palette.structural.main}`
      }}
      height="100vh"
    >
      <img
        src={logo}
        alt="logo"
        style={{
          marginTop: "24px",
          marginBottom: "12px",
          marginLeft: "67px",
          height: "20px"
        }}
      />
      <Box>
        <Box
          style={{
            borderBottom: showOptionalCode
              ? `1px solid ${theme.palette.greyColors.stroke}`
              : undefined
          }}
          paddingBottom="20px"
          width="100%"
        >
          {NavBarConstants.Navigation.map((item) => {
            return (
              <StyledRow key={item.name}>
                <Box className="img-container">
                  <img src={item.src} alt={item.alt} />
                </Box>
                <TypographyComponent
                  variant="caption1"
                  color={item.color ?? theme.palette.textColor.mediumEmphasis}
                >
                  {item.name}
                </TypographyComponent>
                <Box paddingLeft="10px">
                  {item.new && (
                    <Chip
                      label="New"
                      style={{
                        borderRadius: "16px",
                        backgroundColor: theme.palette.structural.buttonHover,
                        color: theme.palette.primary.primary500,
                        padding: "4px 12px 2px 12px"
                      }}
                    />
                  )}
                </Box>
              </StyledRow>
            );
          })}
        </Box>

        {showOptionalCode && (
          <>
            <Box
              style={{
                borderBottom: `1px solid ${theme.palette.greyColors.stroke}`
              }}
              paddingBottom="20px"
              paddingTop="20px"
            >
              <TypographyComponent
                color={theme.palette.textColor.mediumEmphasis}
                paddingLeft="20px"
                variant="caption"
              >
                {NavBarConstants.headings.balances}
              </TypographyComponent>
              {NavBarConstants.Balances.map((item) => {
                return (
                  <StyledRow key={item.balance}>
                    <img src={item.src} alt={item.alt} />
                    <TypographyComponent
                      variant="caption"
                      color={theme.palette.textColor.mediumEmphasis}
                    >
                      {item.balance}
                    </TypographyComponent>
                  </StyledRow>
                );
              })}
            </Box>

            <Box paddingTop="20px">
              <TypographyComponent
                color={theme.palette.textColor.mediumEmphasis}
                variant="caption"
                paddingLeft="20px"
              >
                {NavBarConstants.headings.jar}
              </TypographyComponent>
              {NavBarConstants.Jars.map((item) => {
                return (
                  <StyledRow key={item.jar}>
                    <img src={item.src} alt={item.alt} />
                    <TypographyComponent
                      variant="caption"
                      color={theme.palette.textColor.mediumEmphasis}
                    >
                      {item.jar}
                    </TypographyComponent>
                  </StyledRow>
                );
              })}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default NavBar;
