<footer id="footer" class="relative bg-text-primary text-bg-primary py-16">
	<div
		class="container grid grid-cols-1 xs:justify-items-center xs:grid-cols-2 md:grid-cols-3 gap-8"
	>
		<section class="">
			<h3>Sitemap</h3>
			<ul class="[&_*]:text-bg-primary hover:[&_*]:text-bg-primary">
				<li><a data-sveltekit-reload data-sveltekit-preload-data="tap" href="/">Sample Pack</a></li>
				<li><a disabled href="/home">Home</a></li>
				<li><a href="/store/products/hypertrance-samplepack">Store</a></li>
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
				<li><a href="https://store.hypertrance.eu/policies/refund-policy">Refund Policy</a></li>
				<li><a href="https://store.hypertrance.eu/policies/privacy-policy">Privacy Policy</a></li>
				<li>
					<a href="https://store.hypertrance.eu/policies/terms-of-service">Terms of Service</a>
				</li>
			</ul>
		</section>
		<section>
			<h3>Support</h3>
			<ul class="[&_*]:text-bg-primary hover:[&_*]:text-bg-primary">
				<li><a href="https://store.hypertrance.eu/policies/contact-information">Contact Us</a></li>
				<li><a disabled href="#">FAQ</a></li>
				<li><a disabled href="#">Impressum</a></li>
				<li><a href="https://github.com/nuphory/hypertrance/issues">Report an Issue</a></li>
			</ul>
		</section>
		<section
			class="xs:col-span-2 md:col-span-3 flex max-xs:flex-col justify-center items-center gap-4"
		>
			<span>© hypertrance e.U.</span>
			<span class="hidden xs:inline">—</span>
			<span
				>written with ♡ by <a
					class="text-bg-primary"
					href="https://twitter.com/patchstep"
					target="_blank">patchstep</a
				>
				&
				<a class="text-bg-primary" href="https://djkato.net/" target="_blank">djkáťo</a></span
			>
		</section>
	</div>
</footer>

<style lang="scss">
	h3 {
		@apply tracking-widest;
	}
</style>
