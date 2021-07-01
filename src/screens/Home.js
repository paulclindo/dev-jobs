import React from "react";
import styled from "styled-components";
import { JobCard } from "../components/JobCard";
import { Spinner } from "../components/lib";
import { useJobs } from "../context/job-provider";
import Input from "../components/Input";
import { IoLocationSharp } from "react-icons/io5";
import Button from "../components/Button";
import { Checkbox } from "../components/CheckboxInputs";

const ULList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 70px 30px;
  max-width: 1100px;
  margin: auto;
  padding-left: 0;
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
  margin-bottom: 100px;
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

export default function Home(): JSX.Element {
  const [state] = useJobs();

  const { status, data, error } = state;
  const isLoading = status === "idle" || status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <>
      <Filters>
        <SearchInput
          type="search"
          id="search"
          placeholder="Filter by title, companies, expertise…"
        />
        <LocationInput
          type="string"
          id="location"
          placeholder="Filter by location…"
          icon={<LocationIcon fontSize="20px" />}
        />
        <FullTimeFilter>
          <Checkbox label="Full Time Only" />
        </FullTimeFilter>
        <Button>Search</Button>
      </Filters>
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
                slug={slug}
              />
            )
          )}
        </ULList>
      ) : isSuccess && !data.length ? (
        <p>Not found any jobs yet. Try again later</p>
      ) : null}
    </>
  );
}
