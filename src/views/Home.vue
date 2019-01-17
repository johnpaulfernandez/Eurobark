<template>
  <div class="home">
    <!-- BANNER -->
    <header id="home">
      <div class="parallax-home mb-4">
        <div class="parallax-overlay text-center text-white">
          <div class="align-self-center">
            <img src="@/assets/logo-top.png" alt class="img-fluid">
          </div>
          <h1 class="font-weight-bold">EUROBARK & CO.</h1>
          <div class="align-self-center mb-3">
            <img src="@/assets/logo-btm.png" alt class="img-fluid">
          </div>
          <h5 class="text-light">THE BOUTIQUE SITE FOR PUPPIES FROM EUROPE</h5>
          <div style="height: 100px"></div>
          <router-link to="/puppies/all" tag="button" class="btn btn-lg btn-outline-light">
            <span class="small">See all our puppies</span>
          </router-link>
        </div>
      </div>
    </header>

    <!-- BREEDS -->
    <header id="breeds-section">
      <div class="breeds-inner container p-0">
        <div class="row">
          <div class="col-md-4" v-for="(breed, index) in dog_breeds" :key="index">
            <div class="card mt-5">
              <router-link :to="{ name: 'puppie-list', params: {breed_slug: breed.slug}}" class="card-block clearfix">
                <img class="card-img-top img-fluid" :src="breed.image" alt=" Card image cap">
                <div class="card-body text-center">
                  <h5>{{ breed.name }}</h5>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ABOUT -->
    <header id="about">
      <div class="container">
        <div class="row bg-light align-items-center p-0 mt-5">
          <div class="col-lg-1"></div>
          <div class="col-lg-4 text-center float-sm-left text-primary">
            <blockquote class="blockquote">
              <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer class="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
          <div class="col-lg-1"></div>
          <img src="@/assets/aboutphoto.jpg" class="thumb-post col-lg-3 img-fluid p-0">
          <img src="@/assets/about2.jpg" class="thumb-post col-lg-3 img-fluid d-sm-none d-md-block p-0">
        </div>

        <div class="row bg-secondary thumbpost align-items-center">
          <div class="col-lg-6 p-0">
            <img src="@/assets/general.jpg" class="img-fluid d-sm-none d-md-block">
          </div>
          <div class="col-lg-6 py-5">
            <div class="col-lg-8 offset-lg-2 align-self-center text-center">
              <h4 class="mb-5 font-weight-bold pt-2">ABOUT OUR PUPPIES</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam tempora non dolorum reiciendis obcaecati dolore porro perferendis, deleniti, nemo blanditiis id! Totam explicabo tempora excepturi ducimus, autem quo cumque?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quaerat dignissimos libero neque nobi sequi recusandae beatae autem, laborum veritatis accusamus magni sint voluptates explicabo laudantium aspernatur rerum! Accusamus, corporis possimus?</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- CONTACT -->
    <Contact/>
  </div>
</template>

<script>
import Contact from "@/components/Contact.vue";

export default {
  name: "Home",
  props: ["dog_breeds"],
  components: {
    Contact
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="scss">
#home h1 {
  font-family: "Amatic SC", cursive;
}

.parallax-home {
  background-image: url("../../src/assets/cover.jpg");

  height: 90vh;
  width: 94vw;

  padding-top: 15vh;
  margin: auto;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax-overlay {
  height: 60vh;
  width: 60vw;
  margin: auto;
  opacity: 0.9;
}

#about-section {
  margin-top: 40px;
  background-color: white;
}

#contact-section {
  margin-top: 40px;
}

.thumb-post img {
  object-fit: cover;
}
a:hover {
  color: rgba(203, 92, 13, 0.5);
}
</style>
