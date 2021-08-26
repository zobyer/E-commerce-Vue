<template>
  <div class="table-container">
    <h1>Order List</h1>

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
      <tr v-for="order in orders" :key="order.id">
        <td>{{ 1 }}</td>
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
        <td><button>Place Order</button></td>
      </tr>
    </table>
  </div>
  <order-modal />

  <page-footer />
</template>

<script>
import OrderModal from '../components/orderModal.vue';
import pageFooter from "../components/pageFooter.vue";
export default {
  components: { pageFooter, OrderModal },
  data: function () {
    return {
      orders: null,
      totaltk: 0,
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
          //console.log(this.orders);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getorders();
  },
};
</script>

<style>
.table-container {
  min-height: 490px;
  margin: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.order_btn {
}
</style>