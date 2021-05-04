<template>
  <div class="content">
    <div class="textBox">
      <h4>e-ঐতিহ্য food</h4>
      <h4><span>ভোজনপেটুক</span>-ঘরে বসে খেতে চাই ৬৪ জেলার খাবার !!!</h4>
      <h4>পেট ঠান্ডা তো জগৎ ঠান্ডা -------পেটুক কোখাকার!</h4>
      <p>
        বাঙালি ভোজন রসিকপ্রিয় এক জাতি। সেই প্রাচীন যুগ থেকেই বাংলার খাবারের যে
        বৈচিত্র্য ছিলো,তেমনি খাবারগুলোর স্বাদেও ছিলো বৈচিত্র্য রকমের গুন, হয়ত
        বাংলার সেই মানুষগুলোর কর্মনিপুনতার জন্যই........
      </p>
      <router-link :to="{ name: 'About' }">আমাদের সম্পর্কে জানুন</router-link>
    </div>
    <div class="imgBox">
      <img src="@/assets/intro.jpg" alt="" />
    </div>
  </div>

  <div class="parallax">
    <video
      autoplay
      muted
      loop
      id="myVideo"
      src="@/assets/video/sundarban.mp4"
    ></video>
  </div>
  <div class="tending_food">
    <h2>জনপ্রিয় খাবার</h2>
    <food-list />
  </div>
</template>

<script>
import foodList from "./foodList.vue";
export default {
  components: { foodList },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Atma:wght@300&display=swap");

.content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  animation: 1s ease-out 0s 1 slideInFromLeft;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}

.content .textBox {
  max-width: 500px;
  font-family: "Atma", cursive;

}
.content .textBox h4 {
  margin: 0;
}

.content .textBox span {
  text-decoration: solid underline #ff0057 7px;
  font-size: 2.5em;
}

.content .textBox h4 {
  color: #333;
  font-size: 2em;
  line-height: 1.4em;
  font-weight: 500;
  font-family: "Atma", cursive;
  margin-top: 5px;
  margin-bottom: 15px;
}

.content .textBox a {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 20px;
  background: #ff0057;
  color: white;
  border-radius: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
}

.content .textBox p{
  font-size: 18px;
}

.content .imgBox {
  width: 400px;
  overflow: hidden;
  padding: 50px;
  display: flex;
  justify-content: flex-end;
}

.imgBox img {
  border-radius: 30%;
}

.parallax {
  /* The image used */
  margin: 15px 0;
  /* background-image: url("https://images.unsplash.com/photo-1512844478094-85d47752ac3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"); */
}

.parallax video {
  margin: 0 auto;
  min-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;

  background-size: cover;
  transition: 1s opacity;
}

.tending_food h2 {
  text-align: center;
  font-family: "Atma", cursive;
  font-size: 50px;
}

@media screen and (max-width: 600px) {
  .parallax video {
    margin: 0 auto;
    max-width: 500px;
    min-height: 100%;
    width: auto;
    height: auto;

    background-size: cover;
    transition: 1s opacity;
  }
}
</style>