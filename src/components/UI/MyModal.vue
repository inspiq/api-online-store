<script lang="ts" setup>
  import { defineProps, defineEmits, ref } from 'vue'
  import MyButton from '../UI/MyButton.vue'
  import { useStore } from '@/stores/store'
  import { storeToRefs } from 'pinia';

  type TProps = { show: boolean }

  const store = useStore()
  const { currentProduct } = storeToRefs(store)
  const { addProduct } = store

  const isOpenAccordion = ref(false)

  const props = defineProps<TProps>();

  const emit = defineEmits(['close'])

  function hideModal() {
    emit('close')
  }
</script>

<template>
  <div class="modal" v-if="props.show" @click="hideModal()">
    <div @click.stop class="modal__body">
        <button class="modal__close" @click="hideModal()">
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
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    flex-direction: row;
    padding: 30px;

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