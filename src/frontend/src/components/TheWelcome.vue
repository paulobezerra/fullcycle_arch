<script setup lang="ts">

import { useHelloStore } from '@/stores/hello.ts'

const store = useHelloStore()

await store.fetchHello()

const message = store.message

</script>

<template>
  <Suspense>

    <h1>Message: {{ message }}</h1>

    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>
