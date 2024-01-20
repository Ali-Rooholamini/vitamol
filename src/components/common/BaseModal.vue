<template>
  <div class="modal fade" id="baseModal" tabindex="-1">
    <div class="modal-dialog" :class="{ 'modal-lg': size === 'lg' }">
      <div class="modal-content">
        <div class="modal-body">
          <div class="modal_brand-logo text-center">
            <NuxtImg
              src="/images/vitamol-brand-2.png"
              width="583"
              height="84"
              format="webp"
              loading="lazy"
            />
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",

  props: {
    size: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-body {
  @include breakpoint-up(md) {
    padding: 70px 79px 30px 79px;
  }
}
.modal_brand-logo {
  margin-bottom: 30px;

  @include breakpoint-up(md) {
    margin-bottom: 50px;
  }

  > img {
    width: 100%;
    max-width: 583px;
    height: auto;
  }
}
</style>
