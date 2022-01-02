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
          this.zilla ="";
          this.price ="";
          this.points ="";
          this.description ="";
          this.sweetalert("Data inserted Successfully");
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
};
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.form-container form {
  position: relative;
  width: 80%;
  border-radius: 30px;
  background: #fff;
}
.form-container .form-left-decoration,
.form-container .form-right-decoration {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 20px;
  background: #5a7233;
}
.form-container .form-left-decoration {
  bottom: 60px;
  left: -30px;
}
.form-container .form-right-decoration {
  top: 60px;
  right: -30px;
}
.form-container .form-left-decoration:before,
.form-container .form-left-decoration:after,
.form-container .form-right-decoration:before,
.form-container .form-right-decoration:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: #fff;
}
.form-container .form-left-decoration:before {
  top: -20px;
}
.form-container .form-left-decoration:after {
  top: 20px;
  left: 10px;
}
.form-container .form-right-decoration:before {
  top: -20px;
  right: 0;
}
.form-container .form-right-decoration:after {
  top: 20px;
  right: 10px;
}
.form-container .circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}
.form-container .form-inner {
  padding: 40px;
}
.form-container .form-inner input,
.form-container .form-inner textarea {
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 20px;
  background: #d0dfe8;
}
.form-container .form-inner textarea {
  resize: none;
}
.form-container .form-container button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  border-bottom: 4px solid #c1436d;
  background: #d0dfe8;
  font-size: 16px;
  font-weight: 400;
  color: black;
}
.form-container button:hover {
  background: #c1436d;
  color: white;
}

@media (min-width: 568px) {
  .form-container form {
    width: 60%;
  }
}
</style>