import fetch from "node-fetch";
import path from "path";
import fs from "fs";
import { cwd } from "process";

// api path queries
const PersonQuery = `{
    personCollection{
    items {
      slug
    }
  }}`;

const projectQuery = `{
    projectCollection{
    items {
      slug
    }
  }}`;

const contentful = async (query) => {
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
};

const build = async () => {
  let people = await contentful(PersonQuery).then((res) => {
    return res.data.personCollection.items;
  });

  let projects = await contentful(projectQuery).then((res) => {
    return res.data.projectCollection.items;
  });

  let pages = ["*", "/support/first-contact"];

  people.forEach((element) => {
    pages.push(`/about/people/${element.slug}`);
  });

  projects.forEach((element) => {
    pages.push(`/work/${element.slug}`);
  });

  console.log("generated paths:");
  console.log(pages);

  fs.writeFileSync(path.join(cwd(), "./routelist.json"), JSON.stringify(pages));
  console.log("Finished");
};

build();
