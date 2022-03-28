<template>
  <div>
    <header-component />
    <b-row class="main-container justify-content-center" no-gutters>
          <b-col>
      <router-view />
      </b-col>
    </b-row>
  </div>
</template>
<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.main-container {
  margin: 90px 20px !important;
}

h1 {
  text-align: center;
}

img {
  border-radius: 8px;
}

</style>
