<script setup lang="ts">
  import AppContainer from '@/components/Container/AppContainer.vue';
</script>

<template>
  <footer class="footer">
    <AppContainer>
      <div class="footer__content">
        <div class="footer__contacts">
          <p>Don’t missout on once-in-a-while-deals:</p>
          <div class="footer__contacts-links">
            <a href="https://en.wikipedia.org/wiki/Twitter" class="footer__contacts-link">
              <img src="@/assets/images/icons/fi_twitter.png" alt="Twitter" width="16">
            </a>
            <a href="https://en.wikipedia.org/wiki/Instagram" class="footer__contacts-link">
              <img src="@/assets/images/icons/fi_instagram.png" alt="Instagram" width="16">
            </a>
            <a href="https://en.wikipedia.org/wiki/Facebook" class="footer__contacts-link">
              <img src="@/assets/images/icons/fi_facebook.png" alt="Facebook" width="16">
            </a>
          </div>
        </div>
        <div class="footer__support">
          <p>Support line: +250 788 467 808</p>
        </div>
        <div class="footer__copyright">Copyright  2021 © API Online Store</div>
      </div>
    </AppContainer>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/vars/vars.scss";
.footer {
  padding: 32px 0px 64px 0px;
  border-top: 1px solid $grey-border;

  @media screen and (max-width: $medium) {
    padding: 32px 0px 32px 0px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: $medium) {
      flex-direction: column;
      gap: 20px;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    @media screen and (max-width: $medium) {
      flex-direction: column;
    }

    @media screen and (min-width: $medium) and (max-width: $big) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__support > p {
    color: $grey;
    font-weight: $w-regular;
    font-size: $f-size-main;
  }

  &__contacts > p {
    color: $grey;
    font-weight: $w-regular;
    font-size: $f-size-main;
  }

  &__copyright {
    color: $grey;
    font-weight: $w-regular;
    font-size: $f-size-main;
  }

  &__contacts-link {
    width: 32px;
    height: 32px;
    background: $grey-modal;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__contacts-links {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
}
</style>
