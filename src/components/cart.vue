<template>
  <div class="cart_btn">
    <router-link :to="{ name: 'Orders' }" class="cart_container">
      <font-awesome-icon class="cart_icon" :icon="['fas', 'cart-plus']" />
      <span id="lblCartCount">{{ carts }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {},
  data: function () {
    return {
      carts: 0,
    };
  },

  methods: {
    getcart() {
      axios
        .get("cart/count/" + localStorage.getItem("id"), {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.carts = response.data.total;
          //console.log(response.data.total);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created(){
    this.getcart()
  }
};
</script>

<style>
.cart_btn {
  position: fixed;
  z-index: 200;
}
.cart_btn a {
  text-decoration-line: none;
  color: black;
}

.cart_btn a {
  text-decoration-line: none;
}

.cart_btn a #lblCartCount:hover {
  background-color: #c1436d;
  color: white;

  transition: 0.3s ease;
}
</style>