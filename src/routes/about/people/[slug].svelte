<script context="module">
  import contentful from "$lib/utils/contentful";
  export async function load({ page }) {
    const query = `{
    personCollection(where: {
      slug: "${page.params.slug}"
    }){
      items{
        name
        role
        bio{
          json
        }
      }
    }
  }`;

    let res = await contentful(query);

    return {
      props: {
        data: await res.data.personCollection.items[0],
      },
    };
  }
</script>

<script>
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  export let data;
  let bio = documentToHtmlString(data.bio.json);
</script>

<div class="px-4">
  <h1 class="max-w-6xl mx-auto mt-32">
    <u>{data.name}</u>
  </h1>
  <div class="grid grid-cols-10 gap-4 max-w-6xl mx-auto mt-16">
    <main class="col-span-10 md:col-span-6">{@html bio}</main>
    <div class="col-span-1" />
    <aside class="order-first col-span-10 md:col-span-3 md:order-none">
      <h5 class="h5 text-light">Role</h5>
      <p class="small">{data.role}</p>
      <!-- {#if sideBar}
        {@html sideBar}
      {/if} -->
    </aside>
  </div>
</div>

<style>
  aside h5 {
    @apply text-light;
  }
</style>
