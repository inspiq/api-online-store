<script setup lang="ts">
  import AppProduct from './AppProduct.vue';
  import MyModal from '@/components/UI/MyModal.vue';
  import MyButton from '@/components/UI/MyButton.vue'
  import { ref, onMounted } from 'vue'
  import { useStore } from '@/stores/store'
  import { storeToRefs } from 'pinia';

  const store = useStore()
  const { filteredProducts, currentProduct } = storeToRefs(store)
  const { getProducts, addProduct } = store

  const isShow = ref(false);
  const isNotification = ref(false);
  const isOpenAccordion = ref(false)

  onMounted(() => {
    getProducts()
  })
</script>

<template>
  <div class="products">
    <h1 class="products__title">All products</h1>
    <ul class="products__list">
      <AppProduct 
        @open="isShow = true"
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
    <MyModal
      @close="isShow = false"
      v-if="isShow"
    >
      <div @click.stop class="modal__body">
        <button class="modal__close" @click="isShow = false">
          <img src="@/assets/images/icons/close.png" alt="Close" width="16">
        </button>
        <div class="modal__product-info">
          <p class="modal__category">{{ currentProduct.category[0].toUpperCase() + currentProduct.category.slice(1) }}</p>
          <h1 class="modal__title">{{ currentProduct.title }}</h1>
          <p class="modal__price">{{ Math.round(currentProduct.price) }}$</p>
        </div>
        <div class="modal__img">
          <img :src=currentProduct.image alt="Product" width="200">
        </div>
        <div class="modal__description">
          <div class="modal__header-description" @click="isOpenAccordion = !isOpenAccordion">
            <p>Description</p>
            <img src="@/assets/images/icons/arrow.png" alt="Arrow" width="10" height="6" :class="{ rotate: isOpenAccordion }">
          </div>
          <p v-if="isOpenAccordion">
            {{ currentProduct.description }}
          </p>
        </div>
        <hr class="modal__hr" />
        <div class="modal__btn">
          <MyButton @click="addProduct(currentProduct); isShow = false; isNotification = true;">
            Add to cart
          </MyButton>
        </div>
      </div>
    </MyModal>
    <MyModal
      @close="isNotification = false"
      v-if="isNotification"
    >
    <div @click.stop class="notification__body">
        <button class="notification__close" @click="isNotification = false">
          <img src="@/assets/images/icons/close.png" alt="Close" width="16">
        </button>
        <h3 class="notification__title">The product has been added to the cart!</h3>
        <div class="notification__product">
          <div class="notification__product-img">
            <img :src=currentProduct.image alt="Product" width="60">
          </div>
          <div class="notification__product-info">
            <h1 class="notification__product-title">
              {{ currentProduct.title }}
            </h1>
            <p class="notification__product-quantity">
              Quantity: {{ currentProduct.rating.count = 1 }}
            </p>
            <p class="notification__product-price">
              {{ Math.round(currentProduct.price) }}$
            </p>
          </div>
        </div>
        <hr class="notification__hr">
        <div class="notification__btns">
          <div>
            <MyButton @click="isNotification = false" class="notification__btn-continue">Continue shopping</MyButton>
          </div>
          <div>
            <RouterLink to="/cart">
              <MyButton class="notification__btn">Into the basket</MyButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </MyModal>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

.products {
  padding: 32px 0px 0px 0px;

  &__list {
    display: grid;
    grid-template-columns: repeat(3, minmax(158px, 310px));
    justify-content: center;
    column-gap: 24px;
    row-gap: 64px;
    align-items: center;

    @media screen and (max-width: $small) {
      grid-template-columns: repeat(1, minmax(158px, 310px));
    }

    @media screen and (min-width: $small) and (max-width: 1100px) {
      grid-template-columns: repeat(2, minmax(158px, 310px));
      column-gap: 48px;
    }
  }

  &__title {
    font-size: $f-size-title;
    font-weight: $w-bold;
    margin: $margin-main;

    @media screen and (max-width: $small) {
      text-align: center;
      margin: 0px 0px 50px 0px;
    }
  }
}

  .modal {
    &__body {
      margin: auto;
      background: $white;
      max-width: 700px;
      width: 100%;
      padding: 50px;
      position: relative;

      @media screen and (max-width: $medium) {
        padding: 30px;
      }
    }

    &__title {
      font-weight: $w-bold;
      font-size: $f-size-medium;
      color: $black;
      margin: 0px 0px 24px 0px;

      @media screen and (max-width: $medium) {
        font-size: $f-size-title;
      }
    }

    &__price {
      font-weight: $w-regular;
      font-size: $f-size-medium;
      color: $grey;
      font-size: $f-size-title-product;
    }

    &__img {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0px;
    }

    &__hr {
      margin: 32px 0px;
      outline: none;
      border: 0;
      border-bottom: 1px solid $grey-hr;
    }

    &__description > p {
      font-size: $f-size-main;
      font-weight: $w-regular;
      color: $grey;
      margin-top: 18px;
    }

    &__btn {
      display: flex;
      flex-direction: row;
      gap: 32px;
    }

    &__img > img {
      @media screen and (max-width: $small) {
        width: 100px;
      }
    }

    &__category {
      font-size: $f-size-main;
      font-weight: $w-regular;
      color: $grey;
      margin-bottom: 10px;
    }

    &__header-description {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }

    &__close {
      background: none;
      outline: none;
      border: 0;
      position: absolute;
      right: 25px;
      top: 25px;
      cursor: pointer;
    }
  }

  .rotate {
    transform: rotate(180deg);
  }

  .notification {
    &__body {
      margin: auto;
      background: $white;
      max-width: 600px;
      width: 100%;
      padding: 50px;
      position: relative;

      @media screen and (max-width: $medium) {
        padding: 30px;
      }
    }

    &__title {
      font-weight: $w-bold;
      font-size: $f-size-title;
      color: $black;
    }

    &__product {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 25px;
      margin: 32px 0px;
    }

    &__product-title {
      font-weight: $w-regular;
      font-size: $f-size-main;
      color: $black;
      margin: 0;
    }

    &__product-quantity {
      font-weight: $w-regular;
      font-size: $f-size-main;
      color: $black;
      margin: 5px 0;
    }

    &__hr {
      margin: 32px 0px;
      outline: none;
      border: 0;
      border-bottom: 1px solid $grey-hr;
    }

    &__product-price {
      font-weight: $w-bold;
      font-size: $f-size-main;
      color: $black;
    }

    &__btns {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
    }

    &__btn {
      background: $black;
      color: $white;
      transition: .3s;

      @media screen and (max-width: $small) {
        font-size: $f-size-btn-notification;
      }
    }

    &__btn:hover {
      background: $red;
      color: $white;
    }

    &__btn-continue {
      @media screen and (max-width: $small) {
        font-size: $f-size-btn-notification;
      }
    }
    
    &__close {
      background: none;
      outline: none;
      border: 0;
      position: absolute;
      right: 25px;
      top: 25px;
      cursor: pointer;
    }
  }
</style>