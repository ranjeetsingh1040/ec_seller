<template>
  <div class="list-page product-list-page">
    <!-- <div class="page list-page product-list-page"> -->
    <h1 class="title font-bold mt-16">Products</h1>
   
   
    <!-- <div class="my-3">
      <ul class="breadcrumb">
        <li><nuxt-link :to="{ name: 'dashboard' }">Home</nuxt-link></li>
        <li>Products</li>
      </ul>
    </div> -->
 <!-- Breadcrump Start Here -->
    <div class="py-4">
      <nav class="flex" aria-label="breadcrumb ">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">

          <li>
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <nuxt-link :to="{ name: 'dashboard' }"><a href="#"
                  class="ml-1 text-sm font-medium text-gray-700 hover:text-red-500 md:ml-2 dark:text-gray-400 dark:hover:text-white">Home</a></nuxt-link>
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Category</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>


    <!-- Breadcrump End Here -->



    <div class="bg-card">
      <div class="cart-header flex flex-col lg:flex-row md:flex-row">
        <div class="flex-1 py-1">
          <p class="font-bold text-xs uppercase text-gray-900 flex">
          
            <span>
              <div class="relative">
                <!-- <select
                  class="block appearance-none w-12  border  text-black px-2 py-2 leading-tight focus:outline-none"
                  id="count" @change="changepage">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-gray-900">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div> -->

                <select id="count"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" @change="changepage">
                  <option selected>Show Entries</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>
              </div>
            </span>
           
          </p>
        </div>
        <div class="flex-1 justify-start lg:justify-end md:justify-end flex my-3 lg:my-0 md:my-0">

          <nuxt-link :to="{ name: 'products-add' }" class="">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455" style="color:#000;"
              xml:space="preserve" class="w-10 h-10 fill-current border rounded-full p-3 mr-3">
              <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
  455,242.5 " />
            </svg>
          </nuxt-link>
          <form>
            <div class="mb-4 flex">
              <span class="absolute my-2 mx-3">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 250.313 250.313"
                  style="color:#ced8e3;" xml:space="preserve" class="w-4 h-4 fill-current mt-1">
                  <g id="Search">
                    <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M244.186,214.604l-54.379-54.378c-0.289-0.289-0.628-0.491-0.93-0.76
    c10.7-16.231,16.945-35.66,16.945-56.554C205.822,46.075,159.747,0,102.911,0S0,46.075,0,102.911
    c0,56.835,46.074,102.911,102.91,102.911c20.895,0,40.323-6.245,56.554-16.945c0.269,0.301,0.47,0.64,0.759,0.929l54.38,54.38
    c8.169,8.168,21.413,8.168,29.583,0C252.354,236.017,252.354,222.773,244.186,214.604z M102.911,170.146
    c-37.134,0-67.236-30.102-67.236-67.235c0-37.134,30.103-67.236,67.236-67.236c37.132,0,67.235,30.103,67.235,67.236
    C170.146,140.044,140.043,170.146,102.911,170.146z" />
                  </g>
                </svg>

              </span>
              <input class="border  w-full py-2 pl-8 pr-3 text-gray-900 leading-tight focus:outline-none"
                id="username" type="text" placeholder="Search...">
            </div>
          </form>
        </div>
      </div>
      <div v-if="failure != null" class="w-1/2 my-4 bg-red-500 p-4 flex  justify-between" id="failure-alert">
        <p class="text-white">{{ failure }}</p>
        <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
      </div>
      <div class="overflow-x-scroll lg:overflow-x-auto md:overflow-x-auto cart-list">
        <table class="table table-hover bg-table">
          <thead class="">
            <tr>
              <th class="hidden">
                <p>Id</p>
              </th>
              <th>
                <p>Store Name</p>
              </th>
              <th>
                <p>Product Name</p>
              </th>
              <th scope="col">Category</th>
              <th>
                <p>Slug</p>
              </th>
              <th>
                <p>Type</p>
              </th>
              <th>
                <p>Options</p>
              </th>
            </tr>
          </thead>
          <tbody class="bg-custom">
            <tr v-if="products.length == 0">
              <td colspan="6">
                <span>
                  <p class="text-red p-4">{{ recordnotfound }}</p>
                </span>
              </td>
            </tr>
            <tr v-for="product in products" :key="product.id">
              <input type="hidden" name="productid" :value="product.id" />
              <td>
                <p>
                  {{ product.stores.name }}

                </p>
              </td>

              <td>
                <p>
                  {{ product.name }}
                </p>
              </td>
              <td>
                <p v-if="product.productcategory.length > 0">

                  <input type="hidden" id="categoryid" name="categoryid" :value="product.productcategory[0].id" />

                  {{ product.productcategory[0].name }}
                </p>
              </td>
              <td>
                <p>
                  {{ product.slug }}
                </p>
              </td>
              <td>
                <p>
                  {{ product.type }}
                </p>
              </td>

              <td class="whitespace-nowrap flex">
                <span>
                  <!--  <template v-if="product.productcategory.length>0"> -->
                  <!--  <a href="" @click.prevent="addattribute(product.id,
           product.productcategory[0].id)"  
           title="Add Attribute" class="w-4 h-4"><img src="~/static/assets/img/plus-button.svg" class="w-4 h-4"></a> -->
                  <!--  <nuxt-link class="" title="Add Attribute" :to="{name:'products-addattribute',params:{productid:product.id,
            categoryid:product.productcategory[0].id}}">
                  <img src="~/static/assets/img/plus-button.svg" class="w-4 h-4"></nuxt-link> -->

                  <!--  </template> -->
                </span>
                <span class="mx-2">
                  <nuxt-link :to="{ name: 'products-edit', params: { product_id: product.id } }" class="" title="Edit">
                    <img src="~/static/assets/img/edit.svg" class="w-4 h-4">
                  </nuxt-link>
                </span>
                <span>
                  <a href="" class="" @click.prevent="cancel(product.id)" title="Delete">
                    <img src="~/static/assets/img/delete.svg" class="w-4 h-4"></a>
                </span>

                <!--   <span>
             <template>
          <nuxt-link class="button is-info" :to="{name:'products-productvariation',params:{slug:product.slug}}">
                Product Variation</nuxt-link>
          </template>
          </span> -->
              </td>
              <td>

              </td>


            </tr>

          </tbody>
        </table>
      </div>
      <div v-if="page_count > 1" class="flex justify-center mt-4">
        <!-- <paginate v-model="page" :page-count="page_count" :page-range="3" :margin-pages="1" :click-handler="getProducts"
          :prev-text="'<'" :next-text="'>'" :container-class="'pagination'" :page-class="'page-item'">

        </paginate> -->

        <paginate v-model="page" :page-count="page_count"  :page-range="3" :margin-pages="1" :click-handler="getProducts"
        :container-class="'mb-12 inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4'"
        :page-class="'mx-1.5 paginationitem'" :prev-link-class="'fa-solid fa-chevron-left paginationitem'"
        :next-link-class="'fa-solid fa-chevron-right paginationitem'" :active-class="'active'"
        class="items-center h-[70px] text-4xl text-center py-5 my-5 flex mx-auto">
      </paginate>



      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
