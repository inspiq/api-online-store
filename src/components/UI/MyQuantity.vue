<script lang="ts" setup>
</script>

<template>
  <div class="quantity">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

  .quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
</style>