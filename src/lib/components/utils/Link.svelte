<script lang="ts">
	import type { Snippet, SvelteComponent } from 'svelte';

	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	let {
		href,
		class: className,
		icon,
		children,
		...props
	}: {
		href: string;
		class?: string;
		icon?: Snippet;
		children: Snippet;
	} = $props();
</script>

<span>
	<a {href} class="reset group/fancy-link {className}" {...props}>
		<span>{@render children()}</span>

		{#if icon}
			{@render icon()}
		{:else if href.startsWith('http')}
			<ArrowUpRight
				size={16}
				strokeWidth={1.5}
				absoluteStrokeWidth={true}
				class="
                                        inline-block
                                        -mt-2 -ml-0.5
                                        transition-colors duration-default ease-out

                                        opacity-50

                                        group-hover/fancy-link:opacity-100
                                "
			/>
		{:else}
			<ArrowRight
				size={16}
				strokeWidth={1.5}
				absoluteStrokeWidth={true}
				class="
                                        inline-block
                                        -mt-1
                                        -translate-x-0.5
                                        transition-easy duration-default ease-out

                                        opacity-50

                                        group-hover/fancy-link:translate-x-0
                                        group-hover/fancy-link:opacity-100
                                "
			/>
		{/if}
	</a>
</span>

<style lang="scss">
	a {


		:first-child {
			&::after {
				@apply absolute left-0 bottom-0 w-0 h-px;
				@apply content-[''];
				@apply transition-easy duration-default ease-out;

				@apply dark:bg-other-dark-link;
				@apply light:bg-other-light-link;
			}
		}

		@apply relative;
		@apply transition-colors duration-default ease-out;

		@apply dark:text-dark-link;
		@apply light:text-light-link;

		&:hover {
			@apply dark:text-dark-link-hover;
			@apply light:text-light-link-hover;

			:first-child::after {
				@apply w-full;
				@apply dark:bg-other-dark-link-hover;
				@apply light:bg-other-light-link-hover;
			}
		}

		&:active {
			@apply dark:text-dark-link-active;
			@apply light:text-light-link-active;

			:first-child::after {
				@apply dark:bg-other-dark-link-active;
				@apply light:bg-other-light-link-active;
			}
		}
	}
</style>
