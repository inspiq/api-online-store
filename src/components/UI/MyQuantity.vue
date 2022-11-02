<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'

  type TProps = {
    id: number;
    quantity: number;
  }

  defineEmits(["onIncrement", "onDecrement"])

  defineProps<TProps>();
</script>

<template>
  <div class="quantity">
    <button type="button" class="quantity__btn-minus" @click="$emit('onIncrement', id)">
      <img src="@/assets/images/icons/minus.png" alt="Minus" width="18">
    </button>
    <button class="quantity__number" type="button">{{ quantity }}</button>
    <button type="button" class="quantity__btn-plus" @click="$emit('onDecrement', id)">
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