<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">News</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/">Home</router-link>
                    <span>News</span>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                    <div class="relative rounded-lg h-40 post hover:shadow-2xl">
                        <div class="absolute px-2 border" style="top: 30px; left: 30px; bottom: auto;">
                            <span class="text-white text-sm tracking-wide uppercase">News</span>
                        </div>
                        <div class="absolute" style="z-index: 1; bottom: 25px; left: 30px; right: 50px">
                            <span class="text-lg font-bold text-white leading-none">Buku Panduan Covid</span>
                        </div>
                        <router-link to="" class="block rounded-lg opacity-25 hover:opacity-100">
                            <img class="h-40 w-40 object-cover rounded-l-lg" src="~@/assets/photos/mask.jpg">
                        </router-link>
                    </div>
                    <router-link to="" class="mt-4 text-green-500 inline-flex items-center border-b border-green-500">
                        <span class="text-sm mr-2 uppercase">continue</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" class="w-2 h-2"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>