<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'
  import { Product } from '@/types/interfaces'
  import { useStore } from '@/stores/store'
  import { storeToRefs } from 'pinia';

  type TProps = { product: Product }

  const store = useStore()
  const { currentProduct } = storeToRefs(store)

  const props = defineProps<TProps>();

  const emit = defineEmits(['open'])

  function openModal() {
    emit('open')
    currentProduct.value = props.product
  }
</script>

<template>
  <li class="products__item" @click="openModal()">
    <div class="products__img">
      <img :src=props.product.image alt="Товар" width="150">
    </div>
    <div class="products__info">
      <h3 class="products__title">{{ props.product.title }}</h3>
      <p class="products__price">{{ Math.round(props.product.price) }}$</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

.products {
  &__item {
    cursor: pointer;
  }

  &__img {
    display: flex;
    justify-content: center;
  }

  &__title {
    font-weight: $regular;
    font-size: $f-size-title-product;
    color: $black;
    margin-top: 24px;
  }

  &__price {
    font-weight: $regular;
    color: $grey;
    font-size: $f-size-price-product;
    margin-top: 8px;
  }

  &__info {
    @media screen and (max-width: $small) {
      text-align: center;
    }
  }
}
</style>