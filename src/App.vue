<template>
  <div id="app">
    <HeaderPages />
  </div>
  <router-view />
</template>

<script>
import HeaderPages from "@/components/HeaderPages.vue";
export default {
  components: {
    HeaderPages,
  },
};
</script>

<style lang="scss">




</style>
