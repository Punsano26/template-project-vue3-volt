<template>
  <div class="filter-component card border-0 shadow-sm p-3">
    <div class="d-flex flex-wrap gap-3 align-items-end">
      <slot name="filters" />
      <AppConfirmButton @click="emit('apply')" label="Apply" size="small" />
      <AppCancelButton @click="emit('reset')" label="Reset" size="small" />
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['apply', 'reset'])
</script>