<script>
  import { fly } from "svelte/transition";
  export let title, x, y;
  // import { spring } from "svelte/motion";
  // let coords = spring(
  //   { x: 50, y: 50 },
  //   {
  //     stiffness: 0.2,
  //     damping: 1,
  //   }
  // );
</script>

<div
  class="fixed bg-primary px-2 py-1 text-white overflow-hidden"
  style="pointer-events: none; left: {x}px; top: {y}px"
>
  <span class="h4" in:fly={{ y: 20, duration: 200 }}>{title}</span>
</div>
