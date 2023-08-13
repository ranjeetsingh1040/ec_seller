<template>
  <div id="app">
    <h1 class="title is-4">Edit Collection</h1>
    <div v-if="this.failure != null"
      class="w-1/2 my-4 bg-red-500 p-4 flex justify-between" id="success-alert"><p class="text-white">{{ this.failure }}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()"/>
    </div>
    <form action="#" @submit.prevent="store" class="custom-form" style="width: 140%">
      <div class="flex flex-col lg:flex-row md:flex-row">
        <div class="w-full lg:w-3/5">
          <div class="columns mb-2 lg:mb-10">
            <div class="field column flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Collection Name</label>
              <div class="select is-fullwidth w-full lg:w-3/4">
                <input class="input" type="text" placeholder="Enter collection name" required :class="{ 'is-danger': errors.name }" v-model="form.name" autofocus="" />
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

      <div class="flex flex-row h-32 w-4/5 lg:flex-wrap md:flex-wrap">
       <div class="text-center m-1 cwidth flex align-middle cusflex bg-gray-100" v-for="product in products" :key="product.id">
          <input type="hidden" name="productid" :value="product.id" />
          <div class="m-1 w-1/3 cusflex">
            <div class="m-1 customchk">
             <input type="checkbox" :id="product.id" v-model="form.collectionProductid" :value="product.id"/>
            </div>
            <div>
             <label :for="product.id" ><img v-bind:src=" rooturl + product.productgallery[0].imagepath " class="imgsize" /></label>
            </div>
          </div>
          <div class="m-1">
            <label :for="product.id">{{ product.name }}</label>
          </div>
        </div>
        <div v-if="page_count > 1" class="m-auto">
          <paginate v-model="page" :page-count="page_count" :page-range="3" :margin-pages="1" :click-handler="getProducts" :prev-text="'<'" :next-text="'>'" :container-class="'pagination'" :page-class="'page-item'"></paginate>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VueSwal from "vue-swal";

export default {
  props: ["collection_id"],
  data() {
    return {
      editcollection: {
        // name: "",
        // collectionProductid: '',
      },
      productsCollection: [],
      products: [],
      failure: null,
      page: 1,
      page_count: 0,
      recordnotfound: "",
      showfilter: 0,
      total: "",
      rooturl: process.env.SITEURL,
      collectionid: this.$route.params.collection_id,
      form: {
        user_id: this.$auth.user.id,
        name: "",
        collectionProductid: [],
      },
    };
  },

  methods: {
    async store() {
      if (this.form.collectionProductid.length <4) {
        this.failure = "Select Minimum 4 Products";
      } else {
        let response = await this.$axios
          .$post("seller/updatecollection/" + this.collectionid, this.form)
          .then((response) => {
            if (response.message !== "Collection Update Successfully") {
            } else {
              this.$router.replace({ name: "collection" });
              localStorage.removeItem("productId");
            }
          });
      }
    },

    async getEditCollection() {
      if (typeof this.collectionid != "undefined") {
        localStorage.setItem("productId", this.collectionid);
        this.collectionid = this.collectionid;
      } else {
        this.collectionid = localStorage.getItem("productId");
      }
      let response = await this.$axios.$get(
        "seller/editcollection/" + this.collectionid
      );
      this.form.name = response.name;
      this.productsCollection = response.collectionproduct;
      this.form.collectionProductid = this.productsCollection.map(
        (elem) => elem.product_id
      );
    },

    async getProducts(page = 1) {
      let response = await this.$axios.$get("seller/getmyproductsc" + '?&show=' + this.showfilter + '?&page=' + page);
      this.products = response.data;
      this.page_count = response.meta.last_page;
      this.total = response.meta.total;
    },
    cancel() {
      localStorage.removeItem("productId");
      this.$router.replace({ name: "collection" });
    },
    fclose() {
      this.failure = null;
    },
  },
  created() {
    this.getProducts();
    this.getEditCollection();
  },
};
</script>
<style>
.imgsize {
  width: 100px;
  height: 100px;
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

.cwidth {
  width: 32.33333%;
}
</style>
