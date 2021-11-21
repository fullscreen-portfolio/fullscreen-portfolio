<script>
  import {
    onMount,
    onDestroy,
  } from 'svelte';
  import Picture from './Picture.svelte';

  let images = [];
  let currentImageIndex;
  let rotationInterval;
  let rotationTimeout = 1000;
  let pictureInfo;

  const fetchGallery = async () => {
    try {
      return await (await fetch('/gallery', {})).json();
    } catch (fetchError) {
      console.error(fetchError);
    }

    return null;
  }

  const rotateImages = async () => {
    rotationInterval = setInterval(() => {
      currentImageIndex += 1;

      if (currentImageIndex > images.length - 1) {
        currentImageIndex = 0;
      }
    }, rotationTimeout);
  }

  $: if (images?.length > 0) {
    currentImageIndex = 0;

    rotateImages();
  }

  $: {
    pictureInfo = images[currentImageIndex];
  }

  onMount(async () => {
    images = await fetchGallery();
  });

  onDestroy(() => {
    if (rotationInterval) {
      clearInterval(rotationInterval);
    }
  });
</script>

<style>
  :root {
    --gallery-image-size: min(95vh, 95vw);
  }

  article {
    max-width: var(--gallery-image-size);
    max-height: var(--gallery-image-size);

    top: calc((100vh - var(--gallery-image-size)) / 2);
    left: calc((100vw - var(--gallery-image-size)) / 2);
    position: absolute;
  }
</style>

<article>
  <Picture {pictureInfo} />
</article>
