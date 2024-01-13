<template>
  <div>
    <button
      class="menu-toggle-button open-menu-button d-block d-lg-none"
      type="button"
      @click="toggleOffcanvas"
    >
      <nuxt-icon name="vit--toggle-menu" filled />
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
            class="menu-link"
            :class="{ active: currentPath === 'index' }"
            aria-current="page"
            to="/"
            @click="toggleOffcanvas"
          >
            ویتامول
          </NuxtLink>
          <div class="dropdown-wrapper">
            <a
              class="menu-dropdown"
              :class="{ active: currentPath === 'cat' }"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              محصولات
            </a>
            <div class="collapse" id="collapseExample">
              <ul class="nav">
                <li class="nav-item">
                  <NuxtLink
                    class="nav-link"
                    to="/categories/mane-guard"
                    @click="toggleOffcanvas"
                  >
                    محصولات مراقبت از مو
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-link"
                    to="/categories/skin-care"
                    @click="toggleOffcanvas"
                  >
                    محصولات مراقبت از پوست
                  </NuxtLink>
                </li>
                <li class="nav-item">
                  <NuxtLink
                    class="nav-link"
                    to="/categories/hue-harmony"
                    @click="toggleOffcanvas"
                  >
                    رنگ مو
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <NuxtLink
            class="menu-link"
            :class="{ active: currentPath === 'delegate' }"
            to="/delegate"
            @click="toggleOffcanvas"
          >
            نمایندگی
          </NuxtLink>
          <NuxtLink
            class="menu-link"
            :class="{ active: currentPath === 'order' }"
            to="/"
            @click="toggleOffcanvas"
          >
            ثبت سفارش
          </NuxtLink>
          <NuxtLink
            class="menu-link"
            :class="{ active: currentPath === 'blog' }"
            to="/"
            @click="toggleOffcanvas"
          >
            وبلاگ
          </NuxtLink>
          <NuxtLink
            class="menu-link"
            :class="{ active: currentPath === 'aboutus' }"
            to="/"
            @click="toggleOffcanvas"
          >
            درباره ما
          </NuxtLink>
          <NuxtLink
            class="menu-link"
            :class="{ active: currentPath === 'contant-us' }"
            to="/"
            @click="toggleOffcanvas"
          >
            تماس با ما
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    currentPath: {
      type: String,
      required: true,
    },
  },

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

  > .nuxt-icon :deep(svg) {
    width: 27px;
    height: 22px;
  }
}

.active {
  color: #0958d6 !important;
}

.offcanvas-menu {
  position: fixed;
  top: 0;
  right: 0px;
  width: 300px;
  height: 100%;
  background-color: var(--secondary-light-color);
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
}

.close-menu-button {
  cursor: pointer;
  border: none;
  background: none;
  font-size: 16px;
  margin-bottom: 10px;
}

.menu-dropdown,
.menu-link {
  display: block;
  margin-bottom: 0px;
  padding-top: 17px;
  text-decoration: none;
  color: #333;
  font-size: 20px;
}

.nav-item > .nav-link {
  color: black;
}

.dropdown-wrapper {
  padding-bottom: 17px;
  border-bottom: 1px solid #bfbfbf;
}

.menu-link {
  padding-bottom: 17px;
  border-bottom: 1px solid #bfbfbf;

  &:last-child {
    border-bottom: none;
  }
}

.menu-content {
  padding: 10px;
}
</style>
