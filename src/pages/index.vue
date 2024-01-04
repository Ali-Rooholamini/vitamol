<template>
  <div>
    <section class="landing_header">
      <LandingHeader />
    </section>
    <section class="container landing_why-vitamol">
      <h1>چرا <span>ویتـــــامـول</span> ؟</h1>
      <FeaturedAdvantages :featuredList="featuredAdvantagesList" />
    </section>
    <div class="landing_brand-logo text-center">
      <NuxtImg
        src="/images/vitamol-brand-2.png"
        width="742"
        height="107"
        alt="ویتامول"
        loading="lazy"
      />
    </div>
    <section class="landing_categories">
      <LandingCategories />
    </section>

    <section class="landing_delegates">
      <LandingDeputize />
    </section>
  </div>
</template>

<script>
import LandingHeader from "~/components/page/index/LandingHeader.vue";
import FeaturedAdvantages from "~/components/common/FeaturedAdvantages.vue";
import LandingCategories from "~/components/page/index/LandingCategories.vue";
import LandingDeputize from "~/components/page/index/LandingDeputize.vue";

export default {
  name: "IndexPage",
  components: {
    LandingHeader,
    FeaturedAdvantages,
    LandingCategories,
    LandingDeputize,
  },
  computed: {
    featuredAdvantagesList() {
      return [
        {
          iconName: "vit--star-circle",
          explain: "تولید داخلی با مواد اولیه و فرمولاسیون ایتالیایی",
        },
        {
          iconName: "vit--map-point-wave",
          explain: "دارای بیش از 1500 فروشگاه فعال در سطح کشور",
        },
        {
          iconName: "vit--tag-price",
          explain: "قیمت مناسب نسبت به محصولات هم سطح",
        },
        {
          iconName: "vit--hand-stars",
          explain: "اعطای نمایندگی به واجدین شرایط در سراسر کشور",
        },
        {
          iconName: "vit--bill",
          explain: "میکرو پیگمنت آمریکایی",
        },
        {
          iconName: "vit--cup-star",
          explain: "تولید داخلی با مواد اولیه و فرمولاسیون ایتالیایی",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.landing_header {
  margin-bottom: 40px;

  @include breakpoint-up(md) {
    margin-bottom: 65px;
  }
  @include breakpoint-up(lg) {
    margin-bottom: 95px;
  }
}

.landing_why-vitamol {
  color: var(--secondary-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;

  @include breakpoint-up(md) {
    margin-bottom: 120px;
  }

  h1 {
    font-size: 37px;
    margin-bottom: 66px;

    @include breakpoint-up(sm) {
      font-size: 47px;
    }

    @include breakpoint-up(md) {
      font-size: 57px;
    }

    @include breakpoint-up(lg) {
      font-size: 67px;
    }

    > span {
      display: inline-block;
      font-family: PeydaWeb;
      padding: 0px 10px;
      font-weight: bold;
    }
  }
}

.landing_brand-logo {
  margin-bottom: 62px;

  @include breakpoint-up(md) {
    margin-bottom: 124px;
  }

  > img {
    width: 260px;
    height: auto;

    @include breakpoint-up(sm) {
      width: 342px;
      height: auto;
    }
    @include breakpoint-up(md) {
      width: 542px;
      height: auto;
    }
    @include breakpoint-up(lg) {
      width: 742px;
      height: 107px;
    }
  }
}

.landing_categories {
  margin-bottom: 140px;
}

.landing_delegates {
  margin-bottom: 100px;
}
</style>
