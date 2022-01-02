<template>
  <div class="form-container">
    <form @submit.prevent="submitdata()" enctype="multipart/form-data">
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form-inner">
        <h1>Insert Foods</h1>
        <input
          type="text"
          placeholder="Food Name"
          v-model="food_name"
          required
        />
        <input type="text" placeholder="Zilla" v-model="zilla" required />
        <textarea
          placeholder="Description..."
          rows="5"
          v-model="description"
        ></textarea>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          v-model="price"
          required
        />
        <input
          type="number"
          id="Points"
          name="Points"
          max="10"
          placeholder="Points"
          v-model="points"
        />
        <input
          type="file"
          id="avatar"
          name="avatar"
          ref="fileInput"
          accept="image/*"
          @change="onFilePicked"
        />

        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      image: null,
      food_name: "",
      zilla: "",
      description: "",
      price: 0,
      points: 0,
    };
  },
  methods: {
    onFilePicked(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];
      //console.log(this.image);
    },

    submitdata() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("name", this.food_name);
      formData.append("zilla", this.zilla);
      formData.append("price", this.price);
      formData.append("point", this.points);
      formData.append("description", this.description);
      axios
        .post("foods/store", formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.image = null;
          this.food_name = "";
          this.zilla = "";
          this.price = "";
          this.points = "";
          this.description = "";
          this.sweetalert("Data inserted Successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getExistingFoodDetails(foodId) {
      axios
        .get("/foods/byid/" + foodId, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response.data);
          this.food_name = response.data.food.name;
          this.description = response.data.food.description;
          this.price = response.data.food.price;
          this.zilla = response.data.food.zilla;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    sweetalert(data) {
      //console.log(localStorage.getItem("islogged"));
      Swal.fire({
        position: "top-end",
        width: 400,
        icon: "success",
        title: data,
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },

  created() {
    console.log("called", this.$route.params.id);
    if (this.$route.params.id != null) {
      this.getExistingFoodDetails(this.$route.params.id);
    }
  },
};
</script>

<style></style>
