<script lang="ts">
	import type Collection from '$lib/shopify/zod/catalog/collection/Collection';
	import type { z } from 'zod';

	let { collection }: { collection: z.infer<typeof Collection> } = $props();
</script>
		
<main>
	<section id="hero" class="flex flex-col gap-10 items-center min-h-screen py-12">

		<!-- album cover and description -->
		<div class="flex justify-center flex-col md:flex-row gap-10  max-w-m md:w-9/12 max-h-m  items-stretch">
			<!-- album cover island -->
			<div class="relative bg-dark-primary-island flex items-center justify-center min-w-96 min-h-96 max-w-96 max-h-96">
				<img src="{collection.album?.reference.image?.reference.image.url}" alt="{collection.title} cover" class="w-full h-full object-cover" />
			</div>
			<!-- album title and description island -->
			<div class="gap-10 flex flex-col flex-grow">
				<div class="bg-dark-primary-island p-7 max-h-64 flex flex-col ">
					<!-- title and description -->
					<div>
						<h2>{collection.title}</h2>
						<p>{collection.description} description</p>
					</div>
					<button class="mt-4 px-6 py-2 mx-auto">buy now</button>
				</div>
				
			</div>
			
		</div>

	<!-- youtube embed -->
	<div class="relative bg-dark-primary-island p-5 w-full max-w-m md:w-9/12">
		<div class="aspect-w-16 aspect-h-9">
			<iframe src="{collection.feature?.value}" title="youtube embed" class="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>

	</section>

	 
</main>

<style>
</style>
