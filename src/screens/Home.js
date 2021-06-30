import React from "react";
import styled from "styled-components";
import { Switch, Checkbox } from "../components/CheckboxInputs";
import logoDevJobs from "../assets/desktop/logo.svg";
import headerBg from "../assets/desktop/bg-pattern-header.svg";
import Input from "../components/Input";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../components/Button";
import JobCard from "../components/JobCard";
import { Spinner } from "../components/lib";

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
const Filters = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: -30px;
  border-radius: 6px;
  background: white;
  overflow: hidden;
  padding-right: 16px;
`;

const SearchInput = styled(Input)`
  flex: 2;
  border-right: 1px solid ${(props) => props.theme.palette.secondary[400]};
`;
const LocationInput = styled(Input)`
  flex: 1;
  border-right: 1px solid ${(props) => props.theme.palette.secondary[400]};
`;
const FullTimeFilter = styled.div`
  display: flex;
  padding-left: 32px;
  padding-right: 26px;
`;

const LocationIcon = styled(IoLocationSharp)`
  color: ${(props) => props.theme.palette.primary[700]};
`;
const ULList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 70px 30px;
  max-width: 1100px;
  margin: auto;
  padding-left: 0;
  padding-top: 120px;
  padding-bottom: 120px;
`;

async function fetchJobs() {
  const response = await fetch("https://remoteok.io/api");
  const data = await response.json();
  data.shift();
  return data;
}

export default function Home(): JSX.Element {
  const [state, setState] = React.useState({
    status: "idle",
    data: null,
    error: null,
  });

  React.useEffect(() => {
    setState({ status: "pending" });
    fetchJobs()
      .then((data) => {
        setState({ status: "success", data });
      })
      .catch((err) => {
        setState({ error: err, status: "error", data: null });
      });
  }, []);

  const { status, data, error } = state;
  const isLoading = status === "idle" || status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <BodyBackground>
      <Background>
        <Header>
          <Logo src={logoDevJobs} />
          <Switch />
        </Header>
        <Filters>
          <SearchInput
            type="search"
            placeholder="Filter by title, companies, expertise…"
          />
          <LocationInput
            type="string"
            placeholder="Filter by location…"
            icon={<LocationIcon fontSize="20px" />}
          />
          <FullTimeFilter>
            <Checkbox label="Full Time Only" />
          </FullTimeFilter>
          <Button>Search</Button>
        </Filters>
      </Background>
      {isError ? <p>{error}</p> : null}
      {isLoading ? (
        <Spinner />
      ) : isSuccess && data.length > 0 ? (
        <ULList>
          {data.map(
            ({
              slug,
              id,
              location,
              date,
              companyName,
              company_logo,
              position,
              time,
            }) => (
              <JobCard
                key={id}
                companyName={companyName}
                position={position}
                companyLogo={company_logo}
                date={date}
                location={location}
              />
            )
          )}
        </ULList>
      ) : isSuccess && !data.length ? (
        <p>Not found any jobs yet. Try again later</p>
      ) : null}
    </BodyBackground>
  );
}
