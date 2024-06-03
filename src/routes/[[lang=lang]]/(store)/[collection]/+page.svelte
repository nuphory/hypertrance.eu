<script lang="ts">
        import type { PageData } from './$types';

        let { data }: { data: PageData } = $props();

        const { collection } = data;
</script>

<h1>{collection.title}</h1>
