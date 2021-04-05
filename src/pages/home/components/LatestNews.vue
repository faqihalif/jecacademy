<template>
    <div class="container py-24 px-4 mx-auto">
        <h3 class="text-2xl font-bold mb-8 text-center">Latest News</h3>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                    <div class="relative rounded-lg h-40 post hover:shadow-2xl">
                        <div class="absolute px-2 border" style="top: 30px; left: 30px; bottom: auto;">
                            <span class="text-white text-sm tracking-wide uppercase">News</span>
                        </div>
                        <div class="absolute" style="z-index: 1; bottom: 25px; left: 30px; right: 50px">
                            <span class="text-lg font-bold text-white leading-none">Buku Panduan Covid</span>
                        </div>
                        <router-link to="/news/buku-panduan-covid" class="block rounded-lg opacity-25 hover:opacity-100">
                            <img class="h-40 w-40 object-cover rounded-l-lg" src="~@/assets/photos/mask.jpg">
                        </router-link>
                    </div>
                    <router-link to="/news/buku-panduan-covid" class="mt-4 text-green-500 inline-flex items-center border-b border-green-500">
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