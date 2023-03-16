<script>
  import "../app.postcss";
  import NavBar from "$lib/components/navbar/index.svelte";
  import Footer from "$lib/components/footer/index.svelte";
</script>

<NavBar />
<div class="pt-16 min-h-screen w-full">
  <slot />
</div>
<Footer />
