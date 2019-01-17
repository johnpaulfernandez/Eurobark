<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light">
    <div class="container-fluid p-0">
      <router-link to="/" class="navbar-brand mr-5 font-weight-bold no-gutters">EUROBARK & CO.</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <scrollactive ref="scrollactive" :offset="10" :duration="600" @itemchanged="onItemChanged">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/#home" class="nav-link scrollactive-item" :class="{'-active': this.activeElement == 'home'}">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link
                to="/puppies/all"
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Puppies</router-link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/puppies/french-bulldogs" class="dropdown-item">French Bulldogs</router-link>
                <router-link to="/puppies/english-bulldogs" class="dropdown-item">English Bulldogs</router-link>
                <router-link to="/puppies/prague-ratters" class="dropdown-item">Prague Ratters</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/#about" class="nav-link scrollactive-item" :class="{'-active': this.activeElement == 'about'}">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/faq" class="nav-link">FAQ</router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/#contact"
                class="nav-link scrollactive-item"
                :class="{'-active': this.activeElement == 'contact'}"
              >Contact</router-link>
            </li>
          </ul>
        </scrollactive>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ["dog_breeds"],
  data() {
    return {
      activeElement: ""
    };
  },
  methods: {
    onItemChanged(event, currentItem) {
      if (currentItem.attributes.href.value.indexOf("#") > -1) {
        var id = currentItem.attributes.href.value.replace("#", "");
        console.log(id);
        this.activeElement = id;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar-brand {
  font-family: "Amatic SC", cursive;
}

.navbar {
  background-color: rgb(240, 238, 238);
}

.navbar-nav .dropdown a.router-link-exact-active {
  color: #d0b0a6;
}

.navbar-nav .nav-item a:hover,
.navbar-nav .nav-item a.is-active {
  color: #d0b0a6;
}
</style>
