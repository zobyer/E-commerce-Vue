<template>
  <div class="modal-container">
    <form @submit.prevent="addaddress()">
      <label for="w3review">Add new address </label>
      <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Exmpl house no , road no , post , city"></textarea
      >
      <div>
          <label for="phone_no">Phone No</label>
          <input type="text" name="phone_no" id="phone_no">
      </div>
      <div>
          <input type="submit" value="add" />
      </div>
    </form>
    <div class="address_container">
      <div v-for="address_data in address" :key="address_data.id">
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
  transform: translate(-50%, -50%);
  max-width: 500px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid black;
}

.address_container {
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: blanchedalmond;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
}
</style>