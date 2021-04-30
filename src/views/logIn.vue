<template>
  <div id="app">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <div class="login-box">
      <form @submit.prevent="handleSubmit">
		  <h1>লগইন করুন</h1>
		  <div class="textbox">
		
		    <input type="text" name="username" v-model="username" placeholder="ব্যাবহারকারির নাম">
		  </div>

		  <div class="textbox">
		    
		    <input type="email" name="email" v-model="email" placeholder="ইমেইল">
		  </div>

		  <div class="textbox">
		   
		    <input type="password" name="password" v-model="pass" placeholder="পাসওয়ার্ড">
		  </div>

		  <!-- <input type="button" class="btn" value="প্রবেশ করুন"> -->
		  <button class="btn">প্রবেশ করুন</button>
	</form>
    </div>
  </div>
</template>

 <script>
 import axios from 'axios'
export default {
	data() {
		return{
			username:'',
			email:'',
			pass:''
		}
	},
	methods: {
		handleSubmit(){
			
			axios.post('http://127.0.0.1:8000/api/store',{username:this.username, 
			email: this.email,pass:this.pass})
			.then(
				res => {
					console.log("success");
					console.log(res);
				}
			).catch(
				err =>{
					console.log("error",users);
					console.log(err);
				}
			)
		}
	}
};
</script>

 <style scoped>
#app {
  background: black;
}
.login-box{
	width: 370px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	float: left;
}

.login-box h1{

	margin-bottom: 30px;
	letter-spacing: 3px;
	text-align: center;
	color: #ed4264;
   font-size: 40px;
}

.textbox input{
	width: 100%;
	height: 30px;
	margin-bottom: 10px;
	letter-spacing: 2px;
	color: white;
	font-size: 17px;
	background:none;
	border:none;
	outline-width: 0;
	box-shadow: none;
	border-bottom: 1px solid #ed4264;

}

.btn{
	width: 100%;
	height: 30px;
	color:  white;
	font-size: 20px;
	font-weight: 700;
	letter-spacing: 4px;
	background: transparent;
	border:1px solid #ed4264;
	cursor: pointer;
	outline: none;
	border-radius: 12px;
	height: 40px;
	background: #ed4264;

}

</style>