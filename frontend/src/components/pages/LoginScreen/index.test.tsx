import { render, screen } from "@testing-library/react"
import { LoginScreen } from "."
import { MemoryRouter } from "react-router-dom";

describe("LoginScreen Page",()=>{
        test("test if the component is rendering correctly",()=>{
            render(<MemoryRouter><LoginScreen/></MemoryRouter>);
            const textElement=screen.getByTestId("typo1");
            expect(textElement).toBeInTheDocument();
        })
})