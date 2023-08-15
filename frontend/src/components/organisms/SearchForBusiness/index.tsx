import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";
import ScrollUp from "../../../../public/assets/images/scrolldown.svg";
import ScrollDown from "../../../../public/assets/images/scrollup.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Image } from "../../atoms/image";
import {
  Addressess,
  CANTFINDBUSINESS,
  ENTERYOURDETAILS,
  SUBTITLE,
  TITLE
} from "./SearchForBusinessConstants";
import { ROUTES } from "../../../routes";
import { useNavigate } from "react-router-dom";

const SearchForBusiness = () => {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const [value, setValue] = useState("");
  const handleClickField = (event: any) => {
    setValue(event.target.value);
    const temp = event.target.value as string;
    if (temp.length >= 2 && /ze/i.test(temp)) {
      setHidden(!hidden);
    }
  };
  const [_selectedOption, setSelectedOption] = useState<string>("");
  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
    navigate(ROUTES.YOUR_BUSINESS.confirm + `/${value}`);
  };

  return (
    <>
      <Stack height={"60vh"} spacing={"44px"}>
        <Stack direction="column" spacing={"2vh"}>
          <TypographyComponent variant={"h1"}>{TITLE}</TypographyComponent>
          <TypographyComponent
            color={theme.palette.textColor.mediumEmphasis}
            variant={"caption1"}
          >
            {SUBTITLE}
          </TypographyComponent>
        </Stack>
        {!hidden && (
          <Box>
            <TextField
              id="searchfield"
              data-testid="searchfield"
              value={value}
              onChange={handleClickField}
              placeholder="Search your business"
              sx={{
                width: "27.5vw"
              }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon
                      onClick={() => {
                        setHidden(!hidden);
                      }}
                      style={{ cursor: "pointer" }}
                      data-testid="searchicon"
                    />
                  </InputAdornment>
                )
              }}
            />
          </Box>
        )}
        {hidden && (
          <Box
            data-testid={"listbox"}
            width="27.9vw"
            border="1px solid"
            borderColor={theme.palette.greyColors.stroke}
            borderRadius={"8px"}
          >
            <Stack padding={"2vh"}>
              <TypographyComponent
                data-testid="searchvalue"
                onClick={() => {
                  setHidden(!hidden);
                }}
                variant={"body2"}
                color={theme.palette.textColor.mediumEmphasis}
              >
                {value}
              </TypographyComponent>
            </Stack>
            <Box display={"flex"}>
              <Box>
                {Addressess.map((address: any) => {
                  return (
                    <MenuItem
                      style={{
                        minHeight: "6vh",
                        gap: "2vw",
                        width: "26.7vw"
                      }}
                      key={address.label}
                      data-testid="menu-item"
                      value={address.label}
                      onClick={() => {
                        handleSelectOption(address.label);
                      }}
                    >
                      <TypographyComponent
                        variant={"body2"}
                        color={theme.palette.textColor.highEmphasis}
                      >
                        {address.label}
                      </TypographyComponent>
                    </MenuItem>
                  );
                })}
                <Stack
                  direction={"row"}
                  paddingX={"1vw"}
                  spacing="0.5vw"
                  borderTop={"1px solid " + theme.palette.greyColors.stroke}
                  height="6vh"
                  alignItems={"center"}
                >
                  <TypographyComponent
                    variant={"body2"}
                    color={theme.palette.textColor.mediumEmphasis}
                  >
                    {CANTFINDBUSINESS}
                  </TypographyComponent>
                  <TypographyComponent
                    variant={"body2"}
                    color={theme.palette.primary.primary500}
                  >
                    {ENTERYOURDETAILS}
                  </TypographyComponent>
                </Stack>
              </Box>
              <Stack
                height="auto"
                width="auto"
                bgcolor={theme.palette.greyColors.stroke}
                paddingTop={"1vh"}
              >
                <Stack>
                  <Image
                    style={{ height: "43%" }}
                    src={ScrollDown}
                    alt={"scrolldown"}
                  />
                </Stack>
                <Box
                  marginX={"0.15vw"}
                  marginTop={"1vh"}
                  bgcolor={theme.palette.greyColors.icon02}
                  width={"0.92vw"}
                  minHeight={"3vh"}
                  marginBottom={"22vh"}
                ></Box>
                <Stack>
                  <Image
                    style={{ height: "43%" }}
                    src={ScrollUp}
                    alt={"scrollup"}
                  />
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
      </Stack>
    </>
  );
};

export default SearchForBusiness;
