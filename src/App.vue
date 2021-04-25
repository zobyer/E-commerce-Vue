<template>
<div class="topnav" id="myTopnav">
 
  <div class="logo">
    <router-link :to="{name: 'Home'}">Logo</router-link>
  </div>
  
  <router-link :to="{name: 'About'}">About US</router-link>

  <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'News'}">News</router-link>
    </div>
  </div> 

  <router-link :to="{name: 'allFoods'}">Foods</router-link>
  <router-link :to="{name: 'Home'}">Home</router-link>
  
  <a href="javascript:void(0);" style="font-size:15px;" class="icon" @click="myFunction()">&#9776;</a>

  
</div>

  <router-view/>
</template>

<script>
export default {

    methods:{
        myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        },
    }

}
</script>

<style scoped>
body {margin:0;font-family:Arial}

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

.topnav .logo{
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
  color:#C1436D;
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: #C1436D;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  
}


.topnav a:hover,  .dropbtn:hover {
  background-color: #C1436D;
  color: white;
  border-radius: 25%;
  transition: .4s ease;
}

.dropdown a:hover{
    background: white;
    border-radius: 0;
    border-radius: 25%;
}

.dropdown-content a:hover {
  background-color: #C1436D;
  color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
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
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}
</style>
