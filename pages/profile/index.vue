<template>
	<div class="lg:ml-8 sm:ml-0 xs:ml-0 bg-white">
		<div class="p-6" v-show="showprofile">


			<h4 class="uppercase mb-4 font-semibold">Profile Information</h4>
			<!-- <div v-if="success != null" class="w-1/2 my-4 bg-green-500 p-4 flex justify-between" id="success-alert">
				<p class="text-white">{{ success }}</p>
				<img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="close()">
			</div> -->


			<div v-if="success != null" class="w-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
				<span class="block sm:inline">{{ success }}</span>
				<span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="close()">
					<svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20">
						<title>Close</title>
						<path
							d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
					</svg>
				</span>
			</div>

			<div  v-if="failure != null" class="w-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
				<span class="block sm:inline">{{ failure }}</span>
				<span class="absolute top-0 bottom-0 right-0 px-4 py-3" @click="fclose()">
					<svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20">
						<title>Close</title>
						<path
							d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
					</svg>
				</span>
			</div>


			<!-- <div v-if="failure != null" class="w-1/2 my-4 bg-red-500 p-4 flex justify-between" id="success-alert">
				<p class="text-white">{{ failure }}</p>
				<img src="/cancel.svg" class="h-2 self-center cursor-pointer" @click="fclose()">
			</div> -->



			<div class="w-1/2 flex my-10">
				<!-- 	<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>First Name</p>
						</div> -->
				<div class="w-2/5 md:w-1/5 lg:w-32">
					<p class="p1 text-gray-500">Name</p>
				</div>
				<div class="w-3/5 md:w-4/5 lg:w-1/2">
					<p class="text-gray-500">{{ users.name }}</p>
				</div>
			</div>
			<!-- <div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Last Name</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>Sakthi</p>
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Gender</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>Female</p>
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Date of Birth</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>-</p>
						</div>
					</div> -->
			<div class="w-1/2 flex my-10">
				<div class="w-2/5 md:w-1/5 lg:w-32">
					<p class="p1 text-gray-500">E-mail</p>
				</div>
				<div class="w-3/5 md:w-4/5 lg:w-1/2">
					<p class="text-gray-500">{{ users.email }}</p>
				</div>
			</div>
			<div class="w-1/2 flex my-10">
				<div class="w-2/5 md:w-1/5 lg:w-32">
					<p class="p1 text-gray-500">Mobile</p>
				</div>
				<div class="w-3/5 md:w-4/5 lg:w-1/2">
					<p class="text-gray-500">{{ users.mobileno }}</p>
				</div>
			</div>
			<!-- <div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Mobile No</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>9876543210</p>
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Location</p>
						</div>
						<div class="w-3/5 md:w-4/5 lg:w-4/5">
							<p>India</p>
						</div>
					</div> -->
			<div class="my-4 mt-10">
				<span class="no-underline w-64 button is-danger is-medium px-4 py-2 text-white rounded bg-red-500 "
					@click="showdiv()">Edit</span>
			</div>
		</div>
		<div class="w-full p-6" v-show="showedit">
			<h4 class="mb-4 uppercase font-semibold">Profile Information</h4>
			<div class="w-full flex my-10">
				<div class="self-center w-2/5 md:w-1/5 lg:w-32">
					<!-- <p>First Name</p> -->
					<p class="p1 text-gray-500">Name</p>
				</div>
				<div class="w-3/5 md:w-2/6 ">
					<input type="text" v-model="userdetails.name" class="input-type border-gray-300">
				</div>
				<p class="text-red-900" v-if="errors.name">
					{{ errors.name[0] }}
				</p>
			</div>
			<!-- <div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Last Name</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<input type="text" value="Sakthi" class="input-type">
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Gender</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							  <input type="radio" name="gender" value="male"> Male
  							  <input type="radio" name="gender" value="female" checked> Female
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Date of Birth</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<input type="date" class="input-type">
						</div>
					</div> -->
			<div class="w-full flex my-10 border-gray-300">
				<div class="self-center w-2/5 md:w-1/5 lg:w-32">
					<p class="p1 text-gray-500">E-mail</p>
				</div>
				<div class="w-3/5 md:w-2/6 ">
					<input type="text" v-model="userdetails.email" class="input-type border-gray-300">
				</div>
				<p class="text-red-900" v-if="errors.email">
					{{ errors.email[0] }}
				</p>
			</div>
			<div class="w-full flex my-10">
				<div class="self-center w-2/5 md:w-1/5 lg:w-32">
					<p class="p1 text-gray-500">Mobile</p>
				</div>
				<div class="w-3/5 md:w-2/6 ">
					<input type="text" v-model="userdetails.mobileno" class="input-type border-gray-300">
				</div>
				<p class="text-red-900" v-if="errors.mobileno">
					{{ errors.mobileno[0] }}
				</p>
			</div>
			<!-- <div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Mobile No</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<input type="text" name="" value="9876543210" class="input-type">
						</div>
					</div>
					<div class="w-full flex my-4">
						<div class="w-2/5 md:w-1/5 lg:w-1/5">
							<p>Location</p>
						</div>
						<div class="w-3/5 md:w-1/6 lg:w-1/6">
							<select class="input-type">
								<option>India</option>
								<option>USA</option>
							</select>
						</div>
					</div> -->
					<div class="flex">
			<div class="my-4 mt-10">
				<a href="#" class="no-underline w-64 button is-info is-medium  px-4 py-2 text-white rounded bg-red-500"
					@click="updateuser()">Change</a>
			</div>
			<!-- <div class="my-4 mt-10 ml-16">
				<a href="#" class="no-underline w-64 button is-info is-medium  px-4 py-2 text-white rounded bg-red-500"
					@click="cancel()">Cancel</a>
			</div> -->
		</div>
		</div>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
	layout: 'member',
	data() {
		return {
			showprofile: true,
			showedit: false,
			success: null,
			failure: null,
			users: [],
			userdetails: {
				name: '',
				email: '',
				id: ''
			}
		}
	},
	methods: {
		async close() {
			this.success = null;
		},
		async fclose() {
			this.failure = null;
		},
		async showdiv() {
			this.showedit = true;
			this.showprofile = false;
		},
		async getuserdetails() {
			var userid = this.$auth.user.id;
			let response = await this.$axios.$get('users/getuserdetails');

			this.users = response;
			this.userdetails = response;

		},

		async updateuser() {

			let response = await this.$axios.$post('users/updateuser', this.userdetails).then((response) => {
				if (response.message == "Profile Updated Successfully.") {
					this.success = response.message;
					this.userdetails = '';
				}
				else {
					this.failure = response.message;
				}

				this.showedit = false;
				this.showprofile = true;
			}).catch((error) => {

				/// this.errors=error.response.data.errors;
				//console.log(error);
			});
		},
		cancel(){
			this.showedit = false;
			this.showprofile = true;
		}
	},
	created() {
		this.getuserdetails();
	}
}
</script>
<style scoped>
.p1,
label {
	font-weight: bold;
}
</style>
