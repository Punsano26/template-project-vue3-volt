<template>
  <div class="search-bar position-relative">
    <i class="pi pi-search position-absolute" style="left: 1rem; top: 0.75rem; color: #A0AEC0;"></i>
    <InputText
      v-model="query"
      :placeholder="placeholder"
      class="form-control ps-5"
      @input="debouncedSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';

const props = defineProps<{
  placeholder?: string
}>()

const emit = defineEmits(['search'])
const query = ref('')

const debouncedSearch = useDebounceFn(() => {
  emit('search', query.value)
}, 400)
</script>