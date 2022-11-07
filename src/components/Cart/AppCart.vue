<script lang="ts" setup>
  import AppContainer from '@/components/Container/AppContainer.vue'
  import CartItems from './CartItems.vue'
  import MyHr from '@/components/UI/MyHr.vue'
  import MyButton from '@/components/UI/MyButton.vue'
  import { useStore } from '@/stores/store'
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router';

  const store = useStore()
  const { cart, getTotalPrice } = storeToRefs(store)

  const router = useRouter()

  function orderProcessing() {
    router.push('/')
    cart.value.splice(0, cart.value.length)

    window.localStorage.setItem('cart', JSON.stringify(cart.value));
  }
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
              <p>{{ getTotalPrice }}$</p>
            </div>
            <div class="cart__delivery">
              <template v-if="getTotalPrice < 100">
                <p>Delivery paid</p>
                <p>10$</p>
              </template>
              <template v-else>
                <p>Delivery free</p>
                <p>0$</p>
              </template>
            </div>
            <MyHr />
            <p>{{ getTotalPrice }}$</p>
            <div class="cart__btn">
              <MyButton
                @click="orderProcessing()"
              >
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
@import "@/assets/vars/vars.scss";

.cart {
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: calc(100vh - 129px);

  & > .container {
    display: flex;
    flex-direction: column;
  }

  &__content-list {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 70px;

    @media screen and (max-width: $small) {
      display: flex;
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
    font-weight: $w-regular;
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
    font-weight: $w-regular;
  }

  &__total-price > p:nth-child(2) {
    color: $black;
    font-size: $f-size-main;
    font-weight: $w-regular;
  }

  &__delivery {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__delivery > p:nth-child(1) {
    color: $grey;
    font-size: $f-size-main;
    font-weight: $w-regular;
  }

  &__delivery > p:nth-child(2) {
    color: $black;
  }

  &__order-title {
    color: $dark-grey;
    font-size: $f-size-title-product;
    font-weight: $w-regular;
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
    font-weight: $w-regular;
  }

  &__btn {
    margin-top: 64px;
  }
}
</style>
