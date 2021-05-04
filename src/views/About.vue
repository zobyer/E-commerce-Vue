<template>
  <div class="content">
    <div class="textBox">
      <h4>e-ঐতিহ্য food</h4>
      <h4><span>ভোজনপেটুক</span>-ঘরে বসে খেতে চাই ৬৪ জেলার খাবার !!!</h4>
      <h4>পেট ঠান্ডা তো জগৎ ঠান্ডা -------পেটুক কোখাকার!</h4>
      <p>
        বাঙালি ভোজন রসিকপ্রিয় এক জাতি। সেই প্রাচীন যুগ থেকেই বাংলার খাবারের যে
        বৈচিত্র্য ছিলো,তেমনি খাবারগুলোর স্বাদেও ছিলো বৈচিত্র্য রকমের গুন, হয়ত
        বাংলার সেই মানুষগুলোর কর্মনিপুনতার জন্যই। ভোজনপ্রেম আমাদের সংস্কৃতিতে
        বয়ে বেড়াচ্ছে। গোটা পৃথিবীর বিখ্যাত সব খাবারের তুলনায় আমাদের এই প্রিয়
        জম্নভূমিতে তথা বাংলাদেশেই কিন্তু বিখ্যাত এবং সুস্বাদু খাবারের পরিমাণ
        নেহায়েত কমও নয়। বাংলাদেশের ৬৪ জেলা তাদের নিজস্ব খাদ্যের বা খাবারের জন্য
        আলাদা আলাদা জায়গা করে নিয়েছে মানুষের মনে। আবার অনেক খাবার নিজ জেলার
        সীমানা পেরিয়ে গেছে সমগ্র বাংলাদেশ। এমনকি বিশ্বের অনেক দেশেই সেই সব
        খাবারের চর্চা হয়।
      </p>
    </div>
    <div class="imgBox">
      <img src="@/assets/intro.jpg" alt="" />
    </div>
  </div>

  <page-footer />
</template>

<script>
import pageFooter from '../components/pageFooter.vue';
export default {
  components: { pageFooter },
  setup() {},
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

.content .textBox p {
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
</style>