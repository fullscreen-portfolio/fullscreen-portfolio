<script>
  import HomeIcon from '$lib/icons/home.svelte';
  import ServicesIcon from '$lib/icons/aperture.svelte';
  import MailIcon from '$lib/icons/mail.svelte';
import { page } from '../../../../.svelte-kit/dev/runtime/app/stores';
</script>

<style>
  #menu-container {
    display: flex;

    min-height: 8rem;
    background-color: hsl(39deg 72% 55%);

    border-radius: var(--border-radius);

    flex: 1 0 auto;
    width: 100%;
    height: 100%;
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

    justify-content: space-evenly;
    align-items: center;

    border: none;
    background-color: transparent;
    color: hsl(0deg 0% 100%);

    cursor: pointer;

    border-radius: var(--border-radius);

    filter: blur(1px) opacity(0.8);
    border-bottom: 6px solid transparent;
    transition: all calc(4 * var(--transition-duration)) var(--transition-timing-function) 0s;
  }

  /* .active {
    filter: blur(0);
  } */

  .menu-item.active,
  .menu-item:not(.active):hover {
    filter: blur(0px) opacity(1.0);
    border-bottom-color: hsl(0deg 0% 100%);
    transition: all calc(4 * var(--transition-duration)) var(--transition-timing-function) 0s;
  }
</style>

<div id='menu-container'>
  <a sveltekit:prefetch href='/' rel='noreferrer' class='menu-item' class:active={$page.path === '/'}>
    <HomeIcon />
  </a>
  <a sveltekit:prefetch href='/services' rel='noreferrer' class='menu-item' class:active={$page.path === '/services'}>
    <ServicesIcon />
  </a>
  <a sveltekit:prefetch href='/contact-us' rel='noreferrer' class='menu-item' class:active={$page.path === '/contact-us'}>
    <MailIcon />
  </a>
</div>