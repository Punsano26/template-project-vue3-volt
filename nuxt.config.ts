import Lara from '@primevue/themes/lara';

export default defineNuxtConfig({
  modules: ['@primevue/nuxt-module'],

  primevue: {
    usePrimeVue: true,
    options: {
      unstyled: false,
      ripple: true,
      theme: {
        preset: Lara
      }
    },
    components: {
      include: ['DataTable', 'Column', 'InputText', 'Button', 'Dropdown', 'AutoComplete']
    }
  },

  css: [
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',

    // project css (ไว้ท้ายสุด)
    '~/assets/css/volt.scss',
    '~/assets/css/custom.scss'
  ],

  vite: {},
  ssr: false,
  typescript: { strict: true }
})