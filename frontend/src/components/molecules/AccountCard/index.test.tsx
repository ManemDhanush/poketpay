import { render, screen } from "@testing-library/react"
import { AccountCard } from "."
import Send from '../../../../public/assets/images/send.svg'
import { theme } from "../../../theme/theme"
import { SENDMONEY,SUBTEXT1 } from '../../../constants';
describe("Account Card Component",()=>{
    test("tests if the component renders correctly or not",async ()=>{
        render( <AccountCard 
            icon={Send} 
            text={SENDMONEY} 
            textVariant={"body2"} 
            iconAlt={"send"} 
            subText={SUBTEXT1}  
            textColor={theme.palette.textColor.highEmphasis} 
            subTextColor={theme.palette.textColor.lowEmphasis}/>
        )
        const IconTypoElement=screen.getByTestId("iconTypo");
        expect(IconTypoElement).toBeInTheDocument();
    })
})