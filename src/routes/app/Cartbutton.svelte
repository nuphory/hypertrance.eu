<script lang="ts">
	import Carticon from './Carticon.svelte';

	let itemCount: number = 0;
</script>

<button class="p-3 whitespace-nowrap backdrop-blur shadow-lg button-neutral">
	<Carticon
		classList="
                        inline-block
                        transition-[fill,margin] duration-[var(--duration)] ease-out
                        aspect-square h-[1.25em] 
                        mr-2
                        fill-text-neutral
                        opacity-100 
                "
		{itemCount}
	/>
	<span>{String(itemCount).padStart(3, '0')}</span>
</button>
