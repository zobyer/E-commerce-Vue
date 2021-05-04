<template>
  <div v-if="showinfo" class="all_container">
      <div class="image_container">
          <img :src="details.image" alt="food image">
      </div>
      <div v-if="showinfo" class="details">
          <h1>{{details.name}}</h1>
          <h4>{{details.zilla}}</h4>
          <h4>price: {{details.price}} Tk.</h4>
          <p>{{details.description}}</p>
            <h4>Contact</h4>
      </div>
  </div>

  <page-footer />
</template>

<script>
import axios from "axios";
import pageFooter from '../components/pageFooter.vue'
export default {
  components: { pageFooter },
  data(){
      return{
          id:this.$route.params.id,
          details:null,
          showinfo:false,
      }
  },
  mounted(){
      
      axios
      .post("http://127.0.0.1:8000/api/foods/singlefood",{
          id : this.id
      })
      .then((response) => {
          this.details =  response.data[0];
          this.showinfo=true;
        // console.log(this.details.id);
      })
      .catch((err) => {
          this.showinfo=false;
        console.log(err);
      });
  }

}
</script>

<style scoped>
.all_container{
    display: flex;
    justify-content: space-evenly;
}

.image_container img{
    width:400px;
    height: auto;
    
}

.details{
    width: 400px;
}

</style>