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
  }

  .active {
    color: red;
    background-color: yellow;
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