<script>
  export let pictureInfo;
</script>

<style>
  picture {
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

{#if pictureInfo}
  <picture id={pictureInfo.id}>
    {#each pictureInfo.sources as source}
      <source {...source}>
    {/each}
    <img {...pictureInfo.img}>
  </picture>
{/if}