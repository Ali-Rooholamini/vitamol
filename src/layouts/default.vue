<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/template/TheHeader.vue";
import TheFooter from "~/components/template/TheFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
