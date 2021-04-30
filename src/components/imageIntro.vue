<template>
  <div class="content">
      <div class="textBox">
          <h2><span>ফুডিজ</span> ব্লগে আপনাকে স্বাগতম</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias amet porro dignissimos, obcaecati dolorem corrupti fugiat labore culpa necessitatibus quo ducimus sit, sapiente, excepturi atque expedita quidem maxime laudantium ad.</p>
          <a href="#">আমাদের সম্পর্কে জানুন</a>
      </div>
      <div class="imgBox">
          <img src="https://images.unsplash.com/photo-1587131808575-655697d61a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
           alt="">
      </div>
  </div>

  <div class="parallax"></div>
  <div class="tending_food">
      <h2>জনপ্রিয় খাবার</h2>
      <food-list />
  </div>
</template>

<script>
import foodList from './foodList.vue'
export default {
  components: { foodList },
  

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Atma:wght@300&display=swap');

.content{
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

.content .textBox{
    max-width: 400px;
    font-family: 'Merienda', cursive;
    
}

.content .textBox span{
    text-decoration: solid underline #ff0057 7px;
}

.content .textBox h2{
    color: #333;
    font-size: 4em;
    line-height: 1.4em;
    font-weight: 500;
    font-family: 'Atma', cursive;
}

.content .textBox a{
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

.content .imgBox{
    width: 400px;
    overflow: hidden;
    padding: 50px;
    display: flex;
    justify-content: flex-end;
}

.parallax {
  /* The image used */
  margin: 15px 0;
  background-image: url("https://images.unsplash.com/photo-1512844478094-85d47752ac3c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");

  /* Set a specific height */
  min-height: 400px; 

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}

.tending_food h2{
    text-align: center;
    font-family: 'Atma', cursive;
    font-size: 50px;
}


</style>