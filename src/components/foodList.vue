<template>
  <body>
    <div class="container">
        <div class="card" v-for="(famous_food, index) in  famous_foods" :key="index">
            <div class="face face1">
                <div class="content">
                    <img :src="famous_food.image">
                    <h3>{{famous_food.name}}</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Zilla: {{famous_food.zilla}}</p>
                    <p>Price: {{famous_food.price}}</p>
                    <a href="#"><font-awesome-icon icon="cart-plus" /></a>
                </div>
            </div>
        </div>
        

        <div class="btn_container">
            <button @click="redirect_foodPage">আরো দেখুন<font-awesome-icon icon="arrow-right" /></button>
        </div>
        
    </div>
</body>
</template>

<script>
export default {
    data: function(){
        return{
            famous_foods:[]
        }
    },
    methods:{
      redirect_foodPage(){
          this.$router.push({ name: 'allFoods' })
      },

      
  },

  created(){
      axios
      .get("foods/famous",{
          headers:{
              Authorization : "Bearer "+localStorage.getItem("token")
          }
      })
      .then((response) => {
        this.famous_foods = response.data.foods;
        //console.log(localStorage.getItem("token"));
      })
      .catch((err) => {
         
        console.log(err);
      });
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Atma:wght@300&display=swap');


body{
    margin: 0;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Atma', cursive;

}

.container{
    
    position: relative;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.container .card{
    margin: 0 15px;
    position: relative;
    cursor: pointer;
    animation: 1.5s ease-out 0s 1 slideInFromLeft;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}

.container .card .face{
    width: 350px;
    height: 200px;
    transition: 0.5s;
}

.container .card .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.container .card:hover .face.face1{
    background: #ff0057;
    transform: translateY(0);
}

.container .card .face.face1 .content{
    opacity: 1;
    transition: 0.5s;
}

.container .card:hover .face.face1 .content{
    opacity: 1;
}

.container .card .face.face1 .content img{
    max-width: 220px;
    max-height: 200px;
}

.container .card .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: black;
    text-align: center;
    font-size: 1.5em;
}

.container .card .face.face2{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

.container .card:hover .face.face2{
    transform: translateY(0);
}

.container .card .face.face2 .content p{
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-family: 'Atma', cursive;

}

.container .card .face.face2 .content a{
    margin: 15px 0 0;
    display:  inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    border: 1px solid #333;
}

.container .card .face.face2 .content a:hover{
    background: #333;
    color: #fff;
}

.container .btn_container{
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    
}

.container .btn_container button{
    padding: 10px;
    font-size: 25px;
    font-weight: 50;
    cursor: pointer;
    background: #ff0057;
    color: white;
    border: none;
    border-radius: 4px;
    transition: .5s;
}

.container .btn_container button:hover{
    background: #333;
}

</style>