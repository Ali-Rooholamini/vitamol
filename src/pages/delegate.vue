<template>
  <div class="delegates-page">
    <Meta name="title" content="اعطای نمایندگی ویتامول" />
    <Meta
      name="og:title"
      property="og:title"
      content="اعطای نمایندگی ویتامول"
    />
    <Meta name="description" content="اعطای نمایندگی ویتامول" />
    <Meta
      name="og:description"
      property="og:description"
      content="اعطای نمایندگی ویتامول"
    />

    <PageTitle class="delegates-page_title"> اعطای نمایندگی </PageTitle>

    <div class="container-fluid">
      <div class="container delegates-page_content">
        <div class="delegates-page_content-desc">
          <strong> جهت اعطای نمایندگی با مشاوران ما در ارتباط باشید. </strong>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبدد.
          </p>
          <BaseButton :isSvgLeft="true" arrowSvgName="vit--arrow-left-top">
            <NuxtLink to="tel:">مشاوره رایگان</NuxtLink>
          </BaseButton>
        </div>
        <div class="delegates-page_content-butterflies d-none d-md-flex">
          <NuxtImg
            width="191"
            height="181"
            src="images/vit-butterfly.png"
            format="webp"
            loading="lazy"
            alt="ویتامول"
          />
          <NuxtImg
            width="144"
            height="137"
            src="/images/vit-butterfly.png"
            format="webp"
            alt="ویتامول"
            loading="lazy"
          />
          <NuxtImg
            width="99"
            height="94"
            src="/images/vit-butterfly.png"
            format="webp"
            alt="ویتامول"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "~/components/common/PageTitle.vue";
import BaseButton from "~/components/global/BaseButton.vue";

export default {
  name: "DelegatePage",
  components: {
    PageTitle,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.delegates-page_title {
  margin-bottom: 35px;

  @include breakpoint-up(md) {
    margin-bottom: 65px;
  }
}

.delegates-page_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .delegates-page_content-desc {
    width: 100%;
    max-width: 821px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 38px;

    strong {
      color: var(--secondary-color);
      font-size: 24px;
      font-weight: 500;

      @include breakpoint-up(sm) {
        font-size: 26px;
      }

      @include breakpoint-up(md) {
        font-size: 34px;
      }
    }

    p {
      text-align: justify;
      color: rgba(0, 37, 97, 0.8);
      font-size: 18px;
      font-weight: 400;
      line-height: normal;

      @include breakpoint-up(sm) {
        font-size: 22px;
      }

      @include breakpoint-up(md) {
        font-size: 26px;
      }
    }
  }

  .delegates-page_content-butterflies {
    position: relative;
    display: flex;
    flex-direction: column;

    :nth-child(1) {
      position: absolute;
      top: -170px;
      right: calc(10% + 20px);

      @include breakpoint-up(md) {
        right: initial;
        left: -35px;
      }
    }

    :nth-child(2) {
      align-self: flex-start;
      margin-left: 0px;
      transform: rotate(55deg);

      @include breakpoint-up(lg) {
        margin-left: 50px;
      }
    }
    :nth-child(3) {
      align-self: flex-end;
    }
  }
}

.container-fluid {
  margin-bottom: 50px;
  background: linear-gradient(180deg, #d2e2ff 0%, rgba(255, 255, 255, 0) 100%);
  padding-top: 60px;
}
</style>
