import Typography from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import { CONFIRMDIRECTORSFORMCONTENT } from "../ConfirmDirectorsForm/ConfirmDirectorsForm";
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
interface ConfirmDirectorDetailsProps {
  handleShowBusinessOwners?: () => void;
  handleNext?: () => void;
  detailsProps: PropsData;
}
const StyledGrid = styled(Grid)({
  width: "516px",
  height: "40px",
  top: "164px",
  left: "425px"
});

const StyledStackOne = styled(Stack)<{ index: number }>(({ index }) => ({
  width: "516px",
  marginTop: index === 0 ? "100px" : "32px"
}));
const StyledStackTwo = styled(Stack)({
  width: "200px",
  paddingBottom: "20px",
  marginTop: "17px"
});
const StyledInputField = styled(InputField)({
  width: "516px",
  borderColor: "#E4E4E5",
  height: "100px",
  borderRadius: "8px"
});

const StyledStackThree = styled(Stack)({
  width: "516px"
});
const Wrapper = styled('div')(`
    & .datepicker{
      & .MuiSvgIcon-root{
      margin-right:8px;
      }
    }
`);

export interface Director {
  firstName: string;
  lastName: string;
  dateOfBirth: dayjs.Dayjs | null;
  country: string;
  label: string;
}

const initialDirector: Director = {
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  country: "",
  label: ""
};

const ConfirmDirectorsForm= (props: ConfirmDirectorDetailsProps) => {
  const [directors, setDirectors] = useState<Director[]>([initialDirector]);
  const [index, setIndex] = useState<number>(0);
  const maximumDate = dayjs().subtract(18, "year");

  const handleAddDirector = () => {
    setDirectors([...directors, initialDirector]);
    setIndex(index + 1);
  };

  const handleDirectorChange = (
    index: number,
    field: keyof Director,
    value: string | null | dayjs.Dayjs
  ) => {
    const updatedDirectors = directors.map((director, i) => {
      if (i === index) {
        return { ...director, [field]: value };
      }
      return director;
    });
    setDirectors(updatedDirectors);
  };

  const handleRemoveDirector = (index: number) => {
    const updatedDirectors = [...directors];
    updatedDirectors.splice(index, 1);
    setDirectors(updatedDirectors);
  };
  return (
    <Wrapper>
      <StyledGrid direction={"column"}>
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
      </StyledGrid>

      {directors.map((director, index) => (
        <StyledStackOne direction={"column"} key={director.label} index={index}>
          <StyledStackThree direction={"row"} justifyContent={"space-between"}>
            <Typography
              variant="body3"
              color={theme.palette.textColor.highEmphasis}
              paddingBottom={"30px"}
            >
              {props.detailsProps.type} {index + 1}
            </Typography>
            {index >= 1 ? (
              <IconButton
                onClick={() => handleRemoveDirector(index)}
                sx={{ bottom: "15px" }}
                aria-label="Remove"
                data-testid="remove-btn"
              >
                <Image src={WrongIcon} alt="image not found"></Image>
              </IconButton>
            ) : (
              <></>
            )}
          </StyledStackThree>
          <StyledInputField
            label={CONFIRMBUSINESSOWNERSCONTENT.LABELS.firstName}
            value={director.firstName}
            onChange={(e) =>
              handleDirectorChange(index, "firstName", e.target.value)
            }
          />
          <StyledInputField
            label={CONFIRMBUSINESSOWNERSCONTENT.LABELS.lastName}
            value={director.lastName}
            onChange={(e) =>
              handleDirectorChange(index, "lastName", e.target.value)
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
                  {CONFIRMDIRECTORSFORMCONTENT.LABELS.DOB}
                </Typography>
              }
              value={director.dateOfBirth}
              onChange={(date) =>
                handleDirectorChange(index, "dateOfBirth", date)
              }
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
            data-testid="dropdown"
            labelText={CONFIRMBUSINESSOWNERSCONTENT.LABELS.country}
            sx={{
              width: "516px",
              borderColor: "#E4E4E5",
              borderRadius: "8px"
            }}
            menu={CONFIRMDIRECTORSFORMCONTENT.country_menu}
          ></Dropdown>
        </StyledStackOne>
      ))}
      <StyledStackTwo direction={"row"} spacing={3}>
        <Image
          src={AddIcon}
          alt="image not found"
          style={{ cursor: "pointer" }}
        ></Image>
        <Typography
          variant="body3"
          color={theme.palette.primary.primary500}
          onClick={handleAddDirector}
          style={{ cursor: "pointer" }}
        >
          {props.detailsProps.addAnotherText}
        </Typography>
      </StyledStackTwo>
    </Wrapper>
  );
};

export default ConfirmDirectorsForm;
