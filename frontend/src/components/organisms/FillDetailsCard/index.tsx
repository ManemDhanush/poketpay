import { Box, styled } from "@mui/material";
import { theme } from "../../../theme/theme";
import TypographyComponent from "../../atoms/Typography";
import { FILLDETAILSCARDCONTENT } from "./FillDetailsCardConstants";
import { InputField } from "../../atoms/inputField";
import ButtonComponent from "../../atoms/Button";
import { Dropdown } from "../../atoms/dropdown";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ROUTES } from "../../../routes";
import dayjs from "dayjs";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { useAppContext } from "../../../constants";
import { postUsers, postBusinesses } from "../../../services";
import { UserDetails } from "../../../utils";

const InnerWrapper = styled(Box)(`
  width:516px;
  & .form{
    margin-top:15px;
  }
  & span{
    display:block;
  }
  & .input{
    margin-bottom:28px;
  }
  & .content-title{
    margin-bottom:12px;
  }
  & .content{
    margin-bottom:44px;
  }
`);
const StyledDatePicker = styled(DatePicker)(`
width:516px;
margin-bottom:28px;
.MuiInputLabel-root {
  
  font-size: ${theme.typography.body2.fontSize};
  color:${theme.palette.textColor.lowEmphasis}; 
}
.MuiSvgIcon-root { 
  fill: ${theme.palette.textColor.lowEmphasis}; 
}
.MuiInputBase-input {
  font-size: ${theme.typography.body2.fontSize};
}
`);

const Wrapper = styled(Box)(`
    & input[type="number"]::-webkit-outer-spin-button,
    & input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    & .datepicker{
      & .MuiSvgIcon-root{
      margin-right:8px;
      }
    }
`);
const Buttons = styled(Box)(`
  display:flex;
  flex-direction:row-reverse;
  & .MuiButtonBase-root{
    border-radius:56px;
    width:135px;
    height:56px; 
    position:absolute;
    left:70%;
    top:89.6%;
  }
  .disable{
    opacity:0.3;
    pointer-events:none;
  }
`);

export const FillDetailsCard = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [country, setCountry] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const maximumDate = dayjs().subtract(18, "year");

  const { business } = useAppContext();
  const { user, setUser, setCurrentUser } = useAppContext();

  const isFormValid =
    firstName !== "" &&
    lastName !== "" &&
    country !== "" &&
    homeAddress !== "" &&
    city !== "" &&
    pincode.length === 6;
  const handleSetPincode = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value.length > 6) return;
    else setPincode(e.target.value);
  };
  const handleKeyDown = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === "e" || evt.key === "+" || evt.key === "-") {
      evt.preventDefault();
    }
  };
  const birthDate = dob ? dayjs(dob).format("DD/MM/YYYY") : "";
  const cityPincode = parseInt(pincode);
  const updateContext = () => {
    setUser((prev) => ({
      ...prev,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: birthDate,
      pincode: cityPincode,
      city: city,
      address: homeAddress
    }));
  };

  return (
    <Wrapper data-testid="fill-details-card">
      <InnerWrapper>
        <TypographyComponent
          className="content-title"
          variant="h1"
          color={theme.palette.textColor.highEmphasis}
        >
          {FILLDETAILSCARDCONTENT.title}
        </TypographyComponent>
        <TypographyComponent
          className="content"
          variant="body3"
          color={theme.palette.textColor.mediumEmphasis}
        >
          {FILLDETAILSCARDCONTENT.content}
        </TypographyComponent>
        <Box className="form">
          <InputField
            fullWidth
            variant="outlined"
            type="textarea"
            className="input"
            label={FILLDETAILSCARDCONTENT.LABELS.firstName}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></InputField>
          <InputField
            fullWidth
            variant="outlined"
            type="textarea"
            className="input"
            label={FILLDETAILSCARDCONTENT.LABELS.lastName}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></InputField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StyledDatePicker
              label={FILLDETAILSCARDCONTENT.LABELS.dob}
              value={dob}
              maxDate={maximumDate}
              className="datepicker"
              slots={{
                openPickerIcon: CalendarTodayOutlinedIcon
              }}
              onChange={(newDate) => setDob(newDate as Date | null)}
            />
          </LocalizationProvider>
          <Dropdown
            menu={FILLDETAILSCARDCONTENT.country_menu}
            formControlsx={{
              height: "60px",
              width: "516px",
              marginBottom: "28px"
            }}
            labelText={FILLDETAILSCARDCONTENT.LABELS.country}
            value={country}
            handleChange={(value) => setCountry(value)}
            dataId="selected"
          ></Dropdown>
          <InputField
            fullWidth
            variant="outlined"
            type="textarea"
            className="input"
            label={FILLDETAILSCARDCONTENT.LABELS.homeAddress}
            value={homeAddress}
            onChange={(e) => setHomeAddress(e.target.value)}
          ></InputField>
          <InputField
            fullWidth
            variant="outlined"
            type="textarea"
            className="input"
            label={FILLDETAILSCARDCONTENT.LABELS.city}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></InputField>
          <InputField
            fullWidth
            variant="outlined"
            type="number"
            label={FILLDETAILSCARDCONTENT.LABELS.pincode}
            value={pincode}
            onChange={handleSetPincode}
            inputProps={{
              maxLength: 6
            }}
            onKeyDown={(e) => handleKeyDown(e)}
          ></InputField>
        </Box>
      </InnerWrapper>
      <Buttons>
        <ButtonComponent
          variant="contained"
          onClick={() => {
            const user1 = {
              ...user,
              firstName: firstName,
              lastName: lastName,
              city: city,
              pincode: cityPincode,
              address: homeAddress,
              dateOfBirth: birthDate
            };
            postUsers(user1)
              .then((response: UserDetails) => {
                postBusinesses(business, response.id!).catch(() => {});
                setCurrentUser(response);
              })
              .catch(() => {});
            updateContext();
            navigate(ROUTES.LANDING_PAGE);
          }}
          data-testid="button1"
          className={isFormValid ? "" : "disable"}
        >
          <TypographyComponent variant="body2">
            {FILLDETAILSCARDCONTENT.continue}
          </TypographyComponent>
        </ButtonComponent>
      </Buttons>
    </Wrapper>
  );
};
