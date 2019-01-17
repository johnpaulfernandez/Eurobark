<template>
  <div id="contact" class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 offset-xl-4">
          <h4>Get In Touch</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, temporibus!</p>
          <form>
            <div class="input-group input-group-md mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Name" v-model="name">
            </div>

            <div class="input-group input-group-md mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Email" v-model="email">
            </div>

            <div class="input-group input-group-md mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-mobile-alt"></i>
                </span>
              </div>
              <input class="form-control" placeholder="Phone" v-model="phone">
            </div>

            <div class="input-group input-group-md mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-pencil-alt"></i>
                </span>
              </div>
              <textarea class="form-control" placeholder="Message" rows="5" v-model="message"></textarea>
            </div>

            <input type="submit" v-on:click="submit" value="SUBMIT" class="btn btn-primary btn-block">
          </form>
          <p v-if="submitSuccess && !submitFailure" class="pt-3 text-center lead text-success">Message sent!</p>
          <p v-if="submitFailure" class="pt-3 text-center lead text-fail">Please fill out each field to send a message!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      email: null,
      name: null,
      phone: null,
      message: null,
      submitSuccess: false,
      submitFailure: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      let emailJSscript = document.createElement("script");
      emailJSscript.setAttribute(
        "src",
        "https://cdn.emailjs.com/sdk/2.3.2/email.min.js"
      );
      document.head.appendChild(emailJSscript);
    });
  },
  methods: {
    submit() {
      this.submitSuccess = false;
      this.submitFailure = false;

      event.preventDefault();

      console.log(this.name);
      console.log(this.email);
      console.log(this.phone);
      console.log(this.message);
      if (
        this.email !== null &&
        this.email !== "" &&
        this.name !== null &&
        this.name !== "" &&
        this.message !== null &&
        this.message !== "" &&
        this.phone !== null &&
        this.phone !== ""
      ) {
        window.emailjs.init("user_Lg4549mHhBlQSbnoqjnWv");

        var template_params = {
          reply_to: this.email,
          from_name: this.name,
          to_name: "Jarmila",
          message_html: this.message,
          phone: this.phone
        };

        var service_id = "default_service";
        var template_id = "template_vxd9Ofur";
        window.emailjs.send(service_id, template_id, template_params).then(
          response => {
            console.log("SUCCESS You just sent an email...", response);
            this.submitSuccess = !this.submitSuccess;

            this.email = null;
            this.name = null;
            this.message = null;
            this.phone = null;
          },
          error => {
            console.log("FAILED Throw an error to user...", error);
          }
        );
      } else {
        this.formInvalid = true;
        this.submitFailure = !this.submitFailure;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
