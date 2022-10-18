<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'
  import MyButton from '../UI/MyButton.vue'
  import MyQuantity from './MyQuantity.vue'
  import { useStore } from '@/stores/store'

  const store = useStore()

  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  function hideModal() {
    emit('close')
  }
</script>

<template>
  <div class="modal" v-if="props.show" @click="hideModal">
    <div @click.stop class="modal__body">
        <div>
          <h1 class="modal__title">{{ store.currentProduct.title }}</h1>
          <p class="modal__price">{{ Math.round(store.currentProduct.price) }}$</p>
        </div>
        <div class="modal__img">
          <img :src=store.currentProduct.image alt="Product" width="200">
        </div>
        <div class="modal__description">
          {{ store.currentProduct.description }}
        </div>
        <hr class="modal__hr" />
        <div class="modal__btns">
          <div class="modal__quantity">
            <my-quantity />
          </div>
          <my-button>
            Add to cart
          </my-button>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/vars/vars.scss";

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

    &__description {
      font-size: $f-size-main;
      font-weight: $regular;
      color: $grey;
    }

    &__quantity {
      display: flex;
      flex-direction: row;
    }

    &__btns {
      display: flex;
      flex-direction: row;
      gap: 32px;
    }

    &__img > img {
      @media screen and (max-width: $small) {
        width: 100px;
      }
    }
  }
</style>