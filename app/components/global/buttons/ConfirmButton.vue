<template>
  <Button
    :label="label"
    :icon="icon"
    :size="size"
    class="app-btn-confirm"
    @click="$emit('click')"
  />
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  icon?: string
  size?: 'small' | 'large'
}>()
defineEmits(['click'])
</script>