<script context="module">
  import contentful from "$lib/utils/contentful";
  export async function load({ page }) {
    const query = `{
  projectCollection(where: {
    slug: "${page.params.slug}"
  }){
    items {
      title
      coverImage {
        url
        description
      }
      abstract
      date
      endDate
      location{
        lat
        lon
      }
      humanLocation
      body {
        json
      }
    }
  }
}`;

    let res = await contentful(query);

    return {
      props: {
        data: await res.data.projectCollection.items[0],
      },
    };
  }
</script>

<script>
  export let data;
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  let content = documentToHtmlString(data.body.json);

  let startDate = new Date(data.date).toDateString();
</script>

<div class="w-full px-4 sm:w-1/2 mx-auto text-center">
  <h1 class="h2 mt-32">
    <u>{data.title}</u>
  </h1>
  <p class="mt-16">{data.abstract}</p>
  <div class="flex justify-around mt-16">
    <div>
      <h5 class="h5 text-light">Location</h5>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination={data.location
          .lat},{data.location.lon}"
      >
        <p class="small">{data.humanLocation}</p>
      </a>
    </div>
    <div>
      <h5 class="h5 text-light">Date</h5>
      <p class="small">{startDate}</p>
    </div>
  </div>
</div>
{#if data.coverImage}
  <img
    src={data.coverImage.url}
    alt={data.coverImage.description}
    class="w-screen mx-auto max-w-6xl mt-10"
  />
{/if}
<main class="mx-auto max-w-3xl mt-10 px-4">
  {@html content}
</main>
