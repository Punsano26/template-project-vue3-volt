import Lara from '@primevue/themes/lara';
import tailwindcss from '@tailwindcss/vite';

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
    '~/assets/css/tailwind.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css',

    // project css (ไว้ท้ายสุด)
    '~/assets/css/volt.scss',
    '~/assets/css/custom.scss'
  ],

  vite: {
    plugins: [
      tailwindcss() as any,
    ],
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'global-builtin',
            'color-functions',
            'if-function',
          ],
        },
      },
    },
  },
  ssr: false,
  typescript: { strict: true }
})