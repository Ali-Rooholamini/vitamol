<template>
  <div>
    <Meta name="title" content="وبلاگ ویتامول" />
    <Meta name="og:title" property="og:title" content="وبلاگ ویتامول" />
    <Meta name="description" content="وبلاگ محصولات آرایش بهداشتی ویتامول" />
    <Meta
      name="og:description"
      property="og:description"
      content="وبلاگ محصولات آرایش بهداشتی ویتامول"
    />

    <PageTitle class="blog-page_title">مقالات مفید ویتامول</PageTitle>

    <section class="container blog-page_post-wrapper">
      <template v-if="!loading && blogList.length > 0">
        <div
          v-for="post in blogList"
          :key="post.id"
          class="blog-page_post"
          @click="goToPostPage(post.id)"
        >
          <div
            class="blog-page_post_image-wrapper pink-bg"
            :class="{ 'blue-bg': post.id % 2 === 0 }"
          >
            <NuxtImg
              :src="apiOriginProtocol + post?.images[0]?.resized_image"
              format="webp"
              width="237"
              height="330"
            />
          </div>
          <div class="blog-page_post_desc">
            <b>{{ post.title }}</b>
            <p>{{ post.description }}</p>
          </div>
        </div>
      </template>

      <template v-else-if="loading">
        <div class="w-100 d-flex justify-content-center">
          <div class="spinner-border">
            <span class="sr-only"></span>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="container alert" role="alert">
          هنوز هیچ پستی برای نمایش وجود ندارد
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import { getBlogList } from "~/services/blog.js";
import PageTitle from "~/components/common/PageTitle.vue";

export default {
  name: "BlogPage",
  components: {
    PageTitle,
  },

  data() {
    return {
      blogList: [],
      loading: false,
    };
  },

  created() {
    this.loading = true;

    getBlogList(this.$axios)
      .then(({ data }) => {
        this.blogList = JSON.parse(JSON.stringify(data));
        console.log(this.blogList);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.loading = false;
      });
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
  },

  methods: {
    goToPostPage(id) {
      this.$router.push(`/blog/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-page_title {
  margin-bottom: 40px;

  @include breakpoint-up(md) {
    margin-bottom: 70px;
  }
}

.blog-page_post-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  gap: 40px;

  .blog-page_post {
    position: relative;
    cursor: pointer;

    .blog-page_post_image-wrapper {
      width: 237px;
      height: 330px;
      border-radius: 16px 16px 16px 16px;
      background: var(--color-white);
      box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
      position: relative;

      > img {
        border-radius: 16px 16px 16px 16px;
      }
    }

    .pink-bg::before {
      content: "";
      width: 152px;
      height: 240px;
      border-radius: 16px 16px 16px 0px;
      background: linear-gradient(
        201deg,
        #f5b7cf 0%,
        rgba(245, 183, 207, 0) 53.13%
      );
      position: absolute;
      top: 49px;
      right: -39px;
      z-index: -1;
    }

    .blue-bg::before {
      content: "";
      width: 152px;
      height: 240px;
      border-radius: 16px 16px 16px 0px;
      background: linear-gradient(
        201deg,
        #f5b7cf 0%,
        rgba(245, 183, 207, 0) 53.13%
      );
      position: absolute;
      top: 49px;
      right: -39px;
      z-index: -1;
    }

    .blog-page_post_desc {
      position: absolute;
      bottom: 0;
      width: 237px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      background: rgba(69, 69, 69, 0.64);
      border-radius: 0 0 16px 16px;
      padding-right: 19px;
      padding-left: 19px;

      > p {
        margin-bottom: 12px;
        font-size: 10px;
        font-weight: 400;
        color: var(--color-white);
      }

      > b {
        font-size: 12px;
        font-weight: 500;
        color: var(--color-white);
        margin-top: 12px;
        margin-bottom: 5px;
      }
    }
  }
}

.alert {
  width: 50%;
  text-align: center;
  background-color: var(--secondary-color);
  color: var(--color-white);
}
</style>
