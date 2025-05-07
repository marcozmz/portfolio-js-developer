async function fetchProfileData() {
  const url =
    "https://github.dev/marcozmz/portfolio-js-developer/blob/main/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
