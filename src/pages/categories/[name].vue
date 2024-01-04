<template>
  <div class="category-page">
    <PageTitle class="category-page_title mb-5">
      {{ categoryPageTitle }}
    </PageTitle>
    <section></section>
  </div>
</template>

<script lang="ts">
import { compileTemplate } from "vue/compiler-sfc";
import PageTitle from "~/components/common/PageTitle.vue";

definePageMeta({
  middleware: ["categories-page"],
});

export default {
  name: "CategoriesPage",
  components: {
    PageTitle,
  },

  computed: {
    categoryPageTitle() {
      if (this.$route.params.name === "mane-guard") {
        return "محصولات مراقبت ازمو ویتامول";
      } else if (this.$route.params.name === "skin-care") {
        return "محصولات مراقبت از پوست ویتامول";
      } else {
        return "رنگ موهای ویتامول";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@include breakpoint-up(sm) {
  .category-page_title {
    margin-top: 60px;
  }
}
</style>
