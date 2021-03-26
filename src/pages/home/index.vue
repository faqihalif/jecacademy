<template>
    <div>
        <Banner />
        <Stats />
        <OurPrograms />
        <WhyChoosingUs />
        <OurAlumni />
        <LatestNews />
    </div>
</template>

<script>
    import Banner from './components/Banner'
    import Stats from './components/Stats'
    import OurPrograms from './components/OurPrograms'
    import WhyChoosingUs from './components/WhyChoosingUs'
    import OurAlumni from './components/OurAlumni'
    import LatestNews from './components/LatestNews'

    export default {
        components: {
            Banner,
            Stats,
            OurPrograms,
            WhyChoosingUs,
            OurAlumni,
            LatestNews
        }
    }
</script>

<style>

</style>