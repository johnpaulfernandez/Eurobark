<template>
  <div id="app">
    <Navbar/>
    <transition name="fade" mode="out-in">
      <router-view :dog_breeds="dog_breeds" :key="$route.params.breed_slug"/>
    </transition>
    <FooterSection/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import FooterSection from "./components/Footer.vue";
import FrenchBulldogs from "@/assets/french_bulldogs.jpg";
import EnglishBulldogs from "@/assets/english_bulldogs.jpg";
import PragueRatters from "@/assets/prague_ratters.jpg";

export default {
  name: "app",
  components: {
    Navbar,
    FooterSection
  },
  data() {
    return {
      dog_breeds: [
        {
          name: "French Bulldogs",
          slug: "french-bulldogs",
          slogan: "The world needs more French Bulldogs",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum exercitationem iste maiores sed neque. Nisi quod facere deleniti, ratione, sit, tenetur laboriosam assumenda eligendi quasi ducimus quis officia? Ab!",
          image: FrenchBulldogs
        },
        {
          name: "English Bulldogs",
          slug: "english-bulldogs",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum exercitationem iste maiores sed neque. Nisi quod facere deleniti, ratione, sit, tenetur laboriosam assumenda eligendi quasi ducimus quis officia? Ab!",
          image: EnglishBulldogs
        },
        {
          name: "Prague Ratters",
          slug: "prague-ratters",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, rerum exercitationem iste maiores sed neque. Nisi quod facere deleniti, ratione, sit, tenetur laboriosam assumenda eligendi quasi ducimus quis officia? Ab!",
          image: PragueRatters
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./styles/app.scss";

#app {
  background-color: rgb(237, 237, 238);
  font-size: 1rem;
}

@include media-breakpoint-up(xs) {
  #app {
    font-size: 0.8rem;
  }
  #home h1 {
    font-size: 3rem;
  }
  .navbar-brand {
    font-size: 1.5rem;
  }

  .container-fluid {
    width: 94vw;
  }
}

@include media-breakpoint-up(sm) {
  #app {
    font-size: 0.9rem;
  }

  #home h1 {
    font-size: 6rem;
  }
}

@include media-breakpoint-up(md) {
  #app {
    font-size: 0.9rem;
  }

  #home h1 {
    font-size: 6rem;
  }
}

@include media-breakpoint-up(lg) {
  #app {
    font-size: 1rem;
  }

  #home h1 {
    font-size: 8rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
