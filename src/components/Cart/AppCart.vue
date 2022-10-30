<script lang="ts" setup>
  import AppContainer from '../Container/AppContainer.vue'
  import CartItems from './CartItems.vue'
  import MyHr from '../UI/MyHr.vue'
  import MyButton from '../UI/MyButton.vue'
  import { useStore } from '@/stores/store'
  import { storeToRefs } from 'pinia'

  const store = useStore()

  const { cart, totalPrice } = storeToRefs(store)
</script>

<template>
  <div class="cart">
    <AppContainer>
      <div class="cart__content-list">
        <div class="cart__content">
          <h2 class="cart__title">Your shopping cart</h2>
          <p class="cart__empty" v-if="cart.length < 1">The basket is empty :(</p>
          <ul class="cart__products" v-else>
            <CartItems v-for="item in cart" :key="item.id" :item="item" />
          </ul>
        </div>
        <div class="cart__content">
          <p class="cart__order-title">Order summary</p>
          <div class="cart__price-info">
            <div class="cart__total-price">
              <p>Sub total</p>
              <p>{{ Math.round(totalPrice) }}$</p>
            </div>
            <div class="cart__delivery" v-if="totalPrice < 100">
              <p>Delivery paid</p>
              <p>10$</p>
            </div>
            <div class="cart__delivery" v-else>
              <p>Delivery free</p>
              <p>0$</p>
            </div>
            <MyHr />
            <p>{{ Math.round(totalPrice) }}$</p>
            <div class="cart__btn">
              <MyButton>
                Proceed to checkout
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/vars/vars.scss";

.cart {
  padding-top: 80px;

  & > .container {
    display: flex;
    flex-direction: column;
  }

  &__content-list {
    display: flex;
    flex-direction: row;
    gap: 64px;

    @media screen and (max-width: $small) {
      flex-direction: column;
    }
  }

  &__content {
    margin-top: 32px;
  }

  &__title {
    margin: 0px 0px 20px 0px;
  }

  &__products {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__price-info {
    width: 368px;

    @media screen and (max-width: $medium) {
      max-width: 368px;
      width: 100%;
    }
  }

  &__price-info > p {
    color: $black;
    font-size: $f-size-main;
    font-weight: $regular;
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
  }

  &__total-price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  &__total-price > p:nth-child(1) {
    color: $grey;
    font-size: $f-size-main;
    font-weight: $regular;
  }

  &__total-price > p:nth-child(2) {
    color: $black;
    font-size: $f-size-main;
    font-weight: $regular;
  }

  &__delivery {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__delivery > p:nth-child(1) {
    color: $grey;
    font-size: $f-size-main;
    font-weight: $regular;
  }

  &__delivery > p:nth-child(2) {
    color: $black;
  }

  &__order-title {
    color: $dark-grey;
    font-size: $f-size-title-product;
    font-weight: $regular;
    margin-bottom: 32px;
  }

  &__hr {
    margin-top: 32px;
    margin-bottom: 0px;
    outline: none;
    border: 0;
    border-bottom: 1px solid $grey-hr;
  }

  &__empty {
    color: $grey;
    font-size: $f-size-main;
    font-weight: $regular;
  }

  &__btn {
    margin-top: 64px;
  }
}
</style>
