<template>
  <div>
    <div class="ul-list" v-for="animal of baby" :key="animal.id">
      <ul>
        <li>Номер животного: {{ animal.id }}</li>
        <li>Имя: {{ animal.name }}</li>
        <li>Вид: {{ animal.type }}</li>
        <li>Вес: {{ animal.weight }}</li>
        <li>Цвет: {{ animal.color }}</li>
        <li>Пол: {{ animal.sex }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OurAnimalsComponent",
  data() {
    return {
      baby: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("https://demo-api.vsdev.space/api/farm/baby");
      this.baby = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>


<style>
.ul-list {
  background-color: rgb(243, 243, 243);
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
}

li {
  list-style: none;
}


</style>