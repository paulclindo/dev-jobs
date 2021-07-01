async function fetchJobs() {
  const response = await fetch("https://remoteok.io/api");
  const data = await response.json();
  data.shift();
  return data;
}
export { fetchJobs };
