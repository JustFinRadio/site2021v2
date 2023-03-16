<script context="module">
  import contentful from "$lib/utils/contentful";
  export async function load() {
    const query = `{
    personCollection(order:name_ASC){
      items{
        name
        role
        slug
      }
    }
  }`;

    let res = await contentful(query);

    return {
      props: {
        data: await res.data.personCollection.items,
      },
    };
  }
</script>

<script>
  import HeaderTitle from "$lib/components/header/title.svelte";
  export let data;
</script>

<HeaderTitle text="About Us" />
<main>
  <section class="mx-auto max-w-4xl px-8 text-center">
    <h2>Addicted to <span class="text-primary">Storytelling</span></h2>
    <p>
      Originally founded as a theatre company in 2017, Despite the Monkey has
      since expanded its scope, now also providing a wide range of services to
      people and organisations looking to create innovative experiences for
      audiences of their own.
    </p>
  </section>

  <section class="mx-auto max-w-7xl px-8 mt-32">
    <h2 class="mx-auto text-center">What we do</h2>
    <p class="mx-auto text-center">
      Our approach to storytelling encompasses the twin values of audience
      experience and innovation to create unforgettable work.
    </p>
    <div class="md:flex w-full">
      <div class="mx-auto md:w-1/4 flex flex-col justify-evenly">
        <span class="mb-8 md:mb-0">
          <h4 class="mb-2"><u>Mixed Reality</u></h4>
          <p class="text-dark small">
            VR/AR Content Creation, Binaral Audio, Interactive Installations,
            IOT/Connectivity
          </p>
          <a href="/about/services" class="small no-underline flex"
            >Learn More <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg></a
          >
        </span>
        <span class="mb-8 md:mb-0">
          <h4 class="mb-2"><u>Audio Visual</u></h4>
          <p class="text-dark small">
            Sound/Video/Lighting Design, Real-Time Content Generation,
            Audio/Podcast Production, System Design
          </p>
          <a href="/about/services" class="small no-underline flex"
            >Learn More <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg></a
          >
        </span><span class="mb-8 md:mb-0">
          <h4 class="mb-2"><u>Digital Services</u></h4>
          <p class="text-dark small">
            Web Design/Hosting, App Development, Graphic design
          </p>
          <a href="/about/services" class="small no-underline flex"
            >Learn More <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg></a
          >
        </span>
      </div>
      <div class="md:w-1/2 flex flex-col justify-evenly">
        <img
          src="/Absurd-Illustrations/04.png"
          alt="an illustration of a pair of glasses by absurd design"
        />
      </div>
      <div class="md:w-1/4 flex flex-col justify-evenly text-right">
        <span class="mb-8 md:mb-0">
          <h4 class="mb-2"><u>Production Services</u></h4>
          <p class="text-dark small">
            Creative Direction, Project Management, Narative content writing,
            Dramaturgy
          </p>
          <a href="/about/services" class="small no-underline"
            >Learn More <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg></a
          >
        </span>
        <span class="mb-8 md:mb-0">
          <h4 class="mb-2"><u>Design and Fabrication</u></h4>
          <p class="text-dark small">
            Set/Installation Design and Construction, model Making, Prop Design,
            Pre-Vis
          </p>
          <a href="/about/services" class="small no-underline"
            >Learn More <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg></a
          >
        </span>
        <span class="mb-8 md:mb-0">
          <h4 class="mb-2"><u>Workshops and Education</u></h4>
          <p class="text-dark small">
            Creative Coding/Technology, Technological Project Enhancement,
            Creative Storytelling
          </p>
          <a href="/about/services" class="small no-underline"
            >Learn More <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg></a
          >
        </span>
      </div>
    </div>
  </section>
  <section class="mx-auto max-w-7xl px-8 mt-32">
    <section class=" mx-auto max-w-6xl md:flex mt-16">
      <div class="md:w-1/2 md:pr-8">
        <img class="mx-auto" src="/Absurd-Illustrations/104.png" />
      </div>
      <div class="md:w-1/2 md:pl-8 mt-16">
        <h2><u>Empowering creatives with technology</u></h2>
        <p>
          Despite The Monkey believes that artistic endeavour and technological
          innovation go hand in hand. Our reputation has been built on enabling
          artists to enrich their creative process with new media techniques
          that may have previously seemed beyond their reach. We constantly look
          to push ourselves in daring new directions and help others to expand
          their storytelling capabilities.
        </p>
      </div>
    </section>
    <section class=" mx-auto max-w-6xl md:flex mt-16">
      <div class="md:w-1/2 md:pl-8 mt-16">
        <h2><u>We Value Collaboration</u></h2>
        <p>
          Our team is dedicated to learning, listening and evolving through
          collaborative work. When working with the right people, you are able
          to invigorate your own personal practice whilst striving towards your
          mutual goal. Great collaborators are the key to a great final product.
        </p>
      </div>
      <div class="md:w-1/2 md:pr-8">
        <img class="mx-auto" src="/Absurd-Illustrations/11.png" />
      </div>
    </section>
    <section class=" mx-auto max-w-6xl md:flex mt-16">
      <div class="hidden mt-16 md:mt-0 md:block w-1/2 pr-8">
        <img src="/Absurd-Illustrations/05.png" />
      </div>
      <div class=" md:w-1/2 md:pl-8 mt-16">
        <h2><u>Accessible By Default</u></h2>
        <p>
          We believe in the immeasurable power of art and technology to enrich
          lives and illuminate the world we live in. As such, we push ourselves
          to create work that can connect not just with individuals, but with
          communities. We will always strive to make sure that our projects are
          visible and available to all.
        </p>
      </div>
    </section>
    <section class=" mx-auto max-w-6xl md:flex mt-16">
      <div class="md:w-1/2 md:pl-8 mt-16">
        <h2><u>Friendly and open</u></h2>
        <p>
          We're a tight knit team who pride ourselves on professionalism and
          creative dedication. We love working with others and discovering new
          and exciting ways to explore our craft. Collaboration is at the heart
          of everything we do, so please don’t hesitate to get in touch with us,
          we’re always excited to hear about what you’re working on!
        </p>
      </div>
      <div class="w-1/2 pr-8 hidden md:block">
        <img src="/Absurd-Illustrations/102.png" />
      </div>
    </section>
    <section class=" mx-auto max-w-6xl md:flex mt-16">
      <div class="mt-16 md:mt-0 md:w-1/2 md:pr-8">
        <img src="/Absurd-Illustrations/08.png" />
      </div>
      <div class="md:w-1/2 md:pl-8 mt-16">
        <h2><u>Innovation through creativity</u></h2>
        <p>
          Despite The Monkey knows that when you’re inspired to create you
          should never look to limit your aspirations. It is only by challenging
          ourselves to innovate that we can deliver an end product that defies
          expectation. Our work can be challenging, charming, irreverent and
          strange...the one thing it will never be is ordinary.
        </p>
      </div>
    </section>
  </section>
  <section class="mx-auto max-w-7xl px-8 text-center mt-32">
    <h2>Our Team</h2>
    <div class="md:flex mt-16">
      {#each data as person}
        <span class="md:w-1/2">
          <a href="/about/people/{person.slug}"><h5>{person.name}</h5> </a>
          <p>{person.role}</p>
        </span>
      {/each}
    </div>
  </section>
  <section class="mx-auto max-w-7xl px-8 text-center mt-32">
    <h2>Contact</h2>
    <p>We cannot wait to hear from you. <a href="/contact">Contact Us.</a></p>
  </section>
</main>
