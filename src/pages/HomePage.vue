<template>
  <div>
    <h1>HomePage</h1>

    <b-row class="justify-content-center">
      <b-col class="col-2 left-block">
        <div class="num-3">3</div>
        <div class="num-4">4</div>
      </b-col>
      <b-col class="col-8 right-block">
        <b-row>
          <b-col class="num-5 col-6"> 6 </b-col>
          <b-col class="num-6 col-6"> 7 </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
.num-5, .num-6, .num-4, .num-3 {
    background-color: bisque;
}

.left-block,
.right-block {
  background-color: aquamarine;
  margin: 0 20px;
}
</style>