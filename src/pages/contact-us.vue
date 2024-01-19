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
        <form @submit.prevent class="contact-us_form">
          <BaseFormTextInput
            class="contact-us_form-input mb-4"
            placeholder="نام و نام خانوادگی:"
            v-model:value="contactUsForm.fullName"
            :min="5"
          />
          <BaseFormTextInput
            class="contact-us_form-input mb-4"
            placeholder="شماره تماس:"
            v-model:value="contactUsForm.phoneNumber"
            validation-type="phoneNumber"
            :regex="/^(\+98|0)?9\d{9}$/"
            :min="11"
            :max="11"
          />
          <BaseFormTextInput
            class="contact-us_form-input mb-4"
            placeholder="ایمیل:"
            v-model:value="contactUsForm.email"
            validation-type="email"
            :regex="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"
          />
          <div class="contact-us_form-submit">
            <div class="contact-us_form-date">
              <label for="weekDay">ساعت تماس با شما</label>
              <div class="contact-us_form-date-wrapper">
                <select
                  name="weekDay"
                  id="weekDay"
                  required
                  v-model="contactUsForm.weekDay"
                >
                  <option value="0" disabled selected>روز</option>
                  <option
                    v-for="(day, index) in weekDays"
                    :key="index"
                    :value="day"
                  >
                    {{ day }}
                  </option>
                </select>
                <select
                  name="dayTime"
                  id="dayTime"
                  required
                  v-model="contactUsForm.dayHour"
                >
                  <option value="0" disabled selected>ساعت</option>
                  <option value="فبل از ظهر">قبل از ظهر</option>
                  <option value="بعد از ظهر">بعد از ظهر</option>
                </select>
              </div>
            </div>
            <BaseButton class="contact-us_form-submit-button">ارسال</BaseButton>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "~/components/common/PageTitle.vue";
import BaseButton from "~/components/global/BaseButton.vue";
import BaseFormTextInput from "~/components/global/BaseFormTextInput.vue";

export default {
  name: "ContactUsPage",
  components: {
    PageTitle,
    BaseFormTextInput,
    BaseButton,
  },

  data() {
    return {
      contactUsForm: {
        fullName: "",
        phoneNumber: "",
        email: "",
        weekDay: "0",
        dayHour: "0",
      },
    };
  },

  computed: {
    weekDays() {
      return [
        "شنبه",
        "یک شنبه",
        "دو شنبه",
        "سه شنبه",
        "چهارشنبه",
        "پنج شنبه",
        "جمعه",
      ];
    },
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
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 87px;

  @include breakpoint-up(md) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0px;
  }
  .contact-us_communicate {
    padding: 24px 15px 31px 15px;
    background: linear-gradient(
      270deg,
      #ffdeeb 0.9%,
      rgba(255, 222, 235, 0) 72.48%
    );

    @include breakpoint-up(sm) {
      padding: 24px 20px 31px 20px;
    }

    @include breakpoint-up(md) {
      padding: 24px 40px 31px 40px;
    }
    @include breakpoint-up(lg) {
      padding: 24px 80px 31px 80px;
    }
    @include breakpoint-up(xl) {
      padding: 24px 100px 31px 100px;
    }

    > strong {
      display: block;
      margin-bottom: 22px;
      font-size: 18px;
      font-weight: 500;
      line-height: normal;
      color: var(--secondary-color);

      @include breakpoint-up(sm) {
        font-size: 20px;
      }
      @include breakpoint-up(md) {
        font-size: 22px;
      }
      @include breakpoint-up(lg) {
        font-size: 24px;
      }
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
        font-size: 15px;
        font-weight: 500;
        font-family: PeydaWeb;

        @include breakpoint-up(sm) {
          font-size: 16px;
        }

        @include breakpoint-up(md) {
          font-size: 20px;
        }

        @include breakpoint-up(lg) {
          font-size: 18px;
        }

        @include breakpoint-up(xl) {
          font-size: 22px;
        }
      }
    }
  }

  .contact-us_contact-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    .contact-us_contact-form-title {
      border-radius: 0px 80px 0px 015px;
      background: linear-gradient(
        90deg,
        #dae7ff 13.14%,
        rgba(255, 255, 255, 0) 104.68%
      );
      box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
      padding: 20px 40px 20px 20px;
      position: relative;
      margin-bottom: 30px;

      @include breakpoint-up(md) {
        margin-bottom: 60px;
      }

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

    .contact-us_form {
      width: 100%;
      padding: 24px 15px 31px 15px;
      background: linear-gradient(
        90deg,
        #d5e4ff 0.9%,
        rgba(255, 255, 255, 0) 72.48%
      );

      @include breakpoint-up(sm) {
        width: initial;
        padding: 24px 40px 31px 40px;
      }

      @include breakpoint-up(md) {
        padding: 24px 20px 31px 20px;
      }
      @include breakpoint-up(lg) {
        padding: 24px 40px 31px 40px;
      }
      @include breakpoint-up(xl) {
        padding: 24px 80px 31px 80px;
      }

      > .contact-us_form-input {
        width: 100%;

        @include breakpoint-up(md) {
          width: 400px;
        }

        @include breakpoint-up(lg) {
          width: 360px;
        }

        @include breakpoint-up(xl) {
          width: 400px;
        }
      }
    }
  }
}

.contact-us_form-submit {
  font-family: PeydaWeb;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;

  .contact-us_form-date {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;

    > label {
      font-size: 12px;
      font-weight: 500;
      color: var(--secondary-color);
    }

    .contact-us_form-date-wrapper {
      width: 249px;
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 7px;
      padding: 6px 8px;
      border: 1px solid var(--secondary-color);
      border-radius: 8px;

      > select {
        cursor: pointer;
        width: 100%;
        max-width: 113px;
        height: 36px;
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-color);
        text-align: right;
        background: #bad4ff;
        padding: 0px 8px;
        border-radius: 8px;
        border: none;
      }
    }
  }

  .contact-us_form-submit-button {
    width: 100%;
    height: 48px !important;
    border-radius: 8px !important;

    @include breakpoint-up(md) {
      height: 48px !important;
    }
  }
}
</style>
