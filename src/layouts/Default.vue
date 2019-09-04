<template>
  <div class="layout">
    <Nav/>
    <slot/>
  </div>
</template>

<script>
import Nav from "../components/Nav";
// import Blog from "../components/Blog";

export default {
  components: {
    Nav
    // Blog
  }
};
</script>


<style lang="scss">
</style>
