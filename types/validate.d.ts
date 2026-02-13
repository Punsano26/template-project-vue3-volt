import type { ValidatePlugin } from '../app/plugins/validate';

declare module '#app' {
  interface NuxtApp {
    $validate: ValidatePlugin
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $validate: ValidatePlugin
  }
}
