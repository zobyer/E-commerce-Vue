<template>
  <form @submit.prevent="handleSubmit">
    <label>Name:</label><br />
    <input type="text" name="name" v-model="name" /><br />
    <label>description</label><br />
    <input
      type="text"
      name="descrip"
      v-model="description"
    />
    <label>Zilla</label><br />
    <input type="text" name="zilla"  v-model="zilla" />
    <label>image</label>
    <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">

    <button>submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      description: "",
      zilla: "",
      image: "",
    };
  },
  methods: {
    uploadImage(event) {
    if (!event.target.files[0])
        return;
    this.image = event.target.files[0];
    //console.log(this.image);
  },
    handleSubmit() {
      axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": window.csrf_token,
      };
      axios
        .post(
          "http://127.0.0.1:8000/api/user/insertimg",

          {
            name : this.name,descrp:this.description, zilla:this.zilla, image: this.image
          }
        )
        .then((res) => {
         
         
          
          console.log("success");
          //console.log(this.$session.get('id'));
        })
        .catch((err) => {
        
          console.log("error");
          console.log(err);
        });
    console.log(this.name, this.image);
    },
  },
};
</script>

<style>
</style>