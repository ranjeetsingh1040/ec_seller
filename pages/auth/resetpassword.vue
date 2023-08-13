<template>
  <div class="page page-reset-password w-full lg:w-1/3 md:w-1/2 mx-auto card">
    <div v-if="this.success != null" class="w-100 my-4 bg-green-500 p-4 flex justify-between" id="success-alert">
      <p class="text-white">{{ this.success }}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
    </div>
    <div v-if="this.failure != null" class="w-100 my-4 bg-red-500 p-4 flex justify-between" id="success-alert">
      <p class="text-white">{{ this.failure }}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()">
    </div>

    <h1 class="title is-4">Reset Password</h1>
    <form action="" @submit.prevent="store">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="Enter email" v-model="form.email" required>
        </div>
        <p class="text-red-900" v-if="errors.email">{{ errors.email[0] }}</p>
      </div>
      <!-- <div class="field">
              <label class="label">New Password</label>
              <div class="control">
                <input class="input" type="text" placeholder="New Password" v-model="form.password">
              </div>
            </div>
             <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input class="input" type="text" placeholder="Confirm Password" v-model="form.confirmpassword">
              </div>
            </div> -->

      <div class="field">
        <p class="control">
          <button class="button is-info is-medium">
            Reset
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      form: {
        email: '',
        usergroup_id: '3'
        //  password: ''
      },
      // errors: [],
      success: null,
      failure: null,
    }
  },

  middleware: [
    'redirectIfAuthenticated'
  ],

  methods: {
    async close() {
      this.success = null;
    },
    async fclose() {
      this.failure = null;
    },
    async store() {
      let response = await this.$axios.$post('auth/sellerresetpassword', this.form).then((response) => {
        if (response.message !== "Password send successfully. Please check your email.") {
          this.failure = response.message;
        }
        else {
          this.form = "";
          this.$nuxt.$emit('sellerresetpassword', { 'refresh': true, 'message': response.message });
          this.$router.replace({
            name: 'auth-signin',
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>
