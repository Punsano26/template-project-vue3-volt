<template>
  <DataTable
    :value="data"
    :paginator="paginator"
    :rows="rows"
    :rowsPerPageOptions="rowsPerPageOptions"
    :loading="loading"
    class="p-datatable-sm custom-datatable"
    v-bind="$attrs"
  >
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </DataTable>
</template>

<script setup lang="ts">
import { DataTable } from 'primevue';

defineProps<{
  data: any[]
  loading?: boolean
  paginator?: boolean
  rows?: number
  rowsPerPageOptions?: number[]
}>()
</script>

<style scoped>
/* Unique minimal styling – already in custom.scss */
</style>