<template>
  <div>
    <button
      class="menu-toggle-button open-menu-button d-block d-lg-none"
      type="button"
      @click="toggleOffcanvas"
    >
      <nuxt-icon name="vit-toggle-menu" filled />
    </button>

    <transition name="offcanvas-transition">
      <div v-if="isOpen" class="offcanvas-menu">
        <div class="w-100 d-flex justify-content-end">
          <button
            @click="toggleOffcanvas"
            class="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div class="menu-content">
          <NuxtLink
            class="menu-link active"
            aria-current="page"
            to="/"
            @click="toggleOffcanvas"
          >
            ویتامول
          </NuxtLink>
          <NuxtLink class="menu-link" to="/" @click="toggleOffcanvas">
            محصولات
          </NuxtLink>
          <NuxtLink class="menu-link" to="/" @click="toggleOffcanvas">
            نمایندگی
          </NuxtLink>
          <NuxtLink class="menu-link" to="/" @click="toggleOffcanvas">
            ثبت سفارش
          </NuxtLink>
          <NuxtLink class="menu-link" to="/blog" @click="toggleOffcanvas">
            وبلاگ
          </NuxtLink>
          <NuxtLink class="menu-link" to="/" @click="toggleOffcanvas">
            درباره ما
          </NuxtLink>
          <NuxtLink class="menu-link" to="/" @click="toggleOffcanvas">
            تماس با ما
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleOffcanvas() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-toggle-button {
  background-color: transparent;
  color: var(--color-white) !important;
  outline: none;
  border: none;

  > .nuxt-icon ::v-deep svg {
    width: 27px;
    height: 22px;
  }
}

.offcanvas-menu {
  position: fixed;
  top: 0;
  right: 0px;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: right 0.3s ease-in-out;
}

.offcanvas-transition-enter-active,
.offcanvas-transition-leave-active {
  transition: right 0.3s;
}

.offcanvas-transition-enter,
.offcanvas-transition-leave-to {
  right: -300px;
}

.open-menu-button {
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
}

.close-menu-button {
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  margin-bottom: 10px;
}

.menu-link {
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.menu-content {
  padding: 10px;
}
</style>
