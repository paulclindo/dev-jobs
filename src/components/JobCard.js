import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { Link } from "react-router-dom";

const Header = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.palette.secondary[700]};
`;
const Time = styled(Typography)`
  margin-right: 5px;
`;
const JobType = styled(Typography)`
  margin-left: 5px;
`;
const Title = styled(Typography)`
  margin-top: 16px;
  margin-bottom: 16px;
`;
const Company = styled(Typography)`
  color: ${(props) => props.theme.palette.secondary[700]};
  margin-bottom: 26px;
`;
const Place = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary[700]};
`;

const Wrapper = styled.li`
  position: relative;
  flex: 1;
  min-width: 300px;
  list-style: none;
  padding: 32px;
  padding-top: 50px;
  background: white;
  border-radius: 6px;
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: unset;
  :hover ${Title} {
    color: ${({ theme }) => theme.palette.primary[700]};
  }
`;
const Logo = styled.img`
  position: absolute;
  top: -25px;
  background: white;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.palette.secondary[400]};
  padding: 5px;
  object-fit: contain;
`;

export default function JobCard({
  slug,
  location,
  date,
  companyName,
  companyLogo,
  position,
  time,
}) {
  return (
    <Wrapper>
      <SLink to={`/${slug}`}>
        <Logo
          src={
            companyLogo ??
            "https://i.pinimg.com/originals/f9/6a/26/f96a261e5a60d7d66b36e2850e3eb19b.png"
          }
          alt=""
        />
        <Header>
          <Time variant="body">{new Date(date).toLocaleString()}</Time>
          {" • "}
          <JobType variant="body">Full Time</JobType>
        </Header>
        <Title variant="h3">{position}</Title>
        <Company variant="body">{companyName}</Company>
        <Place variant="h4">
          Remote, Seoul, Tokyo, Mountain View, San Fransisco
        </Place>
      </SLink>
    </Wrapper>
  );
}
