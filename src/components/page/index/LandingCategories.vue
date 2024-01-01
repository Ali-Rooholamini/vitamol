<template>
  <div class="landing-categories">
    <div class="landing-categories_category-wrapper">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="landing-categories_image-wrapper">
          <img
            width="306"
            height="430"
            src="~/assets/images/header-image.png"
            alt="محصولات مراقبت از مو"
            loading="lazy"
          />
          <div class="landing-categories_image-backcolor"></div>
          <div class="landing-categories_image-title-backcolor"></div>
        </div>
        <div class="landing-categories_category-left-side">
          <div class="landing-categories_category-left-side_text">
            <strong>برای تو که موهات برات ارزشمنده!</strong>
            <div>
              <h3>محصولات مراقبت از مو ویتـــامول</h3>
              <p>
                بهترین برند محصولات مراقبت از پوست و مو در ایران بهترین برند
                محصولات مراقبت از پوست و مو در ایران بهترین برند محصولات مراقبت
                از پوست و مو در ایران بهترین برند محصولات مراقبت از پوست و مو در
                ایران
              </p>
            </div>
            <BaseButton :isSvgRight="true" arrowSvgName="vit--arrow-right-top">
              نمایش محصولات
            </BaseButton>
          </div>
          <div class="landing-categories_category-left-side_backcolor"></div>
        </div>
      </div>
    </div>
    <div class="landing-categories_category-wrapper">
      <div
        class="container d-flex justify-content-between align-items-center flex-row-reverse"
      >
        <div class="landing-categories_image-wrapper">
          <img
            width="306"
            height="430"
            src="~/assets/images/header-image.png"
            alt="محصولات مراقبت از پوست"
            loading="lazy"
          />
          <div class="landing-categories_image-backcolor middle-cat"></div>
          <div
            class="landing-categories_image-title-backcolor middle-cat"
          ></div>
        </div>
        <div class="landing-categories_category-left-side">
          <div class="landing-categories_category-left-side_text">
            <strong>برای تو که پوستت ارزشمنده!</strong>
            <div>
              <h3>محصولات مراقبت از پوست ویتـــامول</h3>
              <p>
                بهترین برند محصولات مراقبت از پوست و مو در ایران بهترین برند
                محصولات مراقبت از پوست و مو در ایران بهترین برند محصولات مراقبت
                از پوست و مو در ایران بهترین برند محصولات مراقبت از پوست و مو در
                ایران
              </p>
            </div>
            <BaseButton :isSvgLeft="true" arrowSvgName="vit--arrow-left-top">
              نمایش محصولات
            </BaseButton>
          </div>
          <div
            class="landing-categories_category-left-side_backcolor middle-cat"
          ></div>
        </div>
      </div>
    </div>
    <div class="landing-categories_category-wrapper">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="landing-categories_image-wrapper">
          <img
            width="306"
            height="430"
            src="~/assets/images/header-image.png"
            alt="محصولات رنگ مو"
            loading="lazy"
          />
          <div class="landing-categories_image-backcolor"></div>
          <div class="landing-categories_image-title-backcolor"></div>
        </div>
        <div class="landing-categories_category-left-side">
          <div class="landing-categories_category-left-side_text">
            <strong>برای تو که رنگ موهات برات مهمه!</strong>
            <div>
              <h3>محصولات مراقبت از مو ویتـــامول</h3>
              <p>
                بهترین برند محصولات مراقبت از پوست و مو در ایران بهترین برند
                محصولات مراقبت از پوست و مو در ایران بهترین برند محصولات مراقبت
                از پوست و مو در ایران بهترین برند محصولات مراقبت از پوست و مو در
                ایران
              </p>
            </div>
            <BaseButton :isSvgRight="true" arrowSvgName="vit--arrow-right-top">
              نمایش محصولات
            </BaseButton>
          </div>
          <div class="landing-categories_category-left-side_backcolor"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/global/BaseButton.vue";
export default {
  name: "LandingCategories",
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.landing-categories {
  .landing-categories_category-wrapper {
    position: relative;
    margin-top: 120px;
  }
}

.landing-categories_image-wrapper {
  margin-right: 26px;
  position: relative;

  img {
    border-radius: 32px;
    box-shadow: 0px 10px 50px -5px #00000040;
  }

  .landing-categories_image-backcolor {
    position: absolute;
    top: 40px;
    right: -38px;
    z-index: -2;
    width: 216px;
    height: 274px;
    border-radius: 24px;
    background: linear-gradient(207deg, #ef5994 -30.18%, transparent 56.91%);
  }

  .landing-categories_image-backcolor.middle-cat {
    right: initial;
    left: -38px;
    background: linear-gradient(
      196deg,
      #83affe -11.39%,
      #fff 69.89%
    ) !important;
  }

  .landing-categories_image-title-backcolor {
    position: absolute;
    top: 40px;
    right: calc(100% - 123px);
    z-index: -2;
    width: 573px;
    height: 73px;
    border-radius: 8px;
    background: linear-gradient(
      270deg,
      #ffdbe9 20.16%,
      rgba(255, 219, 233, 0) 117.89%
    );
    box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
  }

  .landing-categories_image-title-backcolor.middle-cat {
    width: 852px !important;
    right: initial;
    left: calc(100% - 124px) !important;
    background: linear-gradient(96deg, #83affe -11.39%, #fff 69.89%) !important;
  }
}

.landing-categories_category-left-side {
  margin-left: 23%;
  .landing-categories_category-left-side_text {
    margin-top: 32px;
    height: 394px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: var(--secondary-color);

    strong {
      font-size: 32px;
      font-weight: 600;
      line-height: normal;
      margin-top: 15px;
    }

    h3 {
      font-size: 28px;
      font-weight: 500;
      line-height: normal;
    }

    > div p {
      color: var(--text-color);
      width: 404px;
      font-size: 22px;
      line-height: 26.77px;
      font-weight: 400;
    }
  }

  .landing-categories_category-left-side_backcolor {
    position: absolute;
    z-index: -2;
    left: 0px;
    top: 145px;
    width: 609px;
    height: 186px;
    border-radius: 0px 12px 12px 0px;
    box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
    background-color: var(--primary-color);
  }

  .landing-categories_category-left-side_backcolor.middle-cat {
    left: initial;
    border-radius: 12px 0px 0px 12px;
    right: 0px;
    background-color: var(--secondary-light-color);
  }
}
</style>
