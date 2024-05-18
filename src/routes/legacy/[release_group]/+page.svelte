<!-- 
	TODO LEFT:
		- image (sticky)
-->
<!-- 
	TODO RIGHT: 
		- title
		- streaming buttons
		- description
		- youtube embed
		- interactive
		-- buy/cart?
-->

<!-- 
	TODO LEFT:
		- title
		- description
-->
<!-- 
	TODO RIGHT: 
		- image
-->

<script lang="ts">
	export let data;
</script>

<div id="hero" class="relative w-full">
	<div class="absolute z-0 inset-0">
		<img
			class="w-full h-full object-cover z-0"
			src="https://pbs.twimg.com/media/F9F4YEsXEAAwL4d?format=jpg&name=orig"
			alt="Hypertrance Music Club"
		/>
	</div>
	<div class="absolute inset-0 z-0 bg-black/50" />
	<main class="relative z-10 container py-16 flex flex-col justify-center items-center gap-16">
		<div class="flex justify-center items-center gap-16">
			<div class="relative">
				<img
					class="aspect-square w-full object-cover"
					src="https://pbs.twimg.com/media/F5IVJsDWkAAr8P8?format=jpg&name=orig"
					alt={data.release_group}
				/>
			</div>
			<div class="flex flex-col">
				<h1 class="font-bold">{data.release_group}</h1>
				<p class="">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eos! Saepe ipsum culpa
					expedita eius aliquid hic adipisci recusandae quaerat dolorum officiis, fugiat odio odit
					dolorem reprehenderit porro modi maiores!
				</p>
				<div class="flex gap-8 mb-10">
					<button class="px-16 font-bold button-neutral hyper-button">
						<span>buy now</span>
					</button>
					<button class="font-bold button-primary hyper-button">
						<span>add to cart</span>
					</button>
				</div>
				<!-- youtube embed -->
				<iframe
					class="aspect-video w-full"
					
					src="https://www.youtube.com/embed/3sCu-zjVa5c?si=gdfbkqvA15A0h38Z"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>

			</div>
		</div>
	</main>
</div>
