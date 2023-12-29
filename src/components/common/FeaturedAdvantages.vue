<template>
  <div
    class="featured-advantages justify-content-around justify-content-md-between"
  >
    <div
      class="featured-advantages_feature"
      v-for="(feature, index) in featuredList"
      :key="index"
    >
      <div class="featured-advantages_feature_icon">
        <nuxt-icon :name="'features/' + feature.iconName" />
      </div>
      <p class="featured-advantages_feature_explain">{{ feature.explain }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedAdvantages",

  props: {
    featuredList: {
      type: [Array, Object],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.featured-advantages {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
  flex-wrap: wrap;
}

.featured-advantages_feature {
  width: 90px;

  @include breakpoint-up(md) {
    width: 120px;
  }

  .featured-advantages_feature_icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: 0px 25px 50px -5px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    @include breakpoint-up(md) {
      width: 120px;
      height: 120px;
    }

    .nuxt-icon :deep(svg) {
      width: 30px;
      height: 30px;

      @include breakpoint-up(md) {
        width: 40px;
        height: 40px;
      }
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      z-index: -1;
      background: linear-gradient(
        180deg,
        #f9d9e6 0%,
        rgba(249, 217, 230, 0) 77.08%
      );
      opacity: 0;
      transition: opacity 200ms linear;
    }

    &:hover::before {
      opacity: 1;
    }
  }

  .featured-advantages_feature_explain {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20.43px;
    text-align: center;

    @include breakpoint-up(md) {
      margin-top: 40px;
      font-size: 18px;
      line-height: 22.43px;
    }
  }
}
</style>
