<template>
  <div class="puppie-list">
    <!-- BANNER -->
    <header id="banner-section container" v-if="dog_breed">
      <div :class="dog_breed.slug" class="parallax-general mb-0">
        <div class="parallax-overlay text-center text-white">
          <h1 class="font-weight-bold mb-4 text-uppercase" style="font-size: 255%; width: 70vw">{{ dog_breed.slogan }}</h1>
          <p class="text-light text-center">{{ dog_breed.description }}</p>
          <span style="font-size: 4em">
            <i @click="view = !view" class="fas fa-chevron-circle-down" v-scroll-to="{ el: '#breeds-head-section', duration: 500}"></i>
          </span>
        </div>
      </div>
    </header>

    <!-- PUPPIES -->
    <header id="breeds-head-section">
      <div class="breeds-inner container pt-0">
        <div class="row">
          <div class="col-sm-4" v-for="puppy in puppies" :key="puppy.id">
            <div class="card mt-5">
              <router-link :to="{name: 'details', params: {puppy_slug: puppy.slug} }" class="card-block clearfix">
                <img class="card-img-top img-fluid" :src="puppy.image" alt="Card image cap">
                <div class="card-body">
                  <h5>{{ puppy.name }}</h5>
                  <p class="card-text text-muted mt-2 mb-50">{{ puppy.description }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "PuppieList",
  data() {
    return {
      puppies: [],
      dog_breed: null
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route() {
      // console.log("after", this.$route.path);
      this.fetchData();
    }
  },
  beforeRouteUpdate(to, from, next) {
    // console.log("before", this.$route.path);
    this.puppies = [];
    next();
  },
  methods: {
    fetchData() {
      // fetch data from firestore
      if (this.$route.params.breed_slug == "all") {
        db.collection("puppies")
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              // console.log(doc.id, "=>", doc.data());
              let puppy = doc.data();
              puppy.id = doc.id;
              this.puppies.push(puppy);
            });
          });
      } else {
        db.collection("puppies")
          .where(
            "breed",
            "==",
            this.$route.params.breed_slug
              .replace("-", " ")
              .slice(0, -1)
              .toLowerCase()
          )
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              // console.log(doc.id, "=>", doc.data());
              let puppy = doc.data();
              puppy.id = doc.id;
              this.puppies.push(puppy);
            });
          });
      }
      let ref = db
        .collection("breeds")
        .where("slug", "==", this.$route.params.breed_slug);
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.dog_breed = doc.data();
          this.dog_breed.id = doc.id;
        });
      });
    }
  }
};
</script>

<style lang="scss">
.parallax-general {
  height: 70vh;
  width: 94vw;
  padding-top: 15vh;
  margin: auto;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.french-bulldogs {
  background-image: url("../../src/assets/french-bulldogs-cover.jpg");
}
.english-bulldogs {
  background-image: url("../../src/assets/english-bulldogs-cover.jpg");
}
.prague-ratters {
  background-image: url("../../src/assets/prague-ratters-cover.jpg");
}
.all {
  background-image: url("../../src/assets/all.jpg");
}
.parallax-overlay {
  height: 60vh;
  width: 60vw;
  margin: auto;
  opacity: 0.9;
}
.col-sm-4 .card {
  width: 55vh;
}
</style>
