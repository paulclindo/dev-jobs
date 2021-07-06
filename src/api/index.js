async function getJobs() {
  const response = await fetch("https://remoteok.io/api");
  const data = await response.json();
  data.shift();
  return data;
}
export { getJobs };
