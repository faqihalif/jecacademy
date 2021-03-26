<template>
    <div class="relative">
        <div class="absolute right-0 max-w-xl" style="z-index: -1;">
            <img src="~@/assets/images/background-page.png">
        </div>
        <div class="container px-4 mx-auto">
            <div class="py-8 border-b mb-8">
                <h2 class="text-green-500 font-bold text-2xl mb-2 md:text-4xl">About</h2>
                <!-- Breadcumb -->
                <div class="breadcrumb text-xs text-blue-800">
                    <router-link to="/">Home</router-link>
                    <span>About</span>
                </div>
            </div>
            <div>
                <img class="w-full h-auto bg-center object-cover rounded-lg mb-8" src="~@/assets/photos/jec-building.jpg" alt="JEC Building">
            </div>
            <div class="leading-relaxed mb-8">
                <div class="grid grid-cols-1 gap-6">
                    <p>Sebagai rumah sakit mata berskala internasional yang berkomitmen untuk dapat meningkatkan kualitas hidup masyarakat melalui pelayanan kesehatan mata, JEC Eye Hospitals and Clinics memiliki misi untuk memberikan pelayanan klinis berstandar internasional dan senantiasa menerapkan teknologi mutakhir dan terpercaya. Tujuannya agar kita senantiasa dapat memberikan pelayanan terbaik yang dapat melebihi harapan dari pasien.</p>
                    <p>Hal ini tentu saja harus ditunjang dengan pengembangan kompetensi dokter, perawat dan staff melalui sebuah proses pendidikan. Divisi Riset dan Pendidikan adalah sebuah wadah dimana proses pendidikan tersebut dapat terjadi untuk memastikan kompetensi sumber daya manusia di JEC Eye Hospitals and Clinics terstandarisasi dan selalu mengikuti perkembangan. Kualitas sumber daya yang baik berperan dalam memberikan kualitas pelayanan yang terpercaya. Saya ucapkan selamat bergabung di JEC Eye Hospitals and Clinics , bersama-sama kita membangun pelayanan kesehatan mata di Indonesia.</p>
                    <p>Sumber daya manusia yang kreatif dan memiliki keterampilan yang baik sangat diperlukan untuk keberlanjutan sebuah perusahaan yang berkualitas. Era disrupsi pada teknologi membawa banyak perubahan dalam dunia pendidikan saat ini. Kemajuan teknologi membawa perubahan dalam penyampaian materi ajar, dimana karyawan dapat belajar dimana saja secara online, sehingga proses belajar mengajar dapat menjadi lebih cepat dan terencana. Divisi Riset dan Pendidikan juga turut berkembang seiring dengan kemajuan teknologi dengan terus menerus mengembangkan materi e-learning. Kami harapkan hal ini membuat dokter, perawat, staff dan calon staff JEC Eye Hospitals and Clinics lebih siap dalam menghadapi proses yang terjadi di lapangan. The purpose of learning is growth, and it holds the passport to the future. Selamat belajar!</p>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                    <img class="h-40 w-auto object-cover object-center mx-auto mb-4" src="~@/assets/photos/prof-tdg.png" alt="Prof. Dr. Tjahjono D. Gondhowiardjo, SpM(K), PhD">
                    <div class="text-center">
                        <h3 class="text-blue-800 text-xl font-bold">Prof. Dr. Tjahjono D. Gondhowiardjo, SpM(K), PhD</h3>
                        <span class="text-green-500">Director of Education and Development</span>
                    </div>
                </div>
                <div>
                    <img class="h-40 w-auto object-cover object-center mx-auto mb-4" src="~@/assets/photos/dr-rini.png" alt="Dr. Rini Sulastiwaty, SpM">
                    <div class="text-center">
                        <h3 class="text-blue-800 text-xl font-bold">Dr. Rini Sulastiwaty, SpM</h3>
                        <span class="text-green-500">Head of Research and Education</span>
                    </div>
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