<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">{{ journal.title }}</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/" class="hover:text-blue-600">Home</router-link>
                    <router-link to="/library" class="hover:text-blue-600">Library</router-link>
                    <span>{{ journal.title }}</span>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-8 mb-20">
                <div>
                    <iframe allowfullscreen="true" style="border:none;width:100%;height:700px;" :src="journal.issuu + '&hideIssuuLogo=true&hideShareButton=true&u=jec.risdik'"></iframe>
                </div>
                <div>
                    <p class="text-sm leading-4 truncate text-blue-700 font-semibold">{{ journal.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                libraries: this.$store.state.Library.libraries
            }
        },
        computed: {
            libraryYears() {
                return this.libraries.find(library => {
                    return library.year == this.$route.params.year
                })
            },
            journal() {
                return this.libraryYears.journals.find(journal => {
                    return journal.slug == this.$route.params.slug
                })
            },
        }
    }
</script>

<style>

</style>