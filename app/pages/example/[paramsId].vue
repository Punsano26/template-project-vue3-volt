<template>
  <div>
    <h2 class="h4 mb-4">Example Detail - ID: {{ id }}</h2>
    
    <Filter @apply="applyFilter" @reset="resetFilter">
      <template #filters>
        <LabelField v-model="filterName" label="Name" placeholder="Filter by name" />
        <LabelSelectField
          v-model="filterStatus"
          :options="statusOptions"
          optionLabel="label"
          placeholder="Status"
          label="Status"
        />
      </template>
    </Filter>

    <div class="mt-4">
      <DataTable :data="users" :loading="loading" paginator :rows="10">
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="email" header="Email" />
        <Column field="status" header="Status" />
        <Column header="Actions">
          <template #body="{ data }">
            <ConfirmButton icon="pi pi-pencil" size="small" class="me-2" @click="edit(data)" />
            <CancelButton icon="pi pi-trash" size="small" @click="remove(data)" />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import CancelButton from '~/components/global/buttons/CancelButton.vue';
import ConfirmButton from '~/components/global/buttons/ConfirmButton.vue';
import Filter from '~/components/global/inputs/Filter.vue';
import LabelField from '~/components/global/inputs/LabelField.vue';
import LabelSelectField
  from '~/components/global/selecteds/LabelSelectField.vue';
import DataTable from '~/components/global/tables/DataTable.vue';

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