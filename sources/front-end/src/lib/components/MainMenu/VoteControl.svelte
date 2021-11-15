<script>
  import {
    createEventDispatcher,
  } from 'svelte';
  import ThumbsUp from '$lib/icons/thumbs-up.svelte';
  import ThumbsDown from '$lib/icons/thumbs-down.svelte';
  import ClearVote from '$lib/icons/x.svelte';

  const dispatch = createEventDispatcher();

  let voteResult;
  let voteUpButton;
  let voteDownButton;
  let hidden;

  $: {
    hidden = typeof voteResult === 'undefined';

    dispatch('vote', {
      payload: voteResult,
    });
  }

  const clearVote = () => {
    voteUpButton.checked = false;
    voteDownButton.checked = false;

    voteResult = undefined;

  }
</script>

<style>
  input[type='radio'] {
    display: none;
  }

  #vote-control {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'up clear down'
    ;
    gap: max(0.5vw, 0.5vh);
    width: 100%;
    min-height: 8rem;
    border-radius: var(--border-radius);

    background-color: hsl(213deg 72% 55%);
  }

  #vote-control > input[type='radio']:checked + label {
    color: yellow;
  }

  #vote-control > label,
  #clear {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  #up,
  #down,
  #clear {
    color: hsl(0deg 0% 100%);
    transition: background-color 0.5s var(--transition-timing-function) 0s;
  }

  #up {
    grid-area: up;
    transition: all var(--transition-duration) var(--transition-timing-function) 0s;
  }

  #down {
    grid-area: down;
    transition: all var(--transition-duration) var(--transition-timing-function) 0s;
  }

  #clear {
    grid-area: clear;
    transition: all var(--transition-duration) var(--transition-timing-function) 0s;
  }

  .hidden {
    display: none;
    filter: opacity(0.0);
    transition: all var(--transition-duration) var(--transition-timing-function) 0s;
  }
</style>

<div id='vote-control'>
  <input type='radio' id='vote-up' name='vote' value='vote-up' bind:this={voteUpButton} bind:group={voteResult} />
  <label id='up' for='vote-up'>
    <ThumbsUp />
  </label>
  <input type='radio' id='vote-down' name='vote' value='vote-down' bind:this={voteDownButton} bind:group={voteResult} />
  <label id='down' for='vote-down'>
    <ThumbsDown />
  </label>
  <div id='clear' on:click={clearVote} class:hidden>
    <ClearVote />
  </div>
</div>