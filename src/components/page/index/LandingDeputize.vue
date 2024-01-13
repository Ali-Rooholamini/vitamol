<template>
  <div class="deputize">
    <div class="deputize_title">
      <p>برای اعطای نمایندگی ویتامول با ما در ارتباط باشید!</p>
    </div>
    <div class="deputize_button-wrapper">
      <NuxtImg
        width="422"
        height="61"
        src="/images/vitamol-brand-2.png"
        alt="ویتامول"
        loading="lazy"
      />

      <BaseButton :isSvgLeft="true" arrowSvgName="vit--arrow-left">
        <NuxtLink to="/delegate">اعطای نمایندگی</NuxtLink>
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/global/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.deputize {
  display: flex;
  flex-direction: column;

  .deputize_title {
    width: 100%;
    padding: 15px 20px;
    background: linear-gradient(
      270deg,
      #d2e2ff 2.27%,
      rgba(210, 226, 255, 0) 99.81%
    );
    box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);

    @include breakpoint-up(sm) {
      border-radius: 80px 0px 0px 0px;
    }

    @include breakpoint-up(md) {
      width: max-content;
      padding: 22px 55px;
    }

    @include breakpoint-up(lg) {
      padding: 32px 75px;
    }

    > p {
      color: var(--secondary-color);
      font-size: 16px;
      font-weight: 600;
      line-height: normal;
      margin: 0px;

      @include breakpoint-up(sm) {
        font-size: 22px;
      }

      @include breakpoint-up(lg) {
        font-size: 36px;
      }
    }
  }

  .deputize_button-wrapper {
    display: flex;
    align-self: flex-end;
    justify-content: center;
    gap: 10px;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 15px;
    width: 100%;
    padding: 15px 30px;
    background: linear-gradient(
      90deg,
      #ffdbe9 0.13%,
      rgba(255, 219, 233, 0) 98.05%
    );
    box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
    // border-radius: 0px 0px 80px 0px;

    @include breakpoint-up(sm) {
      justify-content: space-between;
      border-radius: 0px 0px 80px 0px;
      margin-top: 27px;
    }

    @include breakpoint-up(md) {
      padding: 25px 60px;
      width: max-content;
      gap: 60px;
    }

    > img {
      @include breakpoint-down(sm) {
        display: none;
      }

      @include breakpoint-down(md) {
        width: 222px !important;
        height: auto;
      }

      @include breakpoint-down(lg) {
        width: 322px;
        height: auto;
      }
    }
  }
}
</style>
