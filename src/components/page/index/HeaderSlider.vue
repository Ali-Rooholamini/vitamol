<template>
  <div class="header-slider">
    <NuxtImg
      preload
      src="images/header-image.png"
      format="webp"
      alt="مراقبت از پوست"
    />
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
</template>

<script>
export default {
  name: "HeaderSlider",
};
</script>

<style lang="scss" scoped>
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
