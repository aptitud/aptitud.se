<script>
  import { onMount } from "svelte";
  import images from "./aptigram.json";

  export let name;
</script>

<style>
  h1 {
    color: red;
  }
</style>

<h1>Hello {name}!</h1>

{#each images as { url, caption, text }}
  <img src={url} alt={caption} />
{/each}
