<template>
  <div class="container">
      <div class="inputdata">
        <h4>Food Name</h4>
        
        <input type="text" placeholder="Search.." name="food_name">
        <button type="submit"><font-awesome-icon :icon="['fas', 'search']" /></button>
     
      </div>
      <div class="inputdata">
        <h4>City</h4>
        <input type="text" placeholder="Search.." name="city_name">
        <button type="submit"><font-awesome-icon :icon="['fas', 'search']" /></button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container, .inputdata {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  margin: 20px;
}

.inputdata{
  height: 30px;
}

.inputdata h4{
  margin: auto;
}

.inputdata input{
  margin-left: 15px;
}

.inputdata button{
  background: linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%);
  border: none;
}

@media (max-width: 40rem){
  .container{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
  }
}
</style>