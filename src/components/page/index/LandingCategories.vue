<template>
  <div class="landing-categories">
    <div class="landing-categories_category-wrapper">
      <div
        class="container d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center"
      >
        <div class="landing-categories_image-wrapper">
          <NuxtImg
            width="306"
            height="430"
            src="images/header-image.png"
            format="webp"
            alt="محصولات مراقبت از مو"
            loading="lazy"
          />
          <div class="landing-categories_image-backcolor"></div>
          <div class="landing-categories_image-title-backcolor"></div>
        </div>
        <div class="landing-categories_category-left-side">
          <div class="landing-categories_category-left-side_text">
            <strong>برای تو که عاشق موهات هستی</strong>
            <div>
              <h3>محصولات مراقبت از مو ویتـــامول</h3>
              <p>
                بهترین برند محصولات مراقبت از پوست و مو در ایران بهترین برند
                محصولات مراقبت از پوست و مو در ایران بهترین برند محصولات مراقبت
                از پوست و مو در ایران بهترین برند محصولات مراقبت از پوست و مو در
                ایران
              </p>
            </div>
            <BaseButton
              class="landing-categories_category-left-side_button"
              :isSvgRight="true"
              arrowSvgName="vit--arrow-right-top"
            >
              <NuxtLink to="categories/mane-guard"> نمایش محصولات </NuxtLink>
            </BaseButton>
          </div>
          <div
            class="d-none d-md-block landing-categories_category-left-side_cream"
          >
            <img
              width="164"
              height="179"
              src="~/assets/images/cream-sample.webp"
              alt="کرم-ویتامول"
              loading="lazy"
            />
          </div>
          <div class="landing-categories_category-left-side_backcolor"></div>
        </div>
      </div>
    </div>

    <div class="landing-categories_category-wrapper">
      <div
        class="container d-flex flex-column flex-md-row-reverse justify-content-center justify-content-md-between align-items-center"
      >
        <div class="landing-categories_image-wrapper">
          <NuxtImg
            width="306"
            height="430"
            src="images/header-image.png"
            format="webp"
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
            <strong>برای تو که پوستت برات مهم ترینه</strong>
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
              <NuxtLink to="categories/skin-care"> نمایش محصولات </NuxtLink>
            </BaseButton>
          </div>
          <div
            class="d-none d-md-flex landing-categories_category-left-side_backcolor middle-cat"
          >
            <img
              src="~/assets/images/cream-sample.webp"
              alt="کرم-ویتامول"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="landing-categories_category-wrapper">
      <div
        class="container d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center"
      >
        <div class="landing-categories_image-wrapper">
          <NuxtImg
            width="306"
            height="430"
            src="images/header-image.png"
            format="webp"
            alt="محصولات مراقبت از مو"
            loading="lazy"
          />
          <div class="landing-categories_image-backcolor"></div>
          <div class="landing-categories_image-title-backcolor"></div>
        </div>
        <div class="landing-categories_category-left-side">
          <div class="landing-categories_category-left-side_text">
            <strong>برای تو که رنگ موهات دلبره</strong>
            <div>
              <h3>محصولات مراقبت از مو ویتـــامول</h3>
              <p>
                بهترین برند محصولات مراقبت از پوست و مو در ایران بهترین برند
                محصولات مراقبت از پوست و مو در ایران بهترین برند محصولات مراقبت
                از پوست و مو در ایران بهترین برند محصولات مراقبت از پوست و مو در
                ایران
              </p>
            </div>
            <BaseButton
              class="landing-categories_category-left-side_button"
              :isSvgRight="true"
              arrowSvgName="vit--arrow-right-top"
            >
              <NuxtLink to="categories/hue-harmony"> نمایش محصولات </NuxtLink>
            </BaseButton>
          </div>
          <div
            class="d-none d-md-block landing-categories_category-left-side_cream"
          >
            <img
              width="164"
              height="179"
              src="~/assets/images/cream-sample.webp"
              alt="کرم-ویتامول"
              loading="lazy"
            />
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

  .container {
    @include breakpoint-up(md) {
      gap: 50px;
    }

    @include breakpoint-up(lg) {
      gap: 130px;
    }

    @include breakpoint-up(lg) {
      gap: 160px;
    }
  }
}

