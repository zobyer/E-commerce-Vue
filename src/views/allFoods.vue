<template>
  <div>
    <h1>খাবারের রাজ্যে আপনাকে স্বাগমত</h1>
    <div class="search_option">
      <search-option />
    </div>
    <div class="main">
      <ul class="cards">
        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=10" />
            </div>
            <div class="card_content">
              <p>গোপালগঞ্জ জেলা: রসগোল্লা ও ছানার জিলাপি</p>
              <p>মূল্য: ৫০০ টাকা</p>
              <a href="#"><font-awesome-icon icon="cart-plus" /></a>
            </div>
          </div>
        </li>

        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=10" />
            </div>
            <div class="card_content">
              <p>গোপালগঞ্জ জেলা: রসগোল্লা ও ছানার জিলাপি</p>
              <p>মূল্য: ৫০০ টাকা</p>
              <a href="#"><font-awesome-icon icon="cart-plus" /></a>
            </div>
          </div>
        </li>

        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=10" />
            </div>
            <div class="card_content">
              <p>গোপালগঞ্জ জেলা: রসগোল্লা ও ছানার জিলাপি</p>
              <p>মূল্য: ৫০০ টাকা</p>
              <a href="#"><font-awesome-icon icon="cart-plus" /></a>
            </div>
          </div>
        </li>

        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=10" />
            </div>
            <div class="card_content">
              <p>গোপালগঞ্জ জেলা: রসগোল্লা ও ছানার জিলাপি</p>
              <p>মূল্য: ৫০০ টাকা</p>
              <a href="#"><font-awesome-icon icon="cart-plus" /></a>
            </div>
          </div>
        </li>

        <li class="cards_item">
          <div class="card">
            <div class="card_image">
              <img src="https://picsum.photos/500/300/?image=10" />
            </div>
            <div class="card_content">
              <p>গোপালগঞ্জ জেলা: রসগোল্লা ও ছানার জিলাপি</p>
              <p>মূল্য: ৫০০ টাকা</p>
              <a href="#"><font-awesome-icon icon="cart-plus" /></a>
            </div>
          </div>
        </li>

        <li class="btn_container">
          <button @click="redirect_foodPage">
            আরো দেখুন<font-awesome-icon icon="arrow-right" />
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
import searchOption from "../components/searchOption.vue";
import PageFooter from "../components/pageFooter.vue";

export default {
  components: { searchOption, PageFooter },
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

.btn_container button:hover{
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
</style>