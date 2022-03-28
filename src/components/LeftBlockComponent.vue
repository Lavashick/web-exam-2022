<template>
  <div>
       
    <div class="num-3">

      <img src="/images/left_widget_img.jpg" width="100%" alt="коровка" />
      <h5 class="mb-5 mt-2">В нашем роддоме ежедневно рождаются десятки милейших зверушек</h5>
      <img src="/images/cow_img.jpg" width="100%" alt="коровка" />
      <p class="additional">Милейших коровок: {{ left_results.cows }}</p>
      <img src="/images/rabbit_img.jpg" width="100%" alt="кролик" />
      <p class="additional">Милейших кроликов: {{ left_results.rabbits }}</p>
      <img src="/images/sheep_img.jpg" width="100%" alt="овечка" />
      <p class="additional">Милейших овечек: {{ left_results.sheeps }}</p>

    </div>
   
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LeftBlockComponent",
  data() {
    return {
      left_results: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "https://demo-api.vsdev.space/api/farm/left_widget"
      );
      this.left_results = res.data;
      console.log(this.left_results);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
.num-3 {
    margin-top: 65px;
}
</style>