.landing-categories_image-wrapper {
  text-align: center;
  position: relative;

  @include breakpoint-up(md) {
    margin-right: 26px;
  }

  img {
    width: 90%;
    height: auto;
    border-radius: 32px;
    box-shadow: 0px 10px 50px -5px #00000040;

    @include breakpoint-up(md) {
      width: 180px;
      height: auto;
    }

    @include breakpoint-up(lg) {
      width: 220px;
      height: auto;
    }

    @include breakpoint-up(xl) {
      width: 306px;
      height: 430px;
    }
  }

  .landing-categories_image-backcolor {
    position: absolute;
    top: 40px;
    z-index: -2;
    width: 216px;
    height: 274px;
    border-radius: 24px;
    background: linear-gradient(207deg, #ef5994 -30.18%, transparent 56.91%);

    @include breakpoint-up(md) {
      right: -18px;
      width: 116px;
      height: 174px;
    }

    @include breakpoint-up(lg) {
      right: -24px;
      width: 80px;
      height: 154px;
    }

    @include breakpoint-up(xl) {
      right: -38px;
      width: 216px;
      height: 274px;
    }
  }

  .landing-categories_image-backcolor.middle-cat {
    right: initial;
    background: linear-gradient(
      196deg,
      #83affe -11.39%,
      #fff 69.89%
    ) !important;

    @include breakpoint-up(md) {
      left: -18px;
    }

    @include breakpoint-up(lg) {
      left: -24px;
    }

    @include breakpoint-up(xl) {
      left: -38px;
    }
  }

  .landing-categories_image-title-backcolor {
    position: absolute;
    top: calc(100% + 35px);
    right: 0px;
    z-index: -2;
    width: 100%;
    height: 45px;
    border-radius: 8px;
    background: linear-gradient(
      270deg,
      #ffdbe9 20.16%,
      rgba(255, 219, 233, 0) 117.89%
    );
    box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);

    @include breakpoint-up(md) {
      top: 40px !important;
      width: 303px;
      height: 35px;
      right: calc(100% - 83px);
    }
    @include breakpoint-up(lg) {
      width: 453px;
      height: 45px;
      right: calc(100% - 100px);
    }
    @include breakpoint-up(xl) {
      width: 573px;
      height: 73px;
      right: calc(100% - 123px);
    }
  }

  .landing-categories_image-title-backcolor.middle-cat {
    width: 100%;
    right: initial;
    left: 0px !important;
    background: linear-gradient(96deg, #83affe -11.39%, #fff 69.89%) !important;

    @include breakpoint-up(md) {
      width: 353px !important;
      height: 35px !important;
      left: calc(100% - 83px) !important;
    }
    @include breakpoint-up(lg) {
      width: 503px !important;
      height: 45px !important;
      left: calc(100% - 100px) !important;
    }
    @include breakpoint-up(xl) {
      width: 852px !important;
      height: 73px !important;
      left: calc(100% - 123px) !important;
    }
  }
}

.landing-categories_category-left-side {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .landing-categories_category-left-side_text {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: var(--secondary-color);

    @include breakpoint-up(md) {
      height: 244px;
    }
    @include breakpoint-up(lg) {
      height: 304px;
    }
    @include breakpoint-up(xl) {
      height: 394px;
    }

    strong {
      width: 100%;
      text-align: center;
      font-size: 20px;
      margin-right: 10px;
      font-weight: 600;
      line-height: normal;
      margin-top: 13px;
      white-space: nowrap;

      @include breakpoint-up(md) {
        text-align: right;
        margin-top: 23px;
        margin-right: 0px;
        font-size: 20px;
      }
      @include breakpoint-up(lg) {
        font-size: 24px;
      }
      @include breakpoint-up(xl) {
        font-size: 32px;
      }
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      margin-top: 35px;

      @include breakpoint-up(md) {
        margin-top: 0px;
        font-size: 18px;
      }
      @include breakpoint-up(lg) {
        font-size: 20px;
      }
      @include breakpoint-up(xl) {
        font-size: 28px;
      }
    }

    > div p {
      color: var(--text-color);
      font-size: 16px;
      line-height: 26.77px;
      font-weight: 400;
      text-align: justify;

      @include breakpoint-up(md) {
        font-size: 16px;
        width: 304px;
        line-height: 20.77px;
        text-align: initial;
      }
      @include breakpoint-up(lg) {
        width: 360px;
        font-size: 18px;
        line-height: 24.77px;
      }
      @include breakpoint-up(xl) {
        width: 404px;
        font-size: 22px;
      }
    }
  }

  .landing-categories_category-left-side_button {
    @include breakpoint-up(md) {
      font-size: 14px;
      height: 36px;

      &:deep(svg) {
        width: 20px;
        height: 20px;
      }
    }
    @include breakpoint-up(xl) {
      font-size: 18px;
      height: 48px;
      height: initial;

      &:deep(svg) {
        width: 24px;
        height: 24px;
      }
    }
  }

  .landing-categories_category-left-side_cream {
    > img {
      @include breakpoint-up(md) {
        margin-top: 60px;
        width: 70px;
        height: auto;
      }
      @include breakpoint-up(lg) {
        margin-top: 55px;
        width: 100px;
        height: auto;
      }
      @include breakpoint-up(xl) {
        margin-top: 55px;
        width: 164px;
        height: 179px;
      }
    }
  }

  .landing-categories_category-left-side_backcolor {
    display: none;
    position: absolute;
    z-index: -3;
    left: 0px;
    top: 550px;
    width: 100%;
    height: 210px;
    border-radius: 0px;
    box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
    background-color: var(--primary-color);

    @include breakpoint-up(md) {
      display: block;
      top: 95px;
      width: 389px;
      height: 126px;
      border-radius: 0px 12px 12px 0px;
    }
    @include breakpoint-up(lg) {
      top: 110px;
      width: 409px;
      height: 146px;
    }
    @include breakpoint-up(xl) {
      top: 145px;
      width: 609px;
      height: 186px;
    }
  }

  .landing-categories_category-left-side_backcolor.middle-cat {
    width: 655px;
    left: initial;
    border-radius: 12px 0px 0px 12px;
    right: 0px;
    background-color: var(--secondary-light-color);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @include breakpoint-up(md) {
      top: 95px;
      width: 499px;
      height: 126px;
    }
    @include breakpoint-up(lg) {
      top: 110px;
      width: 539px;
      height: 146px;
    }
    @include breakpoint-up(xl) {
      top: 145px;
      width: 659px;
      height: 186px;
    }

    > img {
      transform: rotate(45deg);
      width: 106px;
      height: 115px;
      margin-bottom: 21px;
      margin-left: 13px;

      @include breakpoint-up(md) {
        width: 60px;
        height: 65px;
      }
      @include breakpoint-up(lg) {
        width: 80px;
        height: 95px;
      }
      @include breakpoint-up(xl) {
        width: 106px;
        height: 115px;
      }
    }
  }
}
</style>
