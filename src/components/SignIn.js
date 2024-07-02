import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SignIn() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" />
        <SignUpButton onClick={() => navigate("/home")}>
          GET ALL THERE
        </SignUpButton>
        <Text>
          Disney+ is an online video streaming platform owned by Novi Digital
          Entertainment Private Limited, a wholly owned subsidiary of Star India
          Private Limited. Disney+ Hotstar currently offers over 100,000 hours
          of TV content and movies across 9 languages, and every major sport
          covered live.
        </Text>
        <LogoTwo src="/images/cta-logo-two.png" />
      </Content>
    </Wrapper>
  );
}

export default SignIn;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background: url("/images/login-background.jpg") center top / cover no-repeat;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const LogoOne = styled.img``;

const SignUpButton = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: background 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Text = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const LogoTwo = styled.img`
  width: 90%;
`;
