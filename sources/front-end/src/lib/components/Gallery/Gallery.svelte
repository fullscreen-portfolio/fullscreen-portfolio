<script>
  const fetchGallery = async () => {
    return await (await fetch('/gallery', {})).json();
  }
</script>

<style>
  :root {
    --gallery-image-size: min(95vh, 95vw);
  }

  article {
    max-width: var(--gallery-image-size);
    max-height: var(--gallery-image-size);

    top: calc((100vh - var(--gallery-image-size)) / 2);
    position: absolute;
  }

  img {
    aspect-ratio: 1 / 1;
    object-position: 50% 50%;
    object-fit: contain;

    max-width: var(--gallery-image-size);
    max-height: var(--gallery-image-size);
  }
</style>

<article>
  {#await fetchGallery()}
  {:then pictures}
    {#each pictures as pictureSource (pictureSource.id)}
      <picture id={pictureSource.id}>
        {#each pictureSource.sources as source}
          <source {...source}>
        {/each}
        <img {...pictureSource.img}>
      </picture>
    {/each}
  {:catch error}
    <p>{error.message}</p>
  {/await}
</article>
