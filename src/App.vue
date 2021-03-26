<template>
    <div class="flex flex-col justify-between min-h-screen">
        <header class="bg-white shadow-md w-full fixed z-10" ref="header">
            <div class="container mx-auto px-4 py-4">
                <!-- Navigation -->
                <div class="flex items-center justify-between">
                    <router-link to="/">
                        <img class="h-8" src="~@/assets/images/jecacademy.png" alt="Logo JEC Academy">
                    </router-link>
                    <div class="hidden md:flex">
                        <router-link to="/" class="mr-8 hover:text-blue-800 focus:text-blue-800 focus:font-bold" :class="currentPath === '/' ? 'font-bold text-blue-800' : ''">Home</router-link>
                        <div class="relative" @mouseover="navigationPrograms = true" @mouseout="navigationPrograms = false">
                            <a href="javascript:void(0)" class="mr-6 flex hover:text-blue-800 focus:text-blue-800 focus:font-bold">
                                Programs <svg fill="currentColor" class="w-4 h-4 self-center text-gray-700"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <!-- Navigation Child -->
                            <div class="absolute bg-white p-4 rounded-lg shadow-md" :class="navigationPrograms ? 'absolute' : 'hidden'" style="left: -56px; top: 24px; min-width: 317px;">
                                <router-link to="/fellowship-and-observership-programs" class="block py-3 px-3 my-1 rounded-lg hover:bg-gray-300 focus:bg-gray-300">Fellowship and Observership Programs</router-link>
                                <router-link to="/ophthalmic-nursing-programs" class="block py-3 px-3 my-1 rounded-lg hover:bg-gray-300 focus:bg-gray-300">Ophthalmic Nursing Programs</router-link>
                                <router-link to="/allied-health" class="block py-3 px-3 my-1 rounded-lg hover:bg-gray-300 focus:bg-gray-300">Allied Health</router-link>
                            </div>
                        </div>
                        <a href="https://elearning.jec.co.id/" target="_blank" rel="noopener noreferrer" class="mr-8 hover:text-blue-800 focus:text-blue-800 focus:font-bold">E-learning</a>
                        <router-link to="/about" class="mr-8 hover:text-blue-800 focus:text-blue-800 focus:font-bold" :class="currentPath.includes('/about') ? 'font-bold text-blue-800' : ''">About</router-link>
                        <router-link to="/news" class="hover:text-blue-800 focus:text-blue-800 focus:font-bold" :class="currentPath.includes('/news') ? 'font-bold text-blue-800' : ''">News</router-link>
                    </div>

                    <!-- Menu -->
                    <div class="md:hidden">
                        <button class="text-blue-800 focus:outline-none" @click="hideNavigationMobile" v-show="navigationMobile || navigationMobilePrograms">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <button class="text-blue-800 focus:outline-none" @click="showNavigationMobile" v-show="!navigationMobile && !navigationMobilePrograms">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Navigation Mobile -->
                <div class="md:hidden" v-show="navigationMobile">
                    <div class="pt-8 block">
                        <router-link to="/" class="block font-semibold text-gray-800 my-1 py-3 px-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300">Home</router-link>
                        <a href="javascript:void(0)" class="block font-semibold text-gray-800 my-1 py-3 px-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300 flex" @click="showNavigationMobilePrograms">
                            Programs <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 ml-2 text-gray-700"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="https://elearning.jec.co.id/" target="_blank" rel="noopener noreferrer" class="block font-semibold text-gray-800 my-1 py-3 px-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300">E-Learning</a>
                        <router-link to="/about" class="block font-semibold text-gray-800 my-1 py-3 px-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300">About</router-link>
                        <router-link to="/news" class="block font-semibold text-gray-800 my-1 py-3 px-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300">News</router-link>
                    </div>
                </div>

                <!-- Navigation Mobile Programs Child -->
                <div class="md:hidden" v-show="navigationMobilePrograms">
                    <div class="pt-2 block">
                        <a href="javascript:void(0)" class="block font-semibold text-gray-800 my-1 py-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300 flex" @click="hideNavigationMobilePrograms">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 mr-2 text-gray-700"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Programs
                        </a>
                        <router-link to="/fellowship-and-observership-programs" class="block font-semibold text-gray-800 my-1 py-3 px-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300">Fellowship and Observership Programs</router-link>
                        <router-link to="/ophthalmic-nursing-programs" class="block font-semibold text-gray-800 my-1 py-3 px-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300">Ophthalmic Nursing Programs</router-link>
                        <router-link to="/allied-health" class="block font-semibold text-gray-800 my-1 py-3 px-3 rounded-lg hover:bg-gray-300 focus:bg-gray-300">Allied Health</router-link>
                    </div>
                </div>
            </div>
        </header>
        <transition name="fade" mode="out-in">
            <router-view class="py-16 text-gray-800" :key="$route.path"></router-view>
        </transition>
        <footer class="bg-gray-900 leading-tight relative">
            <div class="container pt-16 pb-8 px-4 mx-auto">
                <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <a href="https://jec.co.id/" target="_blank" rel="noopener noreferrer">
                            <img class="mb-4" src="./assets/images/logo-jec-white.png" alt="Logo JEC White">
                        </a>
                        <h6 class="text-xs text-gray-300">© 2020 JEC Academy. Managed by Research And Education Division</h6>
                    </div>
                    <div>
                        <h5 class="text-gray-300 font-bold mb-2">Quick Links</h5>
                        <div class="flex flex-col text-sm">
                            <router-link to="/" class="text-gray-300 hover:text-white mb-2">Home</router-link>
                            <a href="https://elearning.jec.co.id/" target="_blank" rel="noopener noreferrer"  class="text-gray-300 hover:text-white mb-2">E-Learning</a>
                            <router-link to="/about" class="text-gray-300 hover:text-white mb-2">About</router-link>
                            <router-link to="/news" class="text-gray-300 hover:text-white mb-2">News</router-link>
                        </div>
                    </div>
                    <div>
                        <h5 class="text-gray-300 font-bold mb-2">Programs</h5>
                        <div class="flex flex-col text-sm">
                            <router-link to="/fellowship-and-observership-programs" class="text-gray-300 hover:text-white mb-2">Fellowship and Observership Programs</router-link>
                            <router-link to="/ophthalmic-nursing-programs" class="text-gray-300 hover:text-white mb-2">Ophthalmic Nursing Progams</router-link>
                            <router-link to="/allied-health" class="text-gray-300 hover:text-white mb-2">Allied Health</router-link>
                        </div>
                    </div>
                    <div>
                        <h5 class="text-gray-300 font-bold mb-2">Find Us</h5>
                        <p class="text-gray-300 mb-2 text-sm">Jl. Terusan Arjuna Utara No. 1 Kedoya</p>
                        <p class="text-gray-300 mb-2 text-sm">Jakarta Barat, DKI Jakarta</p>
                        <div class="flex flex-col text-sm">
                            <a href="tel:+6229221000" class="text-gray-300 hover:text-white mb-2">(021) – 29221000</a>
                            <a href="mailto:info.risdik@jec.co.id" class="text-gray-300 hover:text-white mb-2">info.risdik@jec.co.id</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- floating Button -->
            <a href="http://development.ringgo5.com/" target="_blank" rel="noopener noreferrer" class="fixed bg-green-500 text-white rounded-full px-4 py-2 flex items-center z-10 hover:shadow-xl focus:shadow-xl" style="right: 5%; bottom: 5%">
                <span class="font-semibold mr-2 hidden md:block">Book a Program</span>
                <div class="flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"></path></svg>
                </div>
            </a>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navigationPrograms: null,
                navigationMobile: false,
                navigationMobilePrograms: false,
            }
        },
        methods: {
            showNavigationPrograms() {
                this.navigationPrograms = true
            },
            showNavigationMobile() {
                this.navigationMobile = true
            },
            showNavigationMobilePrograms() {
                this.navigationMobile = false
                this.navigationMobilePrograms = true
            },
            hideNavigationPrograms() {
                this.navigationPrograms = false
            },
            hideNavigationMobile() {
                this.navigationMobile = false
                this.navigationMobilePrograms = false
            },
            hideNavigationMobilePrograms() {
                this.navigationMobile = true
                this.navigationMobilePrograms = false
            }
        },
        mounted() {
            let self = this

            window.addEventListener('click', function (e){
                if(!self.$refs.header.contains(e.target)) {
                    self.hideNavigationPrograms()
                    self.hideNavigationMobile()
                }
            })
        },
        watch: {
            $route() {
                this.hideNavigationPrograms()
                this.hideNavigationMobile()
            },
        },
        computed: {
            currentPath() {
                return this.$route.path
            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .breadcrumb a:after{
        content: '/';
        padding: 0 4px;
    }

    .breadcrumb a:last-child:after {
        content: '';
    }
    
    .post {
        background-image: linear-gradient(to right, #273272 , #c6d3e3);
    }
</style>