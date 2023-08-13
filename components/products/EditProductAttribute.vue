<template>
  <div id="app">

    <!-- <h1 class="title is-4">Add Attribute</h1> -->
    <div v-bind:class="[this.product_tab == 2 ? 'block' : 'hidden']">
      <form action="#" @submit.prevent="store" name="myForm" id="myForm" class="custom-form">




        <!-- <div v-if="success != null" class="w-1/2 my-4 bg-red-500 p-4 flex  justify-between" id="success-alert">
          <p class="text-white" v-html="success">{{success}}</p>
          <img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
        </div> -->

        <div v-if="success != null" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert">
          <span class="block sm:inline" v-html="success">{{ success }}</span>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="close()">
            <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>


        <div class="w-full ">
          <div class="flex">
            <div class="md:w-1/4 xs:w-full mb-4">
              <p class="font-bold">Attribute Code</p>
            </div>
            <div class="md:w-1/4 xs:w-full mb-4">
              <p class="font-bold">Attribute Value</p>
            </div>
            <div class="md:w-1/4 xs:w-full mb-4">
              <p class="font-bold">Price Variation</p>
            </div>
            <div class="md:w-1/4 xs:w-full mb-4">
              <p class="font-bold">Stock</p>
            </div>
          </div>
          <div class=" mb-4" v-for="(attributeproduct, i) in attributeproducts" :key="attributeproduct.id">

            <div class="w-full ">
              <div class="flex">
                <div class="md:w-1/4 xs:w-full mb-4">
                  <input type="hidden" ref="form.attributeproduct_id[i]" id="attributeproductid"
                    v-bind:value="attributeproduct.id">
                  <p >{{ attributeproduct.attribute_label }}</p>
                </div>
                <template v-if="attributeproduct.input_type == 'checkbox'">

                  <div class="md:w-1/4 xs:w-full mb-4">
                    <input type="checkbox" v-model="form.checkboxtype[i]" :value="attributeproduct.attribute_value"
                      ref="form.checkboxtype[i]" :id="'chk_' + attributeproduct.attribute_value" class="accent-red-500">
                     <span class="mr-2"> {{attributeproduct.attribute_value}} </span>
                  </div>
                </template>
                <template v-if="attributeproduct.input_type == 'dropdown'">
                  <div class="md:w-1/4 xs:w-full mb-4">
                    <div class="field column is-5">
                      <select class="select is-fullwidth" @change="changed" v-model="form.selecttype[i]">
                        <option value="">Select</option>
                        <option :value="attributeproduct.attribute_value" ref="form.selecttype[i]"
                          :key="attributeproduct.attribute_value">
                          {{ attributeproduct.attribute_value }}
                        </option>
                      </select>
                    </div>
                  </div>
                </template>
                <div class="md:w-1/4 xs:w-full mb-4">
                  <p><input type="checkbox" v-model="form.variation[i]" ref="form.variation[i]"
                      name="chkvariation" :value="attributeproduct.id" :id="'chk_' + attributeproduct.id" class="accent-red-500">
                    Is Variation </p>
                  <div class="field  columns" v-bind:class="[form.variation[i] == true ? 'block' : 'disp-none']">
                    <div class="control">
                      <p>Price</p>
                      <input class="input" type="text" v-model="form.isprice[i]" autofocus="">
                    </div>
                  </div>
                </div>
                <div class="w-1/4 mb-4">
                  <div class="field  columns">
                    <div class="control">
                      <input class="input" type="text" :id="'txt_' + attributeproduct.attribute_value"
                        v-model="form.stock[i]" ref="form.stock[i]">
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div class="field">
            <p class="control">
              <button class="button is-info">
                Save
              </button>
              <a class="button is-text" @click="cancel">Cancel</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['productid', 'categoryid', 'tab', 'price'],
  data() {

    return {
      success: null,
      form: {
        productvariationid: [],
        attributeproduct_id: [],
        inputtypecolor: [],
        product_price: '',
        price: [],
        isprice: [],
        stock: [],
        selecttype: [],
        checkboxtype: [],
        radiobuttontype: [],
        variation: [],
        product_id: this.productid,
        category_id: this.categoryid,
        // default: true
      },

      attributes: [],
      attributeproducts: [],
      //inputdata:{},
      arr: [],
      inputdata: {
        product_id: '',
        attributes: [],
        price: ''
      },
      product_tab: '',
      productvariation: [],


    }
  },
  methods: {
    // async store(){
    //      debugger
    //      for (let i = 0; i < this.attributeproducts.length; i++) { 
    //        if(this.form.selecttype[i]===this.attributeproducts[i].attribute_value){
    //          console.log(this.form.selecttype[i]);
    //        }
    //      }
    // },
    async store() {

      for (let i = 0; i < this.attributeproducts.length; i++) {
        if (this.form.checkboxtype[i] == true) {
          this.productvariation.push({
            "attribute_product_id": this.attributeproducts[i].id,
            "attribute_value": this.attributeproducts[i].attribute_value,
            "product_id": this.attributeproducts[i].product_id,
            "order": i, "price": this.price, "isvariation": this.form.variation[i],
            "isprice": this.form.isprice[i], "stock": this.form.stock[i],
            "productvariationid": this.form.productvariationid[i]
          })

        }
        // else{
        //   if(this.form.checkboxtype[i]==true){
        //   this.productvariation.push({"attribute_product_id":this.attributeproducts[i].id,
        //   "attribute_value":this.attributeproducts[i].attribute_value,
        //   "product_id":this.attributeproducts[i].product_id,
        //   "order":i,"price":this.price,"isvariation":this.form.variation[i],
        //  "isprice":this.form.isprice[i],"stock":this.form.stock[i]})
        // }
        // }

        if (this.attributeproducts[i].input_type == 'dropdown') {

          if (this.form.selecttype[i] === this.attributeproducts[i].attribute_value) {
            // console.log(this.form.selecttype[i]);
            this.productvariation.push({
              "attribute_product_id": this.attributeproducts[i].id,
              "attribute_value": this.form.selecttype[i],//this.attributeproducts[i].attribute_value,
              "product_id": this.attributeproducts[i].product_id,
              "order": i, "price": this.price, "isvariation": this.form.variation[i],
              "isprice": this.form.isprice[i], "stock": this.form.stock[i],
              "productvariationid": this.form.productvariationid[i]
            });
          }
          // console.log(this.productvariation)
          // else{
          //    if(this.form.selecttype[i]==this.attributeproducts[i].attribute_value){
          //     this.productvariation.push({"attribute_product_id":this.attributeproducts[i].id,
          //   "attribute_value":this.attributeproducts[i].attribute_value,
          //   "product_id":this.attributeproducts[i].product_id,
          //   "order":i,"price":this.price,"isvariation":this.form.variation[i],
          //  "isprice":this.form.isprice[i],"stock":this.form.stock[i]});
          //    }
          //   }

        }
        if (this.attributeproducts[i].input_type == 'text'
          && this.attributeproducts[i].attribute_label == 'No Variation') {

          this.productvariation.push({
            "attribute_product_id": this.attributeproducts[i].id,
            "attribute_value": "No Variation", //this.attributeproducts[i].attribute_value,
            "product_id": this.attributeproducts[i].product_id,
            "order": i, "price": this.price, "isvariation": this.form.variation[i],
            "isprice": this.form.isprice[i], "stock": this.form.stock[i]
          });

        }

      }

      let response = await this.$axios.$post('attributes/updateattributeproduct', this.productvariation).then((response) => {

        if (response.message == "Saved Successfully") {
          this.success = response.message;
          this.clear();
          this.product_tab = 1;
          //this.$emit('product_tab', this.product_tab);
          this.$router.replace({
            name: 'products',

          });
        }
        else {
          this.success = response.message;
          this.productvariation = [];
        }
      }).catch((error) => {
        this.success = error;
        this.productvariation = [];
      });

    },
    close() {
      this.success = null;
    },

    clear() {
      this.form.checkboxtype = [];
      this.form.selecttype = [];
      this.form.variation = [];
      this.form.isprice = [];
      this.form.productvariationid = [];
      this.form.attributeproduct_id = [];
      this.productvariation = [];
    },
    cancel() {
      this.clear();
      this.product_tab = 1;
      this.$emit('product_tab', this.product_tab);
    },

    changed($event) {
      this.$emit('input', $event.target.value)
    },

    // async getAttributes () {

    //   var url='attributes/'+this.categoryid;
    //    let response = await this.$axios.$get(url)
    //    this.attributes = response;

    // },

    async getProductAttribute() {
      this.productid = localStorage.getItem('productId');
      var url = 'products/displayattributeproduct/' + this.productid;

      let response = await this.$axios.$get(url)

      this.attributeproducts = response.data;

      // this.editproduct = response.variationresource;
      this.getproductattributevalue();
    },

    async getproductattributevalue() {

      let response = await this.$axios.$get('products/productvariationlist/' + this.productid);
      this.editproduct = response.data;


      for (var i = 0; i < this.editproduct.length; i++) {
        for (var j = 0; j < this.attributeproducts.length; j++) {
          if (this.editproduct[i].input_type.toLowerCase().trim() == 'checkbox') {
            if (this.$refs["form.checkboxtype[i]"][j]._value == this.editproduct[i].name) {
              this.$refs["form.checkboxtype[i]"][j].checked = true;
              //this.form.stock[i]=this.editproduct[i].stockcount;
              this.$refs["form.stock[i]"][j].value = this.editproduct[i].stockcount;
              //this.$refs["form.stock[i]"][j]._value=this.editproduct[i].stockcount;
              this.form.productvariationid[j] = this.editproduct[i].id;
              this.form.checkboxtype[j] = true;
              if (this.$refs["form.variation[i]"][j]._value == this.editproduct[i].attribute_product_id) {
                if (this.editproduct[i].price_varies == true) {
                  this.form.variation[j] = this.editproduct[i].attribute_product_id;
                  this.form.variation[j] = true;
                  this.form.isprice[j] = this.editproduct[i].price;
                }
                else {
                  this.form.variation[j] = this.editproduct[i].attribute_product_id;
                  this.form.variation[j] = false;
                }
              }
            }
          }
          if (this.editproduct[i].input_type.toLowerCase().trim() == 'dropdown') {
            if (this.$refs["form.selecttype[i]"][j]._value == this.editproduct[i].name) {
              this.form.selecttype[j] = this.editproduct[i].name;
              this.form.productvariationid[j] = this.editproduct[i].id;
              this.form.stock[j] = this.editproduct[i].stockcount;
              if (this.$refs["form.variation[i]"][j]._value == this.editproduct[i].attribute_product_id) {
                if (this.editproduct[i].price_varies == true) {
                  this.form.variation[j] = this.editproduct[i].attribute_product_id;
                  this.form.variation[j] = true;
                  this.form.isprice[j] = this.editproduct[i].price;
                }
                else {
                  this.form.variation[j] = this.editproduct[i].attribute_product_id;
                  this.form.variation[j] = false;
                }
              }
            }
          }
        }
      }

    },

  },
  mounted() {
    this.product_tab = 2;
    // this.$nuxt.$on('product_tab', data => {
    //   this.product_tab = data;

    // });
    //  this.$nuxt.$on('product_id', data => {
    //      this.productid = data;
    //      this.getProductAttribute();
    // });
  },

  created() {
    this.product_tab = 2;

    this.$nuxt.$on('product_tab', data => {
      this.product_tab = data;
    });
    this.$nuxt.$on('product_id', data => {
      this.productid = data;
      this.getProductAttribute();
    });
    this.getProductAttribute();


    // this.$nuxt.$on('product_tab', data => {

    //    if(data==2){

    //      this.product_tab = data;
    //      this.getAttributes();
    //      this.getProductAttribute();
    //      this.getproductattributevalue();
    //    }

    //  });
    //  this.getAttributes();
    // this.getProductAttribute();
    //   this.getproductattributevalue();
  },

}
</script>
<style type="text/css">
.disp-none {
  display: none !important;
}
</style>