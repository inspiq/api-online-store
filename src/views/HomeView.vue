<script setup lang="ts">
  import AppHeader from '@/components/Header/AppHeader.vue';
  import AppContent from '@/components/Content/AppContent.vue';
  import AppSpinner from '@/components/Spinner/AppSpinner.vue';
  import AppFooter from '@/components/Footer/AppFooter.vue'

  import { useStore } from '@/stores/store'

  const store = useStore()
</script>

<template>
  <app-header />
  <app-content />
  <app-spinner v-if="store.isLoading" />
  <app-footer />
</template>

<style lang="scss" scoped>
</style>
