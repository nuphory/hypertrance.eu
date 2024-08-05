<script lang="ts">
	import type { Snippet } from 'svelte';
	import Link from './Link.svelte';

	let {
		href,
		class: className,
		icon,
		children,
		...props
	}: {
		href?: string;
		class?: string;
		icon?: Snippet;
		children?: Snippet;
	} = $props();
</script>

{#if href}
	<Link {href} class="reset group/fancy-button p-8 bg-other-black/50 backdrop-blur-md {className}" {icon} {children} {...props} />
{:else}{/if}

<style>

</style>
