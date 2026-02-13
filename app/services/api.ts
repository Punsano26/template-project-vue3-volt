import { useApi } from '~/composables/useApi';

export const userService = {
  getUsers: () => useApi('/users'),
  getUserById: (id: string) => useApi(`/users/${id}`),
  createUser: (data: any) => useApi('/users', { method: 'POST', body: data }),
  updateUser: (id: string, data: any) => useApi(`/users/${id}`, { method: 'PUT', body: data }),
  deleteUser: (id: string) => useApi(`/users/${id}`, { method: 'DELETE' })
}