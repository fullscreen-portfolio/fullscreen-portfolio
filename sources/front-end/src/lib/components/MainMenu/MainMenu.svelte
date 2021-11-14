<script>
  import LRButton from './LRButton.svelte';
  import MainButton from './MainButton.svelte';
</script>

<style>
  #main-menu-control {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas:
      '. . .'
      'L C R'
      '. . .'
    ;
    gap: min(0.25vh, 0.25vw);

    background-color: hsl(0deg 0% 5% / 42%);
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    position: relative;

    padding: max(0.125vw, 0.125vh);

    z-index: 1;
  }

  #move-left,
  #move-right,
  #center {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #move-left {
    grid-area: L;
    align-items: flex-start;
  }

  #move-right {
    grid-area: R;
    align-items: flex-end;
  }

  #center {
    grid-area: C;
    align-items: center;
  }
</style>

<div id='main-menu-control'>
  <div id='move-left'>
    <LRButton />
  </div>
  <div id='center'>
    <MainButton />
  </div>
  <div id='move-right'>
    <LRButton />
  </div>
</div>