import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/LandingPage";
import { TwoFactorAuthContactNumber } from "./components/pages/TwoFactorAuthContactNumber";
import { TwoFactorAuthOTP } from "./components/pages/TwoFactorAuthOTP";
import { ROUTES } from "./routes";
import { ConfirmBusinessPage } from "./components/pages/ConfirmBusinessPage";
import { SearchBusinessPage } from "./components/pages/SearchBusinessPage";
import { ConfirmTradingAddressPage } from "./components/pages/ConfirmTradingAddressPage";
import CreateAccount from "./components/pages/CreateAccount";
import PocketPayPurposePage from "./components/pages/PocketPayPurposePage";
import { PaymentPage } from "./components/pages/PaymentPage";
import { EnterTransferAmount } from "./components/pages/EnterTransferAmount";
import RecipientDetailsPage from "./components/pages/RecipientDetails";
import {
  AppContext,
  initialTransaction,
  intialUser,
  initialBusiness
} from "./constants";
import { useMemo, useState } from "react";
import { SelectAccountType } from "./components/pages/SignUpFlowSelectAccountTpe";
import SelectCountry from "./components/pages/SelectCountry";
import { CreateNewPassword } from "./components/pages/NewCreatePasswordPage";
import { BusinessActivity } from "./components/pages/BusinessActivity";
import { UserDetails } from "./components/pages/UserDetails";
import SendMoneyPage from "./components/pages/SendMoneyPage";
import SelectRecipient from "./components/pages/SelectRecipient";
import ReviewTransferDetailsPage from "./components/pages/ReviewTransferDetailsPage";
import ConfirmBusinessDirectorsPage from "./components/pages/ConfirmBusinessDirectorsPage";
import ConfirmBusinessOwnersPage from "./components/pages/ConfirmBusinessOwnersPage";
import { ChooseBankPage } from "./components/pages/ChooseBankPage";
import { BankAccountPage } from "./components/pages/BankAccountPage";
import { PayeeDetailsPage } from "./components/pages/PayeeDetailsPage";
import { LoginScreen } from "./components/pages/LoginScreen";
import { styled } from "@mui/material";
import { theme } from "./theme/theme";
import { ContextProvider } from "./context";

export const App = () => {
  const Wrapper = styled("div")(`
    & .MuiButton-contained{
      :hover{
        background:${theme.palette.primary.primary300};
      }
    }
    & .MuiButton-text{
      :hover{
        background:${theme.palette.structural.buttonHover};
      }
    }
  `);
  return (
    <Wrapper>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CreateAccount />} />
            <Route
              path={ROUTES.CHOOSE_ACCOUNT_TYPE}
              element={<SelectAccountType />}
            />
            <Route path={ROUTES.CHOOSE_COUNTRY} element={<SelectCountry />} />
            <Route
              path={ROUTES.CREATE_PASSWORD}
              element={<CreateNewPassword />}
            />
            <Route
              path={ROUTES.SEARCH_YOUR_BUSINESS}
              element={<SearchBusinessPage />}
            />
            <Route
              path={ROUTES.BUSINESS_ACTIVITY}
              element={<BusinessActivity />}
            />
            <Route path={ROUTES.YOUR_DETAILS} element={<UserDetails />} />
            <Route path={ROUTES.SEND_MONEY} element={<SendMoneyPage />} />
            <Route
              path={ROUTES.SENDING_TO}
              element={<SelectRecipient />}
            ></Route>
            <Route
              path={ROUTES.VERIFICATION_STEP.pocketPayPurpose}
              element={<PocketPayPurposePage />}
            ></Route>
            <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />} />
            <Route
              path={ROUTES.VERIFICATION_STEP.businessDirectors}
              element={<ConfirmBusinessDirectorsPage />}
            ></Route>
            <Route
              path={ROUTES.VERIFICATION_STEP.businessOwners}
              element={<ConfirmBusinessOwnersPage />}
            ></Route>
            <Route
              path={ROUTES.REVIEW_TRANSFER_DETAILS}
              element={<ReviewTransferDetailsPage />}
            ></Route>
            <Route
              path={ROUTES.TRANSFER_TYPE}
              element={<PaymentPage />}
            ></Route>
            <Route
              path={ROUTES.TWO_FACTOR}
              element={<TwoFactorAuthContactNumber />}
            />
            <Route
              path={ROUTES.TWO_FACTOR_OTP}
              element={<TwoFactorAuthOTP />}
            />
            <Route
              path={ROUTES.YOUR_BUSINESS.confirm + "/:businessName"}
              element={<ConfirmBusinessPage />}
            />
            <Route
              path={ROUTES.YOUR_BUSINESS.search}
              element={<SearchBusinessPage />}
            />
            <Route
              path={ROUTES.YOUR_BUSINESS.confirmTradingAddr}
              element={<ConfirmTradingAddressPage />}
            />
            <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />
            <Route
              path={ROUTES.ENTER_AMOUNT}
              element={<EnterTransferAmount />}
            />
            <Route
              path={ROUTES.RECIPIENT_DETAILS}
              element={<RecipientDetailsPage />}
            />
            <Route path={ROUTES.SIGN_IN} element={<LoginScreen />} />
            <Route path={ROUTES.CHOOSE_BANK} element={<ChooseBankPage />} />
            <Route path={ROUTES.BANK_ACCOUNT} element={<BankAccountPage />} />
            <Route path={ROUTES.PAYEE_DETAILS} element={<PayeeDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </Wrapper>
  );
};
