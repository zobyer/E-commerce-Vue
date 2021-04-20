<template>
  <body>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80">
                    <h3>বাকরখানি, বিরিয়ানি</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>ঢাকা জেলা: বাকরখানি, বিরিয়ানি</p>
                    <p>মূল্য: ৫০০ টাকা  </p>
                    <a href="#"><font-awesome-icon icon="cart-plus" /></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80">
                    <h3>সাগর কলা</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>নরসিংদী জেলা: সাগর কলা</p>
                    <p>মূল্য: ৫০০ টাকা  </p>
                    <a href="#"><font-awesome-icon icon="cart-plus" /></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=456&q=80">
                    <h3>খেজুরের গুঁড়</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>ফরিদপুর জেলা: খেজুরের গুঁড়</p>
                    <p>মূল্য: ৫০০ টাকা  </p>
                    <a href="#"><font-awesome-icon icon="cart-plus" /></a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true">
                    <h3>রসগোল্লা ও ছানার জিলাপি</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>গোপালগঞ্জ জেলা: রসগোল্লা ও ছানার জিলাপি</p>
                    <p>মূল্য: ৫০০ টাকা  </p>
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
    methods:{
      redirect_foodPage(){
          this.$router.push({ name: 'About' })
      }
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