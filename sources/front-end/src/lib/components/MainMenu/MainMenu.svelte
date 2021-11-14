<script>
  import LRButton from './LRButton.svelte';

  const Arrows = Object.freeze({
    left: '❮',
    right: '❯',
  });

  let mainMenuCointainer;
  let mainMenuHeight;

  $: if (mainMenuHeight) {
    mainMenuCointainer.style.setProperty('--main-menu-container-height', `${mainMenuHeight}px`);
  }
</script>

<style>
  #main-menu-control {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr;
    grid-template-rows: 0.5fr 1fr 0.5fr;
    grid-template-areas:
      'L C R'
      'L C R'
      'L C R'
    ;
    gap: min(0.25vh, 0.25vw);

    background-color: hsl(0deg 0% 5% / 42%);
    width: max(10vw, 10vh);
    height: 8rem;
    border-radius: max(0.125vw, 0.125vh);
    position: relative;

    padding: max(0.25vw, 0.25vh);

    z-index: 1;
  }

  #main-menu-container {
    --main-menu-container-height: 0;

    background-color: hsl(283deg 72% 55%);
    width: 100%;
    height: 100%;
    position: absolute;

    filter: opacity(0.0);
    transition: all var(--transition-duration) var(--transition-timing-function) 0.0s;
  }

  #move-left,
  #move-right,
  #center {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    z-index: 2;
  }

  #move-left {
    grid-area: L;
  }

  #move-right {
    grid-area: R;
  }

  #center {
    grid-area: C;
    width: 100%;
    height: 100%;
    justify-self: center;
    align-self: center;

    cursor: pointer;

    background-color: hsl(205deg 63% 63% / 44%);
    transition: background-color 0.5s var(--transition-timing-function) 0s;
    border-radius: max(0.25vw, 0.25vh);
  }

  #center:hover {
    background-color: hsl(205deg 63% 63%);
    transition: background-color 0.75s var(--transition-timing-function) 0s;
  }

  #main-button-checkbox {
    display: none !important;
  }

  #main-button-checkbox:checked ~ #main-menu-container {
    filter: opacity(1.0);
    transform: translateY(calc(-1 * var(--main-menu-container-height)));
    transition: all var(--transition-duration) var(--transition-timing-function) 0.0s;
  }
</style>

<div id='main-menu-control'>
  <div id='move-left'>
    <LRButton>{Arrows.left}</LRButton>
  </div>
  <label id='center' for='main-button-checkbox'></label>
  <div id='move-right'>
    <LRButton>{Arrows.right}</LRButton>
  </div>
  <input id='main-button-checkbox' type='checkbox' />
  <div id='main-menu-container' bind:clientHeight={mainMenuHeight} bind:this={mainMenuCointainer}>
    main-menu-container
  </div>
</div>