<template>
  <div id="app">
    <h1 class="pb-2 font-bold mt-16 is-4">Attributes</h1>


    <!-- <div v-if="this.failure != null" class="w-1/2 my-4 bg-red-500 p-4 flex justify-between" id="success-alert">
      <p class="text-white">{{ this.failure }}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()" />
    </div> -->


    <div v-if="this.failure != null" class="w-1/2 my-4 bg-red-100 p-4 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <span class="block sm:inline" >{{ this.failure }}.</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="fclose()">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>



    <form action="#" @submit.prevent="store" class="custom-form">
      <div class="flex flex-col lg:flex-row md:flex-row">
        <div class="w-full lg:w-3/5">
          <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Collection Name</label>
              <div class="select is-fullwidth w-full lg:w-3/4">
                <input class="input" type="text" placeholder="Enter collection name" required
                  :class="{ 'is-danger': errors.name }" v-model="form.name" autofocus="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-info">Save</button>
          <a class="button is-text" @click="cancel">Cancel</a>
        </p>
      </div>
      <div class="grid md:grid-cols-3 xs:grid-cols-1  h-full w-full ">
        <div class=" text-center m-1 	 flex align-middle cusflex md:flex-rows xs:flex-cols xs:align-center border-solid border-2 p-2 border-red-200 shadow-md" v-for="product in products"
          :key="product.id">
          <input type="hidden" name="productid" :value="product.id" />



          <div class="m-1 xs:w-full lg:w-1/3 md:w-full cusflex">
            <div class="m-1 customchk">
              <input type="checkbox" :id="product.id" v-model="form.collectionProductid" :value="product.id"  class="accent-red-500	" />
            </div>
            <div>
              <label :for="product.id">
                <img v-bind:src="rooturl + product.productgallery[0].imagepath"
                  class="imgsize" /></label>
            </div>
          </div>
          <div class="m-1 xs:w-full lg:w-1/3">
            <label :for="product.id">{{ product.name }}</label>
          </div>





          
        </div>

      </div>
      <div v-if="page_count > 1" class="m-auto flex justify-center align-center text-center">

<!-- 
          <paginate v-model="page" :page-count="page_count" :page-range="3" :margin-pages="1" :click-handler="getProducts"
            :prev-text="'<'" :next-text="'>'" :container-class="'pagination'" :page-class="'page-item'"></paginate> -->


            <paginate v-model="page" :page-count="page_count"  :page-range="3" :margin-pages="1" :click-handler="getProducts"
        :container-class="'mb-12 inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4'"
        :page-class="'mx-1.5 paginationitem'" :prev-link-class="'fa-solid fa-chevron-left paginationitem'"
        :next-link-class="'fa-solid fa-chevron-right paginationitem'" :active-class="'active'"
        class="items-center h-[70px] text-4xl text-center py-5 my-5 flex mx-auto">
        </paginate>


        </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VueSwal from "vue-swal";

export default {
  data() {
    return {
      form: {
        name: "",
        collectionProductid: [],
      },
      rooturl: process.env.SITEURL,
      products: [],
      failure: null,
      page: 1,
      page_count: 0,
      recordnotfound: "",
      showfilter: 0,
      total: "",
    };
  },

  methods: {
    async store() {
      if (this.form.collectionProductid.length < 4) {
        this.failure = "Select Minimum 4 Products";
      } else {
        let response = await this.$axios
          .$post("seller/addcollection", this.form)
          .then((response) => {
            if (response.message !== "Collection Create Successfully") {
            } else {
              this.$router.replace({ name: "collection" });
            }
          });
      }
    },
    async getProducts(page = 1) {
      let response = await this.$axios.$get("seller/getmyproductsc" + '?&show=' + this.showfilter + '?&page=' + page);
      this.products = response.data;
      this.page_count = response.meta.last_page;
      this.total = response.meta.total;
    },
    cancel() {
      this.$router.replace({ name: "collection" });
    },
    fclose() {
      this.failure = null;
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
<style >
.imgsize {
  width: 100px;
  height: 100px;
}
@media only screen and (min-width: 600px) and (max-width:800px) {
  .imgsize {
  height: 0px !important;
    }
}

.thcustom {
  width: 0px;
}

.thcustom1 {
  width: 150px;
}

.thcustom2 {
  width: 150px;
}

.cusflex {
  display: flex;
  align-items: center;
}

.customchk {
  margin-right: 1rem;
  margin-left: 0.5rem;
}

/* .cwidth {
  width: 32.33333%;
} */
@media screen and (max-width:600px){

  .cusflex{
    flex-direction: column;
  }

}

</style>
