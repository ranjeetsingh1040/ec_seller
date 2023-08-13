<template>
<div class="section" >
    <div class="container is-fluid">
      

          <article class="message" >
            <EditCollectionProduct />
          </article>
    </div>
</div>
</template>

<script>
  import { mapActions } from 'vuex'
  
  import EditCollectionProduct from '@/components/collection/EditCollectionProduct'

  export default {
    components: {
      EditCollectionProduct
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
