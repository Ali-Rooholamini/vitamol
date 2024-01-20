<template>
  <div>
    <BaseModal modalName="loginModal">
      <div class="login-modal_body">
        <b>اطلاعات خود را وارد کنید.</b>
        <form @submit.prevent class="login-modal_body-form">
          <BaseFormTextInput
            class="contact-us_form-input w-100"
            placeholder="نام:"
            :min="5"
          />
          <BaseFormTextInput
            class="contact-us_form-input w-100"
            placeholder="نام خانوادگی:"
            :min="5"
          />
          <BaseFormTextInput
            class="contact-us_form-input w-100"
            placeholder="شماره تماس:"
            validation-type="phoneNumber"
            :regex="/^(\+98|0)?9\d{9}$/"
            :min="11"
            :max="11"
          />
          <BaseFormTextInput
            class="contact-us_form-input w-100"
            placeholder="توضیحات(اختیاری):"
            :min="5"
          />
          <BaseButton data-bs-dismiss="modal">ارسال</BaseButton>
        </form>
      </div>
    </BaseModal>

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
import BaseModal from "~/components/common/BaseModal.vue";
import BaseButton from "~/components/global/BaseButton.vue";
import BaseFormTextInput from "~/components/global/BaseFormTextInput.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeader,
    TheFooter,
    BaseModal,
    BaseButton,
    BaseFormTextInput,
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

.login-modal_body {
  > b {
    display: block;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    color: var(--scondary-color);
    margin-bottom: 30px;

    @include breakpoint-up(sm) {
      font-size: 26px;
    }
    @include breakpoint-up(md) {
      font-size: 32px;
    }
    @include breakpoint-up(lg) {
      font-size: 36px;
    }
  }

  .login-modal_body-form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    flex-wrap: wrap;

    > div {
      width: 100%;

      @include breakpoint-up(sm) {
        flex: 1 0 48%;
      }

      &:deep(input) {
        background-color: #d9dcfe;
        border: 1px solid #d9dcfe;
        color: rgba(0, 37, 97, 0.7) !important;
      }
    }

    > button {
      margin-top: 16px;
      width: 100%;
      border-radius: 8px !important;
    }
  }
}
</style>
