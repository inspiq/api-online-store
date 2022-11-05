<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  type TProps = { isNotification: boolean }

  defineProps<TProps>();

  const emit = defineEmits(['close'])

  function hideNotification() {
    emit('close')
  }
</script>

<template>
  <div class="notification" v-if="isNotification" @click="hideNotification()">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

  .notification {
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