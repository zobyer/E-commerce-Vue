<template>
  <div class="modal-container">
    <div class="cross_btn" @click="modalvisible"><font-awesome-icon :icon="['fas', 'times']" /></div>
    <form @submit.prevent="addaddress()">
      <label for="w3review">Add new address *</label>
      <textarea
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
        placeholder="Exmpl house no , road no , post , city"
        v-model="description"
        required
      ></textarea>
      <div>
        <label for="phone_no">Phone No</label>
        <input type="text" name="phone_no" id="phone_no" v-model="phone_no" />
      </div>
      <div>
        <input type="submit" value="add" />
      </div>
    </form>
    <div class="address_container">
      <div
        class="address"
        v-for="address_data in address"
        :key="address_data.id"
        @click="setaddress(address_data.id)"
      >
        <p>{{ address_data.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      phone_no: "",
      description: "",
      address: null,
    };
  },
  methods: {
    addaddress() {
      axios
        .post(
          "orders/address",
          {
            user_id: localStorage.getItem("id"),
            phone_no: this.phone_no,
            description: this.description,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.$emit("address_added", 0);
          //console.log("called");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getaddress() {
      axios
        .get("orders/address/" + localStorage.getItem("id"), {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.address = response.data.data;
          console.log(this.address);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    setaddress(id) {
      this.$emit("address_added", id);
    },
    modalvisible(){
      this.$emit("modalvisiblefalse");
    }
  },
  created() {
    this.getaddress();
  },
};
</script>

<style>
.modal-container {
  position: absolute;
  z-index: 50;
  top: 50%;
  left: 50%;
  max-width: 500px;
  text-align: center;
  border-radius: 15px;
  /* border: 1px solid black; */
  background: white;
  animation-name: modal_animation;
  animation-duration: 1.5s;
  transform: translate(-50%, -50%);
}

@keyframes modal_animation {
  0%   {transform: translate(-50%, -40%);}
  /* 25%  {transform: translate(-50%, -50%);}
  50%  {transform: translate(-50%, -50%);}
  75%  {transform: translate(-50%, -50%);} */
  100% {transform: translate(-50%, -50%);}
}

.address_container {
  max-height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.address {
  margin: 3px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid black;
}
.address p {
  margin: 0;
}
.cross_btn{
    /* transform: rotate(45deg); */
    font-size: 30px; 
    color: #ff0057;
    cursor: pointer;
}
</style>