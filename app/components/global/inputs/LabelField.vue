<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label fw-semibold">
      {{ label }}<span v-if="required" class="text-danger ms-1">*</span>
    </label>
    <InputText
      :id="id"
      v-model="model"
      :placeholder="placeholder"
      class="form-control app-field-control"
      :required="required"
      :class="{ 'is-invalid': error }"
    />
    <div v-if="error" class="invalid-feedback">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string
  placeholder?: string
  error?: string
  id?: string
  required?: boolean
}>()
const model = defineModel<string>()
</script>