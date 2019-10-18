<script>
  import ctf from "./ctf.json";
</script>

<style>
  section {
    height: 100vh;
    background-color: #ee6e73;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section > img {
    max-width: 80%;
  }
  div {
    text-align: center;
    width: 80%;
    margin: 60px auto 0 auto;
  }
  a {
    text-decoration: none;
  }
  a > img {
    max-height: 50px;
    margin: 0 5px;
  }
</style>

<section>
  <img src="./logo.png" alt="Aptitud logo" />
  <div>
    {#each ctf.socialIcon as { name, icon, link }}
      <a href={link} target="_blank">
        <img src={icon.file.url} alt={name} />
      </a>
    {/each}
  </div>
</section>
