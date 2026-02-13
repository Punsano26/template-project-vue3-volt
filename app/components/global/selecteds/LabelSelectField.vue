<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <Dropdown
      :id="id"
      v-model="model"
      :options="options"
      :optionLabel="optionLabel"
      :placeholder="placeholder"
      class="w-100"
      :class="{ 'p-invalid': error }"
    />
    <small v-if="error" class="p-error">{{ error }}</small>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string
  options: any[]
  optionLabel?: string
  placeholder?: string
  error?: string
  id?: string
}>()
const model = defineModel<any>()
</script>