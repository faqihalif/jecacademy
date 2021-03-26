<template>
	<div>
		<Carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000" :speed="1000" :loop="true" :paginationEnabled="false">
			<Slide>
				<div class="bg-cover bg-center flex" id="slide-1">
					<div class="container mx-auto px-4 self-center">
						<div>
							<h1 class="text-green-500 text-2xl font-bold md:text-3xl lg:text-4xl">Because we care</h1>
							<h3 class="text-blue-800 md:text-xl md:max-w-xl lg:text-2xl lg:max-w-2xl">JEC Eye Hospitals as professional eye healthcare and eye care leader in Indonesia have committed to provide opportunities for ophthalmologists and other medical professionals to expand their knowledge and education through fellowship, observership and training programs.</h3>
						</div>
					</div>
				</div>
			</Slide>
			<Slide>
				<div class="bg-cover bg-center flex" id="slide-2">
					<div class="container mx-auto px-4 self-center">
						<div>
							<h1 class="text-green-500 text-2xl font-bold md:text-3xl lg:text-4xl">Ophthalmic Nursing Programs</h1>
							<h3 class="text-blue-800 md:text-xl md:max-w-xl lg:text-2xl lg:max-w-2xl">These programs are dedicated to enrich the quality of ophthalmic nursing. The specialized programs will allow nurses to learn and expand their skills focusing on ophthalmologic cases and managements. All the programs have utilized blended learning methods trough online and face to face learning. </h3>
						</div>
					</div>
				</div>
			</Slide>
            <Slide>
				<div class="bg-cover bg-center flex" id="slide-3">
					<div class="container mx-auto px-4 self-center">
						<div>
							<h1 class="text-green-500 text-2xl font-bold md:text-3xl lg:text-4xl">Allied Health Programs</h1>
							<h3 class="text-blue-800 md:text-xl md:max-w-xl lg:text-2xl lg:max-w-2xl">We also provide other specialized trainings for health professionals. These programs will allow health professionals to gain more skill and knowledge regarding ophthalmology based on their field of work. Please kindly download our training calendar for further details. </h3>
						</div>
					</div>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<script>
	import { Carousel, Slide } from "vue-carousel";
	export default {
		components: {
			Carousel,
			Slide
		}
	};
</script>

<style scoped>
	#slide-1 {
		background-image: url("~@/assets/images/slide-1.jpeg");
		min-height: 450px;
    }

    #slide-2 {
		background-image: url("~@/assets/images/slide-2.jpeg");
		min-height: 450px;
    }

    #slide-3 {
		background-image: url("~@/assets/images/slide-3.jpeg");
		min-height: 450px;
    }
    
    @media only screen and (min-width: 1024px) {
        #slide-1 {
            background-image: url("~@/assets/images/slide-1.jpeg");
            min-height: 600px;
        }

        #slide-2 {
            background-image: url("~@/assets/images/slide-2.jpeg");
            min-height: 600px;
        }

        #slide-3 {
            background-image: url("~@/assets/images/slide-3.jpeg");
            min-height: 600px;
        }
    }
</style>