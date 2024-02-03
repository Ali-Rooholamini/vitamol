<template>
  <div>
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="(event, index) in eventImages" :key="index">
        <div class="carousel__item">
          <NuxtImg
            preload
            :src="`http://api.vitamolcare.com${event.image}`"
            format="webp"
            width="395"
            height="549"
            alt="مراقبت از پوست"
          />
        </div>
      </Slide>

      <template #addons> </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

export default defineComponent({
  name: "HeaderSlider",
  components: {
    Carousel,
    Slide,
  },

  props: {
    eventImages: {
      type: [Array, Object],
      required: true,
      default: null,
    },
  },
});
</script>

<style lang="scss" scoped>
.carousel__slide {
  height: 549px;

  div > img {
    width: 395px;
    height: 549px;
    border-radius: 32px;
  }
}
</style>
