import type { UseFetchOptions } from 'nuxt/app';

export const useApi = <T>(url: string, options: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig()
  
  return useFetch(url, {
    baseURL: config.public.apiBase,
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    }
  })
}