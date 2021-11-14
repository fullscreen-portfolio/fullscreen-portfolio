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

  #main-menu-container {
    position: fixed;
    bottom: 1vh;
  }
</style>

<article>
  <section id='main-menu-container'>
    <MainMenu />
  </section>
</article>