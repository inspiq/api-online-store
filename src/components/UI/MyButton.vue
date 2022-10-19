<script lang="ts" setup>
</script>

<template>
  <button type="button" class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

.btn {
  padding: 10px 24px;
  background: $red;
  outline: none;
  border: none;
  color: $white;
  font-weight: $bold;
  font-size: $f-size-main;
  cursor: pointer;
}
</style>