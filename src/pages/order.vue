<template>
  <div class="order-page">
    <Meta name="title" content="ثبت سفارش ویتامول" />
    <Meta name="og:title" property="og:title" content="ثبت سفارش ویتامول" />
    <Meta name="description" content="ثبت سفارش ویتامول" />
    <Meta
      name="og:description"
      property="og:description"
      content="ثبت سفارش ویتامول"
    />

    <PageTitle class="order-page_title"> ثبت سفارش </PageTitle>

    <div class="container-fluid">
      <div class="container order-page_content">
        <div class="container order-page_content_butterflies d-none d-xl-block">
          <img
            src="~/assets/images/butterflies-group.webp"
            width="134"
            height="580"
            loading="lazy"
          />
        </div>

        <div class="order-page_content_major-order">
          <b>خرید عمده</b>
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
        <div class="order-page_content_retail-order">
          <b>خرید خرد</b>
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
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "~/components/common/PageTitle.vue";
import BaseButton from "~/components/global/BaseButton.vue";

export default {
  name: "OrderPage",
  components: {
    PageTitle,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.order-page_title {
  margin-bottom: 30px;

  @include breakpoint-up(md) {
    margin-bottom: 65px;
  }
}

.container-fluid {
  padding: 60px 0px 70px;
  background: linear-gradient(
    180deg,
    #d2e2ff 0%,
    rgba(255, 222, 235, 0) 50%,
    #ffdeeb 100%
  );
  margin-bottom: 60px;

  @include breakpoint-up(md) {
    margin-bottom: 122px;
  }
}

.order-page_content {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;

  @include breakpoint-up(md) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.order-page_content_butterflies {
  width: 134px;
  position: absolute;
  top: -90px;
  right: 43.5%;
  z-index: 1;
}

.order-page_content_major-order {
  border-bottom: 1px solid rgb(219, 219, 219);
  padding-bottom: 40px;

  @include breakpoint-up(md) {
    border-bottom: none;
    padding-bottom: 0px;
  }
}

.order-page_content_major-order,
.order-page_content_retail-order {
  width: 100%;
  max-width: 574px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  gap: 36px;

  b {
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
</style>
