<template>
  <button class="base-button" :type="buttonType">
    <nuxt-icon class="is-right" v-if="isSvgRight" :name="svgPath" />
    <slot />
    <nuxt-icon class="is-left" v-if="isSvgLeft" :name="svgPath" />
  </button>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    isSvgRight: {
      type: Boolean,
      required: false,
      default: false,
    },
    isSvgLeft: {
      type: Boolean,
      required: false,
      default: false,
    },
    arrowSvgName: {
      type: String,
      required: false,
      default: "",
    },
    buttonType: {
      type: String,
      required: false,
      default: "button",
    },
  },

  computed: {
    svgPath() {
      return `arrows/${this.arrowSvgName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PeydaWeb;
  line-height: 14.25px;
  background-color: var(--secondary-color);
  color: var(--color-white);
  border: 2px solid var(--secondary-color) !important;
  height: 28px;
  border-radius: 51px;
  padding: 16px 15px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;

  @include breakpoint-up(sm) {
    height: 48px;
    font-size: 18px;
    line-height: 22.73px;
    font-weight: 600;
    padding: 12px 20px;
  }

  &:hover {
    background-color: var(--color-white);
    color: var(--secondary-color);
    transition: 120ms ease-in-out;
  }

  .nuxt-icon {
    :deep(svg) {
      width: 24px;
      height: 24px;
    }
  }

  .nuxt-icon.is-left {
    margin-right: 12px;
  }
  .nuxt-icon.is-right {
    margin-left: 12px;
  }
}
</style>
