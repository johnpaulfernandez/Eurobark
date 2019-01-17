<template>
  <footer id="main-footer" class="text-white mt-5">
    <div class="container-fluid bg-secondary">
      <div class="row">
        <div class="col-xl-6 offset-xl-3">
          <img src="@/assets/logo-top-doghouse.png" alt class="img-fluid mx-auto d-block mt-5 mb-3">
          <h2 class="text-center font-weight-bold text-white mb-4">EUROBARK & CO.</h2>
          <div class="mb-3 bg-light">
            <hr>
          </div>
          <div class="row text-center my-5 font-weight-bold align-self-center">
            <span class="col-4">Follow us!</span>
            <span class="col-4" style="font-size: 1.5em">
              <a href="http://www.facebook.com" target="_blank">
                <i class="fab fa-facebook-f mx-3"></i>
              </a>
              <a href="http://www.instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </span>
            <div class="col-4">
              <router-link to="/faq">
                <span class="mr-3">FAQ</span>
              </router-link>

              <span>Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="text-center text-primary small">
        <span>&copy; {{ year }} JarmilasPuppies.com. All Rights Reserved</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style>
#main-footer h2 {
  font-family: "Amatic SC", cursive;
  /* font-size: 120px; */
}
</style>
