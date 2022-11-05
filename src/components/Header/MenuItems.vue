<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { useStore } from '@/stores/store'
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';

  const store = useStore()
  const { filteredProducts, products, isLoading } = storeToRefs(store)

  const router = useRouter()
  const catArr = ref<string[]>([])

  onMounted(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((res) => catArr.value = res.data)
      .catch(err => console.log(err))
  })

  const sortByCategory = (cat: string) => {
    router.push('/')
    setTimeout(() => {
      filteredProducts.value = products.value.filter((x) => x.category === cat)
      isLoading.value = false
    }, 300);
    isLoading.value = true
  }
</script>

<template>
  <li class="nav__item" v-for="cat in catArr" :key="cat">
    <button class="nav__link" @click="sortByCategory(cat)">
      {{ cat[0].toUpperCase() + cat.slice(1) }}
    </button>
  </li>
</template>

<style lang="scss" scoped>
.nav {
  @import "@/assets/vars/vars.scss";

  &__link {
    display: block;
    position: relative;
    padding: 4px 0px;
    font-size: $f-size-menu;
    font-weight: $regular;
    color: $black;
    background: none;
    outline: none;
    border: 0;
    cursor: pointer;
  }

  &__link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: $black;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  &__link:hover::after,
  &__link:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }
}
</style>