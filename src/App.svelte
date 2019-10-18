<script>
  import Hero from "./Hero.svelte";
  import Section from "./Section.svelte";
  import Fellows from "./Fellows.svelte";
  import Aptigram from "./Aptigram.svelte";
  import images from "./aptigram.json";
  import ctf from "./ctf.json";

  export let name;

  const [enklare] = ctf.page.filter(p => p.name === "About");
  const [roligare] = ctf.page.filter(p => p.name === "Aday");
  const [gladare] = ctf.page.filter(p => p.name === "Fellows");
  const [aptigram] = ctf.page.filter(p => p.name === "Aptigram");
</script>

<style>
  :global(body) {
    margin: 0;
    font-family: "Roboto", sans-serif;
    color: white;
  }
  :global(p) {
    font-weight: 200;
    word-break: break-word;
  }
  :global(a) {
    color: #039be5;
    text-decoration: none;
  }
</style>

<Hero />
<Section {...enklare} backgroundColor="#1e859a" />
<Section {...roligare} backgroundColor="#7a9752" />
<Section {...gladare} backgroundColor="#f63">
  <Fellows />
</Section>
<Section header="Aptigram" backgroundColor="#784e90" fullWidth>
  <Aptigram />
</Section>
