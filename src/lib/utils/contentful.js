export default async function (query) {
  const spaceID = "khj36dj27got";
  const accessToken = "-MZNwWEBWFjH2ExLMcWeYZfKlrmR0NKnB4OvXm2ljDw";
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceID}`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
  const res = await fetch(endpoint, fetchOptions).then((res) => res.json());

  return res;
}
