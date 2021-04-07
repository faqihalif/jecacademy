<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">Library</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/">Home</router-link>
                    <span>Library</span>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="mb-10" v-for="(library, index) in libraries" :key="index">
                    <div class="flex justify-end mb-4">
                        <span class="rounded-full px-2 font-bold text-sm bg-blue-500 text-white">{{ library.year }}</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                        <div v-for="(journal, index) in library.journals" :key="index">
                            <router-link :to="{name: 'LibraryDetail', params: {year: library.year, slug: journal.slug}}">
                                <div class="flex flex-col">
                                    <div class="rounded bg-gray-200 mb-2 p-2">
                                        <img class="w-16 mx-auto" src="~@/assets/images/journal.png">
                                    </div>
                                    <div class="mb-1 overflow-hidden line-clamp">
                                        <p class="text-blue-800 font-bold leading-tight">{{ journal.title }}</p>
                                    </div>
                                    <div>
                                        <p class="text-sm leading-4 truncate text-green-700">{{ journal.name }}</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="overflow-auto max-h-screen w-full min-w-full">
                        <table class="table-auto w-full">
                            <thead>
                                <tr>
                                    <th class="sticky top-0 bg-blue-800 text-white text-left px-4 py-2 w-4/12">Journal Title</th>
                                    <th class="sticky top-0 bg-blue-800 text-white text-left px-4 py-2 w-7/12">Name</th>
                                    <th class="sticky top-0 bg-blue-800 text-white text-left px-4 py-2 w-7/12">Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b bg-gray-100" v-for="(journal, index) in library.journals" :key="index">
                                    <td class="px-4 py-2 w-4/12"><router-link class="text-blue-500 text-underline" :to="{name: 'LibraryDetail', params: {year: library.year, slug: journal.slug}}">{{ journal.title }}</router-link></td>
                                    <td class="px-4 py-2 w-7/12">{{ journal.name }}</td>
                                    <td class="px-4 py-2 w-7/12">{{ library.year }}</td>
                                </tr>
                            </tbody>
                        </table>
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
            libraries: this.$store.state.Library.libraries
        }
    }
}
</script>

<style>
    .line-clamp {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
    }
</style>