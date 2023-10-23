<script>
	import Dropdown from '$lib/components/utils/Dropdown.svelte';
</script>

<!-- TODO Coming soon -->
<nav class="h-full flex gap-12 {$$restProps.class}">
	<!-- <ul >
		<li><a title="Coming soon" href="/home">Home</a></li>
		<li class="group"><a title="Coming soon" href="/music">Music</a></li>
		<li><a title="Coming soon" href="/club">Club</a></li>
		<li class="group">
			<a title="Coming soon" href="/store/product/hypertrance-samplepack">Sample Packs</a>
		</li>
		<li class="group"><a title="Coming soon" href="/artbooks">Art Books</a></li>
		<li class="group">
			<a title="View all of our products!" href="/store/product/hypertrance-samplepack">Store</a>
		</li>
	</ul> -->

	<ul style="display: contents;">
		<li class="max-xl:hidden">
			<Dropdown>
				<a
					class="
						hover:translate-y-0
						hyper-button
						ring-0 group-hover:ring-1
						group-hover:before:bg-[33%_33%]
						overflow-clip
						py-3 px-4
					"
					slot="title"
					title="Hypertrance Music"
					href="/music"
				>
					<span> Music </span>
				</a>
				<ul
					slot="content"
					class="
						ring-1 ring-button-neutral
						w-max
						bg-primary
						py-3
						[&>.hyper-button]:p-0
						[&>.hyper-button]:ring-0
						hover:[&_a]:translate-y-0
						[&_a]:py-3 [&_a]:px-8
						first:[&>li]:mb-2
					"
				>
					<li class="hyper-button">
						<a title="Hypertrance Worldwide" href="/music/hypertrance-worldwide">
							Hypertrance Worldwide
						</a>
					</li>
					<li class="hyper-button">
						<a title="Hypertrance 2" href="/music/hypertrance-2">Hypertrance 2</a>
					</li>
					<li class="hyper-button">
						<a title="Hypertrance 1" href="/music/hypertrance-1">Hypertrance 1</a>
					</li>
				</ul>
			</Dropdown>
		</li>

		<li>
			<a
				class="
				translate-y-0
				block
				group-hover:before:bg-[33%_33%]
				overflow-clip
				py-3 px-4
			"
				title="Hypertrance Music Club"
				href="/club"
			>
				<span> Club </span>
			</a>
		</li>

		<li class="xl:hidden">
			<Dropdown direction="down" alignment="right">
				<a
					class="
						hover:translate-y-0
						hyper-button
						ring-0 group-hover:ring-1
						group-hover:before:bg-[33%_33%]
						overflow-clip
						py-3 px-4
					"
					slot="title"
					title="Catalog"
					on:click={(event) => event.preventDefault()}
					href="/#"
				>
					<span> Catalog </span>
				</a>
				<ul
					slot="content"
					class="
						ring-1 ring-button-neutral
						w-max
						bg-primary
						py-3
						[&>.hyper-button]:p-0
						[&>.hyper-button]:ring-0
						[&_a]:block
						[&_a]:whitespace-nowrap
						[&_a]:overflow-clip
						hover:[&_a]:translate-y-0
						[&_a]:py-3 [&_a]:px-8
						first:[&>li]:mb-2
					"
				>
					<li class="xl:hidden">
						<Dropdown direction="left" alignment="top">
							<a
								class="
								hover:translate-y-0
								hyper-button
								ring-0 hover:ring-1
								hover:before:bg-[33%_33%]
								overflow-clip
								py-3 px-4
							"
								slot="title"
								title="Hypertrance Music"
								href="/music"
							>
								<span> Music </span>
							</a>
							<ul
								slot="content"
								class="
								ring-1 ring-button-neutral
								w-max
								bg-primary
								py-3
								[&>.hyper-button]:p-0
								[&>.hyper-button]:ring-0
								hover:[&_a]:translate-y-0
								[&_a]:py-3 [&_a]:px-8
								first:[&>li]:mb-2
							"
							>
								<li class="hyper-button">
									<a title="Hypertrance Worldwide" href="/music/hypertrance-worldwide"
										>Hypertrance Worldwide</a
									>
								</li>
								<li class="hyper-button">
									<a title="Hypertrance 2" href="/music/hypertrance-2">Hypertrance 2</a>
								</li>
								<li class="hyper-button">
									<a title="Hypertrance 1" href="/music/hypertrance-1">Hypertrance 1</a>
								</li>
							</ul>
						</Dropdown>
					</li>
					<li class="xl:hidden">
						<Dropdown direction="left" alignment="top">
							<a
								class="
									hover:translate-y-0
									hyper-button
									ring-0 hover:ring-1
									hover:before:bg-[33%_33%]
									overflow-clip
									py-3 px-4
								"
								slot="title"
								title="Hypertrance Sample Packs"
								href="/samplepacks"
							>
								<span> Sample Packs </span>
							</a>
							<ul
								slot="content"
								class="
									ring-1 ring-button-neutral
									w-max
									bg-primary
									py-3
									[&>.hyper-button]:p-0
									[&>.hyper-button]:ring-0
									[&_a]:block
									[&_a]:whitespace-nowrap
									[&_a]:overflow-clip
									hover:[&_a]:translate-y-0
									[&_a]:py-3 [&_a]:px-8
									first:[&>li]:mb-2
								"
							>
								<li class="hyper-button">
									<a title="Hypertrance Sample Pack" href="/samplepacks/hypertrance-samplepack"
										>Hypertrance Samplepack</a
									>
								</li>
							</ul>
						</Dropdown>
					</li>
					<li class="xl:hidden">
						<Dropdown direction="left" alignment="top">
							<a
								class="
									hover:translate-y-0
									hyper-button
									ring-0 hover:ring-1
									hover:before:bg-[33%_33%]
									overflow-clip
									py-3 px-4
								"
								slot="title"
								title="Hypertrance Art Books"
								href="/artbooks"
							>
								<span> Art Books </span>
							</a>
							<ul
								slot="content"
								class="
									ring-1 ring-button-neutral
									w-max
									bg-primary
									py-3
									[&>.hyper-button]:p-0
									[&>.hyper-button]:ring-0
									[&_a]:block
									[&_a]:whitespace-nowrap
									[&_a]:overflow-clip
									hover:[&_a]:translate-y-0
									[&_a]:py-3 [&_a]:px-8
									first:[&>li]:mb-2
								"
							>
								<li class="hyper-button">
									<a title="Hypertrance 2 Art Book" href="/artbooks/hypertrance-2">Hypertrance 2</a>
								</li>
								<li class="hyper-button">
									<a title="Hypertrance 1 Art Book" href="/artbooks/hypertrance-1">Hypertrance 1</a>
								</li>
							</ul>
						</Dropdown>
					</li>
				</ul>
			</Dropdown>
		</li>

		<li class="max-xl:hidden">
			<Dropdown>
				<a
					class="
						hover:translate-y-0
						hyper-button
						ring-0 group-hover:ring-1
						group-hover:before:bg-[33%_33%]
						overflow-clip
						py-3 px-4
					"
					slot="title"
					title="Coming soon"
					href="/samplepacks"
				>
					<span> Sample Packs </span>
				</a>
				<ul
					slot="content"
					class="
						ring-1 ring-button-neutral
						w-max
						bg-primary
						py-3
						[&>.hyper-button]:p-0
						[&>.hyper-button]:ring-0
						[&_a]:block
						[&_a]:whitespace-nowrap
						[&_a]:overflow-clip
						hover:[&_a]:translate-y-0
						[&_a]:py-3 [&_a]:px-8
						first:[&>li]:mb-2
					"
				>
					<li class="hyper-button">
						<a title="Coming soon" href="/samplepacks/hypertrance-samplepack"
							>Hypertrance Samplepack</a
						>
					</li>
				</ul>
			</Dropdown>
		</li>

		<li class="max-xl:hidden">
			<Dropdown>
				<a
					class="
						hover:translate-y-0
						hyper-button
						ring-0 group-hover:ring-1
						group-hover:before:bg-[33%_33%]
						overflow-clip
						py-3 px-4
					"
					slot="title"
					title="Coming soon"
					href="/artbooks"
				>
					<span> Art Books </span>
				</a>
				<ul
					slot="content"
					class="
						ring-1 ring-button-neutral
						w-max
						bg-primary
						py-3
						[&>.hyper-button]:p-0
						[&>.hyper-button]:ring-0
						[&_a]:block
						[&_a]:whitespace-nowrap
						[&_a]:overflow-clip
						hover:[&_a]:translate-y-0
						[&_a]:py-3 [&_a]:px-8
						first:[&>li]:mb-2
					"
				>
					<li class="hyper-button">
						<a title="Coming soon" href="/artbooks/hypertrance-1">Hypertrance 1</a>
					</li>
					<li class="hyper-button">
						<a title="Coming soon" href="/artbooks/hypertrance-2">Hypertrance 2</a>
					</li>
				</ul>
			</Dropdown>
		</li>

		<li>
			<Dropdown>
				<a
					class="
						hover:translate-y-0
						hyper-button
						ring-0 group-hover:ring-1
						group-hover:before:bg-[33%_33%]
						overflow-clip
						py-3 px-4
					"
					slot="title"
					title="Coming soon"
					href="/artbooks"
				>
					<span> Store </span>
				</a>
				<ul
					slot="content"
					class="
						ring-1 ring-button-neutral
						w-max
						bg-primary
						py-3
						[&>.hyper-button]:p-0
						[&>.hyper-button]:ring-0
						[&_a]:block
						[&_a]:whitespace-nowrap
						[&_a]:overflow-clip
						hover:[&_a]:translate-y-0
						[&_a]:py-3 [&_a]:px-8
						first:[&>li]:mb-2
					"
				>
					<li class="hyper-button">
						<a title="Coming soon" href="/artbooks/hypertrance-1">Music</a>
					</li>
					<li class="hyper-button">
						<a title="Coming soon" href="/artbooks/hypertrance-2">Sample Packs</a>
					</li>
					<li class="hyper-button">
						<a title="Coming soon" href="/artbooks/hypertrance-2">Art Books</a>
					</li>
					<li class="hyper-button">
						<a title="Coming soon" href="/artbooks/hypertrance-2"> All Products </a>
					</li>
				</ul>
			</Dropdown>
		</li>
	</ul>
</nav>
