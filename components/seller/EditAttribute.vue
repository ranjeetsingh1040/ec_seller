<template>
  <div id="app">
    <h1 class="title is-4">Edit Attribute</h1>
    <form action="#" @submit.prevent="store" class="custom-form">
      <div class="flex flex-col lg:flex-row md:flex-row">
        <div class="w-full lg:w-3/5">
          <div class="columns mb-2 lg:mb-10">
            <div class="field column is-6 flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4 ">Attributeset Name</label>
              <div class="select is-fullwidth  w-full lg:w-3/4">
                <select @change="changed" v-model="attribute.attributeset_id">
                  <option value="">Please select</option>

                  <option :value="attributeset.id" v-for="attributeset in attributesets" :key="attributeset.id">
                    {{ attributeset.name }}
                  </option>
                </select>


              </div>
            </div>
          </div>


          <div class="columns  mb-2 lg:mb-10">
            <div class="field column is-6 flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Attribute Code</label>
              <div class="control w-full lg:w-3/4">
                <input class="input" type="text" :class="{ 'is-danger': errors.attribute_code }"
                  v-model="attribute.attribute_code" autofocus="" style="text-transform: lowercase;">
                <p class="help is-danger" v-if="errors.attribute_code">
                  {{ errors.attribute_code[0] }}
                </p>

              </div>
            </div>
          </div>
          <div class="columns mb-2 lg:mb-10">
            <div class="field column is-6 flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Attribute Label</label>
              <div class="control w-full lg:w-3/4">
                <input class="input" type="text" :class="{ 'is-danger': errors.attribute_label }"
                  v-model="attribute.attribute_label" autofocus="">
                <p class="help is-danger" v-if="errors.attribute_label">
                  {{ errors.attribute_label[0] }}
                </p>

              </div>
            </div>
          </div>
          <div class="columns mb-2 lg:mb-10">
            <div class="field column is-6 flex flex-col lg:flex-row">
              <label class="label w-full lg:w-1/4">Input Type</label>
              <div class="select is-fullwidth w-full lg:w-3/4">
                <select v-model="attribute.input_type" @change="typechanged">
                  <option value="">Please select</option>
                  <option value="label">label</option>
                  <option value="text">text</option>
                  <option value="dropdown">dropdown</option>
                  <option value="checkbox">checkbox</option>
                  <option value="radiobutton">radiobutton</option>
                  <option value="no variation">No Variation</option>
                  <!--   <option value="email">email</option>
              <option value="date">date</option>
              <option value="website">website</option> -->

                </select>
                <!--  <input class="input" type="text" :class="{ 'is-danger': errors.input_type }" v-model="form.input_type"  autofocus="">-->
                <p class="help is-danger" v-if="errors.input_type">
                  {{ errors.input_type[0] }}
                </p>

              </div>
            </div>
          </div>

          <div class="columns">
            <div class="field column is-6">
              <div class="control flex flex-col lg:flex-row leading-normal">
                <div>
                  <input type="checkbox" id="required" v-model="attribute.required">
                  <span class="mx-1">Required</span>
                </div>
                <div>
                  <input type="checkbox" id="visible" v-model="attribute.visible">
                  <span class="mx-1">Visible</span>
                </div>
                <div>
                  <input type="checkbox" id="searchable" v-model="attribute.searchable">
                  <span class="mx-1">Searchable</span>
                </div>
                <div>
                  <input type="checkbox" id="filterable" v-model="attribute.filterable">
                  <span class="mx-1">Filterable</span>
                </div>
                <div>
                  <input type="checkbox" id="comparable" v-model="attribute.comparable">
                  <span class="mx-1">Comparable</span>
                </div>
                <!--  <input type="checkbox" id="variation"  ref="variationchecked"  v-model="form.variation" 
                @click="checkvariation()"> -->
                <div>
                  <input type="checkbox" id="variation" v-model="attribute.variation"
                    v-on:click="isdropdown = !isdropdown">

                  <span class="mx-1">Variation</span>
                </div>
                <div>
                  <input type="checkbox" id="validation" v-model="attribute.validation"
                    v-on:click="isHidden = !isHidden">
                  <span class="mx-1">Validation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-2/5 lg:mx-8 md:mx-8 mx-0">
          <div class="columns mb-2 lg:mb-5" v-if="isHidden">
            <div class="field column is-6">
              <label class="label font-bold mb-3">Range</label>
              <div class="control py-3 flex">
                <div class="">
                  <label class="label">Min</label>
                  <input class="input" type="text" v-model="range.min" autofocus="">
                </div>
                <div class="mx-5">
                  <label class="label">Max</label>
                  <input class="input" type="text" v-model="range.max" autofocus="">
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="field column is-6 ">
              <label class="label">Checkbox</label>
              <div class="control">
                <div class="form-group flex mb-5" v-for="(checkbox, index) in checkboxes" :key="index">
                  <div class="w-4/5">
                    <input type="text" class="form-control" v-model="checkbox.name">
                  </div>
                  <div>
                    <span class="flex">
                      <i @click="chkremovevalue(index)" v-show="index || (!index && checkboxes.length > 1)"><img
                          src="~/static/assets/img/minus-symbol.svg" class="w-8 h-8 bg-red rounded-full p-2 mx-1"></i>

                      <i @click="chkaddvalue(index)" v-show="index == checkboxes.length - 1"><img
                          src="~/static/assets/img/plus-symbol.svg" class="w-8 h-8 bg-green rounded-full p-2 mx-1"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="columns" v-if="isradiobutton">
            <div class="field column is-6">
              <label class="label">Radiobutton</label>
              <div class="control">
                <div class="form-group flex mb-5" v-for="(radiobutton, index) in radiobuttons" :key="index">
                  <div class="w-4/5">
                    <input type="text" class="form-control" v-model="radiobutton.name">
                  </div>
                  <div>
                    <span class="flex">
                      <i @click="rdnremovevalue(index)" v-show="index || (!index && radiobuttons.length > 1)"><img
                          src="~/static/assets/img/minus-symbol.svg" class="w-8 h-8 bg-red rounded-full p-2 mx-1"></i>

                      <i @click="rdnaddvalue(index)" v-show="index == radiobuttons.length - 1"><img
                          src="~/static/assets/img/plus-symbol.svg" class="w-8 h-8 bg-green rounded-full p-2 mx-1"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="columns" v-if="isdropdown">
            <div class="field column is-4">
              <label class="label">Input Value</label>

              <div class="form-group flex mb-5" v-for="(input, k) in inputs" :key="k">
                <div class="w-4/5">
                  <input type="text" class="form-control" v-model="input.name">
                </div>
                <div>
                  <span class="flex">
                    <i @click="removevalue(k)" v-show="k || (!k && inputs.length > 1)"><img
                        src="~/static/assets/img/minus-symbol.svg" class="w-8 h-8 bg-red rounded-full p-2 mx-1"></i>
                    <i @click="addvalue(k)" v-show="k == inputs.length - 1"><img src="~/static/assets/img/plus-symbol.svg"
                        class="w-8 h-8 bg-green rounded-full p-2 mx-1"></i>
                  </span>
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
          <a class="button is-text" @click.prevent="$emit('cancel')">Cancel</a>
        </p>
      </div>
    </form>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  props: ['attributesetid', 'attribute_id'],
  data() {
    return {
      attribute: {
        attributeset_id: this.$route.params.attributesetid,
        attribute_code: '',
        attribute_label: '',
        input_type: '',
        input_value: '',
        required: false,
        visible: false,
        searchable: false,
        filterable: false,
        comparable: false,
        variation: false,
        validation: false,


      },
      attributeid: this.$route.params.attribute_id,
      attributesets: [],

      isHidden: false,
      isdropdown: false,
      ischeckboxes: false,
      isradiobutton: false,


      dropdownvalue: [],
      checkboxdata: [],
      radiobuttondata: [],
      // textdata:{val:[]},
      // val:[],
      range: {
        min: '',
        max: ''
      }, //text
      // inputs: []
      inputs: [  //dropdown
        {
          name: ''
        }],

      checkboxes: [{ name: '' }],
      radiobuttons: [{ name: '' }],


    }
  },


  methods: {

    async store() {
      // debugger;
      if (this.range.min.length > 0 && this.range.max.length > 0) {

        this.attribute.input_value = this.range;
      }
      if (this.inputs.length > 1) {

        for (var i = 0; i < this.inputs.length; i++) {
          if (this.inputs[i].name != '') {
            this.dropdownvalue.push(this.inputs[i].name)
          }
        }

        this.attribute.input_value = this.dropdownvalue;
      }

      if (this.checkboxes.length > 1) {

        for (var i = 0; i < this.checkboxes.length; i++) {
          if (this.checkboxes[i].name != '') {
            this.checkboxdata.push(this.checkboxes[i].name)
          }
        }

        this.attribute.input_value = this.checkboxdata;
      }


      if (this.radiobuttons.length > 1) {

        for (var i = 0; i < this.radiobuttons.length; i++) {
          if (this.radiobuttons[i].name != '') {
            this.radiobuttondata.push(this.radiobuttons[i].name)
          }
        }

        this.attribute.input_value = this.radiobuttondata;
      }


      let response = await this.$axios.$post('seller/editattribute/' + this.attributeid, this.attribute).then((response) => {

        if (response.message !== "Saved Successfully") {

          this.sucesss = response.message;
        }
        else {
          this.form = "";
          //this.$emit('created', response.data);
          this.$router.replace({
            name: 'seller-displayattributes',

          })
        }
      }).catch((error) => {
        // console.log(error);
      });
      // this.attribute="";
      //this.$emit('created', response.data);

    },

    async getattributeset() {
      let response = await this.$axios.$get('seller/displayattributeset')
      this.attributesets = response.data;
    },


    changed($event) {
      this.$emit('input', $event.target.value)
    },
    typechanged($event) {
      this.$emit('input', $event.target.value);

      //if($event.target.options.length>0){
      // for(var i=0;i<$event.target.options.length;i++){
      if ($event.target.value === "checkbox") {

        this.ischeckboxes = true;
        this.isHidden = false;
        this.isdropdown = false;
        this.isradiobutton = false;
      }
      else if ($event.target.value === "radiobutton") {
        this.isradiobutton = true;
        this.ischeckboxes = false;
        this.isHidden = false;
        this.isdropdown = false;
      }
      else if ($event.target.value === "text") {

        this.isHidden = true;
        this.ischeckboxes = false;
        this.isdropdown = false;
        this.isradiobutton = false;
      }
      else if ($event.target.value === "dropdown") {
        this.isHidden = false;
        this.ischeckboxes = false;
        this.isdropdown = true;
        this.isradiobutton = false;
      }
    },

    addvalue(index) {

      this.inputs.push({ name: '' });

    },
    removevalue(index) {
      //debugger;
      this.inputs.splice(index, 1);
    },

    chkaddvalue(index) {
      this.checkboxes.push({ name: '' });
    },

    chkremovevalue(index) {
      // debugger;
      this.checkboxes.splice(index, 1);
    },
    rdnaddvalue(index) {
      this.radiobuttons.push({ name: '' });
    },

    rdnremovevalue(index) {
      // debugger;
      this.radiobuttons.splice(index, 1);
    },

    async getAttribute() {
      //debugger;
      let response = await this.$axios.$get('seller/editattribute/' + this.attributeid)


      this.attribute = response;
      // debugger;
      if (this.attribute.input_type === "checkbox") {
        this.ischeckboxes = true;
        for (var i = 0; i < this.attribute.input_value.length; i++) {
          this.checkboxes.push({ name: this.attribute.input_value[i] });
        }
      }
      else if (this.attribute.input_type === "dropdown") {
        this.isdropdown = true;
        for (var i = 0; i < this.attribute.input_value.length; i++) {
          this.inputs.push({ name: this.attribute.input_value[i] });
        }
      }
      else if (this.attribute.input_type === "radiobutton") {
        this.isradiobutton = true;
        for (var i = 0; i < this.attribute.input_value.length; i++) {
          this.radiobuttons.push({ name: this.attribute.input_value[i] });
        }
      }
      else if (this.attribute.input_type === "text") {
        this.isHidden = true;
        this.range.min = this.attribute.input_value.min;
        this.range.max = this.attribute.input_value.max;
      }

    },

  },
  created() {
    this.getattributeset(); //dropdown bind
    this.getAttribute(); //edit value
  }

}
</script>