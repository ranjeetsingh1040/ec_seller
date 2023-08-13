<template>
    <div
        class="lg:ml-8 md:ml-8 sm:ml-0 xs:ml-0 page-change-password bg-white w-full ml-8 page-change-password bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cola-2 p-8 md:flex-row sm:align-item-center xs:align-item-center md:align-item-start sm:flex xs:flex sm:flex-col xs:flex-col">
        <div class="w-9/12 lg:p-6 md:p-6 xs:p-0 sm:p-0">
            <div v-if="success != null" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-2" role="alert">
                <span class="block sm:inline">{{ success }}</span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20" @click="close()">
                        <title>Close</title>
                        <path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                </span>
            </div>

            <h4 class="uppercase mb-4 font-semibold">Change Avatar</h4>

            <form action="" @submit.prevent="store" enctype="multipart/form-data">
                <div class="max-w-xl">
                    <label
                        class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                        <span class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <span class="font-medium text-gray-600">
                                Drop files to Attach, or
                                <span class="text-red-600 underline">browse</span>
                            </span>
                        </span>
                        <input type="file" name="file_upload" class="hidden" @change="uploadImage" id="profileImage" />
                    </label>
                    <p class="text-red-900" v-if="errors.profileImage">
                        {{ errors.profileImage[0] }}
                    </p>
                    <button type="submit"
                        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 mt-2.5">
                        Submit
                    </button>
                </div>
            </form>
        </div>

        <div class="w-6/12 sm:w-4/12 py-5">
            <img :src="rooturl + this.$auth.user.image" alt="..."
                class="shadow rounded max-w-full h-auto align-middle border-none" />
        </div>
    </div>
</template>
<script>
export default {
    name: "imageUpload",
    data() {
        return {
            rooturl: process.env.SITEURL,
            success: null,
            form: {
                id: this.$auth.user.id,
                profileImage: null,
            },
        };
    },
    methods: {
        async store() {
            let formData = new FormData();
            formData.append("id", this.form.id);
            formData.append("profileImage", this.form.profileImage);
            let response = await this.$axios
                .$post("users/changeavatar", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    this.success = response.message;
                    window.location.reload(true);
                })
                .catch((error) => { });
        },
        uploadImage(event) {
            this.form.profileImage = event.target.files[0];
        },
        close() {
            this.success = null;
        },
    },
}; // missing closure added
</script>
