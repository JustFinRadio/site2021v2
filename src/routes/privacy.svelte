<script context="module">
  import contentful from "$lib/utils/contentful";
  export async function load() {
    const query = `{
  singlePage(id:"3zicSPaluZm5dIgyFYGWt6") {
    title
    body {
      json
    }
  }
}`;

    let res = await contentful(query);

    return {
      props: {
        data: await res.data.singlePage,
      },
    };
  }
</script>

<script>
  import HeaderTitle from "$lib/components/header/title.svelte";
  import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
  export let data;
  let body = documentToHtmlString(data.body.json);
</script>

<HeaderTitle text="Privacy" />
<main class="px-8 max-w-6xl mx-auto">
  {@html body}
</main>
