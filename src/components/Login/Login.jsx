import React from "react";
import {
  Container,
  CTA,
  CTALogoOne,
  SignUp,
  Description,
  CTALogoTwo,
} from "./style";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL HERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for with a Disney+
          subscription. As of 03/26/21, the price and the Disney Bundle will
          increase by $1
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;
