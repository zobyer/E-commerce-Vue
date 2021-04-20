<template>
  <div class="home">
    <image-intro />
    <page-footer />
  </div>
  
</template>
<script>
import ImageIntro from '../components/imageIntro.vue'
import PageFooter from '../components/pageFooter.vue'
// @ is an alias to /src

export default {
  
  components: {
    ImageIntro,
    PageFooter
    
  }
}
</script>

<style scoped>

</style>
