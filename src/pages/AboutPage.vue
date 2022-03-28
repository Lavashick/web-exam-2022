<template>
  <div>
    <h1 class="mb-3">О нас</h1>

    <b-row class="justify-content-center">
      <b-col class="col-4 left-block">
        <left-block-component />
      </b-col>
      <b-col class="col-8 right-block">
        <p>
          Таким образом реализация намеченных плановых заданий позволяет оценить
          значение новых предложений. Таким образом новая модель организационной
          деятельности способствует подготовки и реализации систем массового
          участия. С другой стороны укрепление и развитие структуры обеспечивает
          участие в формировании систем массового участия. Равным образом
          постоянный количественный рост и сфера нашей активности играет важную
          роль в формировании системы обучения кадров, соответствует насущным
          потребностям. Повседневная практика показывает, что реализация
          намеченных плановых заданий в значительной степени обуславливает
          создание модели развития. Товарищи! сложившаяся структура организации
          представляет собой интересный эксперимент проверки направлений
          прогрессивного развития. Разнообразный и богатый опыт консультация с
          широким активом обеспечивает широкому кругу. Таким образом новая
          модель организационной деятельности способствует подготовки и
          реализации систем массового участия.
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import LeftBlockComponent from "@/components/LeftBlockComponent.vue";

export default {
  components: { LeftBlockComponent },
  name: "AboutPage",
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
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
.num-5,
.num-6,
.num-4,
.num-3 {
  background-color: bisque;
}

.left-block,
.right-block {
  background-color: rgb(234, 238, 236);
  padding: 0 20px;
}
</style>