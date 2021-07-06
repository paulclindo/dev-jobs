import { useQuery } from "react-query";
import { getJobs } from "../api";

function useAllJobs() {
  const query = useQuery("jobs", getJobs);
  return { ...query, jobList: query.data };
}

function useSingleJob(slug) {
  const query = useQuery("jobs", getJobs);
  const selected = query.data?.find((item) => item.slug === slug);
  return {
    ...query,
    singleJob: selected,
  };
}

export { useAllJobs, useSingleJob };
