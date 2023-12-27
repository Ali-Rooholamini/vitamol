<template>
  <div>
    <TheHeader />
    <slot />
  </div>
</template>

<script>
import TheHeader from "~/components/template/TheHeader.vue";
export default {
  name: "DefaultLayout",
  components: {
    TheHeader,
  },
};
</script>

<style>
.test {
  margin-top: 100px;
}
</style>
