<template>
  <div>
    <h1 class="mb-3">Фермерский роддом номер 5</h1>

    <b-row class="justify-content-center">
      <b-col class="col-4 left-block">
        <left-block-component/>
      </b-col>
      <b-col class="col-8 right-block">
          <img 
          src="/images/home_page_img.jpg"
          width="70%"
          alt="Зайчики"
        />

              <p>
                  Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.
Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.
С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития.
</p> 
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import LeftBlockComponent from '@/components/LeftBlockComponent.vue';

export default {
  components: { LeftBlockComponent },
  name: "HomePage",
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
  background-color: aquamarine;
  padding: 0 20px;
}
</style>