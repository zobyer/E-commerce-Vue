<template>
  <div class="topnav" id="myTopnav">
    <div class="logo">
      <router-link :to="{ name: 'Home' }">Logo</router-link>
    </div>

    <router-link :to="{ name: 'Registration' }">রেজিস্ট্রেশন</router-link>
    <router-link :to="{ name: 'Login' }">লগইন</router-link>

    <div class="dropdown">
      <button class="dropbtn">
        বিস্তারিত
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
      </button>
      <div class="dropdown-content">
        <router-link :to="{ name: 'About' }">আমাদের সম্পর্কে জানুন</router-link>
        <router-link :to="{ name: 'News' }">যোগাযোগ করুন</router-link>
      </div>
    </div>

    <router-link :to="{ name: 'allFoods' }">Foods</router-link>
    <router-link :to="{ name: 'Home' }">Home</router-link>

    <div class="dropdown">
      <button class="dropbtn">
        <font-awesome-icon class="cart_icon" :icon="['fas', 'user']" />
        <font-awesome-icon :icon="['fas', 'chevron-down']" />
        <h5 v-if="loggedin">{{ name }}</h5>
        <!-- <label v-if="loggedin">{{name}}</label> -->
      </button>
      <div class="dropdown-content">
        <button v-if="loggedin" @click="logout" class="drop_button">
          লগ আউট
        </button>
        <router-link v-else class="drop_button" :to="{ name: 'Login' }">লগইন</router-link>

        <!-- <router-link @click="hell">আমাদের সম্পর্কে জানুন</router-link> -->
        <router-link :to="{ name: 'News' }">যোগাযোগ করুন</router-link>
      </div>
    </div>

    <router-link :to="{ name: 'Orders' }" class="cart_container">
      <font-awesome-icon class="cart_icon" :icon="['fas', 'cart-plus']" />
      <span id="lblCartCount">10</span>
    </router-link>

    <a
      href="javascript:void(0);"
      style="font-size: 15px"
      class="icon"
      @click="myFunction()"
      >&#9776;</a
    >
  </div>

  <router-view />
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loggedin: false,
      name: "",
    };
  },

  methods: {
    myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    logout() {
      localStorage.clear();
      localStorage.setItem("islogged", false);
      this.loggedin = false;
      //console.log(localStorage.getItem("islogged"));
    },
  },
  created() {
    this.name = localStorage.getItem("username");
    if (localStorage.getItem("islogged") == "true") {
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
  },

  watch: {
    $route(to, from) {
      this.name = localStorage.getItem("username");
      if (localStorage.getItem("islogged") == "true") {
        this.loggedin = true;
      } else {
        this.loggedin = false;
      }
      //console.log(localStorage.getItem("islogged"), this.loggedin);
    },
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Atma:wght@300&display=swap");

body {
  margin: 0 !important;
  font-family: "Atma", cursive;
}

.topnav {
  overflow: hidden;
  margin: 10px;
}

.topnav a {
  float: right;
  display: block;
  color: #333;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin: 0 20px;
}

.topnav .logo {
  float: left;
}

.topnav .icon {
  display: none;
}

.dropdown {
  float: right;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: #c1436d;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a,
.drop_button {
  font-family: "Atma", cursive;
  float: none;
  color: #c1436d;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor: pointer;
}

.topnav a:hover,
.dropbtn:hover,
.drop_button:hover {
  background-color: #c1436d;
  color: white;
  border-radius: 25%;
  transition: 0.4s ease;
}

.dropdown a:hover {
  background: white;
  border-radius: 0;
  border-radius: 25%;
}

.dropdown-content a:hover {
  background-color: #c1436d;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropbtn h5 {
  color: #000;
  margin: 0;
}

.drop_button {
  background: none;
  margin: auto;
  border: none;
  font-size: 17px;
}

.cart_container {
  padding: 0;
}

.cart_icon {
  font-size: 30px;
  margin: 0;
}

#lblCartCount {
  font-size: 20px;
  vertical-align: top;
  text-align: center;
  background: #000;
  color: white;
  padding: 4px;
  border-radius: 50%;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child),
  .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {
    float: none;
  }
  .topnav.responsive .dropdown-content {
    position: relative;
  }
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
