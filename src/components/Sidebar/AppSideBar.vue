<script lang="ts" setup>
  import { reactive } from 'vue';
  import Slider from '@vueform/slider'
  import MyHr from '@/components/UI/MyHr.vue'
  import { useStore } from '@/stores/store'
  import { storeToRefs } from 'pinia';
  
  import '@vueform/slider/themes/default.css'

  const store = useStore()
  const { filteredProducts, products } = storeToRefs(store)

  const rangePrice = reactive({ 
    value: [8, 1000],
    format: {
      suffix: '$',
      decimals: 0
    },
    min: 8,
    max: 1000
  })

  const rangeRate = reactive({ 
    value: [1, 5],
    format: {
      suffix: '⭐'
    },
    min: 1,
    max: 5
  })

  const handleSort = () => filteredProducts.value = products.value.filter((item) => {
    const isAllowPrice = item.price >= rangePrice.value[0] && item.price <= rangePrice.value[1]
    const isAllowRate = item.rating.rate >= rangeRate.value[0] && item.rating.rate <= rangeRate.value[1]
    return isAllowRate && isAllowPrice
  })
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__filter">
      <p class="sidebar__title">Price range</p>
      <div class="sidebar__range-slider">
        <Slider 
          v-model="rangePrice.value" 
          :format="rangePrice.format" 
          :max="rangePrice.max" 
          :min="rangePrice.min" 
          class="slider-custom" 
          @update="handleSort()"
        />
      </div>
    </div>
    <MyHr />
    <div class="sidebar__filter">
      <p class="sidebar__title">Rating range</p>
      <div class="sidebar__range-slider">
        <Slider 
          v-model="rangeRate.value" 
          :max="rangeRate.max" 
          :min="rangeRate.min" 
          class="slider-custom"
          @update="handleSort()"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

.sidebar {
  max-width: 320px;
  width: 100%;
  z-index: 100;

  &__title {
    margin: 32px 0px 16px 0px;
    font-size: $f-size-main;
    font-weight: $regular;
    color: $black;
  }

  &__filter {
    padding: 0 35px;
  }

  &__range-slider {
    margin-top: 23px;
    margin-bottom: 64px;
  }
}

.slider-custom {
  --slider-handle-bg: #000;
  --slider-handle-width: 12px;
  --slider-handle-height: 12px;
  --slider-handle-shadow: none;
  --slider-handle-shadow-active: none;
  --slider-handle-shadow: none;
  --slider-handle-shadow-active: none;

  --slider-tooltip-color: #000;
  --slider-tooltip-bg: none;
  --slider-tooltip-distance: -40px;
  --slider-tooltip-py: 0px;
  --slider-tooltip-px: 0px;
  --slider-tooltip-arrow-size: 0px;
  --slider-tooltip-font-weight: 400;
  --slider-tooltip-font-size: 12px;
  --slider-tooltip-bg-disabled: none;
  --slider-tooltip-line-height: 22px;

  --slider-connect-bg: #000;
  --slider-connect-bg-disabled: none;
  --slider-bg: rgba(0, 0, 0, 0.15);
  --slider-height: 2px;
}
</style>