<template>
  <Layout />
</template>

<script setup lang="ts">
  import Layout from '@/layout/index.vue';
  import { geneYuhun } from '@/core/geneYuhun';

  console.log(geneYuhun({ suitId: 300020 }));
</script>

<style lang="scss" scoped></style>
