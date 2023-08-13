<template>
  <div class="section">
    <DisplayCollectionProduct />
  </div>
</template>



<script>
import { mapActions } from 'vuex'

import DisplayCollectionProduct from '@/components/collection/DisplayCollectionProduct'

export default {
  components: {
    DisplayCollectionProduct
  },

  middleware: [
    'redirectIfGuest'
  ],


}
</script>