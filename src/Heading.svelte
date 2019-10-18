<script>
  export let text;
  export let rotation;
</script>

<style type="text/scss">
  @font-face {
    font-family: "Jenthill";
    src: url(./Jenthill.ttf.woff);
  }
  h2 {
    font-family: Jenthill;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
    text-transform: capitalize;
    font-size: 5em;
    font-weight: 400;
    text-shadow: 0 7px 0 rgba(0, 0, 0, 0.15);
    transform: rotate(var(--rotation));

    @media (max-width: 992px) {
      font-size: 4rem;
      margin-bottom: 10px;
      max-width: 90%;
    }
  }
</style>

<h2 style="--rotation: {rotation}deg">{text}</h2>
