<script>
  import MailchimpSignup from "../mailchip/mailchimp-signup.svelte";
</script>

<footer class="w-full mt-16 py-16 bg-black text-white">
  <div class="small w-full max-w-7xl grid grid-cols-12 md:gap-9 mx-auto">
    <div class="col-span-12 md:col-span-4 px-4">
      <h5 class="h5">About Despite the Monkey</h5>
      <p class="mt-5">
        Despite the Monkey is based in Liverpool UK. Aiming to enhance audience
        experience with technology; creating ambitious and exciting works to
        engage and encourage creative coding and technological skills within
        artistic practice.
      </p>
      <a href="mailto: contact@despitethemonkey.co.uk"
        >contact@despitethemonkey.co.uk</a
      >
      <p>
        Illustrations from <a href="https://absurd.design">absurd.design</a>
      </p>
    </div>
    <div class="col-span-12 md:col-span-1" />
    <div class="col-span-12 md:col-span-3 px-4">
      <h5 class="h5">Quick Links</h5>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/about/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/privacy">Privacy</a>
        </li>
      </ul>
    </div>
    <div class="mt-8 md:mt-0 col-span-12 md:col-span-4 px-4">
      <h5 class="h5">Support Us</h5>
      <MailchimpSignup />
    </div>
  </div>
</footer>
