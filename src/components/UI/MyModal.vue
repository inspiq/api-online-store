<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  type TProps = { isShow: boolean }

  defineProps<TProps>();

  const emit = defineEmits(['close'])

  function hideModal() {
    emit('close')
  }
</script>

<template>
  <div class="modal" v-if="isShow" @click="hideModal()">
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
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    flex-direction: row;
    padding: 30px;
  }
</style>