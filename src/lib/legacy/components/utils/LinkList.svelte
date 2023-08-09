<script lang="ts">
	import type { Link } from '$src/lib/legacy/metadata/link';

	export let links: Link[];
</script>

{#if links.length > 1}
	<ul
		class="
			transition-quick duration-default delay-500 ease-in-out
			absolute flex items-center gap-2
			top-0 left-0
			-translate-y-full

			w-max

			max-w-0 group-hover:max-w-5xl
			max-h-0 group-hover:max-h-10
			p-0 group-hover:p-2

			rounded-lg
			overflow-clip
			bg-black bg-opacity-50 backdrop-blur
			ring-2 ring-white
			opacity-0 group-hover:opacity-100
			{$$restProps.class}
		"
	>
		{#each links as link}
			<li class="relative aspect-square h-6">
				<a href={link.url} target="_blank">
					<img
						class="block aspect-square h-6 w-6"
						src={link.iconSrc}
						title={link.name}
						alt={link.name}
					/>
				</a>
			</li>
			{#if link.priority === 0}
				<li class="block w-px h-6 bg-white" />
			{/if}
		{/each}
	</ul>
{/if}
