<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">Ophthalmic Nursing Programs</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/">Home</router-link>
                    <span>Ophthalmic Nursing Programs</span>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-8 mb-20 leading-relaxed lg:grid-cols-2">
                <div class="lg:mr-8">
                    <h4 class="font-bold text-xl mb-2 md:text-2xl">About the program</h4>
                    <p>These programs are dedicated to enrich the quality of ophthalmic nursing. The specialized programs will allow nurses to learn and expand their skills focusing on ophthalmologic cases and managements.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat nisi repudiandae cum necessitatibus nobis molestias a blanditiis voluptas adipisci similique aut corrupti velit dolore, minus totam. Unde, error pariatur.</p>
                </div>
                <div>
                    <img class="h-full w-full bg-center object-cover rounded-lg" src="~@/assets/photos/photo-nursing.jpg" alt="Photo Nursing">
                </div>
            </div>

            <div>
                <h4 class="font-bold text-xl mb-2 md:text-2xl">All Course</h4>
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div v-for="(course, index) in courses" :key="index">
                        <h5 class="text-blue-800 font-bold">{{ course.name }}</h5>
                        <router-link :to="{name: 'OphthalmicNursingProgramsCourse', params: {courseSlug: course.slug}}" class="mt-2 text-green-500 flex items-center">
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
                courses: this.$store.state.OphthalmicNursingPrograms.courses
            }
        }
    }
</script>

<style>

</style>