import VueSwal from 'vue-swal';

export default {
  data() {
    return {
      products: [],
      attributes: [],
      success: null,
      failure: null,
      page: 1,
      page_count: 0,
      recordnotfound: '',
      showfilter: 0,
      total: '',
      inputdata: {
        product_id: '',
        attributes: []
      },
    }
  },


  methods: {
    async changepage($event) {

      this.showfilter = $event.target.value;
      let response = await this.$axios.$get('productcategory/' + this.$auth.user.id +
        '?&show=' + this.showfilter)

      this.products = response.data;
      this.page_count = response.last_page;
      this.total = response.total;

    },

    async getProducts(page = 1) {

      if (localStorage.getItem('productId')) {
        localStorage.removeItem('productId');
      }

      // let response = await this.$axios.$get('products/getproductuser/' + this.$auth.user.id)
      this.showfilter = 0;
      let response = await this.$axios.$get('productcategory/' + this.$auth.user.id
        + '?&show=' + this.showfilter + '?&page=' + page)


      this.products = response.data;
      if (this.products.length > 0) {
        this.page_count = response.last_page;
        this.total = response.total;
      }
      else {
        this.recordnotfound = "No Records Found...";

      }

    },
    async close() {
      this.failure = null;
    },

    async destroy(productid) {

      let response = await this.$axios.$get('products/deleteproducts/' + productid);

      this.getProducts();
    },
    async addattribute(productid, categoryid) {
      var url = 'attributes/' + categoryid

      let response = await this.$axios.$get(url)
      this.attributes = response;
      for (var i = 0; i < this.attributes.length; i++) {

        if (this.attributes[i].attribute_code === "no variation") {
          this.failure = "Product has no variation";
        }
        else {
          this.$router.replace({
            name: 'products-addattribute',
            params: { productid: productid, categoryid: categoryid }
          });
        }
      }



    },

    cancel(productid) {
      var thisswal = this;
      swal({
        title: "Delete this Product?",
        text: "Are you sure? You won't be able to revert this!",
        icon: "warning",
        buttons: [
          "No",
          "Yes"
        ],
        dangerMode: true,
      }).then(function (isConfirm) {
        if (isConfirm) {

          thisswal.destroy(productid);
        }
        else {
          //swal(thisswal.trans.reject_cancel);
        }
      });

    },

  },
  created() {
    this.getProducts();

  },
}

</script>
