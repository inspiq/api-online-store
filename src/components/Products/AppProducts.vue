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

  onMounted(() => {
    getProducts()
  })

  const isOpenAccordion = ref(false)
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
      :isShow="isShow"
      @close="isShow = false"
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
          <MyButton @click="addProduct(currentProduct)">
            Add to cart
          </MyButton>
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
    font-weight: $bold;
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
      font-weight: $bold;
      font-size: $f-size-medium;
      color: $black;
      margin: 0px 0px 24px 0px;

      @media screen and (max-width: $medium) {
        font-size: $f-size-title;
      }
    }

    &__price {
      font-weight: $regular;
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
      font-weight: $regular;
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
      font-weight: $regular;
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
</style>