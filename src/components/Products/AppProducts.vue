<script setup lang="ts">
  import AppProduct from './AppProduct.vue';
  import MyModal from '@/components/UI/MyModal.vue';
  import { ref, onMounted } from 'vue'
  import { useStore } from '@/stores/store'
  import { storeToRefs } from 'pinia';

  const store = useStore()
  const { filteredProducts } = storeToRefs(store)
  const { getProducts } = store

  let show = ref(false);

  onMounted(() => {
    getProducts()
  })

</script>

<template>
  <div class="products">
    <h1 class="products__title">All products</h1>
    <ul class="products__list">
      <AppProduct 
        @open="show = true"
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </ul>
    <MyModal
      :show="show"
      @close="show = false"
    />
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
</style>