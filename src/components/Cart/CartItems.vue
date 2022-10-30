<script lang="ts" setup>
  import { defineProps } from 'vue'
  import MyQuantity from '../UI/MyQuantity.vue'
  import { useStore } from '@/stores/store'
  import { Cart } from '@/types/interfaces';

  type TProps = { item: Cart }

  const store = useStore()
  const props = defineProps<TProps>();
  const { deleteEvent } = store
</script>

<template>
  <li class="cart__product">
    <div class="cart__product-img">
      <img :src=props.item.image alt="Product" width="50">
    </div>
    <div class="cart__product-info">
      <h3>{{ props.item.title }}</h3>
      <p>{{ Math.round(props.item.price) }}$</p>
    </div>
    <div class="cart__product-quantity">
      <MyQuantity :item="item" />
      <div class="cart__product-delete">
        <button type="button" @click="deleteEvent(props.item)">Удалить</button>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "../../assets/vars/vars.scss";

.cart {
  &__product {
    background: $grey-modal;
    max-width: 880px;
    width: 100%;
    padding: 24px 32px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media screen and (max-width: $medium) {
      flex-direction: column;
      text-align: center;
      gap: 25px;
    }
  }

  &__product-info {
    margin-left: 20px;

    @media screen and (max-width: $medium) {
      margin: 0;
    }
  }

  &__product-info h3 {
    color: $black;
    font-weight: $regular;
    font-size: $f-size-title-product;
    margin-bottom: 5px;
  }

  &__product-info p {
    color: $grey;
    font-weight: $regular;
    font-size: $f-size-price-product;
  }

  &__product-img {
    width: 90px;
    height: 90px;
    background: $white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__product-quantity {
    margin: 0 0 0 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media screen and (max-width: $medium) {
      margin: 0;
    }
  }

  &__product-delete > button {
    background: none;
    outline: none;
    border: none;
    color: $grey;
    font-size: $f-size-delete;
    font-weight: $regular;
    cursor: pointer;
    color: $red;
  }
}
</style>