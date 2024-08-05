<script lang="ts">
	import Button from '$lib/components/utils/Button.svelte';
	import type Collection from '$lib/shopify/zod/catalog/collection/Collection';
	import type { z } from 'zod';

	let { collection }: { collection: z.infer<typeof Collection> } = $props();
</script>

<!-- <main> -->
<!-- <section id="hero" class="flex flex-col gap-10 items-center min-h-screen py-12"> -->
<!--  -->
<!-- album cover and description -->
<!-- <div class="flex justify-center flex-col md:flex-row gap-10  max-w-m md:w-9/12 max-h-m  items-stretch"> -->
<!-- album cover island -->
<!-- <div class="relative bg-dark-primary-island flex items-center justify-center min-w-96 min-h-96 max-w-96 max-h-96"> -->
<!-- <img src="{collection.album?.reference.image?.reference.image.url}" alt="{collection.title} cover" class="w-full h-full object-cover" /> -->
<!-- </div> -->
<!-- album title and description island -->
<!-- <div class="gap-10 flex flex-col flex-grow"> -->
<!-- <div class="bg-dark-primary-island p-7 max-h-64 flex flex-col "> -->
<!-- title and description -->
<!-- <div> -->
<!-- <h2>{collection.title}</h2> -->
<!-- <p>{collection.description} description</p> -->
<!-- </div> -->
<!-- <button class="mt-4 px-6 py-2 mx-auto">buy now</button> -->
<!-- </div> -->
<!--  -->
<!-- </div> -->
<!--  -->
<!-- </div> -->
<!--  -->
<!-- youtube embed -->
<!-- <div class="relative bg-dark-primary-island p-5 w-full max-w-m md:w-9/12"> -->
<!-- <div class="aspect-w-16 aspect-h-9"> -->
<!-- <iframe src="{collection.feature?.value}" title="youtube embed" class="absolute inset-0 w-full h-full" frameborder="0" allowfullscreen></iframe> -->
<!-- </div> -->
<!-- </div> -->
<!--  -->
<!-- </section> -->
<!--  -->
<!--  -->
<!-- </main> -->

<main>
	<section id="hero" class="py-48">
		<div
			data-role="background"
			class="relative flex justify-center items-center [&>*]:w-full overflow-clip"
		>
			{#if collection.banner?.reference?.image}
				<img
					src={collection.banner?.reference?.image.url}
					class="w-full h-full object-cover"
					alt="{collection.title} banner"
				/>
			{:else}
				<video autoplay loop muted>
					{#each collection.banner?.reference.sources as source}
						<source src={source.url} type={source.mimeType} />
					{/each}
				</video>
			{/if}
		</div>
		<div data-role="background" class="bg-other-black/50 backdrop-blur-md"></div>

		<div class="!grid grid-cols-1 lg:grid-cols-2 auto-rows-[fit-content] gap-xl relative">
			<img
				src={collection.image?.url}
				alt="{collection.title} cover"
				class="w-full h-full object-cover border-other-white/25 border-[1px]"
			/>
			<div class="flex flex-col gap-xl justify-center relative">
				<div class="bg-other-black/50 backdrop-blur-md p-xxl border-other-white/25 border-[1px]">
					<h1 class="">{collection.title}</h1>
					{@html collection.descriptionHtml}
				</div>
				<div class="relative flex gap-xs items-start">
					<Button href="#" class="flex-1 border-other-white/25 border-[1px]">buy now</Button>
					<Button href="#" class="border-other-white/25 border-[1px]"></Button>
				</div>
			</div>
		</div>
	</section>
	<section>
		<div
			data-role="background"
			class="!h-48 !bottom-full !inset-auto bg-gradient-to-t from-dark-background to-transparent"
		></div>

		<div class="-mt-24">
			<h2 class="text-center text-display mb-xxl">watch</h2>
			<iframe
				src={collection.feature?.value}
				title="youtube embed"
				class="w-full aspect-[16/9] border-other-white/25 border-[1px]"
				frameborder="0"
				allowfullscreen
			>
			</iframe>
		</div>
	</section>
	<section>
		<div class="bg-other-black/50 p-xxl">
			<h2>tracks</h2>
			<ul>
				{#each collection.album?.reference.media?.references.edges as song_edge}
					<li>
						{song_edge.node.title.value}
					</li>
				{/each}
			</ul>
		</div>
	</section>
</main>

<style>
</style>
