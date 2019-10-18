<script>
  import Hero from "./Hero.svelte";
  import images from "./aptigram.json";

  export let name;
</script>

<style>
  :global(body) {
    margin: 0;
  }
</style>

<Hero />
<h1>Heldsfuv lo {name}!</h1>
