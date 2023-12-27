<template>
  <header
    class="container-fluid fixed-top"
    :class="{ 'sticky-menu': isSticky }"
  >
    <nav class="container-xl navbar bg-body-tertiary">
      <div class="w-100 d-flex justify-content-between align-items-center">
        <!-- offcanvas display button -->
        <OffCanvasMenu :currentPath="currentPath" />

        <!-- vitamol brand logo -->
        <div>
          <NuxtLink class="navbar-brand" to="/">
            <img
              class="header_brand-logo"
              width="238"
              height="33"
              src="~/public/images/vitamol-brand.png"
              alt="vitamol"
            />
          </NuxtLink>
        </div>

        <!-- vitamol navbar -->
        <ul ref="navbarLinks" class="nav d-none d-lg-flex">
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              :class="{ active: currentPath === 'index' }"
              to="/"
            >
              ویتامول
            </NuxtLink>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link"
              :class="{ active: currentPath === 'cat' }"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              محصولات
            </a>
            <ul class="dropdown-menu">
              <li>
                <NuxtLink class="nav-link" to="/">
                  محصولات مراقبت از مو
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="nav-link" to="/">
                  محصولات مراقبت از پوست
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="nav-link" to="/"> رنگ مو </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              :class="{ active: currentPath === 'delegate' }"
              to="/"
            >
              نمایندگی
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              :class="{ active: currentPath === 'order' }"
              to="/"
            >
              ثبت سفارش
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              :class="{ active: currentPath === 'blog' }"
              to="/blog"
            >
              وبلاگ
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              :class="{ active: currentPath === 'aboutus' }"
              to="/"
            >
              درباره ما
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              :class="{ active: currentPath === 'contact-us' }"
              to="/"
            >
              تماس با ما
            </NuxtLink>
          </li>
        </ul>

        <!-- login and serach buttons -->
        <div class="header_btn-wrapper">
          <button class="btn me-2 mb-1" type="button">
            <nuxt-icon class="header_btn-search" name="vit-search" filled />
            <span class="d-none d-lg-inline-block">جست و جو</span>
          </button>
          <button class="btn me-2 login mb-1" type="button">
            <nuxt-icon name="vit-profile" filled />
            <span class="d-none d-lg-inline-block">ثبت نام</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import OffCanvasMenu from "../common/OffCanvasMenu.vue";
export default {
  name: "TheHeader",

  components: {
    OffCanvasMenu,
  },

  data() {
    return {
      isSticky: false,
      currentPath: "index",
    };
  },

  mounted() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },

  watch: {
    $route(to) {
      this.currentPath = to.name;
    },
  },

  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 20;
    },
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
header {
  transition: 230ms ease-in;
  background-color: black;
}

header.sticky-menu {
  box-shadow: 1px 0 4px 0 rgb(164, 164, 164);
  background-image: linear-gradient(to bottom, #002561, rgb(255, 255, 255));
}

.header_brand-logo {
  width: 172px;
  height: 24px;

  @include breakpoint-up(sm) {
    width: 238px;
    height: 33px;
  }
}

.dropdown {
  button {
    color: var(--color-white) !important;
  }

  .dropdown-menu {
    text-align: right;
    right: 0 !important;
    left: initial;

    > li .nav-link:hover {
      background-color: #002561 !important;
      color: white !important;
    }
  }
}

.navbar {
  padding-bottom: 20px;
  padding-top: 20px;
  background-color: transparent !important;

  > div {
    gap: 5px;
  }

  .navbar-brand {
    margin-right: 0px !important;
  }

  .nav {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    flex-grow: 1;
    flex-basis: 0;
    padding-right: 0px;
    .nav-item {
      font-size: 16px;
      font-weight: normal;

      > a {
        color: var(--color-white) !important;
      }

      a.active {
        font-weight: bold;
        position: relative;
      }

      a.active::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 8px;
        height: 3px;
        border-radius: 14px;
        background-color: var(--color-white);
        bottom: 0;
        left: 50%;
      }
    }
  }

  .header_btn-wrapper {
    text-align: left;
    > button {
      height: 48px;
      border-radius: 50px;
      background-color: var(--color-white);
      color: var(--secondary-color);
      box-shadow: 0 10px 50px -5px hsla(0, 0, 0, 25%);

      @include breakpoint-down(lg) {
        width: 40px;
        height: 40px;
      }

      .nuxt-icon {
        @include breakpoint-up(lg) {
          margin-left: 5px;
        }
      }

      &:hover {
        background-color: var(--secondary-color);
        color: var(--color-white);
        transition: 150ms ease-in;
      }
    }

    button.login {
      border: 1px solid var(--secondary-color);
    }
  }
}
</style>
