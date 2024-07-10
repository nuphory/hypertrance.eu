<script lang="ts">
	import type { PageData } from './$types';

	import DefaultCollectionComponent from './Default.svelte';
	import AlbumCollectionComponent from './Album.svelte';
	import ArtbookCollectionComponent from './Artbook.svelte';

	let { data }: { data: PageData } = $props();

        const { collection } = data;
        const {type} = collection;

        const components: Record<string, any> = {
                album: AlbumCollectionComponent,
                artbook: ArtbookCollectionComponent,
                collection: DefaultCollectionComponent
        }

        const CollectionComponent = components[type?.value ?? 'collection'];

</script>

<CollectionComponent {collection} />
