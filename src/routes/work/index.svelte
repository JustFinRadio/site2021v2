<script context="module">
  import contentful from "$lib/utils/contentful";
  export async function load() {
    const query = `{
  projectCollection(order:date_DESC){
    items {
      title
      slug
      coverImage {
        url
      }
    }
  }
}`;

    let res = await contentful(query);

    return {
      props: {
        data: await res.data.projectCollection.items,
      },
    };
  }
</script>

<script>
  import ProjectCard from "$lib/components/project-card/index.svelte";
  import HeaderTitle from "$lib/components/header/title.svelte";

  export let data;
  // let evenArray = data.filter((a, i) => i % 2);
  // let oddArray = data.filter((a, i) => !(i % 2));

  let x,
    y = 0;

  function handleMousemove(e) {
    x = e.clientX;
    y = e.clientY;
  }
</script>

<svelte:window on:mousemove={handleMousemove} />
<HeaderTitle text="Work" />
<div class="grid grid-cols-2 gap-8 px-4 max-w-screen-lg mx-auto mt-10">
  {#each data as project}
    <div class="col-span-2 md:col-span-1">
      <ProjectCard {project} {x} {y} />
    </div>{/each}
</div>

<style>
</style>
