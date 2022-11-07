<script lang="ts" setup>
  import { defineEmits } from 'vue'

  const emit = defineEmits(['close'])

  function hideModal() {
    emit('close')
  }

  function hideNotification() {
    emit('close')
  }
</script>

<template>
  <div class="modal" @click="hideModal(); hideNotification();">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    display: flex;
    flex-direction: row;
    padding: 30px;
  }
</style>