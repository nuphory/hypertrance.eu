<script lang="ts">
	import type { PageServerData } from "./$types";

        let { data }: {
                data: PageServerData;
        } = $props();

        console.log(data);

        const { collection } = data;
</script>

<h1>{collection.title}</h1>
