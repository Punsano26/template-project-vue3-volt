import Lara from '@primevue/themes/lara';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module'],
  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
      theme: {
        preset: Lara,
      },
    },
    components: {
      include: ['DataTable', 'Column', 'InputText', 'Button', 'Dropdown', 'AutoComplete']
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',       // Volt uses Bootstrap 5
    '~/assets/css/volt.scss',
    'primeicons/primeicons.css',
    '~/assets/css/custom.scss'
  ],
  vite: {},
  ssr: false,                    // easier for Volt dashboard (client-only)
  typescript: { strict: true }
})
