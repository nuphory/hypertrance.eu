<script lang="ts">
	import type { Artist } from '$src/lib/legacy/metadata/artist';

	// Components
	import LinkList from './LinkList.svelte';

	export let artist: Artist;
</script>

<div class="inline relative group">
	{#if artist.links}
		<a href={artist.links[0].url}>
			{artist.name}
		</a><LinkList links={artist.links} />
	{:else}
		<span>
			{artist.name}
		</span>
	{/if}
</div>
