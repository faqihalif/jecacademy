<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">{{ service.name }}</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/" class="hover:text-blue-600">Home</router-link>
                    <router-link to="/fellowship-and-observership-programs" class="hover:text-blue-600">Fellowship and Observership Programs</router-link>
                    <span>{{ service.name }}</span>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-8 leading-relaxed mb-20">
                <div>
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">Overview</h4>
                    <div v-for="(overview, index) in service.overview" :key="index">
                        <p class="mb-2 text-justify">{{ overview }}</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">Lecturer</h4>
                    <div class="grid grid-cols-1 gap-1">
                        <div class="flex items-center" v-for="(lecturer, index) in service.lecturer" :key="index">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-4 flex-shrink-0"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span>{{ lecturer }}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">Location</h4>
                    <div class="grid grid-cols-1 gap-1">
                        <div class="flex items-center" v-for="(location, index) in service.location" :key="index">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-4"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                            <span>{{ location }}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">Duration</h4>
                    <div class="grid grid-cols-1 gap-1">
                        <div class="flex items-center">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-4"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            <span>{{ service.duration }}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">Number of position / year</h4>
                    <div class="grid grid-cols-1 gap-1">
                        <div class="flex items-center">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-4"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                            <span>{{ service.numberOfPosition }}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">Curriculum</h4>
                    <div class="grid grid-cols-1 gap-1">
                        <div class="flex items-center">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-4"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>
                            <a :href=service.curriculum target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Click here to view</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="text-sm md:text-base">
                    <router-link :to="prevService.slug" class="text-green-500 font-semibold flex items-center">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4 mr-2"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                        {{ prevService.name }}
                    </router-link>
                </div>
                <div class="text-sm md:text-base">
                    <router-link :to="nextService.slug" class="text-green-500 font-semibold flex items-center">
                        {{ nextService.name }}
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4 ml-2"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                services: this.$store.state.FellowshipAndObservershipPrograms.services
            }
        },
        computed: {
            service() {
                return this.services.find(service => {
                    return service.slug == this.$route.params.serviceSlug
                })
            },
            nextService() {
                let index = this.services.findIndex(service => {
                    return service == this.service
                })

                if(index >= this.services.length - 1) {
                    return this.services[0]
                } else {
                    return this.services[index + 1]
                }
            },
            prevService() {
                let index = this.services.findIndex(service => {
                    return service == this.service
                })
                
                if(index <= 0) {
                    return this.services[this.services.length - 1]
                } else {
                    return this.services[index - 1]
                }
            }
        }
    }
</script>

<style>

</style>