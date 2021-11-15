<script>
  import '../app.css';
  import MainMenu from '$lib/components/MainMenu/MainMenu.svelte';
</script>

<style>
  article {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    justify-content: flex-start;
    align-items: center;

    min-width: 90vw;
  }

  #main-menu {
    position: fixed;
    bottom: max(1vh, 1vw);
  }
</style>

<article>
  <slot />
  <section id='main-menu'>
    <MainMenu />
  </section>
</article>