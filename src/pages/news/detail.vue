<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">Buku Panduan Covid</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/" class="hover:text-blue-600">Home</router-link>
                    <router-link to="/News" class="hover:text-blue-600">News</router-link>
                    <span>Buku Panduan Covid</span>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-8 mb-20">
                <div>
                    <iframe allowfullscreen="true" style="border:none;width:100%;height:700px;" src="//e.issuu.com/embed.html?d=buku_panduan_covid19_untuk_rumah_sakit_dan_klinik_&hideIssuuLogo=true&hideShareButton=true&u=jec.risdik"></iframe>
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