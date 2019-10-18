<script>
  import Heading from "./Heading.svelte";

  export let header;
  export let content;
  export let image;
  export let backgroundColor;
  export let fullWidth;

  const rotationSpan = 6;
  const rotation = Math.round(Math.random() * rotationSpan - rotationSpan / 2);
</script>

<style type="text/scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background-color);
    padding-top: 20px;
    padding-bottom: 50px;
    border-top: 10px solid #fff;
    min-height: 100vh;

    .content {
      font-size: 2rem;

      @media only screen and (max-width: 1000px) {
        font-size: 1.5rem;
      }
    }

    &.constrained > div {
      margin: 0 auto;
      max-width: 1280px;
      width: 60%;

      @media only screen and (max-width: 1000px) {
        width: 90%;
      }
    }

    img {
      max-width: 350px;
      margin-top: 50px;
    }
  }
</style>

<section
  style="--background-color: {backgroundColor}"
  class={fullWidth ? null : 'constrained'}>
  <Heading text={header} {rotation} />
  {#if content}
    <div class="content">
      {@html content}
    </div>
  {/if}
  <div>
    <slot />
  </div>
  {#if image}
    <img src={image.file.url} alt={image.title} />
  {/if}
</section>
