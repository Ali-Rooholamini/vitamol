<template>
  <div class="landing-header">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-12 col-md-6 landing-header_right-section">
          <p>شما لایق بهترین‌ها هستید.</p>
          <div class="landing-header_right-section_brand">
            <h1>ویتامول</h1>

            <template v-if="isLoading">
              <div
                class="w-100 h-100 d-flex justify-content-center align-items-center mt-4 mb-4"
              >
                <div class="spinner-border">
                  <span class="sr-only"></span>
                </div>
              </div>
            </template>

            <p v-else-if="eventDetails !== null">
              {{ eventDetails.description }}
            </p>

            <p v-else>
              بهترین برند محصولات مراقبت از پوست و مو در ایران بهترین برند
              محصولات مراقبت از پوست و مو در ایران بهترین برند محصولات مراقبت از
              پوست و مو در ایران بهترین برند محصولات مراقبت از پوست و مو در
              ایران
            </p>

            <NuxtImg
              src="images/vit-butterfly.png"
              format="webp"
              alt="ویتامول"
            />
          </div>
          <BaseButton :isSvgLeft="true" arrowSvgName="vit--arrow-left-top">
            <NuxtLink to="/aboutus">درباره ویتامول</NuxtLink>
          </BaseButton>
        </div>
        <div class="d-none d-lg-flex col-6 landing-header_left-section">
          <div class="header-slider landing-header_left-section_slider">
            <template v-if="isLoading">
              <div
                class="w-100 h-100 d-flex justify-content-center align-items-center"
              >
                <div class="spinner-border">
                  <span class="sr-only"></span>
                </div>
              </div>
            </template>

            <HeaderSlider
              v-else-if="
                !isLoading &&
                eventDetails !== null &&
                eventDetails.images.length > 0
              "
              :eventImages="eventDetails.images"
            />

            <img v-else src="/images/header-image.png" alt="مراقبت از پوست" />

            <div class="header-slider_bottom-left-design">
              <svg
                width="100"
                height="143"
                viewBox="0 0 100 143"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Line 1"
                  d="M1 0L1.00001 126C1.00001 134.837 8.16345 142 17 142L100 142"
                  stroke="url(#paint0_linear_1570_4276)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1570_4276"
                    x1="-1.72834"
                    y1="138.854"
                    x2="46.5657"
                    y2="85.7958"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F43682" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="header-slider_top-right-design">
              <svg
                width="225"
                height="405"
                viewBox="0 0 225 405"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="25"
                  y="24"
                  width="169"
                  height="289"
                  rx="24"
                  fill="url(#paint0_linear_1570_4271)"
                />
                <rect
                  x="1"
                  y="1"
                  width="223"
                  height="403"
                  rx="23"
                  stroke="url(#paint1_linear_1570_4271)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1570_4271"
                    x1="223.415"
                    y1="-81.715"
                    x2="30.3877"
                    y2="143.668"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4A86E0" />
                    <stop offset="0.966826" stop-color="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1570_4271"
                    x1="195.915"
                    y1="-6.40953e-07"
                    x2="109.843"
                    y2="273.152"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F5458B" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getEvent } from "~/services/event.js";

import { defineComponent } from "vue";
import BaseButton from "~/components/global/BaseButton.vue";
import HeaderSlider from "./HeaderSlider.vue";

export default defineComponent({
  name: "LandingHeader",
  components: {
    HeaderSlider,
    BaseButton,
  },

  data() {
    return {
      isLoading: true,
      eventDetails: null,
    };
  },

  created() {
    this.isLoading = true;

    getEvent(this.$axios)
      .then(({ data }) => {
        if (data.description.length > 0 && data.images.length > 0) {
          this.eventDetails = JSON.parse(JSON.stringify(data));
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
});
</script>

<style lang="scss" scoped>
.landing-header {
  padding-bottom: 93px;
  background: linear-gradient(
    to top,
    #ffdbe9 0%,
    rgba(255, 255, 255, 0) 21.09%
  );
}

.landing-header_right-section {
  color: var(--secondary-color);

  > p {
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 8px;

    @include breakpoint-up(md) {
      font-size: 18px;
    }

    @include breakpoint-up(lg) {
      font-size: 20px;
    }
  }

  .landing-header_right-section_brand {
    width: calc(100% - 20px);
    position: relative;
    margin-bottom: 20px;

    @include breakpoint-up(md) {
      width: 100%;
      max-width: 364px;
      margin-bottom: 20px;
    }

    @include breakpoint-up(lg) {
      width: 100%;
      max-width: 404px;
      margin-bottom: 36px;
    }

    h1 {
      font-family: PeydaWeb;
      font-size: 62px;
      font-weight: bold;
      writing-mode: horizontal-tb;
      letter-spacing: 1px;

      @include breakpoint-up(md) {
        font-size: 72px;
      }

      @include breakpoint-up(lg) {
        font-size: 92px;
      }
    }

    > p {
      text-align: right;
      color: var(--text-color);
      font-size: 18px;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 0px;
      margin-top: 19px;

      @include breakpoint-up(md) {
        font-size: 18px;
        line-height: 26px;
        margin-top: 19px;
      }

      @include breakpoint-up(lg) {
        font-size: 20px;
        line-height: 26px;
        margin-top: 19px;
      }
    }

    img {
      width: 119px;
      height: 113px;
      position: absolute;
      top: -70px;
      left: -25px;
    }
  }
}

.landing-header_left-section {
  display: flex;
  flex-direction: row-reverse;
}

.header-slider {
  position: relative;
  width: 395px;
  height: 549px;
  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.25);
  border-radius: 32px;

  img {
    width: 100%;
    border-radius: 32px;
  }

  .header-slider_bottom-left-design {
    position: absolute;
    z-index: -1;
    bottom: -27px;
    left: -27px;
  }

  .header-slider_top-right-design {
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    right: -89px;
  }
}
</style>
