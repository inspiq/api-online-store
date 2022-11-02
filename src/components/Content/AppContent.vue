<script lang="ts" setup>
  import AppContainer from '@/components/Container/AppContainer.vue'
  import AppProducts from '@/components/Products/AppProducts.vue';
  import SideBar from '@/components/Sidebar/AppSideBar.vue';
</script>

<template>
  <div class="content">
    <AppContainer>
      <SideBar></SideBar>
      <AppProducts></AppProducts>
    </AppContainer>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";

.content {
  padding-top: 80px;
  padding-bottom: 100px;
  min-height: calc(100vh - 129px);

  & > .container {
    padding: 0px 64px 0px 32px;
    display: flex;
    flex-direction: row;
    gap: 64px;

    @media screen and (max-width: $small) {
      flex-direction: column;
      padding: 0px 32px 0px 32px;
      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width: $small) and (max-width: $medium) {
      padding: 0px 32px 0px 32px;
    }
  }
}
</style>