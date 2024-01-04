<template>
  <div class="landing-header">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-6 landing-header_right-section">
          <p>شما لایق بهترین‌ها هستید.</p>
          <div class="landing-header_right-section_brand">
            <h1>ویتامول</h1>
            <p>
              بهترین برند محصولات مراقبت از پوست و مو در ایران بهترین برند
              محصولات مراقبت از پوست و مو در ایران بهترین برند محصولات مراقبت از
              پوست و مو در ایران بهترین برند محصولات مراقبت از پوست و مو در
              ایران
            </p>
            <NuxtImg
              src="images/vit-butterfly.png"
              format="webp"
              alt="ویتامول"
            />
          </div>
          <BaseButton :isSvgLeft="true" arrowSvgName="vit--arrow-left-top"
            >درباره ویتامول</BaseButton
          >
        </div>
        <div class="d-none d-lg-flex col-6 landing-header_left-section">
          <HeaderSlider class="landing-header_left-section_slider" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/global/BaseButton.vue";
import HeaderSlider from "./HeaderSlider.vue";

export default {
  name: "LandingHeader",
  components: {
    HeaderSlider,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.landing-header {
  padding-bottom: 93px;
  background: linear-gradient(
    to top,
    #ffdbe9 0%,
    rgba(255, 255, 255, 0) 21.09%
  );
}

.landing-header_right-section {
  color: var(--secondary-color);

  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 8px;

    @include breakpoint-up(md) {
      font-size: 18px;
    }

    @include breakpoint-up(lg) {
      font-size: 20px;
    }
  }

  .landing-header_right-section_brand {
    width: calc(100% - 20px);
    position: relative;
    margin-bottom: 20px;

    @include breakpoint-up(md) {
      width: 100%;
      max-width: 364px;
      margin-bottom: 20px;
    }

    @include breakpoint-up(lg) {
      width: 100%;
      max-width: 404px;
      margin-bottom: 36px;
    }

    h1 {
      font-family: PeydaWeb;
      font-size: 62px;
      font-weight: bold;
      writing-mode: horizontal-tb;
      letter-spacing: 1px;

      @include breakpoint-up(md) {
        font-size: 72px;
      }

      @include breakpoint-up(lg) {
        font-size: 92px;
      }
    }

    > p {
      text-align: right;
      color: var(--text-color);
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 0px;
      margin-top: 19px;

      @include breakpoint-up(md) {
        font-size: 18px;
        line-height: 26px;
        margin-top: 19px;
      }

      @include breakpoint-up(lg) {
        font-size: 20px;
        line-height: 26px;
        margin-top: 19px;
      }
    }

    img {
      width: 119px;
      height: 113px;
      position: absolute;
      top: -70px;
      left: -25px;
    }
  }
}

.landing-header_left-section {
  display: flex;
  flex-direction: row-reverse;
}
</style>
