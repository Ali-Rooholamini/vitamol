<template>
  <div>
    <LoginModal />
    <TheHeader />
    <div
      class="layout_upside-gradient"
      :class="{ 'landing-gradient': routeName }"
    ></div>
    <slot />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/template/TheHeader.vue";
import TheFooter from "~/components/template/TheFooter.vue";
import LoginModal from "~/components/common/LoginModal.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeader,
    TheFooter,
    LoginModal,
  },

  data() {
    return {
      routeName: this.$route.name === "index",
    };
  },

  watch: {
    $route(to) {
      this.routeName = to.name === "index";
    },
  },
};
</script>

<style lang="scss" scoped>
.layout_upside-gradient {
  height: 160px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(55, 84, 131, 1) 0%,
    rgba(219, 224, 233, 1) 60%,
    rgba(255, 255, 255, 1) 100%
  );
}

.landing-gradient {
  background: linear-gradient(
    180deg,
    rgba(53, 59, 130, 1) 0%,
    rgba(211, 213, 228, 1) 60%,
    rgba(253, 253, 254, 1) 100%
  ) !important;
}
</style>
