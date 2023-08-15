import { useNavigate } from "react-router-dom";
import { SendMoney } from "../../organisms/sendMoney";
import { PaymentPageTemplate } from "../../templates/Paymentpage";
import { ROUTES } from "../../../routes";


const SendMoneyPage = () => {
  const navigate=useNavigate()
    return (
      <>
        <PaymentPageTemplate displayBack displayClose handleBackFn={() => {navigate(ROUTES.YOUR_DETAILS)}} >
          <SendMoney  />
        </PaymentPageTemplate>
      </>
    );
  };
  
  export default SendMoneyPage;