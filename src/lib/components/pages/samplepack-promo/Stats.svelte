<script lang="ts">
</script>

<div
	class="stat_main w-full grid grid-cols-2 md:grid-cols-4 grid-flow-col grid-rows-2 md:grid-rows-1 gap-2 my-12"
>
	<div>
		<h3>
			<span>89</span>
			<span>PRESETS</span>
		</h3>
	</div>
	<div>
		<h3>
			<span>656</span>
			<span>SAMPLES</span>
		</h3>
	</div>
	<div>
		<h3>
			<span>763</span>
			<span>MB</span>
		</h3>
	</div>
	<div>
		<h3>
			<span>54</span>
			<span>MIDIs</span>
		</h3>
	</div>
</div>

<style>
	.stat_main > div {
		@apply w-full bg-[var(--color-bg-inverse)] text-[var(--color-content-inverse)];
	}
	.stat_main > div > h3 > span:nth-child(1) {
		@apply w-full block text-5xl font-normal;
		font-family: 'Suissnord';
	}
	h3 {
		@apply text-xl mx-1 my-2 text-center;
		font-family: 'Michroma';
	}
	h3::before {
		content: none;
	}
</style>
