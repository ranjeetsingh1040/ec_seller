<template>


  <div class="signin-wrapper w-full lg:w-1/3  md:w-1/2 mx-auto card">
    <h1 class="title is-4 mb-6">Seller Registeration</h1>
    <!-- <li><nuxt-link :to="{name: 'dashboard'}">Home</nuxt-link></li> -->

    <form class="w-full max-w-lg" action="" @submit.prevent="Registeration">
      <div class="flex flex-wrap -mx-3 mb-6 mt-5">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Business Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password" type="text" placeholder="Enter your Business Name" v-model="form.business_name">
          <p class="text-red-900" v-if="errors.business_name">{{ errors.business_name[0] }}</p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Business Type
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" type="text" placeholder="" v-model="form.business_type">
          <p class="text-red-900" v-if="errors.business_type">{{ errors.business_type[0] }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Business URL(Optional)
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name" type="text" placeholder="www.google.com" v-model="form.business_url">
          <p class="text-red-900" v-if="errors.business_url">{{ errors.business_url[0] }}</p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="gstin block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            GSTIN
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" type="text" placeholder="Enter GSTIN number" v-model="form.gstin">
          <p class="text-red-900" v-if="errors.gstin">{{ errors.gstin[0] }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            PAN Card Number
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name" type="text" placeholder="Enter your Pan Number" v-model="form.pan_number">
          <p class="text-red-900" v-if="errors.pan_number">{{ errors.pan_number[0] }}</p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Business Address
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password" type="text" placeholder="Enter your Business Address" v-model="form.business_address">
          <p class="text-red-900" v-if="errors.business_address">{{ errors.business_address[0] }}</p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            City
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city" type="text" placeholder="Udaipur" v-model="form.business_city">
          <p class="text-red-900" v-if="errors.business_city">{{ errors.business_city[0] }}</p>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            State
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city" type="text" placeholder="Rajasthan" v-model="form.business_state">
          <p class="text-red-900" v-if="errors.business_state">{{ errors.business_state[0] }}</p>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Pincode
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip" type="text" placeholder="313001" v-model="form.business_pincode">
          <p class="text-red-900" v-if="errors.business_pincode">{{ errors.business_pincode[0] }}</p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Bank Account Holder Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" type="text" placeholder="" v-model="form.bankaccount_name">
          <p class="text-red-900" v-if="errors.bankaccount_name">{{ errors.bankaccount_name[0] }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Bank Account Number
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name" type="number" placeholder="" v-model="form.bankaccount_number">
          <p class="text-red-900" v-if="errors.bankaccount_number">{{ errors.bankaccount_number[0] }}</p>
        </div>
      </div>

      <div class="field flex justify-between items-center">
        <p class="control">
          <button class="button is-info is-medium">
            Submit
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
      // errors: [],
      form: {
        business_name: '',
        business_type: '',
        pan_number: '',
        gstin: '',
        business_address: '',
        business_city: '',
        business_state: '',
        business_pincode: '',
        bankaccount_name: '',
        bankaccount_number: '',
        business_url: '',
        usergroup_id: '3'
      }
    }
  },

  middleware: [
    'redirectIfAuthenticated',
    'redirectIfGuest'
  ],

  methods: {
    // async signin() {
    //   await this.$auth.loginWith('local', {
    //     data: this.form
    //   })

    //   if (this.$route.query.redirect) {
    //     this.$router.replace(this.$route.query.redirect)
    //     return
    //   }

    //   this.$router.replace({
    //     name: 'index'
    //   })
    // },
    async Registeration() {

      let response = await this.$axios.$post('seller/storesellerregistration', this.form).then((response) => {
        this.$router.replace({
          name: 'auth-signin',
          params: { msg: response.message }
        })
      }).catch((error) => {
        this.errors = error.response.data.errors;
        console.log(error);
      });
    }
  }
}
$(document).ready(function () {
  $(".gstin").change(function () {
    var inputvalues = $(this).val();
    var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');
    if (gstinformat.test(inputvalues)) {
      return true;
    } else {
      alert('Please Enter Valid GSTIN Number');
      $(".gst").val('');
      $(".gst").focus();
    }
  });
});          
</script>
