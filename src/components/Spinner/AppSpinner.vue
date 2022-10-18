<script lang="ts" setup>
</script>

<template>
  <div class="spinner">
    <div class="spinner__img">
      <img src="@/assets/images/icons/spinner.png" alt="Spinner" width="120" height="120">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/vars/vars.scss";

.spinner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $grey-spinner-bg;
  z-index: 10001;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  &__img {
    animation: animate .8s steps(100, end) infinite;
  }
}

@keyframes animate {
	to {
		transform: rotate(360deg);
	}
}
</style>