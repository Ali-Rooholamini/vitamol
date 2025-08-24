<template>
  <BaseModal ref="basketModal" modalName="basketModal" :has-brand-name="false">
    <div class="login-modal_body">
      <b>محصولات داخل سبد خرید شما</b>
      <div class="alert" role="alert">محصولی یافت نشد</div>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from "~/components/global/BaseModal.vue";
import BaseButton from "~/components/global/BaseButton.vue";

export default {
  name: "LoginModal",
  components: {
    BaseModal,
    BaseButton,
  },

  data() {
    return {
      isLoading: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.login-modal_body {
  > b {
    display: block;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: var(--scondary-color);
    margin-bottom: 30px;
  }
}

.alert {
  width: 320px;
  text-align: center;
  background-color: var(--secondary-color);
  color: var(--color-white);
}
</style>
