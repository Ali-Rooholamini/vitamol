<template>
  <Carousel
    :items-to-show="itemToShow"
    :wrap-around="true"
    v-model="currentSlide"
  >
    <Slide v-for="(product, index) in productList" :id="index" :key="index">
      <div class="carousel__item">
        <NuxtImg
          v-if="product?.images[0]?.image"
          :src="apiOriginProtocol + product.images[0].image"
          format="webp"
          :alt="product.name"
          loading="lazy"
        />
        <div class="carousel__item_title">{{ product.name }}</div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { useMedia } from "~/composable/useMedia.js";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  mounted() {
    this.isMiddle = useMedia("(max-width: 808px)");
    this.isMobile = useMedia("(max-width: 480px)");
  },

  props: {
    productList: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      isMiddle: null,
      isMobile: null,
      currentSlide: 0,
    };
  },

  watch: {
    currentSlide: {
      immediate: true,
      handler(newSlide) {
        this.$emit("selectedProduct", newSlide);
      },
    },
  },

  computed: {
    apiOriginProtocol() {
      if (process.browser) {
        const protocol = window.location.protocol;
        return `${protocol}//api.vitamolcare.com`;
      } else {
        return "https://api.vitamolcare.com";
      }
    },

    itemToShow() {
      if (!this.isMiddle && !this.isMobile) {
        return 5;
      } else if (this.isMiddle && !this.isMobile) {
        return 3;
      } else {
        return 2;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.carousel__slide.carousel__slide--active > div.carousel__item {
  background: linear-gradient(
    180deg,
    #fee1ec 29.78%,
    rgba(250, 223, 238, 0.91) 29.79%,
    rgba(255, 255, 255, 0) 100%
  );

  > .carousel__item_title {
    display: block;
    margin: 0px;
  }
}

.carousel__slide {
  margin-top: 50px;
  margin-bottom: 150px;
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  display: none;
  box-sizing: content-box;
  color: #6c6c6c;
  border-radius: 50%;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);
  background: linear-gradient(200deg, #eaa7c1 65%, rgba(234, 167, 193, 0) 100%);

  @include breakpoint-up(md) {
    display: flex;
  }
}

.carousel__item {
  background-color: var(--color-white);
  width: 100%;
  max-width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);
  transition: 180ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  @include breakpoint-up(xl) {
    max-width: 230px;
    height: 230px;
  }

  > img {
    width: 55%;
    height: auto;
  }

  .carousel__item_title {
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    position: absolute;
    top: calc(100% + 30px);
    width: 100%;
    display: none;
    padding: 20px 10px;
    border-radius: 563px;
    background: linear-gradient(
      350deg,
      #ffdfeb 7.23%,
      rgba(255, 223, 235, 0) 87.29%
    );

    @include breakpoint-up(sm) {
      font-size: 16px;
    }

    @include breakpoint-up(md) {
      font-size: 18px;
    }

    @include breakpoint-up(lg) {
      font-size: 22px;
    }
  }
}
</style>
