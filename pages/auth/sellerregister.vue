<template>


  <div class="signin-wrapper w-full lg:w-1/3  md:w-1/2 mx-auto card">
    <h1 class="title is-4">Seller Register</h1>
    <form action="" @submit.prevent="register">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Enter Name" v-model="form.name">
          <p class="text-red-900" v-if="errors.name">{{ errors.name[0] }}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">E-Mail Address</label>
        <div class="control">
          <input class="input" type="email" placeholder="Enter email" v-model="form.email">
          <p class="text-red-900" v-if="errors.email">{{ errors.email[0] }}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Mobile Number</label>
        <div class="control">
          <input class="input" type="number" v-model="form.mobileno">
          <p class="text-red-900" v-if="errors.mobileno">{{ errors.mobileno[0] }}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" v-model="form.password">
          <p class="text-red-900" v-if="errors.password">{{ errors.password[0] }}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Confirm Password</label>
        <div class="control">
          <input class="input" type="password" v-model="form.password_confirmation">
        </div>
      </div>

      <div class="field flex justify-between items-center">
        <p class="control">
          <button class="button is-info is-medium">
            Register
          </button>
        </p>
        <div class="">
          <nuxt-link :to="{ name: 'auth-signin' }" class=" no-underline hover:font-semibold" style="color:#ff5139">
            Sign In
          </nuxt-link>
        </div>
      </div>

    </form>
    <LoadingBar v-if="show" />

  </div>
</template>

<script>
import LoadingBar from '@/components/LoadingBar'
export default {
  layout: 'blank',
  data() {
    return {
      show: false,
      // errors: [],
      form: {
        name: '',
        email: '',
        mobileno: '',
        password: '',
        password_confirmation: '',
        usergroup_id: '3',
        success: ''
      }
    }
  },

  components: {
    LoadingBar,
  },

  middleware: [
    'redirectIfAuthenticated'
  ],

  methods: {
    async signin() {
      await this.$auth.loginWith('local', {
        data: this.form
      })

      if (this.$route.query.redirect) {
        this.$router.replace(this.$route.query.redirect)
        return
      }

      this.$router.replace({
        name: 'index'
      })
    },
    async register() {
      this.show=true;
      let response = await this.$axios.$post('auth/register', this.form).then((response) => {
        this.$nuxt.$emit('sellerr', response.message);
        this.$router.replace({
          name: 'auth-signin',
          params: { msg: response.message }
        })
      }).catch((error) => {
        // this.errors = error.response.data.errors;
        // console.log(error);
      });
      this.show=false;
    }
  }
}
</script>
