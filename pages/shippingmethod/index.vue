<template>
  <div class="section">
  	<DisplayShippingMethod/>
  </div>
  </template>
<script>
 // import CountryDropdown from '@/components/form/CountryDropdown'
  import { mapActions } from 'vuex'
  
  import DisplayShippingMethod from '@/components/shippingmethod/DisplayShippingMethod'

  export default {
    components: {
      DisplayShippingMethod
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>