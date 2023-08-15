import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TypographyComponent from "../../atoms/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image2 from "./../../../../public/assets/images/help-circle.svg";
import image1 from "./../../../../public/assets/images/share.svg";
import { FormControl, MenuItem, Modal, Select, Stack } from "@mui/material";
import { BankAccountconstants } from "./TabHeaderConstants";
import { TabContent, a11yProps, TabPanelProps } from "./TabHeaderUtils";
import { theme } from "../../../theme/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareTrackingCard from "../ShareTrackingCard";
import { useState } from "react";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <TypographyComponent>{children}</TypographyComponent>
        </Box>
      )}
    </div>
  );
}
export default function TabHeader(props: TabContent) {
  const [value] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      return;
    };

  const Boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "auto",
    bgcolor: "background.paper",
    borderRadius: "16px"
  };
  const [openModal, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!openModal);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%"
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          sx={{
            width: "100%",
            borderBottom: 1,
            height: "79px",
            borderColor: "divider"
          }}
        >
          <Grid item xs={6}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ marginTop: "22px" }}
            >
              <Tab label={BankAccountconstants.Tabs[0]} {...a11yProps(0)} />
              <Tab label={BankAccountconstants.Tabs[1]} {...a11yProps(1)} />
            </Tabs>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Stack
              spacing="25px"
              direction="row"
              sx={{ justifyContent: "flex-end" }}
            >
              <FormControl sx={{ m: 1 }}>
                <Select
                  value={0}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  IconComponent={ExpandMoreIcon}
                  sx={{
                    height: "46px",
                    width: "116px",
                    paddingTop: "7px",
                    paddingRight: "5px",
                    backgroundColor: theme.palette.structural.blue
                  }}
                >
                  <MenuItem value={0}>
                    <TypographyComponent variant="body2">
                      {BankAccountconstants.Menu}
                    </TypographyComponent>
                  </MenuItem>
                </Select>
              </FormControl>
              <img
                src={image1}
                alt="share"
                style={{ width: "20px", cursor: "pointer" }}
                onClick={handleOpen}
              />
              <img src={image2} alt="help" style={{ width: "20px" }} />
            </Stack>
          </Grid>
        </Grid>
        <TabPanel value={value} index={0}>
          {props.content}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {props.content}
        </TabPanel>
      </Box>
      <Modal open={openModal} onClose={handleOpen} data-testid="modal">
        <Box sx={Boxstyle}>
          <ShareTrackingCard />
        </Box>
      </Modal>
    </>
  );
}
