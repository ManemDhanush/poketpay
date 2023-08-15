import { Box, styled } from "@mui/material";
import home from "./../../../../public/assets/images/Vector.svg";
import cards from "./../../../../public/assets/images/cards.svg";
import recipients from "./../../../../public/assets/images/recipients.svg";
import team from "./../../../../public/assets/images/team.svg";
import account from "./../../../../public/assets/images/account.svg";
import indiaflag from "./../../../../public/assets/images/indiaFlag.svg";
import ukflag from "./../../../../public/assets/images/ukflag.svg";
import invite from "./../../../../public/assets/images/earn.svg";
import plus from "./../../../../public/assets/images/plus.svg";
import europeFlag from "./../../../../public/assets/images/europeFlag.svg";
export const NavBarConstants = {
  Navigation: [
    { name: "Home", src: home, alt: "home", color: "primary" },
    { name: "Cards", src: cards, alt: "cards" },
    { name: "Recipients", src: recipients, alt: "recipients" },
    { name: "Team", src: team, alt: "team", new: true },
    { name: "Account", src: account, alt: "account" },
    { name: "Invite & earn 150 GBP", src: invite, alt: "invite" }
  ],
  Balances: [
    { balance: "10,000,00 INR", src: indiaflag, alt: "INR" },
    { balance: "1200 GBP", src: europeFlag, alt: "GBP" },
    { balance: "192.00 USD", src: ukflag, alt: "USD" },
    { balance: "Open a balance", src: plus, alt: "Open logo" }
  ],
  Jars: [{ jar: "Open a jar", src: plus, alt: "jar" }],
  headings: {
    balances: "Balances",
    jar: "Jars"
  }
};

export const StyledRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "8px 9px",
  margin: "13px 20px",
  marginTop: "0px",
  width: "100%",
  gap: "12px",
  "& .img-container": {
    height: "24px",
    width: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
