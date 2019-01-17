<template>
  <div class="details">
    <!-- DETAILS -->
    <header id="details-section">
      <div class="row container-fluid justify-content-center" v-if="puppy">
        <div class="col-sm-6">
          <!-- BREADCRUMB -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item text-capitalize">
                <router-link :to="{ name: 'puppie-list', params: { breed_slug: puppyURL }}">{{ puppy.breed }}s</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ puppy.name }}</li>
            </ol>
          </nav>
        </div>
        <div class="col-sm-4"></div>
        <div class="w-100"></div>

        <!-- Photos -->
        <div class="col-sm-6">
          <img class="img-fluid" :src="puppy.image" alt=" Card image cap">
        </div>

        <!-- Description -->
        <div class="col-sm-4 text-primary">
          <h3 class="font-weight-bold mb-3">{{ puppy.name }}</h3>
          <p class="text-justify">{{ puppy.description }}</p>
          <div class="col-10 mx-auto">
            <table class="table table-sm">
              <tbody>
                <tr>
                  <td class="font-weight-bold">Age</td>
                  <td>{{ puppy.age }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Birth date</td>
                  <td>{{ puppy.birth_date }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Gender</td>
                  <td>{{ puppy.gender }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Vaccinations</td>
                  <td>{{ puppy.vaccinations }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Vet inspection</td>
                  <td>{{ puppy.vet_status }}</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Available by</td>
                  <td>{{ puppy.availability }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row align-items-center mt-5">
            <div class="col text-center">
              <h6 class="font-weight-bold">Adoption Fee</h6>
              <span>${{ puppy.adoption_fee }}</span>
            </div>
            <div class="col">
              <button
                @click="reserve = !reserve"
                class="btn btn-primary btn-block rounded-0 text-uppercase"
                v-scroll-to="{
                  el: '#contact',
                  duration: 900}"
              >RESERVE {{ puppy.name }}</button>
            </div>
          </div>
        </div>
      </div>

      <!-- CONTACT -->
      <div id="contact">
        <Contact v-if="reserve"/>
      </div>
    </header>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
import slugify from "slugify";
import Contact from "@/components/Contact.vue";

export default {
  name: "Details",
  data() {
    return {
      puppy: null,
      puppyURL: null,
      reserve: false,
      activeElement: ""
    };
  },
  components: {
    Contact
  },
  created() {
    let ref = db
      .collection("puppies")
      .where("slug", "==", this.$route.params.puppy_slug);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.puppy = doc.data();
        this.puppy.birth_date = moment(doc.birth_date).format("LL");
        this.puppy.availability = moment(doc.availability).format("LL");
        this.puppy.id = doc.id;
        this.puppyURL = slugify(this.puppy.breed) + "s";
      });
    });
  }
};
</script>

<style lang="scss">
.details {
  background-color: #fff8;
  padding-top: 10vh;
}

.breadcrumb {
  background-color: rgb(247, 247, 247);
}

#details-section .container {
  width: 80%;
}
</style>
