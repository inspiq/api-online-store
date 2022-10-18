<script lang="ts" setup>
  import { useStore } from '@/stores/store'

  const store = useStore()
</script>

<template>
  <div class="quantity">
    <button type="button" class="quantity__btn-minus">
      <img src="../../assets/images/icons/minus.png" alt="Minus" width="18">
    </button>
    <button class="quantity__number">{{ 1 }}</button>
    <button type="button" class="quantity__btn-plus">
      <img src="../../assets/images/icons/plus.png" alt="Plus" width="18">
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/vars/vars.scss";

  .quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    &__btn-plus {
      background: none;
      outline: none;
      border: 0;
      cursor: pointer;
    }

    &__btn-minus {
      background: none;
      outline: none;
      border: 0;
      cursor: pointer;
    }

    &__number {
      background: none;
      width: 48px;
      height: 48px;
      border: 1px solid $grey;
      border-radius: 8px;
    }
  }
</style>