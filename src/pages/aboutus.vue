<template>
  <div class="aboutus-page">
    <Meta name="title" content="درباره ویتامول" />
    <Meta name="og:title" property="og:title" content="درباره ویتامول" />
    <Meta name="description" content="محصولات آرایش بهداشتی ویتامول" />
    <Meta
      name="og:description"
      property="og:description"
      content="محصولات آرایش بهداشتی ویتامول"
    />

    <PageTitle class="aboutus-page_title">درباره ویتامول</PageTitle>

    <section class="container aboutus-page_aboutus">
      <p class="aboutus-page_aboutus-desc">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
      </p>
      <div class="aboutus-page_image-wrapper">
        <NuxtImg
          src="/images/about-us.jpg"
          format="webp"
          width="235"
          height="330"
        />
      </div>
    </section>

    <section class="container-fluid aboutus-page_licenses">
      <div class="aboutus-page_licenses-bgcolor"></div>
      <strong class="aboutus-page_licenses-title">
        تاییدیه و مجوز های ویتامول
      </strong>
      <div class="container">
        <FeaturedAdvantages
          class="aboutus-page_licenses-list"
          :featuredList="licensesList"
        />
      </div>
    </section>

    <section class="container aboutus-page_exhibition">
      <div class="aboutus-page_exhibition-carousel">
        <ExhibitionCarousel />
      </div>
      <div class="aboutus-page_exhibition-desc">
        <b>حضور فعال در نمایشگاه ها</b>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>
    </section>

    <section class="aboutus-page_awards">
      <div class="aboutus-page_awards-bgcolor"></div>
      <b class="aboutus-page_awards-title">جوایز و افتخارات</b>
      <div class="container">
        <FeaturedAdvantages
          class="aboutus-page_awards-list"
          :featuredList="awardsList"
        />
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "~/components/common/PageTitle.vue";
import FeaturedAdvantages from "~/components/common/FeaturedAdvantages.vue";
import ExhibitionCarousel from "~/components/page/aboutus/ExhibitionCarousel.vue";

