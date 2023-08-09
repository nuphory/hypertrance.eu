<script lang="ts">
	import type { Track } from '$src/lib/legacy/metadata/track';

	// Components
	import Artist from './Artist.svelte';
	import LinkList from './LinkList.svelte';

	export let track: Track;
	export let trackno: number;
</script>

<li
	class="transition-[outline] duration-default ease-out flex gap-2 w-full p-2 outline outline-2 outline-transparent hover:outline-white [&_.track\_\_artist]:hover:opacity-100"
>
	<span class="text-right w-8 text-xl">{trackno + 1}.</span>
	<div>
		<!-- Track Title -->
		<div class="inline relative group text-xl">
			{#if track.links}
				<a href={track.links[0].url}>
					{track.title}
				</a>
				<LinkList links={track.links} />
			{:else}
				<span>{track.title}</span>
			{/if}
		</div>
		<div class="track__artist transition-opacity duration-default ease-out opacity-70">
			<!-- Primary Artists -->
			{#if Array.isArray(track.primaryArtists)}
				{#each track.primaryArtists as artist, i}
					{#if i > 0 && i === track.primaryArtists.length - 1}
						<span class="track__artist--primary__combinator">&nbsp;&amp;</span>
					{:else if i !== 0}
						<span class="track__artist--primary__combinator">,</span>
					{/if}
					<Artist {artist} />
				{/each}
			{:else}
				<Artist artist={track.primaryArtists} />
			{/if}
			<!-- Featured Artists -->
			{#if track.featuredArtists}
				<span class="track__artist--featured__open">(feat.&nbsp;</span>
				{#if Array.isArray(track.featuredArtists)}
					{#each track.featuredArtists as artist, i}
						{#if i > 0 && i === track.featuredArtists.length - 1}
							<span class="track__artist--featured__combinator">&nbsp;&amp;</span>
						{:else if i !== 0}
							<span class="track__artist--featured__combinator">,</span>
						{/if}
						<Artist {artist} />
					{/each}
				{:else}
					<Artist artist={track.featuredArtists} />
				{/if}
				<span class="track__artist--featured__close">)</span>
			{/if}
			<!-- Visual Artists -->
			{#if track.visualArtists}
				<span class="track__artist--featured__open"> — visuals by </span>
				{#if Array.isArray(track.visualArtists)}
					{#each track.visualArtists as artist, i}
						{#if i > 0 && i === track.visualArtists.length - 1}
							<span class="track__artist--visual__combinator">&nbsp;&amp;</span>
						{:else if i !== 0}
							<span class="track__artist--visual__combinator">,</span>
						{/if}
						<Artist {artist} />
					{/each}
				{:else}
					<Artist artist={track.visualArtists} />
				{/if}
			{/if}
		</div>
	</div>
</li>
