<template>
  <div class="category-page">
    <PageTitle class="category-page_title">
      {{ categoryPageTitle }}
    </PageTitle>
    <section class="category-page_category-wrapper">
      <SubCategories class="container" />
      <div class="category-page_category_bottom-color"></div>
    </section>
  </div>
</template>

<script lang="ts">
import PageTitle from "~/components/common/PageTitle.vue";
import SubCategories from "~/components/page/categories/SubCategories.vue";

definePageMeta({
  middleware: ["categories-page"],
});

export default {
  name: "CategoriesPage",
  components: {
    PageTitle,
    SubCategories,
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
</style>
