<template>
    <div class="bg-blue-500 text-white flex" style="background: linear-gradient(84.18deg, #2C5282 21.12%, #2C5282 21.12%, #4C88D5 85.08%);">
        <!-- Background Shape -->
        <div class="absolute self-center hidden md:block">
            <!-- <img src="~@/assets/images/background-our-alumni.png" style="z-index: -1"> -->
        </div>
        
        <div class="container py-20 px-4 mx-auto relative">
            <div class="grid grid-cols-1 md:grid-cols-2 md:items-center">
                <div class="md:self-end">
                    <h3 class="text-2xl font-bold mb-4 md:text-3xl">Our Alumni</h3>
                </div>
                <div class="md:row-span-2 md:ml-8 mb-4 lg:ml-16 relative">
                    <img class="w-auto rounded-lg object-cover object-center mx-auto mb-8 md:m-0" src="~@/assets/photos/wrapper-photos.png" style="z-index: -1;">
                    <img src="~@/assets/photos/alumni-1.jpg" class="absolute rounded-lg alumni-1">
                    <img src="~@/assets/photos/alumni-2.jpg" class="absolute rounded-lg alumni-2" @click="video = !video">
                    <img src="~@/assets/photos/alumni-3.jpg" class="absolute rounded-lg alumni-3">
                    <img src="~@/assets/photos/alumni-4.jpg" class="absolute rounded-lg alumni-4">
                    <img src="~@/assets/photos/alumni-5.jpg" class="absolute rounded-lg alumni-5">
                </div>
                <div class="md:order-1 md:self-start">
                    <router-link to="/alumni" class="block text-center bg-white text-blue-800 font-bold rounded-full py-2 hover:bg-gray-300 focus:outline-none md:w-40">Discover</router-link>
                </div>
            </div>
        </div>

        <div :class="!video ? 'hidden' : ''">
            <div class="fixed top-0 left-0 w-full h-screen bg-black z-50 flex items-center justify-center" style="background-color: rgba(0,0,0,.9);">
                <div class="absolute top-0 right-0 mt-4 mr-4">
                    <span class="cursor-pointer flex items-center" @click="video = !video">
                        Close
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8 ml-2"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                    </span>
                </div>
                <div class="w-full max-w-screen-sm mx-4">
                    <div class="relative w-full h-auto aspect-16x9">
                        <iframe class="absolute inset-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/RCkUuF4gf8c?controls=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                video: false
            }
        },
        watch: {
            video() {
                if(this.video) {
                    document.documentElement.style.overflow = 'hidden'
                } else {
                    document.documentElement.style.overflow = 'auto'
                }
            }
        }
    }
</script>

<style scoped>
    .alumni-1 {
        top: 12%;
        left: 0;
        width: 26%;
        height: 58%;
        object-fit: cover;
        cursor: pointer;
    }

    .alumni-2 {
        top: 0;
        left: 30%;
        width: 41%;
        height: 43%;
        object-fit: cover;
        cursor: pointer;
        opacity: 0.9;
    }

    .alumni-3 {
        top: 47%;
        left: 29%;
        width: 28%;
        height: 45%;
        object-fit: cover;
        cursor: pointer;
    }

    .alumni-4 {
        top: 7%;
        left: 73%;
        width: 21%;
        height: 45%;
        object-fit: cover;
        cursor: pointer;
    }

    .alumni-5 {
        top: 55%;
        left: 61%;
        width: 40%;
        height: 45%;
        object-fit: cover;
        cursor: pointer;
    }

    .aspect-16x9 {
        padding-top: 56.25%;
    }
</style>