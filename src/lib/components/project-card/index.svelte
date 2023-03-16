<script>
  import { fly } from "svelte/transition";
  import Cursor from "./cursor.svelte";
  export let project, x, y;

  let sizes = ["mason-small", "mason-medium", "mason-large"];
  let hovering = false;

  const randomSize = () => {
    let className = sizes[Math.floor(Math.random() * sizes.length)];
    return `${className}`;
  };
</script>

<a href="/work/{project.slug}">
  {#if hovering}
    <Cursor title={project.title} {x} {y} />
  {/if}
  <div
    on:mouseover={() => (hovering = true)}
    on:mouseleave={() => (hovering = false)}
    in:fly={{ y: 100, duration: 300 }}
    class="mason-medium bg-cover bg-center md:mb-8"
    style="background-image: url('{project.coverImage
      .url}?h=512&fm=jpg&fl=progressive')"
  /></a
>

<style>
  .mason-small {
    height: 256px;
  }

  .mason-medium {
    height: 256px;
  }

  @media (min-width: 765px) {
    .mason-medium {
      height: 396px;
    }
  }

  .mason-large {
    height: 512px;
  }
</style>
