<template>
  <div class="topnav" id="myTopnav">
    <div class="logo">
      <router-link :to="{ name: 'Home' }">Logo</router-link>
    </div>

    <router-link :to="{ name: 'About' }">About Us</router-link>
    <router-link :to="{ name: 'Home' }">Contact Us</router-link>

    <router-link :to="{ name: 'Registration' }" v-if="!loggedin"
      >Registration</router-link
    >
    <router-link :to="{ name: 'Login' }" v-if="!loggedin">Login</router-link>

    <router-link :to="{ name: 'allFoods' }">Foods</router-link>
    <router-link :to="{ name: 'Home' }">Home</router-link>

    <div class="dropdown">
      <button class="dropbtn">
        <font-awesome-icon class="cart_icon" :icon="['fas', 'user']" />
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
        <h5 v-if="loggedin">{{ name }}</h5>
      </button>
      <div class="dropdown-content">
        <button v-if="loggedin" @click="logout" class="drop_button">
          Log Out
        </button>
        <router-link v-else class="drop_button" :to="{ name: 'Login' }"
          >Log In</router-link
        >

        <router-link :to="{ name: 'placedOrders' }" v-if="loggedin"
          >My Orders</router-link
        >
      </div>
    </div>

    <a
      href="javascript:void(0);"
      style="font-size: 15px"
      class="icon"
      @click="myFunction()"
      >&#9776;</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
