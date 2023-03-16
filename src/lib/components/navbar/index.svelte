<script>
  import NavButton from "./nav-button.svelte";

  let open = false;

  let links = [
    { text: "About Us", link: "/about" },
    { text: "Our Work", link: "/work" },
    { text: "Contact", link: "/contact" },
    { text: "Claywell Digital", link: "https://claywelldigital.com" },
  ];

  function toggleMenu() {
    open = !open;
  }
</script>

<nav class="bg-white top-0 left-0 fixed w-screen">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <NavButton {open} on:pressed={toggleMenu} />
      </div>
      <div
        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between"
      >
        <div class="flex-shrink-0 flex items-center">
          <a href="/"
            ><img
              class="block lg:hidden h-8 w-auto"
              src="/dtm.svg"
              alt="Despite the Monkey"
              style="max-width: 45px;"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="/dtm-flat.svg"
              alt="Despite the Monkey"
              style="max-width: 475px;"
            /></a
          >
        </div>
        <div class="hidden sm:block sm:ml-6 justify-self-end">
          <div class="flex space-x-4">
            {#each links as link}
              <a
                href={link.link}
                class="text-light hover:text-dark px-3 py-2 text-sm font-medium no-underline"
                >{link.text}</a
              >
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>

  {#if open}
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each links as link}
          <a
            href={link.link}
            class="text-light hover:text-dark px-3 py-2 text-sm font-medium block no-underline"
            >{link.text}</a
          >
        {/each}
      </div>
    </div>
  {/if}
</nav>
