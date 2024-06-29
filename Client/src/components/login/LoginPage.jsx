import React from "react";
import LoginPage, {
  Reset,
  Logo,
  Password,
  Footer,
} from "@react-login-page/page5";
import LoginLogo from "react-login-page/logo-rect";

const Demo = () => (
  <LoginPage style={{ height: 480 }}>
    <Logo>
      <LoginLogo />
    </Logo>
    <Password visible={false} />
    <Footer>
      Not a member? <a href="#">Sign up now</a>
    </Footer>
  </LoginPage>
);

export default Demo;
