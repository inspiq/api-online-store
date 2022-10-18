<script lang="ts" setup>
  import { ref } from 'vue';
  import AppContainer from '../Container/AppContainer.vue'
  import MenuItems from './MenuItems.vue';

  const menuOpen = ref(false)
</script> 

<template>
  <div class="header">
    <app-container>
      <div class="header__logo">
        <a href="/">
          <p>API.</p>
        </a>
      </div>
      <nav class="nav">
        <ul class="nav__items">
          <menu-items />
        </ul>
      </nav>
      <div class="header__icons">
        <router-link
          to="/cart"
        >
          <img src="../../assets/images/icons/fi_shopping-cart.png" alt="Shopping cart" width="24" height="24">
        </router-link>
        <a href="">
          <img src="../../assets/images/icons/fi_heart.png" alt="Favorite" width="24" height="24">
        </a>
        <a href="">
          <img src="../../assets/images/icons/fi_user.png" alt="User" width="24" height="24">
        </a>
      </div>
    </app-container>
  </div>
  <div class="header-small">
    <app-container>
      <div class="header-small__logo">
        <a href="">
          <img src="../../assets/images/logo/logo.png" alt="Logotype" width="32" height="30">
          <p>SC.</p>
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
            <img src="../../assets/images/icons/close.png" alt="Close" width="24" height="24">
          </button>
        </div>
        <nav class="nav">
          <ul class="nav__items">
            <menu-items />
          </ul>
        </nav>
        <div class="header-small__icons">
          <router-link
            to="/cart"
          >
            <img src="../../assets/images/icons/fi_shopping-cart.png" alt="Shopping cart" width="24" height="24">
          </router-link>
          <a href="">
            <img src="../../assets/images/icons/fi_heart.png" alt="Favorite" width="24" height="24">
          </a>
          <a href="">
            <img src="../../assets/images/icons/fi_user.png" alt="User" width="24" height="24">
          </a>
        </div>
      </div>
    </app-container>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/vars/vars.scss";

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

  &__logo > a > p {
    font-size: $f-size-medium;
    color: $black;
    font-weight: $bold;
  }

  &__icons {
    gap: 32px;
    display: flex;
    flex-direction: row;
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
    font-weight: $bold;
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

  &__logo > a > p {
    font-size: $f-size-medium;
    color: $black;
    font-weight: $bold;
  }

  &__icons {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 50px;
  }
}

.active {
  display: flex;
  top: 0;
}
</style>
