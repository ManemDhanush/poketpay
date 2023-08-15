import { fireEvent, render, screen } from "@testing-library/react"
import { SelectAccountType } from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("SignUpFlowSelectAcccountType",()=>{
    beforeEach(() => {
        render(
          <Router>
            <SelectAccountType/>
          </Router>
        );
      });
    test("testing whether the components are rendering or not",()=>{
        const element=screen.getByTestId("text1");
        expect(element).toBeInTheDocument();
    })
    it('should navigate to "/" when button is clicked', () => {
        const button = screen.getByTestId("back");
        fireEvent.click(button);
      });
      it('should navigate to "/choose-country" when button is clicked', () => {
        const buttons = screen.getAllByTestId("iconTypo");
        fireEvent.click(buttons[1])
      });

})