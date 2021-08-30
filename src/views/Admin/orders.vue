<template>
  <div class="pending-container">
    <table>
      <tr>
        <th>Sl</th>
        <th>Order ID</th>
        <th>Food Name</th>
        <th>Food Zilla</th>
        <th>Amount</th>
        <th>Price</th>
        <th>Delivery Address</th>
        <th>Currant Status</th>
        <th>Action</th>
      </tr>
      <tr v-for="(order, index) in orders" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ order.order_id }}</td>
        <td>{{ order.food_name }}</td>
        <td>{{ order.zilla }}</td>
        <td>{{ order.amount }}</td>
        <td>
          ({{ order.price }}*{{ order.amount }})
          {{ order.amount * order.price }}
        </td>
        
        <td>{{order.description}}</td>
        <td v-if="order.status == 0">Pending</td>
        <td v-if="order.status == 1">Checked</td>
        <td v-if="order.status == 2">Delivered</td>
        <td v-if="order.status == 3">Discarded</td>
        <td>
          <button v-if="order.status == 0" @click="updatestatus(order.order_id, 1)">Checkout</button>
          <button v-else-if="order.status == 1" @click="updatestatus(order.order_id, 2)">Delivered</button>
          <button v-if="order.status == 0 || order.status == 1" @click="updatestatus(order.order_id, 3)">Discard</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data: function () {
    return {
      orders: null,
    };
  },
  methods: {
    getOrder(state) {
      console.log(state)
      axios
        .post(
          "admin/orders/pending",
          {
            user_id: localStorage.getItem("id"),
            state: state,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.orders = response.data.data;
          //console.log(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updatestatus(order_id, state) {
      axios
        .post(
          "admin/orders/update-state",
          {
            user_id: localStorage.getItem("id"),
            state: state,
            id:order_id
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if(state == 1){
            this.sweetalert("Order id "+order_id+" Checked Successfully");
          }
          else if(state == 3){
            this.sweetalert("Order id "+order_id+" discarted Successfully");
          }
          this.getOrder()
          //console.log(response.data);
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
    console.log(this.$route.params.state)
    if (this.$route.params.state == "pending"){
      this.getOrder(0);
    }
    else if (this.$route.params.state == "checked"){
      this.getOrder(1);
    }
    else if (this.$route.params.state == "delivered"){
      this.getOrder(2);
    }
    else if (this.$route.params.state == "discarded"){
      this.getOrder(3);
    }
  },
};
</script>

<style>
.pending-container table tr td button {
  margin: 5px;
}
</style>