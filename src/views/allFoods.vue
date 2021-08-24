<template >
  <cart ref="updatecart"/>
  <div>
    <div class="others"></div>
    <h1>খাবারের রাজ্যে আপনাকে স্বাগমত</h1>
    <div class="search_option">
      <div class="container">
        <div class="all_input">
          <div class="inputdata">
            <h4>Food Name</h4>

            <input
              type="text"
              placeholder="Search.."
              name="food_name"
              v-model="foodname"
              autocomplete="off"
              @input="filterfoodsname"
              @focus="name_modal = true"
            />
            <button
              @click="
                searchbyname(), (name_modal = false), (city_modal = false)
              "
            >
              <font-awesome-icon :icon="['fas', 'search']" />
            </button>
          </div>
          <div v-if="filteredfoodname && name_modal" class="result">
            <ul>
              <li
                v-for="(filteredfood, index) in filteredfoodname"
                :key="index"
                @click="setfood(filteredfood)"
              >
                {{ filteredfood }}
              </li>
            </ul>
          </div>
        </div>
        <div class="all_input">
          <div class="inputdata">
            <h4>City</h4>
            <input
              type="text"
              placeholder="Search.."
              v-model="cityname"
              autocomplete="off"
              @input="filtercityname"
              @focus="city_modal = true"
            />
            <button
              @click="
                searchbycity(), (name_modal = false), (city_modal = false)
              "
            >
              <font-awesome-icon :icon="['fas', 'search']" />
            </button>
          </div>
          <div v-if="filteredcityname && city_modal" class="result">
            <ul>
              <li
                v-for="(filteredcity, index) in filteredcityname"
                :key="index"
                @click="setcity(filteredcity)"
              >
                {{ filteredcity }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="main" @click="(name_modal = false), (city_modal = false)">
      <ul class="cards">
        <li class="cards_item" v-for="foods in allfoods" v-bind:key="foods.id">
          <div class="card">
            <div class="card_image">
              <img :src="foods.image" />
            </div>
            <div class="card_content">
              <p>{{ foods.name }}</p>
              <p>{{ foods.zilla }}</p>
              <p>{{ foods.price }} Tk.</p>
              <div class="links">
                <a href="#" v-on:click="addtocart(foods.id)"><font-awesome-icon icon="cart-plus" /></a>
                <router-link
                  :to="{ name: 'singleFood', params: { id: foods.id } }"
                  >Details</router-link
                >
              </div>
            </div>
          </div>
        </li>

        <li class="btn_container">
          <button @click="redirect_foodPage">
            See More<font-awesome-icon icon="arrow-right" />
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <page-footer />
  </div>
</template>

<script>
import Cart from "../components/cart.vue";
import PageFooter from "../components/pageFooter.vue";

export default {
  components: { PageFooter, Cart },
  data: function () {
    return {
      allfoods: null,
      allfoodname: [],
      filteredfoodname: [],
      foodname: "",
      name_modal: false,
      all_cityname: [],
      filteredcityname: [],
      cityname: "",
      city_modal: false,
      item: 5,
    };
  },

  methods: {
    filterfoodsname() {
      //console.log("filtering", this.name_modal);
      this.filteredfoodname = this.allfoodname.filter((foodname) => {
        return foodname.toLowerCase().startsWith(this.foodname.toLowerCase());
      });
    },

    filtercityname() {
      this.filteredcityname = this.all_cityname.filter((cityname) => {
        return cityname.toLowerCase().startsWith(this.cityname.toLowerCase());
      });
    },

    setfood(selectedname) {
      this.foodname = selectedname;
      this.name_modal = false;
    },
    setcity(selectedcity) {
      this.cityname = selectedcity;
      this.city_modal = false;
    },

    searchbycity() {
      axios
        .get("foods/search/city?name=" + this.cityname, {
          headers: {
            Authorization: "Bearer "+localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.allfoods = "";
          this.allfoods = response.data.foods;

          //console.log(this.details);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    searchbyname() {
      console.log("called");
      axios
        .get("foods/search/food?name=" + this.foodname, {
          headers: {
            Authorization: "Bearer "+localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.allfoods = "";
          this.allfoods = response.data.foods;

          //console.log(this.allfoods);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addtocart(foodid) {
      //console.log(localStorage.getItem("token"))
      axios
        .post("cart/add" ,
        {
          user_id : localStorage.getItem("id"),
          food_id: foodid
        },
        {
          headers: {
            Authorization: "Bearer "+localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$refs.updatecart.getcart()
          //console.log("called");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  watch: {
    foodname() {
      this.filterfoodsname();
    },
    cityname() {
      this.filtercityname();
    },
  },

  created() {
    axios
      .get("foods/all", {
        headers: {
          Authorization: "Bearer 1|VlgkwJc9q965dptqQKq8xGedNv8UmB0lwMnGpCqX",
        },
      })
      .then((response) => {
        this.allfoods = response.data.foods;
        for (let i = 0; i < response.data.foods.length; i++) {
          this.allfoodname[i] = response.data.foods[i].name;
          this.all_cityname[i] = response.data.foods[i].zilla;
          //console.log(response.data);
        }
        //console.log(this.allfoods);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
/* Font */
@import url("https://fonts.googleapis.com/css2?family=Atma:wght@300&display=swap");

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  animation: 1s ease-out 0s 1 slideInFromLeft;
  font-family: "Atma", cursive;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}

h1 {
  font-size: 30px;
  font-weight: 400;
  text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  width: 400px;
  height: 280px;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

.links {
  display: flex;
  justify-content: space-between;
}

.links a {
  text-decoration: none;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  transition: 0.2s;
  font-size: 20px;
}

.card_content a {
  color: black;
  border: 1px solid black;
  padding: 5px;
  background: white;
}

.card_content a:hover {
  background: black;
  color: white;
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.btn_container {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.btn_container button {
  height: 40px;
  font-size: 15px;
  background: #ff0057;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
}

.btn_container button:hover {
  background: #333;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
.made_by {
  font-weight: 400;
  font-size: 13px;
  margin-top: 35px;
  text-align: center;
}

.container,
.inputdata {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 0 20px;
}

.inputdata {
  height: 30px;
}

.inputdata h4 {
  margin: auto;
}

.inputdata input {
  margin-left: 15px;
}

.inputdata button {
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  border: none;
}

.result {
  color: #ff0057;
  width: 80%;
  margin: 0 auto;
  max-height: 100px;
  overflow: scroll;
  overflow-x: hidden;
}

.result ul {
  list-style: none;
}

.result ul li {
  text-align: center;
  background: #333;
  margin: 2px;
  cursor: pointer;
}

.all_input {
}

@media (max-width: 40rem) {
  .container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }
}
</style>