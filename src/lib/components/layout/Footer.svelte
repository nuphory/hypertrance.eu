<footer class="bg-text-primary text-bg-primary py-16">
	<div
		class="container grid grid-cols-1 xs:justify-items-center xs:grid-cols-2 md:grid-cols-3 gap-8"
	>
		<section class="">
			<h3>Sitemap</h3>
			<ul class="[&_*]:text-bg-primary hover:[&_*]:text-bg-primary">
				<li><a data-sveltekit-reload data-sveltekit-preload-data="tap" href="/">Sample Pack</a></li>
				<li><a disabled href="/home">Home</a></li>
				<li><a href="/store/product/hypertrance-samplepack">Store</a></li>
				<li><a disabled href="/catalog">Catalog</a></li>
				<li><a disabled href="/wiki">Wiki</a></li>
			</ul>
		</section>
		<section>
			<h3>Policies</h3>
			<ul class="[&_*]:text-bg-primary hover:[&_*]:text-bg-primary">
				<!-- <li><a href="#">Shipping</a></li> -->
				<!-- <li><a href="#">Customs & Fees</a></li> -->
				<!-- <li><a href="#">Return Policy</a></li> -->
				<li><a disabled href="#">Terms & Conditions</a></li>
				<li><a disabled href="#">Privacy Policy</a></li>
			</ul>
		</section>
		<section>
			<h3>Support</h3>
			<ul class="[&_*]:text-bg-primary hover:[&_*]:text-bg-primary">
				<li><a disabled href="#">Contact Us</a></li>
				<li><a disabled href="#">FAQ</a></li>
				<li><a disabled href="#">Impressum</a></li>
			</ul>
		</section>
		<section
			class="xs:col-span-2 md:col-span-3 flex max-xs:flex-col justify-center items-center gap-4"
		>
			<span>© hypertrance e.U.</span>
			<span class="hidden xs:inline">—</span>
			<span>written with ♡ by patchstep & djkáťo</span>
		</section>
	</div>
</footer>

<style lang="scss">
	h3 {
		@apply tracking-widest;
	}
</style>
