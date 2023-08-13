<template>
  <div class="list-page product-list-page">
    <!-- <div class="page list-page product-list-page"> -->
    <h1 class="title font-bold mt-16">Collection</h1>
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
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Collection</span>
            </div>
          </li>
        </ol>
      </nav>
    </div>


    <!-- Breadcrump End Here -->

    <!-- <div v-if="this.success != null" class="w-1/2 my-4 bg-green-500 p-4 flex justify-between" id="success-alert">
      <p class="text-white">{{ this.success }}</p>
      <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
    </div> -->

    <div v-if="this.success != null"  class="w-1/2 my-4 p-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
      <span class="block sm:inline">{{ this.success }}.</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="close()">
        <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20">
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>


    <div class="bg-card">
      <div class="cart-header flex flex-col lg:flex-row md:flex-row">
        <div class="flex-1 py-1">
          <p class="font-bold text-xs uppercase text-gray-900 flex">
            <span>
              <div class="relative">
                <select id="count"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  @change="changepage">
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

          <nuxt-link :to="{ name: 'collection-add' }" class="">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px" viewBox="0 0 455 455" style="color:#000;" xml:space="preserve"
              class="w-10 h-10 fill-current border rounded-full p-3 mr-3">
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
              <input class="border rounded-full w-full py-2 pl-8 pr-3 text-gray-900 leading-tight focus:outline-none"
                id="username" type="text" placeholder="Search...">
            </div>
          </form>
        </div>
      </div>






      <!-- <div v-if="this.failure != null" class="w-1/2 my-4 bg-red-500 p-4 flex  justify-between" id="failure-alert">
        <p class="text-white">{{ this.failure }}</p>
        <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
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






      <div class="overflow-x-scroll lg:overflow-x-auto md:overflow-x-auto cart-list">
        <table class="table table-hover bg-table">
          <thead class="">
            <tr>
              <th class="hidden">
                Id
              </th>
              <th>
                Collection Name
              </th>
              <th>
                Options
              </th>
            </tr>
          </thead>
          <tbody class="bg-custom">
            <tr v-if="collections.length == 0">
              <td colspan="6">
                <span>
                  <p class="text-red p-4">{{ recordnotfound }}</p>
                </span>
              </td>
            </tr>
            <tr v-for="collection in collections" :key="collection.id">
              <input type="hidden" name="productid" :value="collection.id" />

              <td>
                {{ collection.name }}
              </td>
              <td class="whitespace-nowrap flex">
                <span class="mx-2">
                  <nuxt-link :to="{ name: 'collection-edit', params: { collection_id: collection.id } }" class=""
                    title="Edit">
                    <img src="~/static/assets/img/edit.svg" class="w-4 h-4">
                  </nuxt-link>
                </span>
                <span>
                  <a href="" class="" @click.prevent="cancel(collection.id)" title="Delete">
                    <img src="~/static/assets/img/delete.svg" class="w-4 h-4"></a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="this.page_count > 1" class="flex justify-center align-center">


        
        <!-- <paginate v-model="page" :page-count="this.page_count" :page-range="3" :margin-pages="1"
          :click-handler="getCollections" :prev-text="'<'" :next-text="'>'" :container-class="'pagination'"
          :page-class="'page-item'">
        </paginate> -->

        <paginate v-model="page" :page-count="page_count"  :page-range="3" :margin-pages="1" :click-handler="getCollections"
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
      collections: [],
      success: null,
      failure: null,
      page: 1,
      page_count: 0,
      recordnotfound: '',
      showfilter: 0,
      total: '',
    }
  },


  methods: {
    async changepage($event) {

      this.showfilter = $event.target.value;
      let response = await this.$axios.$get('seller/showcollections/' + this.$auth.user.id +
        '?&show=' + this.showfilter)

      this.products = response.data;
      this.page_count = response.last_page;
      this.total = response.total;

    },

    async getCollections(page = 1) {
      this.showfilter = 0;
      let response = await this.$axios.$get('seller/showcollections/' + this.$auth.user.id
        + '?&show=' + this.showfilter + '?&page=' + page)

      this.collections = response.data;
      if (this.collections.length > 0) {
        this.page_count = response.last_page;
        this.total = response.total;
      }
      else {
        this.recordnotfound = "No Records Found...";
      }

    },
    async close() {
      this.failure = null;
      this.success = null;
    },

    async destroy(collectionid) {
      let response = await this.$axios.$get('seller/deletecollection/' + collectionid);
      this.success = "Deleted Successfully";
      this.getCollections();
    },

    cancel(collectionid) {
      var thisswal = this;
      swal({
        title: "Delete this Collection?",
        text: "Are you sure? You won't be able to revert this!",
        icon: "warning",
        buttons: [
          "No",
          "Yes"
        ],
        dangerMode: true,
      }).then(function (isConfirm) {
        if (isConfirm) {
          thisswal.destroy(collectionid);
        }
        else {
          //swal(thisswal.trans.reject_cancel);
        }
      });
    },
  },
  created() {
    this.getCollections();
  }
}

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
}</style>