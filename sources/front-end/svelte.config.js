import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    format: 'esm',
    hydratable: true,
  },
  extensions: ['.svelte'],
  kit: {
    adapter: adapterNode({
      precompress: true,
    }),
    target: '#portfolio',
    hydrate: true,
    router: true,
    ssr: true,
  }
};

export default config;
