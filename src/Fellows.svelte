<script>
  import ctf from "./ctf.json";
  const fellows = ctf.fellow;

  const email = name =>
    name
      .toLowerCase()
      .replace(" ", ".")
      .replace("å", "a")
      .replace("ä", "a")
      .replace("ö", "o")
      .replace("ü", "u");
</script>

<style type="text/scss">
  section {
    column-count: 1;

    @media only screen and (min-width: 601px) {
      column-count: 2;
    }

    @media only screen and (min-width: 1200px) {
      column-count: 3;
      max-width: 1200px;
      margin: 0 auto;
    }

    div {
      background-color: #fff;
      break-inside: avoid;
      color: #000;

      > img {
        width: 100%;
        margin-bottom: 10px;
      }

      > h3 {
        padding: 0 10px;
      }

      p {
        padding: 0 10px;
      }

      ul {
        background-color: #eee;
        padding: 0 10px 10px 10px;

        li {
          display: inline-block;
          margin-top: 10px;

          i {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
</style>

<section>
  {#each fellows as { name, description, image, services }}
    <div>
      <img src="{image.file.url}?fm=jpg&fl=progressive&w=300&q=80" alt={name} />
      <h3>{name}</h3>
      <p>
        {@html description}
      </p>
      <ul>
        <li>
          <a href="mailto:{email(name)}@aptitud.se">
            <i class="fa fa-fw fa-envelope" />
          </a>
        </li>
        {#if services}
          {#each services as { name, url }}
            <li>
              <a href={url} target="_blank" aria-label={name}>
                <i class="fa fa-fw fa-{name === 'blog' ? 'globe' : name}" />
              </a>
            </li>
          {/each}
        {/if}
      </ul>
    </div>
  {/each}
</section>
