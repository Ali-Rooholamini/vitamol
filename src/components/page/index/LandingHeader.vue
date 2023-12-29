<template>
  <div class="landing-header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 landing-header_right-section">
          <p>شما لایق بهترین‌ها هستید.</p>
          <div class="landing-header_right-section_brand">
            <h1>ویتامول</h1>
            <p>
              بهترین برند محصولات مراقبت از پوست و مو در ایران بهترین برند
              محصولات مراقبت از پوست و مو در ایران بهترین برند محصولات مراقبت از
              پوست و مو در ایران بهترین برند محصولات مراقبت از پوست و مو در
              ایران
            </p>
            <img src="/images/vit-butterfly.png" alt="ویتامول" />
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
    font-size: 20px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 8px;
  }

  .landing-header_right-section_brand {
    width: 100%;
    max-width: 404px;
    position: relative;
    margin-bottom: 36px;

    h1 {
      font-size: 92px;
      font-weight: bold;
      writing-mode: horizontal-tb;
      letter-spacing: 1px;
    }

    > p {
      text-align: right;
      color: var(--text-color);
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
      margin-bottom: 0px;
      margin-top: 19px;
    }

    img {
      width: 119px;
      height: 113px;
      position: absolute;
      top: -70px;
      left: -35px;
    }
  }
}

.landing-header_left-section {
  display: flex;
  flex-direction: row-reverse;
}
</style>
