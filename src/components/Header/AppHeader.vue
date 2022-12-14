<script lang="ts" setup>
  import { ref } from 'vue';
  import AppContainer from '@/components/Container/AppContainer.vue'
  import MenuItems from './MenuItems.vue';
  import { useStore } from '@/stores/store';
  import { storeToRefs } from 'pinia';

  const menuOpen = ref(false)

  const store = useStore()
  const { getQuantityProducts } = storeToRefs(store)
</script> 

<template>
  <header class="header">
    <AppContainer>
      <div class="header__logo">
        <RouterLink to="/">
          <span>API.</span>
        </RouterLink>
      </div>
      <nav class="nav">
        <ul class="nav__items">
          <MenuItems />
        </ul>
      </nav>
      <div class="header__icons">
        <RouterLink
          to="/cart"
        >
          <img src="@/assets/images/icons/fi_shopping-cart.png" alt="Shopping cart" width="24" height="24">
          <div class="header__cart-quantity">
            <span>{{ getQuantityProducts }}</span>
          </div>
        </RouterLink>
        <a href="">
          <img src="@/assets/images/icons/fi_heart.png" alt="Favorite" width="24" height="24">
        </a>
        <a href="">
          <img src="@/assets/images/icons/fi_user.png" alt="User" width="24" height="24">
        </a>
      </div>
    </AppContainer>
  </header>
  <header class="header-small">
    <AppContainer>
      <div class="header-small__logo">
        <a href="/">
          <img src="@/assets/images/logo/logo.png" alt="Logotype" width="32" height="30">
          <span>API.</span>
        </a>
      </div>
      <div class="header-small__burger" @click="menuOpen = true">
        <img src="@/assets/images/icons/menu.png" alt="Menu" width="40">
      </div>
      <div class="header-small__menu" :class="{ active: menuOpen }">
        <div class="header-small__title">
          <h3>MENU</h3>
        </div>
        <div class="header-small__btn-close">
          <button type="button" @click="menuOpen = false">
            <img src="@/assets/images/icons/close.png" alt="Close" width="24" height="24">
          </button>
        </div>
        <nav class="nav">
          <ul class="nav__items">
            <MenuItems />
          </ul>
        </nav>
        <div class="header-small__icons">
          <RouterLink
            to="/cart"
          >
            <img src="@/assets/images/icons/fi_shopping-cart.png" alt="Shopping cart" width="24" height="24">
            <div class="header-small__cart-quantity">
              <span>{{ getQuantityProducts }}</span>
            </div>
          </RouterLink>
          <RouterLink to="">
            <img src="@/assets/images/icons/fi_heart.png" alt="Favorite" width="24" height="24">
          </RouterLink>
          <RouterLink to="">
            <img src="@/assets/images/icons/fi_user.png" alt="User" width="24" height="24">
          </RouterLink>
        </div>
      </div>
    </AppContainer>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

.header {
  position: fixed;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background: $white;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2000;

  @media screen and (max-width: 900px) {
    display: none;
  }

  & > .container  {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo > a {
    gap: 8px;
    display: flex;
    align-items: center;
  }

  &__logo > a > span {
    font-size: $f-size-medium;
    color: $black;
    font-weight: $w-bold;
  }

  &__icons {
    gap: 32px;
    display: flex;
    flex-direction: row;
    position: relative;
  }

  &__cart-quantity {
    background: $lighten-grey;
    width: 22px;
    height: 22px;
    border: 0px;
    border-radius: 100%;
    font-size: $f-size-quantity;
    color: $black;
    font-weight: $w-medium;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -5px;
    left: 15px;
  }
}

.nav {
  &__items {
    display: flex;
    flex-direction: row;
    gap: 32px;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
  }
}

.header-small {
  @media screen and (max-width: 900px) {
    display: flex;
  }

  display: none;
  position: fixed;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background: $white;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2000;
  
  &__menu {
    position: absolute;
    top: -1000px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: $white;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: none;
  }

  &__btn-close {
    position: absolute;
    top: 32px;
    right: 32px;
  }

  &__title {
    position: absolute;
    top: 32px;
    left: 32px;
  }

  &__title > h3 {
    font-size: $f-size-title;
    color: $black;
    font-weight: $w-bold;
  }

  &__btn-close > button {
    background: none;
    outline: none;
    border: none;
  }

  & > .container  {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo > a {
    gap: 8px;
    display: flex;
    align-items: center;
  }

  &__logo > a > span {
    font-size: $f-size-medium;
    color: $black;
    font-weight: $w-bold;
  }

  &__icons {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 50px;
    position: relative;
  }

  &__cart-quantity {
    background: $lighten-grey;
    width: 22px;
    height: 22px;
    border: 0px;
    border-radius: 50px;
    font-size: $f-size-quantity;
    color: $black;
    font-weight: $w-medium;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: -5px;
    left: 15px;
  }
}

.active {
  display: flex;
  top: 0;
}
</style>
