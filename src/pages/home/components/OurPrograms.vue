<template>
    <div class="container pb-24 px-4 mx-auto grid grid-cols-1 md:grid-cols-2">
        <div class="md:order-2 lg:self-end">
            <h3 class="text-2xl font-bold mb-4 md:text-3xl">Our Programs</h3>
        </div>
        <div class="md:order-1 md:row-span-2 md:mr-8 lg:mr-16 relative">
            <img class="h-full w-full bg-center object-cover rounded-lg mb-4" src="~@/assets/photos/photo-programs.jpg" alt="Our Programs Photo">
            <!-- Background Dot -->
            <img src="~@/assets/images/dot.png" class="background-dot hidden md:block">
        </div>
        <div class="md:order-2">
            <p class="leading-loose mb-4">JEC Eye Hospitals is recognized both nationally and internationally as one of the leading eye healthcare providers in Indonesia. We gratefully welcome applicants from in and outside the country.</p>
            <div class="grid grid-cols-1 gap-4">
                <router-link to="/fellowship-and-observership-programs" class="text-blue-800 font-semibold flex items-center">
                    <div class="flex-shrink-0 mr-2">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <span>Fellowship and Observership Programs</span>
                </router-link>
                <router-link to="/ophthalmic-nursing-programs" class="text-blue-800 font-semibold flex items-center">
                    <div class="flex-shrink-0 mr-2">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <span>Ophthalmic Nursing Programs</span>
                </router-link>
                <router-link to="/allied-health" class="text-blue-800 font-semibold flex items-center">
                    <div class="flex-shrink-0 mr-2">
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <span>Allied Health</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .background-dot {
        position: absolute;
        z-index: -1;
        bottom: -32px;
        left: -32px;
    }
</style>