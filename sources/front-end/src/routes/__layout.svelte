<script>
  import '../app.css';
  import MainMenu from '$lib/components/MainMenu/MainMenu.svelte';
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    justify-content: flex-start;
    align-items: center;

    min-width: 100vw;
  }

  #main-menu-container {
    position: absolute;
    bottom: max(1vh, 1vw);
  }
</style>

<main>
  <slot />
</main>
<section id='main-menu-container'>
  <MainMenu />
</section>
