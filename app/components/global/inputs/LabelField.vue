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
    <p
      v-if="errorMessage"
      class="mt-1 text-xs text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label?: string
  placeholder?: string
  error?: string
  id?: string
  required?: boolean
  rules?: ((v: any) => boolean | string)[]
  showError?: boolean
}>()

const errorMessage = computed((): string => {
  if (!props.showError) return ''
  if (!props.rules?.length) return ''

  for (const rule of props.rules) {
    const result = rule(model.value)
    if (result !== true) return result as string
  }

  return ''
})
const model = defineModel<string>()
</script>