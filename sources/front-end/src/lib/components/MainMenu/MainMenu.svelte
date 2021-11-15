<script>
  import LRButton from './LRButton.svelte';
  import VoteControl from './VoteControl.svelte';
  import ChevronLeft from '$lib/icons/chevron-left.svelte';
  import ChevronRight from '$lib/icons/chevron-right.svelte';
  import MenuIcon from '$lib/icons/menu.svelte';

  let mainMenuCointainer;
  let mainMenuHeight;

  $: if (mainMenuHeight) {
    mainMenuCointainer.style.setProperty('--main-menu-container-height', `${mainMenuHeight}px`);
  }

  const handleVote = ({ detail: { payload } }) => {
    if (typeof payload !== 'undefined') {
      console.log('handleVote:', payload);
    } else {
      console.log('clear vote');
    }
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
    min-height: 8rem;
    border-radius: var(--border-radius);
    position: relative;

    padding: max(0.25vw, 0.25vh);

    z-index: 1;
  }

  #main-menu-container {
    --main-menu-container-height: 0;

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;

    width: 100%;
    height: 100%;

    cursor: pointer;

    /* color: hsl(213deg 72% 55% / 30%); */
    transition: background-color 0.75s var(--transition-timing-function) 0s;
    border-radius: var(--border-radius);
  }

  #center:hover {
    color: hsl(213deg 72% 55%);
    transition: background-color 0.75s var(--transition-timing-function) 0s;
  }

  #main-button-checkbox {
    display: none !important;
  }

  #main-button-checkbox:checked ~ #main-menu-container {
    filter: opacity(1.0);
    transform: translateY(calc(-1.125 * var(--main-menu-container-height)));
    transition: all var(--transition-duration) var(--transition-timing-function) 0.0s;
  }
</style>

<div id='main-menu-control'>
  <div id='move-left'>
    <LRButton>
      <ChevronLeft />
    </LRButton>
  </div>
  <label id='center' for='main-button-checkbox'>
    <MenuIcon />
  </label>
  <div id='move-right'>
    <LRButton>
      <ChevronRight />
    </LRButton>
  </div>
  <input id='main-button-checkbox' type='checkbox' />
  <div id='main-menu-container' bind:clientHeight={mainMenuHeight} bind:this={mainMenuCointainer}>   
    <VoteControl on:vote={handleVote} />
  </div>
</div>