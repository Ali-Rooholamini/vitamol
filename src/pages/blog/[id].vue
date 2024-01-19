<template>
  <div class="post">
    <PageTitle>{{ postDetail.title || "..." }}</PageTitle>
    <div class="post_description">
      <div class="post_bg-color"></div>
      <template v-if="!loading">
        <div class="container post_description-detail">
          <NuxtImg
            :src="postDetail?.image || '/images/header-image.png'"
            width="464"
            height="637"
            format="webp"
          />
          <p class="post_description-content">
            {{ postDetail.description }}
          </p>
        </div>
      </template>
      <template v-else>
        <div class="w-100 d-flex justify-content-center mb-5">
          <div class="spinner-border mb-5">
            <span class="sr-only mb-5"></span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { getBlogDetail } from "~/services/blog.js";
import PageTitle from "~/components/common/PageTitle.vue";

export default {
  name: "outPage",
  components: {
    PageTitle,
  },

  data() {
    return {
      loading: false,
      postDetail: {},
    };
  },

  created() {
    const routeId = this.$route.params.id;
    this.loading = true;

    getBlogDetail(this.$axios, routeId)
      .then(({ data }) => {
        this.postDetail = { ...data };
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        if (
          this.postDetail?.title === undefined &&
          this.postDetail.description === undefined
        ) {
          return this.$router.push("/404");
        }

        this.loading = false;
      });
  },
};
</script>

<style lang="scss" scoped>
.post_description {
  margin-top: 80px;
  position: relative;
  padding-top: 150px;
  overflow: hidden;
  margin-bottom: 200px;

  .post_description-detail {
    > img {
      float: left;
      margin-right: 65px;
      margin-bottom: 26px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 32px;
    }

    > p {
      text-align: justify;
    }
  }

  .post_bg-color {
    position: absolute;
    top: 0px;
    right: -200px;
    width: calc(100% + 400px);
    height: 254px;
    background: linear-gradient(
      180deg,
      #d2e2ff 7.23%,
      #d2e2ff 7.24%,
      rgba(213, 226, 254, 0.94) 12.24%,
      rgba(255, 255, 255, 0) 87.29%
    );
    z-index: -1;
    border-radius: 45%;
  }
}
</style>
