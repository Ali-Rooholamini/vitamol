<template>
  <div class="sub-categories">
    <div
      v-for="cat in categoryList"
      :key="cat.id"
      class="sub-categories_category"
      :class="{ active: activeCats === cat.id }"
      :style="`background-image: url(http://api.vitamolcare.com${cat.image})`"
      @click="setActive(cat.id)"
    >
      <div class="sub-categories_category-filter"></div>
      <span class="sub-categories_category-brand">ویتــامول</span>
      <div class="sub-categories_category-desc">
        <p>{{ cat.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCategories",

  data() {
    return {
      activeCats: null,
    };
  },
  props: {
    categoryList: {
      type: [Array, Object],
      required: true,
      default: () => {
        return [{}];
      },
    },
  },

  methods: {
    setActive(id) {
      this.activeCats = id;
    },
  },

  watch: {
    activeCats(newId) {
      this.$emit("activeCategory", newId);
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-categories {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 65px;
  padding-left: 50px;
  padding-right: 50px;
}

@include breakpoint-up(sm) {
  .sub-categories {
    padding-left: 10px;
    padding-right: 20px;
    justify-content: space-around;
  }
}

@include breakpoint-up(md) {
  .sub-categories {
    padding-left: 0px;
    padding-right: 0px;
    justify-content: space-around;
    gap: 30px;
  }
}

@include breakpoint-up(lg) {
  .sub-categories {
    justify-content: center;
    gap: 80px;
  }
}

.sub-categories_category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 83px;
  height: 121px;
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 0;
  cursor: pointer;

  @include breakpoint-up(sm) {
    width: 203px;
    height: 241px;
    border-radius: 16px;
    align-items: flex-start;
  }

  .sub-categories_category-brand {
    transition: 150ms ease-in-out;
    font-size: 12px;
    font-family: PeydaWeb;
    color: rgba(0, 37, 97, 0.75);
    width: 100%;
    text-align: left;
    padding-top: 5px;
    padding-left: 5px;
    font-weight: 900;

    @include breakpoint-up(sm) {
      font-size: 18px;
      padding-top: 16px;
      padding-left: 12px;
    }
  }

  .sub-categories_category-desc {
    transition: 150ms ease-in-out;
    min-width: 142px;
    height: auto;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: right;
    border-radius: 71px;
    background: rgba(210, 226, 255, 0.75);
    box-shadow: 0px 10px 50px -5px rgba(0, 0, 0, 0.25);
    z-index: 1;

    @include breakpoint-up(sm) {
      position: absolute;
      bottom: 10px;
      left: 12px;
      min-width: 232px;
      height: 52px;
      padding: 8px 22px;
    }

    > p {
      color: rgba(0, 37, 97, 0.75);
      transition: 150ms ease-in-out;
      margin: 0px;
      font-size: 12px;
      font-weight: 600;
      line-height: normal;

      @include breakpoint-up(sm) {
        font-size: 14px;
      }
    }
  }
}

.sub-categories_category-filter {
  transition: 150ms ease-in-out;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  opacity: 45%;
  border-radius: 16px;
  z-index: -1;
}

.sub-categories_category.active,
.sub-categories_category:hover {
  .sub-categories_category-filter {
    opacity: 0;
  }

  .sub-categories_category-desc {
    background-color: var(--secondary-color);
    > p {
      color: var(--color-white);
    }
  }

  .sub-categories_category-brand {
    color: var(--secondary-color);
  }
}
</style>
