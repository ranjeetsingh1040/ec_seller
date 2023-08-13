<template>
  <div class="section">
    <DisplayPincode/>
  </div>
  </template>



<script>
  import DisplayPincode from '@/components/setting/DisplayPincode'

  export default {
    components: {
      DisplayPincode
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>