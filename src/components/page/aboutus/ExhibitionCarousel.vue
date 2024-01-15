<template>
  <Carousel v-model="currentSlide">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Navigation,
  },

  data: () => ({
    currentSlide: 0,
  }),
});
</script>

<style lang="scss" scoped>
.carousel__item {
  min-height: 281px;
  width: 100%;
  max-width: 203px;
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 1px 15px -5px rgba(0, 0, 0, 0.25);
  position: relative;

  @include breakpoint-up(sm) {
    max-width: 263px;
    min-height: 351px;
  }
}

.carousel__item::after {
  content: "";
  width: 160px;
  height: 192px;
  border-radius: 24px;
  position: absolute;
  bottom: 25px;
  left: -20px;
  z-index: -1;
  background: linear-gradient(30deg, #ef5994 -30.18%, #fff 56.91%);
}

.carousel__item::before {
  content: "";
  width: 160px;
  height: 192px;
  border-radius: 24px;
  position: absolute;
  top: 39px;
  right: -20px;
  z-index: -1;
  background: linear-gradient(192deg, #ef5994 -30.18%, #fff 56.91%);
}

.carousel__slide {
  padding: 10px;
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  box-sizing: content-box;
  color: #6c6c6c;
  border-radius: 50%;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25);
  background: linear-gradient(200deg, #eaa7c1 0%, rgba(234, 167, 193, 0) 100%);
}

:deep(.carousel__prev) {
  left: -15px;

  @include breakpoint-up(sm) {
    left: -54px;
  }
}

:deep(.carousel__prev.carousel__prev--disabled) {
  display: none;
}

:deep(.carousel__next) {
  right: -15px;

  @include breakpoint-up(sm) {
    right: -54px;
  }
}

:deep(.carousel__next.carousel__next--disabled) {
  display: none;
}
</style>
