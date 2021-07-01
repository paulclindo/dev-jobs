import React from "react";
import styled from "styled-components";
import { Switch } from "../components/CheckboxInputs";
import logoDevJobs from "../assets/desktop/logo.svg";
import headerBg from "../assets/desktop/bg-pattern-header.svg";
import { Link } from "react-router-dom";

const Background = styled.div`
  background: url(${headerBg}) center no-repeat;
  height: 160px;
`;
const BodyBackground = styled.div`
  background: ${(props) => props.theme.palette.secondary[200]};
`;
const Header = styled.header`
  max-width: 1100px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 115px;
`;

export default function Layout({ children }) {
  return (
    <BodyBackground>
      <Background>
        <Header>
          <Link to="/">
            <Logo src={logoDevJobs} />
          </Link>
          <Switch />
        </Header>
      </Background>
      {children}
    </BodyBackground>
  );
}
