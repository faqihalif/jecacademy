<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">Allied Health</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/">Home</router-link>
                    <span>Allied Health</span>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mb-20 leading-relaxed lg:grid-cols-2">
                <div class="lg:mr-8">
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">About the program</h4>
                    <p>Definition of allied health professionals are people who are involved with the delivery of health or related services. As a hospital with integrated service, our vision and mission is to improved knowledge and skills in order to support our health care system especially in Ophthalmic care.</p>
                </div>
                <div>
                    <img class="h-full w-full bg-center object-cover rounded-lg" src="~@/assets/photos/allied-health.png" alt="Photo Allied Health">
                </div>
            </div>

            <div>
                <h4 class="font-bold text-xl mb-2 md:text-2xl">All Course</h4>
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div v-for="(course, index) in courses" :key="index">
                        <h5 class="text-blue-800 font-bold">{{ course.name }}</h5>
                        <router-link :to="{name: 'AlliedHealthProgramsCourse', params: {courseSlug: course.slug}}" class="mt-2 text-green-500 flex items-center">
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
                courses: this.$store.state.AlliedHealth.courses
            }
        }
    }
</script>

<style>

</style>