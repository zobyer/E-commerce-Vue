<template>
  <div class="placedorders_container">
    <table>
      <tr>
        <th>Sl</th>
        <th>Order Id</th>
        <th>Food Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Status</th>
        <th>Order Date</th>
      </tr>
      <tr v-for="(order, index) in orders" :key="index">
        <td>{{index+1}}</td>
        <td>{{order.order_id}}</td>
        <td>{{order.name}}</td>
        <td>{{order.count}}</td>
        <td>{{order.count * order.price}}</td>
        <td v-if="order.status == 0">pending</td>
        <td v-else-if="order.status ==  1">Checked</td>
        <td v-else-if="order.status == 2">Delivered</td>
        <td>{{order.order_date}}</td>
      </tr>
     
    </table>
  </div>
  <div class="orders-contact">
      <router-link :to="{ name: 'About' }" ><p>For any query contact with us</p></router-link>
      <p>Contact No: 015........</p>  
  </div>
  <page-footer />
</template>

<script>
import pageFooter from "../components/pageFooter.vue";
export default {
  components: { pageFooter },
  data: function () {
    return {
      orders: null,
      sl:0,
    };
  },
  methods: {
    getplacedorders() {
      axios
        .get("my-orders/" + localStorage.getItem("id"), {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.orders = response.data.data;
          console.log(this.orders);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
  },
  created() {
      this.getplacedorders();
  },
};
</script>

<style>
.placedorders_container {
  min-height: 500px;
}
.orders-contact{
    margin-left: 10px;
}
</style>