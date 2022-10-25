<script lang="ts" setup>
  import { useStore } from '@/stores/store'
  import { Cart } from '@/types/interfaces';
  import { storeToRefs } from 'pinia';
  import { defineProps } from 'vue'

  const store = useStore()
  const { qty } = storeToRefs(store)
  const { increment, decrement } = store

  type TProps = { item: Cart }

  const props = defineProps<TProps>();

</script>

<template>
  <div class="quantity">
    <button type="button" class="quantity__btn-minus" @click="decrement(props.item)">
      <img src="@/assets/images/icons/minus.png" alt="Minus" width="18">
    </button>
    <input class="quantity__number" type="text" v-model="qty">
    <button type="button" class="quantity__btn-plus" @click="increment(props.item)">
      <img src="@/assets/images/icons/plus.png" alt="Plus" width="18">
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

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
      width: 48px;
      height: 48px;
      border: 1px solid $grey;
      border-radius: 8px;
      outline: none;
      text-align: center;
      background: none;
    }
  }
</style>