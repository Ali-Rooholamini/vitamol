<template>
  <div class="category-page">
    <Meta name="title" content="محصولات ویتامول" />
    <Meta name="og:title" property="og:title" content="محصولات ویتامول" />
    <Meta name="description" content="محصولات آرایش بهداشتی ویتامول" />
    <Meta
      name="og:description"
      property="og:description"
      content="محصولات آرایش بهداشتی ویتامول"
    />

    <PageTitle class="category-page_title">
      {{ categoryPageTitle.name }}
    </PageTitle>

    <section class="category-page_category-wrapper">
      <SubCategories class="container" />
      <div class="category-page_category_bottom-color"></div>
    </section>

    <section class="container-fluid category-page_products-carousel">
      <div class="container">
        <strong> برای تو که دنبال درخشش موهات هستی !</strong>
        <NuxtImg
          class="d-none d-md-block"
          :src="categoryPageTitle.imgSrc"
          format="webp"
          loading="lazy"
          width="517"
          height="517"
        />
        <NuxtImg
          class="butterfly-bottom d-none d-lg-block"
          src="/images/vit-butterfly.png"
          format="webp"
          loading="lazy"
          width="64"
          height="61"
        />
        <NuxtImg
          class="butterfly-top d-none d-lg-block"
          src="/images/vit-butterfly.png"
          format="webp"
          loading="lazy"
          width="105"
          height="101"
        />
      </div>
      <div>
        <ProductCarousel />
      </div>
    </section>

    <section class="container category-page_product-details">
      <ProductDetails />
    </section>
  </div>
</template>

<script>
import { getSubCategories } from "~/services/product.js";

import PageTitle from "~/components/common/PageTitle.vue";
import SubCategories from "~/components/page/categories/SubCategories.vue";
import ProductCarousel from "~/components/page/categories/ProductCarousel.vue";
import ProductDetails from "~/components/page/categories/ProductDetails.vue";

definePageMeta({
  middleware: ["categories-page"],
});

export default {
  name: "CategoriesPage",
  components: {
    PageTitle,
    SubCategories,
    ProductCarousel,
    ProductDetails,
  },

  data() {
    return {
      subCategories: [],
      isCatLoading: false,
    };
  },

  created() {
    let categoriesId = 0;
    this.isCatLoading = true;

    switch (this.$route.params.name) {
      case "mane-guard":
        categoriesId = 1;
        break;

      case "skin-care":
        categoriesId = 2;
        break;

      case "hue-harmony":
        categoriesId = 3;
        break;

      default:
        categoriesId = 1;
        break;
    }

    getSubCategories(this.$axios, categoriesId)
      .then(({ data }) => {
        this.subCategories = data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.isCatLoading = false;
      });
  },

  computed: {
    categoryPageTitle() {
      if (this.$route.params.name === "mane-guard") {
        return {
          name: "محصولات مراقبت ازمو ویتامول",
          imgSrc:
            "/images/woman-with-hairdo-bun-with-braided-hairstyle_511339-276.jpg",
        };
      } else if (this.$route.params.name === "skin-care") {
        return {
          name: "محصولات مراقبت از پوست ویتامول",
          imgSrc:
            "/images/silhouette_beautiful_woman_female_face_female_face_design_element.jpg",
        };
      } else {
        return {
          name: "رنگ موهای ویتامول",
          imgSrc:
            "/images/woman-hairstyle-hairdo-salon-hair-cut-logo-design_198454-472.jpg",
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@include breakpoint-up(sm) {
  .category-page_title {
    margin-top: 30px;
  }
}

.category-page_category-wrapper {
  padding-top: 56px;
  padding-bottom: 66px;
  margin-bottom: 100px;
  position: relative;
  overflow-x: hidden;

  .category-page_category_bottom-color {
    position: absolute;
    bottom: 0px;
    right: -200px;
    width: calc(100% + 400px);
    height: 436px;
    background: linear-gradient(
      to top,
      #ffdbe9 20%,
      rgba(255, 255, 255, 0) 81.09%
    );
    z-index: -1;
    border-radius: 45%;
  }
}

.category-page_products-carousel {
  margin-bottom: 70px;
  margin-top: 100px;
  position: relative;

  @include breakpoint-up(md) {
    margin-top: 70px;
    margin-bottom: 109px;
  }

  strong {
    display: block;
    color: var(--secondary-color);
    font-size: 34px;
    font-weight: 600;
    line-height: normal;
    position: relative;
    text-align: right;

    @include breakpoint-down(sm) {
      font-size: 19px !important;
      text-align: center;
    }

    @include breakpoint-down(lg) {
      font-size: 28px;
    }

    &::before {
      content: "";
      width: 26px;
      height: 26px;
      background-color: var(--secondary-color);
      border-radius: 50%;
      position: absolute;
      right: -50px;
      top: 25%;

      @include breakpoint-down(md) {
        display: none;
      }

      @include breakpoint-down(lg) {
        width: 20px;
        height: 20px;
      }
    }
  }

  .container {
    margin-bottom: 147px;

    @include breakpoint-down(md) {
      margin-bottom: 10px;
    }

    > img {
      position: absolute;
      top: -30%;
      left: 0px;
      z-index: -2;

      @include breakpoint-down(lg) {
        width: 317px;
        height: 317px;
        top: -15%;
      }
    }

    .butterfly-bottom {
      top: 25%;
      left: 35%;
    }

    .butterfly-top {
      top: 0%;
      left: 38%;
      transform: rotate(45deg);
    }
  }
}

.category-page_product-details {
  margin-bottom: 116px;
}
</style>
