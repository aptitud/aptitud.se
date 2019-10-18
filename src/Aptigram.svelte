<script>
  import aptigram from "./aptigram.json";
  import Heading from "./Heading.svelte";

  export let text;
  export let rotation;
</script>

<style type="text/scss">
  .container {
    text-align: center;
    max-width: 90%;
    margin: 0 auto;

    > div {
      display: inline-block;
      &:nth-child(even) a {
        transform: rotate(2deg);
      }
      &:nth-child(5n) a {
        transform: rotate(5deg);
      }
      @media only screen and (max-width: 992px) {
        width: 50%;
      }

      a {
        transition: transform 0.15s linear;
        box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.5);
        background-color: #fff;
        display: block;
        width: auto;
        font-family: "Gloria Hallelujah", cursive;
        text-decoration: none;
        text-align: left;
        color: #333;
        font-size: 1em;
        line-height: 1.4em;
        transform: rotate(-2deg);
        padding: 10px 10px 15px;
        max-width: 200px;

        &:hover {
          transform: scale(1.25) !important;
          position: relative;
          z-index: 5;
        }

        span {
          display: block;
          font-size: 10px;
          padding-bottom: 5px;
        }

        img {
          max-width: 200px;
        }
      }
    }
  }
</style>

<div class="container">
  {#each aptigram as { url, caption, location }}
    <div>
      <a href="http://www.instagram.com/aptitud_sthlm/" title={caption}>
        <img alt={caption} src={url} />
        {#if location}
          <span>{location}</span>
        {/if}
        <div>{caption}</div>
      </a>
    </div>
  {/each}
</div>
