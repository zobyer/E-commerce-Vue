<template>
  <user-top-nav />

  <div>
    <cart />
  </div>
  <div class="home">
    <image-intro />
    <our-offerings />
    <page-footer />
  </div>
</template>
<script>
import Cart from "../components/cart.vue";
import ImageIntro from "../components/imageIntro.vue";
import OurOfferings from "../components/ourOfferings.vue";
import PageFooter from "../components/pageFooter.vue";
import UserTopNav from "../components/userTopNav.vue";
// @ is an alias to /src

export default {
  components: {
    ImageIntro,
    PageFooter,
    OurOfferings,
    Cart,
    UserTopNav,
  },
};
</script>

<style scoped></style>
