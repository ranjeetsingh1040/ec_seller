<template>
    <div>
        <portal to="producttab">
            <div class="product-tab my-5">
                <div>
                    <ul class="list-reset flex">
                        <li v-bind:class="[this.product_tab == 1 ? 'active' : '']">
                            <a class="" @click="settab('1')">

                                <span>Add Product</span>
                            </a>
                        </li>
                        <li v-bind:class="[this.product_tab == 2 ? 'active' : '']">
                            <a class="" @click="settab('2')">
                             
                                <span>Add Attribute</span>
                            </a>
                        </li>
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
export default {

    data() {
        return {
            product_tab: '1',
        }
    },
    methods: {
        settab(val) {
            this.product_tab = val;
            this.$nuxt.$emit('product_tab', this.product_tab);
        }
    },
    created() {
        this.$nuxt.$emit('product_tab', this.product_tab);
        this.$nuxt.$on('product_tab', data => {
            this.product_tab = data;
            //alert(this.product_tab);

        });
    }
}
</script>