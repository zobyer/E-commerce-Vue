<template>
  <div class="form-container">
    <form>
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form-inner">
        <h1>Insert Foods</h1>
        <input type="text" placeholder="Food Name" />
        <input type="text" placeholder="Zilla" />
        <textarea placeholder="Description..." rows="5"></textarea>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          placeholder="Price"
        />
        <input
          type="number"
          id="Points"
          name="Points"
          min="0"
          max="10"
          placeholder="Points"
        />
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg,  image/jpg"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
form {
  position: relative;
  width: 80%;
  border-radius: 30px;
  background: #fff;
}
.form-left-decoration,
.form-right-decoration {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 20px;
  background: #5a7233;
}
.form-left-decoration {
  bottom: 60px;
  left: -30px;
}
.form-right-decoration {
  top: 60px;
  right: -30px;
}
.form-left-decoration:before,
.form-left-decoration:after,
.form-right-decoration:before,
.form-right-decoration:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 20px;
  border-radius: 30px;
  background: #fff;
}
.form-left-decoration:before {
  top: -20px;
}
.form-left-decoration:after {
  top: 20px;
  left: 10px;
}
.form-right-decoration:before {
  top: -20px;
  right: 0;
}
.form-right-decoration:after {
  top: 20px;
  right: 10px;
}
.circle {
  position: absolute;
  bottom: 80px;
  left: -55px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}
.form-inner {
  padding: 40px;
}
.form-inner input,
.form-inner textarea {
  display: block;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 20px;
  background: #d0dfe8;
}
.form-inner textarea {
  resize: none;
}
button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  border-bottom: 4px solid #c1436d;
  background: #d0dfe8;
  font-size: 16px;
  font-weight: 400;
  color: black;
}
button:hover {
  background: #c1436d;
  color: white;
}
@media (min-width: 568px) {
  form {
    width: 60%;
  }
}
</style>