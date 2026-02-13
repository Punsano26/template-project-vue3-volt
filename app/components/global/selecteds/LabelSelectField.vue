<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}<span v-if="required" class="text-danger ms-1">*</span>
    </label>
    <Dropdown
      :id="id"
      v-model="model"
      :options="options"
      :optionLabel="optionLabel"
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
  options: any[]
  optionLabel?: string
  placeholder?: string
  error?: string
  id?: string
  required?: boolean
}>()
const model = defineModel<any>()
</script>