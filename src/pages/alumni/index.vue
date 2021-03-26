<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">Alumni</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/">Home</router-link>
                    <span>Alumni</span>
                </div>
            </div>
            <div>
                <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div class="self-end">
                        <span class="font-semibold">Total Alumni : {{ alumni.length }}</span>
                    </div>
                    <div class="relative w-full">
                        <input type="text" class="bg-gray-300 py-2 pl-4 pr-12 rounded-lg w-full border border-transparent focus:outline-none focus:border-gray-300 focus:bg-white" placeholder="Search Alumni" v-model="keywordAlumni">
                        <div class="absolute inset-y-0 right-0 text-gray-500 flex items-center mr-4">
                            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                </div>
                <div class="overflow-auto max-h-screen w-full min-w-full">
                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="sticky top-0 bg-blue-800 text-white text-left px-4 py-2 w-4/12">Name</th>
                                <th class="sticky top-0 bg-blue-800 text-white text-left px-4 py-2 w-7/12">Institution</th>
                                <th class="sticky top-0 bg-blue-800 text-white text-left px-4 py-2 w-1/12 cursor-pointer" @click="sorting('year')">
                                    <span class="flex items-center">
                                        Year
                                        <!-- Arrow Up -->
                                        <svg v-if="sort.direction == 'asc'" fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4 ml-2"><path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                        
                                        <!-- Arrow Down -->
                                        <svg v-else fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4 ml-2"><path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b bg-gray-100" v-for="(alumnus, index) in alumni" :key="index">
                                <td class="px-4 py-2 w-4/12">{{ alumnus.name }}</td>
                                <td class="px-4 py-2 w-7/12">{{ alumnus.institution }}</td>
                                <td class="px-4 py-2 w-1/12 text-left">{{ alumnus.year }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                allAlumni: this.$store.state.Alumni.alumni,
                keywordAlumni: '',
                sort: {
                    current: 'year',
                    direction: 'asc'
                }
            }
        },
        methods: {
            sorting(v) {
                if(v == this.sort.current) {
                    this.sort.direction = this.sort.direction == 'asc' ? 'desc' : 'asc'
                }
            }
        },
        computed: {
            direction() {
                return this.sort.direction
            },
            alumni() {
                let keyword = this.keywordAlumni.toLowerCase()

                return this.allAlumni.filter(alumnus => {
                    return Object.values(alumnus).some(v => {
                        return String(v).toLowerCase().includes(keyword)
                    })
                })
            }
        },
        watch: {
            direction(v) {
                if(v == 'asc') {
                    this.alumni = this.alumni.sort((a, b) => {
                        return a.year > b.year ? 1 : -1
                    })
                } else {
                    this.alumni = this.alumni.sort((a, b) => {
                        return a.year < b.year ? 1 : -1
                    })
                }
            },
        }
    }
</script>

<style>

</style>