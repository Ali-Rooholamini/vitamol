<template>
  <BaseModal ref="basketModal" modalName="basketModal" :has-brand-name="false">
    <div class="login-modal_body">
      <b>محصولات داخل سبد خرید شما</b>
      <div v-if="basketItems.length === 0" class="alert" role="alert">
        محصولی یافت نشد
      </div>
      <div v-else>
        <div
          class="d-flex w-100 align-items-center justify-content-start gap-3 mb-3"
          v-for="(item, index) in basketItems"
          :key="index"
        >
          <NuxtImg :src="item.images[0].image" width="60px" height="60px" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import BaseModal from "~/components/global/BaseModal.vue";
import BaseButton from "~/components/global/BaseButton.vue";

import { useBasketStore } from "#imports";

const store = useBasketStore();

const { basketItems } = storeToRefs(store);
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
