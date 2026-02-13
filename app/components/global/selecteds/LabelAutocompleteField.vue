<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}<span v-if="required" class="text-danger ms-1">*</span>
    </label>
    <AutoComplete
      :id="id"
      v-model="model"
      :suggestions="filtered"
      @complete="search"
      :placeholder="placeholder"
      class="w-100 app-field-control"
      :class="{ 'p-invalid': error }"
      :aria-required="required || undefined"
    />
    <small v-if="error" class="p-error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string
  placeholder?: string
  error?: string
  id?: string
  required?: boolean
  searchMethod?: (query: string) => Promise<any[]>
}>()

const model = defineModel<any>()
const filtered = ref<any[]>([])

const search = async (event: { query: string }) => {
  if (props.searchMethod) {
    filtered.value = await props.searchMethod(event.query)
  } else {
    // fallback demo
    filtered.value = [{ name: 'Demo 1' }, { name: 'Demo 2' }]
  }
}
</script>