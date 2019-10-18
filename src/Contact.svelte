<script>
  export let postalAddress;
  export let visitingAddress;
  export let image;
</script>

<style type="text/scss">
  .contact {
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1000px) {
      display: block;
    }

    img {
      max-width: 100%;
      margin-bottom: 50px;

      @media only screen and (min-width: 1000px) {
        margin-right: 3rem;
      }
    }

    > div {
      display: block;

      div {
        color: #000;
        padding: 40px;
        white-space: pre;
        margin: 0 auto 20px auto;
        background-color: #eee;
        font-size: 1.5rem;

        > :global(p) {
          margin: 0;
        }
      }
    }
  }
</style>

<div class="contact">
  <img src={image.file.url} alt={image.title} />
  <div>
    <div>
      {@html postalAddress}
    </div>
    <div>
      {@html visitingAddress}
    </div>
  </div>
</div>