export default {
  name: "AboutUs",

  components: {
    PageTitle,
    FeaturedAdvantages,
    ExhibitionCarousel,
  },

  computed: {
    licensesList() {
      return [
        {
          iconName: "vit--cup-star",
          explain: "مجوز رسمی وزارت بهداشت",
        },
        {
          iconName: "vit--cup-star",
          explain: "مجوز رسمی وزارت بهداشت",
        },
        {
          iconName: "vit--cup-star",
          explain: "مجوز رسمی وزارت بهداشت",
        },
        {
          iconName: "vit--cup-star",
          explain: "مجوز رسمی وزارت بهداشت",
        },
        {
          iconName: "vit--cup-star",
          explain: "مجوز رسمی وزارت بهداشت",
        },
      ];
    },

    awardsList() {
      return [
        {
          iconName: "vit--tag-price",
          explain: "جایزه جشنواره مراقبت های پوستی",
        },
        {
          iconName: "vit--hand-stars",
          explain: "جایزه جشنواره مراقبت های پوستی",
        },
        {
          iconName: "vit--bill",
          explain: "جایزه جشنواره مراقبت های پوستی",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.aboutus-page_title {
  margin-bottom: 30px;

  @include breakpoint-up(md) {
    margin-bottom: 90px;
  }
}

.aboutus-page_aboutus {
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  gap: 35px;
  align-items: center;
  margin-bottom: 40px;

  @include breakpoint-up(md) {
    flex-direction: row;
    gap: 25px;
  }

  .aboutus-page_aboutus-desc {
    margin: 0px;
    width: 100%;
    max-width: 900px;
    font-family: PeydaWeb;
    color: var(--secondary-color);
    font-size: 18px;
    font-weight: 400;
    text-align: justify;

    @include breakpoint-up(sm) {
      font-size: 22px;
    }

    @include breakpoint-up(md) {
      font-size: 26px;
    }

    @include breakpoint-up(lg) {
      font-size: 30px;
    }
  }

  .aboutus-page_image-wrapper {
    position: relative;

    > img {
      border-radius: 16px 16px 0px 16px;
    }

    &::after {
      content: "";
      position: absolute;
      width: 150px;
      height: 240px;
      background: linear-gradient(
        180deg,
        #f5b7cf 0%,
        rgba(245, 183, 207, 0) 53.13%
      );
      border-radius: 16px 16px 16px 0px;
      top: 48px;
      left: -28px;
      z-index: -1;
    }
  }
}

.aboutus-page_licenses {
  position: relative;
  padding-top: 30px;
  overflow: hidden;
  margin-bottom: 180px;

  @include breakpoint-up(md) {
    margin-bottom: 260px;
    padding-top: 60px;
  }

  .aboutus-page_licenses-bgcolor {
    position: absolute;
    top: 0px;
    right: -200px;
    width: calc(100% + 400px);
    height: 254px;
    background: linear-gradient(
      180deg,
      #ffdfeb 7.23%,
      rgba(255, 223, 235, 0) 87.29%
    );
    z-index: -1;
    border-radius: 45%;
  }

  .aboutus-page_licenses-title {
    color: var(--secondary-color);
    font-size: 26px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    display: block;
    margin-bottom: 45px;

    @include breakpoint-up(sm) {
      font-size: 32px;
    }

    @include breakpoint-up(md) {
      font-size: 40px;
      margin-bottom: 60px;
    }

    @include breakpoint-up(lg) {
      font-size: 47px;
    }
  }

  .aboutus-page_licenses-list {
    &:deep(.featured-advantages_feature) {
      width: 146px !important;

      @include breakpoint-up(sm) {
        width: 206px !important;
      }

      > .featured-advantages_feature_icon {
        width: 146px !important;
        height: 195px !important;
        border-radius: 184px !important;

        @include breakpoint-up(sm) {
          width: 206px !important;
          height: 278px !important;
        }

        &:hover {
          border: 1px solid var(--secondary-color);
        }

        &::before {
          border-radius: 184px !important;
        }

        .nuxt-icon > svg {
          width: 70px !important;
          height: 70px !important;

          @include breakpoint-up(sm) {
            width: 99px !important;
            height: 99px !important;
          }
        }
      }

      .featured-advantages_feature_explain {
        font-size: 18px;
        font-weight: normal;
        line-height: normal;

        @include breakpoint-up(sm) {
          font-size: 24px;
        }
      }
    }
  }
}

.aboutus-page_exhibition {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 100px;

  @include breakpoint-up(md) {
    margin-bottom: 167px;
  }

  @include breakpoint-up(lg) {
    flex-direction: row;
    gap: 55px;
  }

  .aboutus-page_exhibition-desc {
    width: 100%;
    max-width: 734px;

    > b {
      display: block;
      color: var(--secondary-color);
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 15px;

      @include breakpoint-up(sm) {
        font-size: 34px;
      }

      @include breakpoint-up(md) {
        margin-bottom: 24px;
        font-size: 40px;
      }

      @include breakpoint-up(lg) {
        font-size: 47px;
      }
    }

    > p {
      color: rgba(0, 37, 97, 0.8);
      text-align: justify;
      font-size: 18px;
      font-weight: 400;
      line-height: 27px;

      @include breakpoint-up(sm) {
        font-size: 22px;
      }

      @include breakpoint-up(md) {
        font-size: 26px;
        line-height: normal;
      }

      @include breakpoint-up(lg) {
        font-size: 30px;
      }
    }
  }
}

.aboutus-page_awards {
  position: relative;
  padding-top: 30px;
  overflow: hidden;
  margin-bottom: 80px;

  @include breakpoint-up(md) {
    margin-bottom: 100px;
    padding-top: 60px;
  }

  .aboutus-page_awards-bgcolor {
    position: absolute;
    top: 0px;
    right: -200px;
    width: calc(100% + 400px);
    height: 254px;
    background: linear-gradient(
      180deg,
      #d2e2ff 7.23%,
      rgba(213, 226, 254, 0.94) 12.24%,
      rgba(255, 255, 255, 0) 87.29%
    );
    z-index: -1;
    border-radius: 45%;
  }

  > b {
    display: block;
    color: var(--secondary-color);
    font-size: 26px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    display: block;
    margin-bottom: 45px;

    @include breakpoint-up(sm) {
      font-size: 32px;
    }

    @include breakpoint-up(md) {
      font-size: 40px;
      margin-bottom: 60px;
    }

    @include breakpoint-up(lg) {
      font-size: 47px;
    }
  }

  .aboutus-page_awards-list {
    justify-content: center !important;
    gap: 15%;
  }
}
</style>
