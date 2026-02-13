<template>
  <div>
    <h2 class="h4 mb-4">Example Detail - ID: {{ id }}</h2>
    
    <AppFilter @apply="applyFilter" @reset="resetFilter">
      <template #filters>
        <AppLabelField v-model="filterName" label="Name" placeholder="Filter by name" />
        <AppSelect
          v-model="filterStatus"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status"
          label="Status"
        />
      </template>
    </AppFilter>

    <div class="mt-4">
      <AppDataTable :data="users" :loading="loading" paginator :rows="10">
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="email" header="Email" />
        <Column field="status" header="Status" />
        <Column header="Actions">
          <template #body="{ data }">
            <AppConfirmButton icon="pi pi-pencil" size="small" class="me-2" @click="edit(data)" />
            <AppCancelButton icon="pi pi-trash" size="small" @click="remove(data)" />
          </template>
        </Column>
      </AppDataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = computed(() => route.params.paramsId as string)

// Example data
const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' }
])
const loading = ref(false)

const filterName = ref('')
const filterStatus = ref(null)
const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Pending', value: 'Pending' }
]

const applyFilter = () => { /* call API */ }
const resetFilter = () => {
  filterName.value = ''
  filterStatus.value = null
}

const edit = (user: any) => console.log('Edit', user)
const remove = (user: any) => console.log('Delete', user)
</script>