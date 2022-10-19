<script setup lang="ts">
  import AppHeader from '@/components/Header/AppHeader.vue';
  import AppContent from '@/components/Content/AppContent.vue';
  import AppSpinner from '@/components/Spinner/AppSpinner.vue';
  import AppFooter from '@/components/Footer/AppFooter.vue'

  import { useStore } from '@/stores/store'

  const store = useStore()
</script>

<template>
  <AppHeader />
  <AppContent />
  <AppSpinner v-if="store.isLoading" />
  <AppFooter />
</template>

<style lang="scss" scoped>
</style>
