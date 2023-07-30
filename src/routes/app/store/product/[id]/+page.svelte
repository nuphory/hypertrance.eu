<script>
        import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';



</script>

<main>
	<div class="relative md:container flex flex-col md:flex-row justify-start">
		<Splide
			options={{ rewind: true, drag: "free", snap: true, type: "slide" }}
			class="aspect-square md:w-half"
			aria-label="My Favorite Images"
		>
			<SplideSlide>
				<div class="aspect-square w-full bg-text-primary">Slide 1</div>
			</SplideSlide>
			<SplideSlide>
				<div class="aspect-square w-full bg-text-secondary">Slide 2</div>
			</SplideSlide>
			<SplideSlide>
				<div class="aspect-square w-full bg-text-tertiary">Slide 2</div>
			</SplideSlide>
		</Splide>

		<div class="container aspect-square md:w-half">
			<h1 class="mb-0 before:content-['']">Product Name</h1>
			<h2 class="font-comsat-navy before:content-['']">0,00 EUR</h2>
		</div>
	</div>
</main>
