import WelcomeBack from "../../organisms/WelcomeBack";
import { SignUpTemplate } from "../../templates/SignUpTemplate.tsx";

export const LoginScreen=()=>{
    return(
        <>
            <SignUpTemplate>
                <WelcomeBack/>
            </SignUpTemplate>
        </>
    );
}