<script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style lang="scss">
  @import "assets/vars/vars.scss";

  * {
    font-family: $font-family-body;
  }

  a {
    text-decoration: none;
  }

  p, h1, h2, h3, h4 {
    margin: 0px;
  }

  button {
    padding: 0;
  }
  
  body {
    background: $white;
    position: relative;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
