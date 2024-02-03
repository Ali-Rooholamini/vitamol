<template>
  <BaseModal ref="loginModal" modalName="loginModal">
    <div class="login-modal_body">
      <b>اطلاعات خود را وارد کنید.</b>
      <form @submit.prevent class="login-modal_body-form">
        <BaseFormTextInput
          class="contact-us_form-input"
          placeholder="نام :"
          v-model:value="firstName"
          :min="5"
        />
        <BaseFormTextInput
          class="contact-us_form-input"
          placeholder="نام خانوادگی :"
          v-model:value="lastName"
          :min="5"
        />
        <BaseFormTextInput
          class="contact-us_form-input"
          placeholder="شماره تماس:"
          v-model:value="phoneNumber"
          validation-type="phoneNumber"
          :regex="/^(\+98|0)?9\d{9}$/"
          :min="11"
          :max="11"
        />
        <BaseFormTextInput
          class="contact-us_form-input"
          placeholder="توضیحات(اختیاری):"
          v-model:value="description"
          :min="5"
        />
        <BaseButton @click="registerUser" data-bs-dismiss="modal">
          <div v-if="isLoading" class="spinner-border">
            <span class="sr-only"></span>
          </div>
          <span v-else>ارسال</span>
        </BaseButton>
      </form>
    </div>
  </BaseModal>
</template>

<script>
import { registerUser } from "~/services/accounting.js";
import BaseModal from "~/components/common/BaseModal.vue";
import BaseButton from "~/components/global/BaseButton.vue";
import BaseFormTextInput from "~/components/global/BaseFormTextInput.vue";

export default {
  name: "LoginModal",
  components: {
    BaseModal,
    BaseButton,
    BaseFormTextInput,
  },

  data() {
    return {
      isLoading: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      description: "",
    };
  },

  methods: {
    registerUser() {
      if (
        this.firstName.length === 0 ||
        this.lastName.length === 0 ||
        this.phoneNumber.length === 0
      ) {
        return;
      }

      this.isLoading = true;

      registerUser(
        this.$axios,
        this.firstName,
        this.lastName,
        this.phoneNumber,
        this.description
      )
        .then((res) => {
          alert("ثبت نام با موفقیت انجام شد");
        })
        .catch((res) => {
          console.error(res);
          alert("مشکلی رخ داده است");
        })
        .finally(() => {
          this.firstName = "";
          this.lastName = "";
          this.phoneNumber = "";
          this.description = "";
          this.isLoading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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
