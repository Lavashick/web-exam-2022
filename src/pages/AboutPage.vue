<template>
  <div>
    

    <b-row class="justify-content-center">
      <b-col class="col-4 col-lg-2 left-block">
        <left-block-component />
      </b-col>
      <b-col class="col-8 right-block">
          <h1 class="mb-3">О нас</h1>
        <span>
          {{ about_page.text }}
        </span>

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
  name: "AboutPage",
  data() {
    return {
      about_page: [],
      baby: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "https://demo-api.vsdev.space/api/farm/about_page"
      );
      this.about_page = res.data;
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