<template>
  <div class="table-container">
    <h1>Order List</h1>
    <p>
      <span> Address: {{ address.description }}, </span>
      <span v-if="address.phone_no">Contact No: {{ address.phone_no }} </span>
      <span @click="modalvisible = true" class="address_btn"
        ><font-awesome-icon :icon="['fas', 'plus']"
      /></span>
    </p>
    <table>
      <tr>
        <th>Sl</th>
        <th>Name</th>
        <th>Zilla</th>
        <th>Total</th>
        <th>Price</th>
        <th>Details</th>
        <th>Remove</th>
      </tr>
      <tr v-for="(order, index) in orders" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ order.name }}</td>
        <td>{{ order.zilla }}</td>
        <td>{{ order.total }}</td>
        <td>
          {{ order.price * order.total }} ({{ order.price }} *
          {{ order.total }}) Tk
        </td>
        <td>
          <router-link :to="{ name: 'singleFood', params: { id: order.id } }"
            >See Details</router-link
          >
        </td>
        <td><button v-on:click="removefromcart(order.id)">remove</button></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>Total Price</td>
        <td>{{ totaltk }}</td>
        <td>
          <button v-if="totaltk > 0" @click="placeorder()">Place Order</button>
        </td>
      </tr>
    </table>
  </div>
  <order-modal
    v-on:address_added="getlastaddress($event)"
    v-on:modalvisiblefalse="modalvisible = false"
    v-if="modalvisible"
  />

  <page-footer />
</template>

<script>
import Swal from "sweetalert2";

import OrderModal from "../components/orderModal.vue";
import pageFooter from "../components/pageFooter.vue";
export default {
  components: { pageFooter, OrderModal },
  data: function () {
    return {
      orders: null,
      totaltk: 0,
      address: "",
      modalvisible: false,
    };
  },
  methods: {
    removefromcart(food_id) {
      axios
        .post(
          "cart/delete",
          {
            user_id: localStorage.getItem("id"),
            food_id: food_id,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          //this.$refs.updatecart.getcart();
          //console.log("called");
          this.getorders();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getorders() {
      axios
        .get("orders/all/" + localStorage.getItem("id"), {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.orders = response.data.data;
          this.totaltk = response.data.totalprice;
          //console.log(this.address);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getlastaddress(value) {
      if (value == 0) {
        axios
          .get("orders/last/address/" + localStorage.getItem("id"), {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then((response) => {
            this.address = response.data.data;
            //console.log(this.address);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios
          .get(
            "orders/address/id/" + localStorage.getItem("id") + "/" + value,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            this.address = response.data.data[0];
            //console.log(this.address);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      this.modalvisible = false;
    },
    placeorder() {
      axios
        .post(
          "orders/place",
          {
            user_id: localStorage.getItem("id"),
            address_id: this.address.id,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if (response.data.status) {
            this.sweetalert("Congrats! Order placed successfully");
            this.$router.push({ name: "placedOrders" });
          }else{
            this.failedsweetalert(response.data.log);
          }
          console.log(response.data);
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
    failedsweetalert(data) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "sorry, " +data,
        footer: 'If you have any query please contact us',
      });
    },
  },
  created() {
    this.getorders();
    this.getlastaddress(0);
  },
};
</script>

<style>
.table-container {
  min-height: 490px;
  margin: 20px;
}
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}
td button {
  font-family: "Atma", cursive;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.address_btn {
  font-size: 20px;
  color: #ff0057;
  cursor: pointer;
  margin-left: 10px;
}

/*sweet alert style */
.swal2-title{
  font-family: 'Open Sans', sans-serif;
  font-size: 30px !important;
}


.swal2-popup {
  font-size: 1rem !important;
}
</style>