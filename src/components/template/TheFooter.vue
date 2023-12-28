<template>
  <footer class="container-fluid fixed-bottom">
    <div class="container">
      <div class="footer_brand-images-wrapper">
        <img
          width="110"
          height="31"
          src="/images/vitamol-brand-farsi.png"
          alt="ویتامول"
        />
        <img
          width="145"
          height="31"
          src="/images/vitamol-brand-footer.png"
          alt="vitamol"
        />
      </div>
      <div class="footer_links-wrapper row">
        <div class="col-6 col-md-3 col-lg-2">
          <ul class="footer_links-section">
            <li><NuxtLink to="/contact-us">تماس با ما</NuxtLink></li>
            <li><NuxtLink to="/delegate">اعطای نمایندگی</NuxtLink></li>
            <li><NuxtLink to="/contact-us">استخدام</NuxtLink></li>
            <li><NuxtLink to="/order">ثبت سفارش</NuxtLink></li>
          </ul>
        </div>
        <div class="col-6 col-md-3 col-lg-2">
          <ul class="footer_links-section">
            <li><NuxtLink to="/cat">محصولات</NuxtLink></li>
            <li><NuxtLink to="/cat">محصولات سالنی</NuxtLink></li>
            <li><NuxtLink to="/cat">دیگر محصولات</NuxtLink></li>
            <li><NuxtLink to="/">دانلود کاتالوگ</NuxtLink></li>
          </ul>
        </div>
        <div class="col-6 mt-5 mt-md-0 col-md-3 col-lg-2">
          <ul class="footer_links-section">
            <li>روزها و ساعت‌های کاری</li>
            <li>شنبه تا پنج‌شنبه</li>
            <li>08:00 تا 18:00</li>
          </ul>
        </div>
        <div class="col-6 mt-5 mt-md-0 col-md-3 col-lg-2">
          <span>راه‌های ارتباطی</span>
          <div class="footer_social-section">
            <NuxtLink to="">
              <nuxt-icon name="social/instagram" filled />
            </NuxtLink>
            <NuxtLink to="">
              <nuxt-icon name="social/twitter" filled />
            </NuxtLink>
            <NuxtLink to="">
              <nuxt-icon name="social/whatsapp" filled />
            </NuxtLink>
            <NuxtLink to="">
              <nuxt-icon name="social/telegram" filled />
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-lg-4 footer_license-wrapper">
          <div class=""></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="footer_end-section"></div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--secondary-light-color) !important;
  padding-top: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--secondary-color) !important;
  padding-right: 0px;
  padding-left: 0px;
}

.footer_brand-images-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img:first-child {
    @include breakpoint-up(md) {
      width: 203px;
      height: 57px;
    }
  }

  > img:last-child {
    @include breakpoint-up(md) {
      width: 244px;
      height: 52px;
    }
  }
}

.footer_links-wrapper {
  margin-top: 21px;

  @include breakpoint-up(md) {
    margin-top: 32px;
  }
}

.footer_links-section {
  list-style: none;
  padding: 0px;

  li {
    margin-bottom: 8px;

    a:hover {
      color: #537abb !important;
      transition: 140ms ease-in-out;
    }
  }
}

.footer_social-section {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 7px;

  @include breakpoint-up(sm) {
    margin-top: 25px;
  }

  a {
    cursor: pointer;
    > .nuxt-icon :deep(svg) {
      width: 20px;
      height: 20px;

      &:hover {
        color: #537abb !important;
        transition: 150ms ease-in-out;
      }
    }
  }
}

.footer_license-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 25px;
  border-top: 1px solid #cecece;
  gap: 16px;

  @include breakpoint-up(lg) {
    border-top: none;
    padding-top: 0px;
    align-items: flex-start;
  }

  > div {
    width: 57px;
    height: 57px;
    background-color: var(--color-white) !important;
    box-shadow: 0px 10px 50px -5px rgba($color: #000000, $alpha: 25%);
    border-radius: 8px;

    @include breakpoint-up(md) {
      border-radius: 10px;
      width: 80px;
      height: 80px;
    }

    @include breakpoint-up(xl) {
      border-radius: 12px;
      width: 100px;
      height: 100px;
    }

    @include breakpoint-up(xxl) {
      border-radius: 14px;
      width: 120px;
      height: 120px;
    }
  }
}

.footer_end-section {
  width: 100%;
  height: 18px;
  background-color: var(--secondary-color);
  margin-top: 15px;

  @include breakpoint-up(md) {
    height: 40px;
    margin-top: 40px;
  }
}
</style>
