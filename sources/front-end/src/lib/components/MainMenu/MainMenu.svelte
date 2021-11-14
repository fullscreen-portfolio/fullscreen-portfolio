<script>
  import LRButton from './LRButton.svelte';
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

    background-color: hsl(0deg 0% 5% / 42%);
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    position: relative;
  }

  #move-left,
  #move-right {
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
    background-color: red;
    width: 90%;
    height: 90%;
    justify-self: center;
    align-self: center;

    border-radius: 50%;
  }
</style>

<div id='main-menu-control'>
  <div id='move-left'>
    <LRButton />
  </div>
  <div id='center'>&nbsp;</div>
  <div id='move-right'>
    <LRButton />
  </div>
</div>