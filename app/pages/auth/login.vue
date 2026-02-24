<template>
  <div class="min-h-screen flex justify-center items-center">
    <Card class="w-full max-w-sm flex flex-col gap-4">
      <template #content>
        <h2 class="text-xl font-semibold">login</h2>

        <LabelField v-model="form.email" :show-error="submitted" required :rules="[validate.required]" label="email" />
        <LabelField :rules="[validate.required]" :show-error="submitted" required label="password" />

        <formAction>
          <ConfirmButton class="w-full" label="login" @click="onSubmit" />
        </formAction>
      </template>
    </Card>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

import ConfirmButton from '~/components/global/buttons/ConfirmButton.vue';
import LabelField from '~/components/global/inputs/LabelField.vue';
import { validate } from '~/plugins/validate';

import Card from '@/volt/Card.vue';

const route = useRoute()

const form = ref<any>({
  email: route?.query?.email || '',
  password: ''
})

const submitted = ref(false);

const onSubmit = () => {
  submitted.value = true;
};

definePageMeta({
  layout: false
});
</script>

<style scoped>

</style>