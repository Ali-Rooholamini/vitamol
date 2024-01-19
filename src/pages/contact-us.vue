<template>
  <div class="contact-us">
    <PageTitle class="contact-us_first-title">تماس با ما</PageTitle>

    <section class="contact-us_main">
      <div class="contact-us_communicate">
        <strong>راه های ارتباط با مشاورین ویتامول</strong>
        <ul class="contact-us_communicate-info">
          <li>
            <span class="contact-us_communicate-info-svg">
              <nuxt-icon name="contact/vit--phone" filled />
            </span>
            <span class="contact-us_communicate-info-detail" dir="ltr">
              ۰۲۱-۵۶۵۶۵۶۵۶ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ۰۲۱-۵۶۵۶۵۶۵۶
            </span>
          </li>
          <li>
            <span class="contact-us_communicate-info-svg">
              <nuxt-icon name="contact/vit--iphone" filled />
            </span>
            <span class="contact-us_communicate-info-detail" dir="ltr">
              ۰۲۱-۵۶۵۶۵۶۵۶ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ۰۲۱-۵۶۵۶۵۶۵۶
            </span>
          </li>
          <li>
            <span class="contact-us_communicate-info-svg">
              <nuxt-icon name="contact/vit--message" filled />
            </span>
            <span class="contact-us_communicate-info-detail" dir="ltr">
              @vitamol
            </span>
          </li>
          <li>
            <span class="contact-us_communicate-info-svg">
              <nuxt-icon name="contact/vit--email" filled />
            </span>
            <span class="contact-us_communicate-info-detail" dir="ltr">
              @vitamolgamil.com
            </span>
          </li>
          <li>
            <span class="contact-us_communicate-info-svg">
              <nuxt-icon name="contact/vit--location" filled />
            </span>
            <span class="contact-us_communicate-info-detail" dir="ltr">
              تهران، تهران، ویتامول
            </span>
          </li>
        </ul>
      </div>
      <div class="contact-us_contact-form">
        <div class="contact-us_contact-form-title">
          <h2>تماس با شما</h2>
          <NuxtImg
            src="/images/vit-butterfly.png"
            format="webp"
            width="61"
            height="57"
            alt="ویتامول"
          />
        </div>
        <form @submit.prevent></form>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "~/components/common/PageTitle.vue";

export default {
  name: "ContactUsPage",
  components: {
    PageTitle,
  },
};
</script>

<style lang="scss" scoped>
.contact-us_first-title {
  margin-bottom: 30px;

  @include breakpoint-up(md) {
    margin-bottom: 60px;
  }
}

.contact-us_main {
  display: flex;
  justify-content: space-between;
  margin-bottom: 87px;

  .contact-us_communicate {
    padding: 24px 100px 31px 100px;
    background: linear-gradient(
      270deg,
      #ffdeeb 0.9%,
      rgba(255, 222, 235, 0) 72.48%
    );

    > strong {
      display: block;
      margin-bottom: 22px;
      font-size: 24px;
      font-weight: 500;
      line-height: normal;
      color: var(--secondary-color);
    }

    .contact-us_communicate-info {
      list-style: none;
      padding: 0px;

      > li {
        margin-bottom: 16px;
      }

      > li:last-child {
        margin-bottom: 0px;
      }

      .contact-us_communicate-info-svg {
        display: inline-block;
        margin-left: 25px;
        padding: 12px 12px 11px 11px;
        border: 1px solid var(--secondary-color);
        background: linear-gradient(
          180deg,
          #d2e2ff 0%,
          rgba(210, 226, 255, 0) 100%
        );
        border-radius: 11px;

        > .nuxt-icon:deep(svg) {
          width: 24px;
          height: 24px;
          margin: 0px;
        }
      }

      .contact-us_communicate-info-detail {
        vertical-align: bottom;
        color: var(--secondary-color);
        font-size: 22px;
        font-weight: 500;
        font-family: PeydaWeb;
      }
    }
  }

  .contact-us_contact-form {
    .contact-us_contact-form-title {
      border-radius: 00px 80px 0px 0px;
      background: linear-gradient(
        90deg,
        #dae7ff 13.14%,
        rgba(255, 255, 255, 0) 104.68%
      );
      box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
      padding: 20px 40px 20px 20px;
      position: relative;

      @include breakpoint-up(lg) {
        padding: 30px 60px 30px 80px;
      }
      @include breakpoint-up(xl) {
        padding: 35px 60px 35px 80px;
      }

      h2 {
        font-size: 22px;
        line-height: normal;
        font-weight: 600;
        color: var(--secondary-color);
        margin: 0px;

        @include breakpoint-up(lg) {
          font-size: 26px;
        }
        @include breakpoint-up(xl) {
          font-size: 34px;
        }
      }

      > img {
        position: absolute;
        top: 15px;
        right: -5px;
        width: 32px;
        height: 30px;

        @include breakpoint-up(lg) {
          top: 15px;
          right: -25px;
          width: 61px;
          height: 57px;
        }
      }
    }
  }
}
</style>
