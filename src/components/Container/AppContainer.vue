<script lang="ts" setup>
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";
  
  .container {
    max-width: $w-container;
    width: 100%;
    padding: $p-container;
    margin: 0px auto;

    @media screen and (max-width: $small) {
      padding: $p-small-container;
    } 

    @media screen and (min-width: $small) and (max-width: $medium) {
      padding: 0px 32px;
    }
  }
</style>