<template>
  <div class="product-details">
    <div class="product-details_details">
      <div class="product-details_details-bg"></div>
      <div class="product-details_details-desc">
        <strong>{{ productDetail.name }}</strong>
        <p>
          {{ productDetail.description }}
        </p>
        <div class="product-details_details-desc_btns">
          <BaseButton :isSvgLeft="true" arrowSvgName="vit--arrow-left-top">
            <NuxtLink to="/order"> سفارش محصولات </NuxtLink>
          </BaseButton>
          <BaseButton
            v-if="isHueHarmony"
            :isSvgLeft="true"
            arrowSvgName="vit--arrow-left-top"
          >
            <NuxtLink
              to="http://vitamolcare.com/HAIRCOLOR-SmartCatalog-Ver01.pdf"
              target="_blank"
            >
              مشاهده کالیته رنگی
            </NuxtLink>
          </BaseButton>
          <BaseButton
            v-else
            data-bs-toggle="modal"
            data-bs-target="#baseModal"
            :isSvgLeft="true"
            arrowSvgName="vit--arrow-left-top"
            @click="$emit('showLongDesc')"
          >
            مطالعه بیشتر
          </BaseButton>
        </div>
      </div>
    </div>
    <div class="product-details_image">
      <NuxtImg
        v-if="productDetail?.images[0]?.image"
        :src="'http://api.vitamolcare.com' + productDetail.images[0].image"
        format="webp"
        width="350"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from "~/components/global/BaseButton.vue";

export default {
  name: "ProductDetails",
  components: {
    BaseButton,
  },

  props: {
    productDetail: {
      type: Object,
      required: true,
    },
    isHueHarmony: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-details {
  @include breakpoint-up(sm) {
    gap: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @include breakpoint-up(lg) {
    flex-direction: row;
    justify-content: space-between;
    align-items: initial;
  }

  .product-details_details {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @include breakpoint-up(lg) {
      justify-content: flex-start;
    }

    .product-details_details-bg {
      width: 100%;
      height: 380px;
      background-color: red;
      position: absolute;
      right: 0px;
      z-index: -1;
      border-radius: 15px;
      background: linear-gradient(
        268deg,
        #fee0eb 12.47%,
        rgba(255, 255, 255, 0) 64.82%
      );

      @include breakpoint-up(sm) {
        width: 341px;
        border-radius: 317px;
      }

      @include breakpoint-up(md) {
        height: 450px;
      }
    }

    .product-details_details-desc {
      margin-right: 15px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 35px;
      overflow-wrap: break-word;
      width: 100%;
      max-width: 330px;
      margin-right: 15px;

      @include breakpoint-up(sm) {
        max-width: 376px;
        gap: 35px;
        margin-right: 79px;
      }

      @include breakpoint-up(md) {
        max-width: 476px;
        font-size: 30px;
      }

      @include breakpoint-up(lg) {
        max-width: 470px;
      }

      @include breakpoint-up(xl) {
        max-width: 576px;
      }

      strong {
        color: var(--secondary-color);
        font-size: 18px;
        font-weight: 600;

        @include breakpoint-up(sm) {
          font-size: 20px;
        }

        @include breakpoint-up(md) {
          font-size: 24px;
        }

        @include breakpoint-up(lg) {
          font-size: 30px;
        }

        @include breakpoint-up(xl) {
          font-size: 40px;
        }
      }

      p {
        width: 100%;
        color: var(--secondary-color);
        padding: 0px 10px;
        font-size: 16px;
        text-align: justify !important;
        margin-bottom: 0px;
        font-weight: 400;
        line-height: normal;
        text-align: right;

        @include breakpoint-up(sm) {
          font-size: 18px;
        }

        @include breakpoint-up(md) {
          font-size: 20px;
        }

        @include breakpoint-up(lg) {
          font-size: 22px;
        }

        @include breakpoint-up(xl) {
          font-size: 30px;
        }
      }

      .product-details_details-desc_btns {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        gap: 21px;

        @include breakpoint-up(sm) {
          flex-direction: row;
        }

        > button:last-child {
          background-color: var(--color-white);
          color: var(--secondary-color);
        }
      }
    }
  }

  .product-details_image {
    display: none;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    height: 532px;
    border-radius: 220px;
    background: linear-gradient(
      181deg,
      #fee0eb 48.24%,
      rgba(255, 255, 255, 0) 98.91%
    );

    @include breakpoint-up(md) {
      width: 374px;
      height: 532px;
    }
    @include breakpoint-up(lg) {
      display: flex;
      align-items: flex-end;
    }

    > img {
      height: auto;
      width: 180px;
      height: auto;

      @include breakpoint-up(md) {
        width: 200px;
        height: auto;
      }

      @include breakpoint-up(lg) {
        width: 250px;
        height: auto;
      }

      @include breakpoint-up(xl) {
        width: 350px;
        height: auto;
      }
    }
  }
}
</style>
