<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">Fellowship and Observership Programs</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/">Home</router-link>
                    <span>Fellowship and Observership Programs</span>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mb-20 leading-relaxed lg:grid-cols-2">
                <div class="lg:mr-8">
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">About the program</h4>
                    <p>As the leading eye healthcare provider in Indonesia, it is our duty to expand and enrich the knowledge and skills of ophthalmologists both from Indonesia and all over the world. We are committed to give opportunity for ophthalmologists to get professional and experience through our fellowship and observership programs of our Hospitals.</p>
                </div>
                <div class="md:row-span-2">
                    <img class="h-full w-full bg-center object-cover rounded-lg" src="~@/assets/photos/photo-fellowship.jpg" alt="Photo Fellowship">
                </div>
                <div>
                    <span class="text-xs">* description of each sub-program</span>
                    <div class="mb-2">
                        <h5 class="font-semibold text-lg">Fellowship</h5>
                        <p>JEC Academy offers fellowship programs in select subspecialties. At JEC Academy, our fellows have opportunity to learn from our experience physicians and many of whom are leaders in their fields. Each program is designed to give the fellow the specialized skills and knowledge needed to excel in his or her area of study.</p>
                    </div>
                    <div>
                        <h5 class="font-semibold text-lg">Observership</h5>
                        <p>As our commitment, we also offer to observers from outside of JEC (National & International) to feel our experience in handling patients. The programs opened in each year for all sub-specialties, Observers not allowed to “hands-on” patient contact or anything research activities, participants are able to observe only, under supervision our physician.</p>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="font-bold text-xl mb-2 md:text-2xl">Sub-specialties</h4>
                <p class="mb-10">Find out more about our programs by heading towards our departments below:</p>
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div v-for="(service, index) in services" :key="index">
                        <h5 class="text-blue-800 font-bold">{{ service.name }}</h5>
                        <router-link :to="{name: 'FellowshipAndObservershipService', params: {serviceSlug: service.slug}}" class="mt-2 text-green-500 flex items-center">
                            <span class="text-sm mr-2">Learn more</span>
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </router-link>
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
                services: this.$store.state.FellowshipAndObservershipPrograms.services
            }
        }
    }
</script>

<style>

</style>