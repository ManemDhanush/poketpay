import React from "react";
import PocketPayIcon from "../../../../public/assets/images/pocketpaylogo.svg";
import { Image } from "../../atoms/image";
import { Wrapper, Header, Body } from "./SignUpTemplateConstants";
export interface SignUpTemplateProps {
  children: React.ReactNode;
}

export const SignUpTemplate = ({ children }: SignUpTemplateProps) => {
  return (
    <Wrapper>
      <Header>
        <Image src={PocketPayIcon} alt={"Logo"} />
      </Header>
      <Body>{children}</Body>
    </Wrapper>
  );
};
