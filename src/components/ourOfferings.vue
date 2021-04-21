<template>
  <div class="content">
      <h2>আমাদের সেবাসমূহ </h2>
      <div class="offerings">
          <div class="offers_name">
              <font-awesome-icon class="size_ic" :icon="['fas', 'ice-cream']" />
              <h3>সর্বোচ্চ মানের খাবার </h3>
              <p>আমরা সর্বনিম্ন সময়ে পণ্য ডেলিভারি করে থাকি</p>
          </div>
          <div class="offers_name">
              <font-awesome-icon class="size_ic" :icon="['fas', 'truck-moving']" />
              <h3>দ্রুত ডেলিভারি</h3>
              <p>আমরা সর্বনিম্ন সময়ে পণ্য ডেলিভারি করে থাকি</p>
          </div>
          <div class="offers_name">
              <font-awesome-icon class="size_ic" :icon="['fas', 'hand-holding-usd']" />
              <h3>সবনিম্ন মূল্য</h3>
              <p>আমরা সর্বনিম্ন সময়ে পণ্য ডেলিভারি করে থাকি</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
    text-align: center;
    margin: 20px 0;
}

.content .offerings{
    margin: 100px 0 20px 0;
    display: flex;
    justify-content: space-evenly;

}

.content .offerings .offers_name .size_ic{
     font-size: 40px;
     color: #333;
}

</style>