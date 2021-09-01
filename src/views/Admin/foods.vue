<template>
  <div class="pending-container">
    <table>
      <tr>
        <th>Sl</th>
        <th>Food ID</th>
        <th>Name</th>
        <th>Zilla</th>
        <th>Price</th>
        <th>Points</th>
        <th>Action</th>
      </tr>
      <tr v-for="(food, index) in foods" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ food.id }}</td>
        <td>{{ food.name }}</td>
        <td>{{ food.zilla }}</td>
        <td>{{ food.price }}</td>
        <td>{{ food.point }}</td>
        <td><button>update</button> <button>delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data: function () {
    return {
      foods: null,
    };
  },
  methods: {
    getfoods() {
      axios
        .get("/foods/all", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.foods = response.data.foods;
          //console.log(response.data.foods);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getfoods();
  },
};
</script>

<style>
.pending-container table tr td button {
  margin: 5px;
}

tr:hover {
  box-shadow: 0px 9px 4px -6px grey;
}
tr:hover td {
  cursor: pointer;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
}

/* tr:first-child:hover td {
  border-top: none;
}
tr:last-child:hover td {
  border-bottom: none;
} */
tr:hover td.highlight div {
  transform: scaleX(3);
}
</style>