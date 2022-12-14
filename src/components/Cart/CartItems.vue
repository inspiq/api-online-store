<script lang="ts" setup>
  import { defineProps } from 'vue'
  import MyQuantity from '@/components/UI/MyQuantity.vue'
  import { useStore } from '@/stores/store'
  import { Cart } from '@/types/interfaces';
  import { storeToRefs } from 'pinia';

  type TProps = { item: Cart }

  const props = defineProps<TProps>();
  const store = useStore()
  const { deleteEvent } = store
  const { cart } = storeToRefs(store)

  function onIncrement(id: number) {
    const item = cart.value.find((item) => item.id === id)
    item.rating.count++
    window.localStorage.setItem('cart', JSON.stringify(cart.value));
  }

  function onDecrement(id: number) {
    const item = cart.value.find((item) => item.id === id)
    if (item.rating.count > 1) {
      item.rating.count--
      window.localStorage.setItem('cart', JSON.stringify(cart.value));
    }
  }
</script>

<template>
  <li class="cart__product">
    <div class="cart__product-info">
      <div class="cart__product-img">
        <img :src=props.item.image alt="Product" width="50">
      </div>
      <div class="cart__product-description">
        <h3>{{ props.item.title }}</h3>
        <p>{{ Math.round(props.item.price) }}$</p>
      </div>
    </div>
    <div class="cart__product-quantity">
      <MyQuantity 
        :id="props.item.id"
        :quantity="props.item.rating.count"
        @onDecrement="onIncrement"
        @onIncrement="onDecrement"
      />
      <div class="cart__product-delete">
        <button type="button" @click="deleteEvent(props.item.id)">Удалить</button>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

.cart {
  &__product {
    background: $grey-modal;
    max-width: 880px;
    width: 100%;
    padding: 24px 32px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width: $medium) {
      flex-direction: column;
      text-align: center;
      gap: 25px;
    }
  }

  &__product-info {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: $medium) {
      flex-direction: column;
    }
  }

  &__product-description {
    margin-left: 20px;

    @media screen and (max-width: $medium) {
      margin: 0;
    }
  }

  &__product-info h3 {
    color: $black;
    font-weight: $w-regular;
    font-size: $f-size-title-product;
    margin-bottom: 5px;

    @media screen and (max-width: $medium) {
      margin-top: 25px;
    }
  }

  &__product-info p {
    color: $grey;
    font-weight: $w-regular;
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
    font-weight: $w-regular;
    cursor: pointer;
    color: $red;
  }
}
</style>