import Typography from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { InputField } from "../../atoms/inputField";
import { Grid, Stack, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import { Dropdown } from "../../atoms/dropdown";
import AddIcon from "../../../../public/assets/images/add.svg";
import WrongIcon from "../../../../public/assets/images/close.svg";
import { Image } from "../../atoms/image";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { CONFIRMBUSINESSOWNERSCONTENT } from "../ConfirmBusinessOwners/ConfirmBusinessOwners";
import dayjs from "dayjs";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

type PropsData = {
  heading: string;
  caption: string;
  type: string;
  addAnotherText: string;
};
interface ConfirmOwnerDetailsProps {
  detailsProps: PropsData;
}
const StyledGridOne = styled(Grid)({
  width: "516px",
  height: "40px",
  top: "164px",
  left: "425px"
});
const StyledStack = styled(Stack)<{ index: number }>(({ index }) => ({
  width: "516px",
  marginTop: index === 0 ? "100px" : "32px"
}));

const StyledStack2 = styled(Stack)({
  width: "200px",
  paddingBottom: "20px",
  marginTop: "17px"
});
const StyledInputFieldOne = styled(InputField)({
  width: "516px",
  borderColor: "#E4E4E5",
  height: "100px",
  borderRadius: "8px"
});

const StyledStack3 = styled(Stack)({
  width: "516px"
});


const Wrapper = styled('div')(`
    & .datepicker{
      & .MuiSvgIcon-root{
      margin-right:8px;
      }
    }
`);


export interface Owner {
  firstName: string;
  lastName: string;
  dateOfBirth: dayjs.Dayjs | null;
  country: string;
  label: string;
}

const initialOwner: Owner = {
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  country: "",
  label: ""
};

const ConfirmOwnersForm = (props: ConfirmOwnerDetailsProps) => {
  const [owners, setOwners] = useState<Owner[]>([initialOwner]);
  const [index, setIndex] = useState<number>(0);
  const maximumDate = dayjs().subtract(18, "year").startOf("day");

  const handleAddOwner = () => {
    setOwners([...owners, initialOwner]);
    setIndex(index + 1);
  };

  const handleOwnerChange = (
    index: number,
    field: keyof Owner,
    value: string | null | dayjs.Dayjs
  ) => {
    const updatedOwners = owners.map((owner, i) => {
      if (i === index) {
        return { ...owner, [field]: value };
      }
      return owner;
    });
    setOwners(updatedOwners);
  };

  const handleRemoveOwner = (index: number) => {
    const updatedOwners = [...owners];
    updatedOwners.splice(index, 1);
    setOwners(updatedOwners);
  };

  return (
    <Wrapper>
      <StyledGridOne direction={"column"}>
        <Grid item>
          <Typography variant="h1" color={theme.palette.textColor.highEmphasis}>
            {props.detailsProps.heading}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body3"
            color={theme.palette.textColor.mediumEmphasis}
          >
            {props.detailsProps.caption}
          </Typography>
        </Grid>
      </StyledGridOne>

      {owners.map((owner, index) => (
        <StyledStack direction={"column"} key={owner.label} index={index}>
          <StyledStack3 direction={"row"} justifyContent={"space-between"}>
            <Typography
              variant="body3"
              color={theme.palette.textColor.highEmphasis}
              paddingBottom={"30px"}
            >
              {props.detailsProps.type} {index + 1}
            </Typography>
            {index >= 1 ? (
              <IconButton
                onClick={() => handleRemoveOwner(index)}
                sx={{ bottom: "15px" }}
                aria-label="Remove"
                data-testid={`remove-btn-${index}`}
              >
                <Image src={WrongIcon} alt="image not found"></Image>
              </IconButton>
            ) : (
              <></>
            )}
          </StyledStack3>
          <StyledInputFieldOne
            label={CONFIRMBUSINESSOWNERSCONTENT.LABELS.firstName}
            value={owner.firstName}
            onChange={(e) =>
              handleOwnerChange(index, "firstName", e.target.value)
            }
          />
          <StyledInputFieldOne
            label={CONFIRMBUSINESSOWNERSCONTENT.LABELS.lastName}
            value={owner.lastName}
            onChange={(e) =>
              handleOwnerChange(index, "lastName", e.target.value)
            }
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={
                <Typography
                  variant="body2"
                  sx={{ mt: "4px" }}
                  color={theme.palette.textColor.lowEmphasis}
                >
                  {CONFIRMBUSINESSOWNERSCONTENT.LABELS.DOB}
                </Typography>
              }
              value={owner.dateOfBirth}
              onChange={(date) => handleOwnerChange(index, "dateOfBirth", date)}
              sx={{
                width: "516px",
                borderColor: "#E4E4E5",
                height: "100px",
                borderRadius: "8px"
              }}
              format="DD-MM-YYYY"
              maxDate={maximumDate}
              className="DOB datepicker"
              slots={{
                openPickerIcon: CalendarTodayOutlinedIcon 
              }}
            />
          </LocalizationProvider>
          <Dropdown
            labelText={CONFIRMBUSINESSOWNERSCONTENT.LABELS.country}
            sx={{
              width: "516px",
              borderColor: "#E4E4E5",
              borderRadius: "8px"
            }}
            menu={CONFIRMBUSINESSOWNERSCONTENT.country_menu}
          ></Dropdown>
        </StyledStack>
      ))}
      <StyledStack2
        direction={"row"}
        spacing={3}
        data-testid="add-another-owner"
      >
        <Image
          src={AddIcon}
          alt="image not found"
          style={{ cursor: "pointer" }}
        ></Image>
        <Typography
          variant="body3"
          color={theme.palette.primary.primary500}
          onClick={handleAddOwner}
          style={{ cursor: "pointer" }}
        >
          {props.detailsProps.addAnotherText}
        </Typography>
      </StyledStack2>
    </Wrapper>
  );
};

export default ConfirmOwnersForm;
