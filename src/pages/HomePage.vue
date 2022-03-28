<template>
  <div>


    <b-row class="justify-content-center">
      <b-col class="col-4 col-lg-2 left-block">
        <left-block-component />
      </b-col>
      <b-col class="col-8 right-block">
              <h1 class="mb-3">Фермерский роддом номер 5</h1>
        <img :src="home_page.image" width="70%" alt="Зайчики" />
        <p>{{home_page.text}}</p>


        <h1>
            Наши животные: 
        </h1>

        <our-animals-component/>

      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import LeftBlockComponent from "@/components/LeftBlockComponent.vue";
import OurAnimalsComponent from '@/components/OurAnimalsComponent.vue';

export default {
  components: { LeftBlockComponent, OurAnimalsComponent },
  name: "HomePage",
  data() {
    return {
      home_page: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "https://demo-api.vsdev.space/api/farm/home_page"
      );
      this.home_page = res.data;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>


.left-block,
.right-block {
  padding: 0 20px;
}
</style>