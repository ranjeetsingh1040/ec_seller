<template>
<div class="page form-page form-page-add-product" >
    <div class="">
             
         <!--  <article class="message" > -->
            <CollectionCreator />
         <!--  </article> -->
    </div>
</div>
</template>

<script>
  import { mapActions } from 'vuex'
  
  import CollectionCreator from '@/components/collection/CollectionCreator'

  export default {
    components: {
      CollectionCreator
    },

    middleware: [
      'redirectIfGuest'
    ],

    
  }
</script>
