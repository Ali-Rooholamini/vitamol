<template>
  <div class="page-title">
    <div class="page-title_title">
      <h2>
        <slot />
      </h2>
      <NuxtImg
        src="/images/vit-butterfly.png"
        format="webp"
        width="61"
        height="57"
        alt="ویتامول"
      />
    </div>
    <NuxtImg
      width="475"
      height="65"
      class="page-title_brand-logo"
      src="/images/vitamol-brand-2.png"
      format="webp"
      alt="vitamol"
    />
  </div>
</template>

<script>
export default {
  name: "PageTitle",
};
</script>

<style lang="scss" scoped>
.page-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title_title {
  border-radius: 80px 0px 0px 0px;
  background: linear-gradient(
    270deg,
    #ffdbe9 0.19%,
    rgba(255, 219, 233, 0) 105.11%
  );
  box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
  padding: 20px 20px 20px 40px;
  position: relative;

  @include breakpoint-up(lg) {
    padding: 30px 80px 30px 60px;
  }
  @include breakpoint-up(xl) {
    padding: 35px 80px 35px 60px;
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
    top: 2px;
    left: 7px;
    width: 32px;
    height: 30px;

    @include breakpoint-up(lg) {
      top: -5px;
      left: -10px;
      width: 61px;
      height: 57px;
    }
  }
}

.page-title_brand-logo {
  margin-left: 100px;
  display: none;

  @include breakpoint-up(md) {
    display: block;
    width: 276px;
    height: auto;
  }
  @include breakpoint-up(lg) {
    width: 300px;
    height: auto;
  }
  @include breakpoint-up(xl) {
    width: 476px;
    height: 68px;
  }
}
</style>
