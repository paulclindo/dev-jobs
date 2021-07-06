import React from "react";
import { useParams } from "react-router-dom";
import { useJobs } from "../context/job-provider";
import styled from "styled-components";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { Time, JobType, Place, Title } from "../components/JobCard";
import cardBg from "../assets/desktop/bg-pattern-detail-footer.svg";
import { useSingleJob } from "../lib/jobs";

const Wrapper = styled.div`
  max-width: 730px;
  margin: auto;
  padding-bottom: 120px;
  margin-top: -30px;
`;
const IntroCard = styled.div`
  background: ${({ theme }) => theme.palette.white};
  padding-right: 40px;
  display: flex;
  align-items: center;
  height: 140px;
  border-radius: 6px;
  margin-bottom: 32px;
`;
const IntroTitle = styled.div`
  padding: 42px 40px;
  flex: 1;
`;
const Company = styled(Typography)`
  margin-bottom: 13px;
`;

const Logo = styled.img`
  width: 140px;
  height: 140px;
  padding: 10px;
  object-fit: contain;
  border-right: 1px solid ${({ theme }) => theme.palette.secondary[200]};
`;

const ContentCard = styled.div`
  background: ${({ theme }) => theme.palette.white};
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 6px;
  margin-bottom: 32px;
  padding: 48px;
  padding-right: 42px;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.palette.secondary[700]};
`;

const Description = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary[700]};
`;
const HowToApply = styled.div`
  color: ${({ theme }) => theme.palette.white};
  border-radius: 6px;
  overflow: hidden;
  background: url(${cardBg}) center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 32px;
  padding: 40px 48px;
  padding-right: 42px;
`;
const HowToApplyTitle = styled(Typography)`
  margin-bottom: 28px;
`;
const HowToApplyLink = styled(Typography)`
  color: ${({ theme }) => theme.palette.white};
  margin-top: 26px;
`;

export default function JobDetails() {
  const { slug } = useParams();

  const { singleJob } = useSingleJob(slug);

  return (
    <Wrapper>
      <IntroCard>
        <Logo
          src={
            singleJob?.company_logo ||
            "https://i.pinimg.com/originals/f9/6a/26/f96a261e5a60d7d66b36e2850e3eb19b.png"
          }
        />
        <IntroTitle>
          <Company variant="h3">{singleJob?.company}</Company>
          <Typography variant="body">{singleJob?.company}.com</Typography>
        </IntroTitle>
        <Button
          variant="secondary"
          as="a"
          href={singleJob?.url}
          target="_blank"
        >
          Company Site
        </Button>
      </IntroCard>
      <ContentCard>
        <ContentHeader>
          <div>
            <Flex>
              <Time variant="body">
                {new Date(singleJob?.date).toLocaleString()}
              </Time>
              {" • "}
              <JobType variant="body">Full Time</JobType>
            </Flex>
            <Title variant="h1">{singleJob?.position}</Title>
            <Place variant="h4">
              Remote, Seoul, Tokyo, Mountain View, San Fransisco
            </Place>
          </div>
          <Button
            as="a"
            href={singleJob?.apply_url}
            target="_blank"
            variant="primary"
          >
            Apply Now
          </Button>
        </ContentHeader>
        <Description variant="body">{singleJob?.description}</Description>
      </ContentCard>
      <HowToApply>
        <HowToApplyTitle variant="h3">How to Apply</HowToApplyTitle>
        <Typography>
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
          ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
          libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
          varius, adipiscing in, lacinia vel, tellus.
        </Typography>
        <HowToApplyLink as="a" href="/">
          https://examplelink.com/how-to-apply
        </HowToApplyLink>
      </HowToApply>
    </Wrapper>
  );
}
