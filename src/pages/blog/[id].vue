<template>
  <div class="post">
    <Meta name="title" :content="postDetail.title + '&nbsp; ویتامول'" />
    <Meta
      name="og:title"
      property="og:title"
      :content="postDetail.title + '&nbsp; ویتامول'"
    />
    <Meta name="description" content="وبلاگ محصولات آرایش بهداشتی ویتامول" />
    <Meta
      name="og:description"
      property="og:description"
      content="وبلاگ محصولات آرایش بهداشتی ویتامول"
    />

    <PageTitle>{{ postDetail.title || "..." }}</PageTitle>
    <div class="post_description">
      <div class="post_bg-color"></div>
      <template v-if="!loading">
        <div class="container post_description-detail">
          <NuxtImg
            :src="postDetail?.images[0]?.image || '/images/header-image.png'"
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
  name: "BlogPostPage",
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
    display: flex;
    flex-direction: column;

    @include breakpoint-up(md) {
      display: block;
    }

    > img {
      align-self: center;
      width: 244px;
      height: 330px;
      float: none;
      margin-right: 0px;
      margin-bottom: 50px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      border-radius: 32px;

      @include breakpoint-up(md) {
        align-self: auto;
        margin-right: 35px;
        margin-bottom: 26px;
        float: left;
      }

      @include breakpoint-up(lg) {
        width: 464px;
        height: 637px;
        margin-right: 65px;
        margin-bottom: 26px;
        float: left;
      }
    }

    > p {
      text-align: justify;
      font-size: 15px;
      font-weight: 400;
      color: var(--secondary-color);

      @include breakpoint-up(sm) {
        font-size: 18px;
      }

      @include breakpoint-up(md) {
        font-size: 22px;
      }

      @include breakpoint-up(lg) {
        font-size: 24px;
      }
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
