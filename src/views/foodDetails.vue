<template>
  <user-top-nav />

  <div v-if="showinfo" class="all_container">
    <div class="image_container">
      <img :src="'data:image/jpeg;base64,' + details.image" />
    </div>
    <div v-if="showinfo" class="details">
      <h1>{{ details.food.name }}</h1>
      <h4>{{ details.food.zilla }}</h4>
      <h4>price: {{ details.food.price }} Tk.</h4>
      <p>{{ details.food.description }}</p>
    </div>
  </div>

  <page-footer />
</template>

<script>
import axios from "axios";
import pageFooter from "../components/pageFooter.vue";
import UserTopNav from "../components/userTopNav.vue";
export default {
  components: { pageFooter, UserTopNav },
  data() {
    return {
      id: this.$route.params.id,
      details: null,
      showinfo: false,
    };
  },
  mounted() {
    axios
      .get("/foods/byid/" + this.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.details = response.data;
        this.showinfo = true;
        //console.log(this.details.image);
      })
      .catch((err) => {
        this.showinfo = false;
        console.log(err);
      });
  },
};
</script>

<style scoped>
.all_container {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 150px;
}

.image_container img {
  width: 400px;
  height: auto;
}

.details {
  width: 400px;
}
</style>
