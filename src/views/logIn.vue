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
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="ইমেইল"
          />
        </div>

        <div class="textbox">
          <input
            type="password"
            name="password"
            v-model="pass"
            placeholder="পাসওয়ার্ড"
          />
        </div>

        <label v-if="!valid_check">ইমেইল পাসওয়ার্ড মিল পাওয়া যায়নি</label>

        <!-- <input type="button" class="btn" value="প্রবেশ করুন"> -->
        <button class="btn">প্রবেশ করুন</button>
      </form>
    </div>
  </div>
</template>

 <script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      pass: "",
      valid_check: true,
      
    };
  },
  methods: {
    handleSubmit() {
      axios.defaults.headers.common = {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": window.csrf_token,
      };
      axios
        .post(
          "http://127.0.0.1:8000/api/user/login",

          {
            email: this.email,
            pass: this.pass,
          }
        )
        .then((res) => {
          this.valid_check = true;
          this.is_logged = true;
         
          localStorage.setItem('id', res.data[0].id);
          localStorage.setItem('username', res.data[0].name);
          localStorage.setItem('islogged', true);

          this.$router.push({ name: "Home",
          });
          //console.log("success");
          //console.log(this.$session.get('id'));
        })
        .catch((err) => {
          localStorage.setItem('islogged', false);
          this.valid_check = false;
          console.log("error");
          console.log(err);
        });
    },
  },
};
</script>

 <style scoped>
#app {
  background: black;
}
.login-box {
  width: 370px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  float: left;
}

.login-box h1 {
  margin-bottom: 30px;
  letter-spacing: 3px;
  text-align: center;
  color: #ed4264;
  font-size: 40px;
}

.textbox input {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  letter-spacing: 2px;
  color: white;
  font-size: 17px;
  background: none;
  border: none;
  outline-width: 0;
  box-shadow: none;
  border-bottom: 1px solid #ed4264;
}

.btn {
  width: 100%;
  height: 30px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 4px;
  background: transparent;
  border: 1px solid #ed4264;
  cursor: pointer;
  outline: none;
  border-radius: 12px;
  height: 40px;
  background: #ed4264;
}

label {
  color: #ed4264;
}
</style>