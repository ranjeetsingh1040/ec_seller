<template>
  <div class="page signin-page p-4 ">
    <div class="signin-wrapper w-full lg:w-1/3  md:w-1/2 mx-auto card">
      <h1 class="text-2xl">Sign in</h1>
      <div v-if="this.success != null" class="my-4 bg-green-500 p-4 flex justify-between" id="success-alert">
        <p class="text-white">{{ this.success }}</p>
        <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
      </div>
      <form action="" @submit.prevent="signin">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" :class="{ 'is-danger': errors.email }" placeholder="Enter email"
              v-model="form.email" id="email" autofocus="">
            <p class="help is-danger" v-if="errors.email">
              {{ errors.email[0] }}
            </p>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" v-model="form.password" :class="{ 'is-danger': errors.email }">

            <p class="help is-danger" v-if="errors.password">
              {{ errors.password[0] }}
            </p>
          </div>
        </div>


        <div class="flex justify-between mt-4 items-center">
          <div>
            <nuxt-link :to="{ name: 'auth-resetpassword' }" class="no-underline text-black text-sm my-2">
              Forgot your password?
            </nuxt-link>
          </div>
          <div class="">
            <button class="button is-info is-medium">
              Sign in
            </button>
          </div>

        </div>



        <div class="">
          <p class="text-center text-grey-900 text-sm my-2">Dont have an account</p>
          <div class="flex justify-center">
            <nuxt-link :to="{ name: 'auth-sellerregister' }" class=" no-underline hover:font-semibold"
              style="color:#ff5139">
              Click here to Sign Up
            </nuxt-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      refresh: false,
      success: null,
      msg:this.$route.params.msg,
      form: {
        email: '',
        password: ''
      },
    }
  },

  middleware: [
    'redirectIfAuthenticated'
  ],

  methods: {
    async signin() {
      await this.$auth.loginWith('local', {
        data: this.form
      }).then((response) => {

        // if (this.$route.query.redirect) {
        //   this.$router.replace(this.$route.query.redirect)
        //   return
        // }
        if (response.data.data.profileStatus == 0) {
          this.$router.replace({ name: 'auth-sellerprofile' });
        } else {
          this.$router.replace({ name: 'dashboard' });
          // this.$router.replace({ name: 'index'});
        }

      }).catch((error) => {

        console.log(error);
      });


    },
    async close() {
      this.success = null;
    }
  },

  created() {
    this.success =this.msg;
    // this.$nuxt.$on('sellerr', data => {
    //   this.success = data;
    //   alert(this.success);
    // });

  },
}
</script>
