<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark" fixed="top">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <router-link tag="b-nav-brand" to="/">
          <img src="../assets/logo.png" width="20px" alt="" />
         
        </router-link>
      </b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <router-link
            tag="b-nav-item"
            :to="{ name: 'home' }"
            active-class="active"
            exact
          >
            Главная
          </router-link>

          <router-link
            tag="b-nav-item"
            :to="{ name: 'about' }"
            active-class="active"
            exact
          >
            О нас
          </router-link>

          
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
#my-logo {
  width: 160px;
}

.active {
  font-weight: bold;
}

b-navbar {
  padding: 0 20px !important;
}

.hui {
  width: 500px !important;
}

.serch {
  display: inline-flex;
  background-color: aquamarine;
}


.icondiv {
position:relative;
margin: 15px 100px;
}

.withicon {
    border: 2px solid lightgrey;
    padding: 13px;
    border-radius:50px;
    outline:none;
    padding-left:40px;
}

#form-control {
  background-image: url('https://res.cloudinary.com/dt9b7pad3/image/upload/v1502810110/angle-down-dark_dkyopo.png');
  background-position: right center 5px;
}

.azaza {
  padding-left: 32px !important;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png) !important;
  background-size: 24px 24px;
  background-position-x: 3px;
  background-position-y: 2px;
}

</style>