<script>
  import aptigram from "./aptigram.json";

  export let text;
  export let rotation;
</script>

<style type="text/scss">
  .container {
    text-align: center;
    max-width: 90%;
    margin: 0 auto;

    .image {
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
        padding: 10px;
        max-width: 200px;

        &:hover {
          transform: scale(1.25) !important;
          position: relative;
          z-index: 5;
        }

        span {
          display: block;

          &.date {
            font-size: 10px;
          }
        }

        img {
          max-width: 100%;
        }
      }
    }

    .instagram-link {
      margin-top: 40px;

      a {
        font-family: "Gloria Hallelujah", cursive;
        font-size: 1.5em;
        color: #fff;
      }
      img {
        vertical-align: bottom;
        margin-right: 6px;
      }
    }
  }
</style>

<div class="container">
  {#each aptigram as { url, caption, date, permalink }}
    <div class="image">
      <a href={permalink} title={caption} rel="noreferrer" target="_blank">
        <img alt={caption} src={url} />
        <span class="date">{date}</span>
        <span>{`${caption.substr(0,140)}${caption.length>140 ? '…' : ''}`}</span>
      </a>
    </div>
  {/each}

  <div class="instagram-link">
    <a href="https://www.instagram.com/aptitud_sthlm/" target="_blank" rel="noreferrer">
      <img src="//images.ctfassets.net/kqhdnxbobtly/hazXsF2LrUCOOW4CAkeao/034de8dd2e69d68710c1aa389aa52a0a/insta.png?fm=png&amp;fl=png8&amp;h=50" alt="Instagram">
      @aptitud_sthlm
    </a>
  </div>
</div>
