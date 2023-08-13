<template>
  <div class="notifictaion-wrapper pin-r absolute ">

    <portal to="toggle">
      <div class="block lg:hidden md:hidden my-2">
        <button @click="enableform()" class="flex items-center px-3 py-2 border rounded text-red-500 border-red-500">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </portal>
    <portal to="togglesidebar">
      <div class="hide-menu" id="sidebaropen">
        <div class="">
          <ul class="list-reset leading-loose py-4">
            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'dashboard' }" class="flex lg:block md:block">
                <svg class="sidebar-icon" height="512pt" viewBox="0 -52 512.00001 512" width="512pt"
                  xmlns="http://www.w3.org/2000/svg"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>


                <p class="sidebar-p pt-1"> Dashboard</p>
              </nuxt-link>

            </li>
            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'seller-displaycategory' }" class="flex lg:block md:block">



                <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" height="512pt" viewBox="0 -52 512.00001 512"
                  width="512pt"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                </svg>


                <p class="sidebar-p pt-1"> Category</p>
              </nuxt-link>

            </li>
            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'seller-displayattributeset' }" class="flex lg:block md:block">

                <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" height="512pt" viewBox="0 -52 512.00001 512"
                  width="512pt"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
                </svg>



                <p class="sidebar-p pt-1"> Attributeset</p>
              </nuxt-link>
            </li>
            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'seller-displayattributes' }" class="flex lg:block md:block">


                <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" height="512pt" viewBox="0 -52 512.00001 512"
                  width="512pt"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z" />
                </svg>
                <p class="sidebar-p pt-1">Attributes</p>
              </nuxt-link>
            </li>
            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'stores' }" class="flex lg:block md:block">
                <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" height="512pt" viewBox="0 -52 512.00001 512"
                  width="512pt"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M531.6 103.8L474.3 13.1C469.2 5 460.1 0 450.4 0H93.6C83.9 0 74.8 5 69.7 13.1L12.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM483.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H112V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H432c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" />
                </svg>

                <p class="sidebar-p pt-1">Stores</p>
              </nuxt-link>
            </li>
            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'products' }" class="flex lg:block md:block">


                <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" height="512pt" viewBox="0 -52 512.00001 512"
                  width="512pt"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" />
                </svg>

                <p class="sidebar-p pt-1">Products</p>
              </nuxt-link>

            </li>



            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'orders' }" class="flex lg:block md:block">
                <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" height="512pt"
                  viewBox="0 -52 512.00001 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                </svg>

                <p class="sidebar-p pt-1">Orders</p>
              </nuxt-link>
            </li>

            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'collection' }" class="flex lg:block md:block">

                <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" height="512pt"
                  viewBox="0 -52 512.00001 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z" />
                </svg>
                <p class="sidebar-p pt-1"> Collections</p>
              </nuxt-link>
            </li>
            <li class="text-center text-sm">
              <nuxt-link :to="{ name: 'setting' }" class="flex lg:block md:block">

                <svg xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" height="512pt" viewBox="0 -52 512.00001 512"
                  width="512pt"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                </svg>
                <p class="sidebar-p "> Settings</p>
              </nuxt-link>
            </li>
            <!--  <li class="text-center text-sm">
     <nuxt-link :to="{ name: 'shippingmethod' }" class="flex lg:block md:block">
    <svg class="sidebar-icon" height="1063pt" viewBox="-33 -100 1063.7506 1063" width="1063pt" xmlns="http://www.w3.org/2000/svg"><path d="m566.332031 254.230469-151.777343-22.148438 28.882812 99.679688 146.964844 4.085937-6.625-38.066406c-7.390625-13.660156-13.277344-28.253906-17.445313-43.550781zm174.816407 454.882812c40.949218 0 74.152343 33.214844 74.152343 74.152344 0 40.957031-33.203125 74.15625-74.152343 74.15625-40.945313 0-74.152344-33.199219-74.152344-74.15625 0-40.9375 33.207031-74.152344 74.152344-74.152344zm11.113281 63.050781c-9.859375-9.863281-26.828125-2.875-26.828125 11.101563 0 13.980469 16.96875 20.96875 26.828125 11.121094 6.136719-6.136719 6.136719-16.097657 0-22.222657zm-357.160157-63.050781c40.945313 0 74.152344 33.214844 74.152344 74.152344 0 40.957031-33.210937 74.15625-74.152344 74.15625-40.949218 0-74.15625-33.199219-74.15625-74.15625 0-40.9375 33.207032-74.152344 74.15625-74.152344zm11.109376 63.050781c-9.859376-9.863281-26.820313-2.875-26.820313 11.101563 0 13.980469 16.964844 20.96875 26.820313 11.121094 6.132812-6.136719 6.132812-16.097657 0-22.222657zm250.214843-397.261718 18.960938 109c45.921875-12.28125 85.042969-40.738282 110.726562-79.179688-46.460937 4.753906-91.75-6.238281-129.6875-29.820312zm206.105469 6.332031c-31.25 88.820313-109.820312 153.003906-205.085938 165.46875l-310.285156 40.59375c-15.710937 3.703125-23.773437 21.984375-14.777344 36.332031 4.914063 7.828125 12.398438 11.816406 21.738282 11.816406h457.890625c16.136719 0 29.21875 13.085938 29.21875 29.222657 0 16.140625-13.082031 29.222656-29.21875 29.222656h-457.890625c-60.921875 0-101.988282-62.859375-75.8125-118.285156 3.449218-7.289063 7.738281-13.84375 12.765625-19.609375l-150.789063-371.210938-36.570312-26.476562c-32.625 17.472656-72.972656 7.261718-93.539063-23.378906-22.136719-32.96875-13.292969-77.621094 19.652344-99.738282 32.96875-22.132812 77.613281-13.289062 99.730469 19.652344 10.910156 16.257812 15.152344 37.242188 10.117187 57.460938l35.828125 25.9375 383.660156 55.984374c3.035157-111.019531 94.007813-200.109374 205.765626-200.109374 56.859374 0 108.351562 23.0625 145.601562 60.34375l34.832031-34.84375c11.417969-11.410157 29.917969-11.410157 41.328125 0 11.40625 11.40625 11.40625 29.910156 0 41.316406l-40.816406 40.8125c54.40625 100.003906 16.871094 225.40625-83.34375 279.488281zm-183.539062-170.789063c-11.410157-11.414062-11.410157-29.910156 0-41.328124 11.402343-11.410157 29.910156-11.410157 41.3125 0l37.785156 37.78125 111.121094-111.125c-56.230469-58.136719-151.996094-56.574219-208.519532-.046876-57.554687 57.554688-57.554687 150.898438 0 208.464844 57.570313 57.558594 150.910156 57.558594 208.46875 0 42.871094-42.859375 53.796875-105.554687 32.832032-158.5625l-123.242188 123.246094c-11.40625 11.414062-29.910156 11.414062-41.3125 0zm-597.820313-123.179687c-6.472656-9.644531-22.210937-7.246094-24.609375 4.960937-2.429688 12.390626 11.261719 20.449219 20.929688 13.964844 6.144531-4.125 7.78125-12.808594 3.679687-18.925781zm261.9375 441.730469c30.820313-3.167969 62.511719-8.082032 93.332031-12.125l-37.101562-128.082032-114.480469-3.183593zm117.339844-138.511719 34.414062 118.753906 122.898438-16.082031-17.183594-98.777344zm-199.527344-63.804687 121.394531 3.375-31.0625-107.210938-140.859375-20.5625zm0 0" fill-rule="evenodd"/></svg>
    <p class="sidebar-p">Shipping Method</p>
            </nuxt-link>
    </li> -->
          </ul>
        </div>
      </div>
    </portal>

  </div>
</template>

<script>
import PortalVue from "portal-vue";
//import Vue from 'vue'
import { mapActions } from 'vuex';
//import slugWidgetmy from '@/components/form/slugWidgetmy'

export default {

  data() {
    return {
      // data:[],  
      form: {
        name: '',
        slug: ''
      },
    }
  },
  methods: {
    enableform() {
      $('#sidebaropen').removeClass('hide-menu').addClass('block');
    },
    disableform() {
      $('#sidebaropen').removeClass('block').addClass('hide-menu');
    },
    updateSlug: function (val) {
      this.form.slug = val;
    },

    cancel: function () {
      // this.form="";
      this.disableform();

    },

  },
}
</script>