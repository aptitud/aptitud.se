<script>
  import Hero from './Hero.svelte'
  import Section from './Section.svelte'
  import Fellows from './Fellows.svelte'
  import Contact from './Contact.svelte'
  import Aptigram from './Aptigram.svelte'
  import ctf from './ctf.json'

  export let name

  const [enklare] = ctf.page.filter((p) => p.name === 'About')
  const [roligare] = ctf.page.filter((p) => p.name === 'Aday')
  const [gladare] = ctf.page.filter((p) => p.name === 'Fellows')
  const [kontakt] = ctf.contact
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: white;
  }
  :global(p) {
    font-weight: 100;
    word-break: break-word;
  }
  :global(a) {
    color: #1e859a;
    text-decoration: none;
  }
  :global(h3) {
    margin: 0;
    font-weight: 300;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
  }
</style>

<Hero />

<Section {...enklare} backgroundColor="#1e859a" />

<Section {...roligare} backgroundColor="#7a9752" />

<Section {...gladare} backgroundColor="#ef6031">
  <Fellows />
</Section>

<Section header="Aptigram" backgroundColor="#784e90" fullWidth>
  <Aptigram />
</Section>

<Section {...{ ...kontakt, image: null }} backgroundColor="#00A69A">
  <Contact {...kontakt} />
</Section>
