<template>
  <div>
    <b-row class="justify-content-center">
      <b-col class="col-4 col-lg-2 left-block">
        <left-block-component />
      </b-col>
      <b-col class="col-8 right-block">
        <h1 class="mb-3">Фермерский роддом номер 5</h1>
        <img class="mb-3" :src="home_page.image" width="70%" alt="Зайчики" />
        <p>{{ home_page.text }}</p>

        <div class="form-comment">
          <b-form v-if="show" v-on:submit.prevent="submitForm">
            <b-form-group
              id="input-group-1"
              label="Добавление животного:"
              label-for="input-1"
              class="mb-2"
            >
              {{ fields.type.title }}: <b-form-select v-model="form.type" :options="type_options"></b-form-select>
              <b-form-input
                id="input-name"
                type="text"
                :placeholder="fields.name.title"
                required
                v-model="form.name"
              ></b-form-input>
              <b-form-input
                id="input-weight"
                type="text"
                :placeholder="fields.weight.title"
                required
                v-model="form.weight"
              ></b-form-input>
              <b-form-input
                id="input-color"
                type="text"
                :placeholder="fields.color.title"
                required
                v-model="form.color"
              ></b-form-input>
              {{ fields.sex.title }}: <b-form-select v-model="form.sex" :options="sex_options"></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary">Отправить</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import LeftBlockComponent from "@/components/LeftBlockComponent.vue";

export default {
  components: { LeftBlockComponent },
  name: "HomePage",
  data() {
    return {
      show: true,
      home_page: [],
      baby_form: [],
      fields: null,
      form: {
        type: "",
        name: "",
        weight: "",
        color: "",
        sex: "",
      },
      type_options: [],
      sex_options: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(
        "https://demo-api.vsdev.space/api/farm/home_page"
      );
      this.home_page = res.data;

      this.fields = (await axios.get(
        "https://demo-api.vsdev.space/api/farm/baby/form"
      )).data.fields;

      this.type_options = this.fields.type.values;
      this.form.type = this.type_options[0];

      this.sex_options = this.fields.sex.values;
      this.form.sex = this.sex_options[0];
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    submitForm() {
      console.log(this.form);
      axios
        .post("https://demo-api.vsdev.space/api/farm/baby", this.form)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log('finally');
        });
    },
  },
};
</script>

<style>
.left-block,
.right-block {
  padding: 0 20px;
}

.form-comment {
  background-color: rgb(243, 243, 243);
  border-radius: 16px;
  padding: 16px;
  margin: 16px;
}
</style>