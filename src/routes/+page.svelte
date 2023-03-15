<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Assets
	import summaryImgSrc from '$lib/assets/img/summary.png?jpg&w=800';
	import backgroundImgSrcSet from '$lib/assets/img/hypertrance-2-background-still.png?jpg&srcset&w=576;640;768;1028;1280;1920;2560';
	import backgroundVideoSrc from '$lib/assets/vid/hypertrance-2-background-1440p9M.mp4';
	import tracklist from '$lib/assets/tracklist';
	import { goto } from '$app/navigation';
	import { description, name, tagline, url } from '$src/lib/identity';

	onMount(() => {
		if (!browser) return;
		document.documentElement.style.setProperty('--page-height', `${document.body.clientHeight}px`);

		document.querySelectorAll('iframe').forEach((el) => {
			el.setAttribute('src', el.dataset.src?.toString());
			setTimeout(() => {
				el.classList.remove('opacity-0');
			}, 200);
		});

		document.body.addEventListener('copy', () => {
			document.querySelectorAll("[aria-hidden='true']").forEach((el) => {
				el.classList.add('hidden');
				setTimeout(() => {
					el.classList.remove('hidden');
				});
			});
		});
	});
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="title" content="{name} — {tagline}" />

	<meta name="description" content={description} />

	<link rel="canonical" href={url} />

	<meta name="robots" content="index, follow" />

	<meta property="og:title" content="{name} — {tagline}" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{url}{summaryImgSrc}" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@{name}" />
	<meta name="twitter:creator" content="@{name}" />
	<meta name="twitter:title" content="{name} — {tagline}" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{url}{summaryImgSrc}" />
</svelte:head>

<main>
	<!-- Background -->
	<figure
                aria-level={2}
		class="transition-none absolute -z-10 top-0 origin-top -translate-y-[calc(var(--scroll-y)*-0.5)] min-w-full min-h-[75%] pointer-events-none"
	>
		<img
			srcset={backgroundImgSrcSet}
			class="transition-none absolute object-cover top-0 left-half -translate-x-half landscape:min-w-full min-h-full"
			alt="Background"
			loading="lazy"
		/>
		<!-- Video -->
		<video
			class="transition-none absolute object-cover top-0 left-half -translate-x-half landscape:min-w-full min-h-full"
			autoplay
			muted
			loop
		>
			<source src={backgroundVideoSrc} type="video/mp4" />
		</video>
		<!-- YouTube -->
		<!-- <iframe
			class="absolute left-half -translate-x-half max-w-none min-h-full"
			title="Background Video"
			frameborder="0"
			src="https://www.youtube-nocookie.com/embed/nONsDtHZk5Y?autoplay=1&controls=0&showinfo=0&loop&autohide=1&mute=1&start=9"
		/> -->
	</figure>

	<section class="max-w-none font-comsat-navy px-0" id="hero">
		<div class="mt-24 perspective-40 text-white uppercase ">
			<div class="origin-bottom rotate-x-6 sm:-mt-14 md:-mt-[5rem] lg:-mt-[7rem] ">
				<div class="container relative mx-auto px-0 font-extralight">
					<span
						class="cutout block translate-y-[2.5%] -mr-8 lg:-mr-4 text-[16rem] md:text-[24rem] lg:text-[32rem] leading-[16rem] md:leading-[24rem] lg:leading-[32rem] tracking-[3rem] md:tracking-[4rem] lg:tracking-[4.5rem] text-right text-white [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:1px] select-none pointer-events-none"
						>02</span
					>
				</div>
				<div
					class="container relative flex justify-between items-start max-w-none mx-0 px-0 -mt-[9.5rem] mb-[9.5rem] md:-mt-[14rem] md:mb-[14rem] lg:-mt-[19rem] lg:mb-[19rem]"
				>
					<div
						class="grow h-[0.2rem] md:h-[0.3rem] lg:h-[0.4rem] -ml-16 md:-ml-32 lg:-ml-[32rem] -mr-4 md:-mr-8 bg-white"
					/>
					<div class="container px-0">
						<h1 class="block w-fit ml-auto -mt-[0.45rem] md:-mt-[0.65rem] lg:-mt-[1rem] mr-[1rem] md:mr-[1.75rem] lg:mr-[2.5rem] text-[0.75rem] md:text-[1rem] lg:text-[1.5rem] leading-[1.5rem] md:leading-[2rem] lg:leading-[3rem] tracking-[1.125rem] md:tracking-[1.75rem] lg:tracking-[2.2rem] text-left text-white before:content-['']"
						>
							<span class="inline select-none pointer-events-none" aria-hidden="true">[</span><span
								class="inline select-text"
								role="heading"
								aria-level={1}
								>HYPERTRANCE<span class="inline -tracking-[0.5rem]">&nbsp;</span>2</span
							><span class="inline select-none pointer-events-none" aria-hidden="true"
								><br />[.</span
							>
						</h1>
					</div>
					<div
						class="grow h-[0.4rem] md:h-[0.6rem] lg:h-[0.8rem] -ml-4 md:-ml-8 -mr-16 md:-mr-32 lg:-mr-[32rem] bg-white"
					/>
				</div>
				<ul
					class="hidden container sm:flex justify-between xs:justify-end items-start gap-10 md:gap-[4.5rem] -mt-16 lg:-mt-32 mb-6 text-xs md:text-base [&>li]:md:w-48"
				>
					<li class="max-xs:flex-1">
						<button
							class="w-full mr-4 sm:mr-0 md:mr-4  button-neutral tracking-[0.2rem] uppercase backdrop-blur shadow-lg shadow-hyperblue-900/75 bg-black/50"
							on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
						>
							<span>Discord</span>
						</button>
					</li>
					<li class="max-xs:flex-1 md:mr-4 lg:mr-12 ">
						<button
							class=" w-full mr-4 sm:mr-0 md:mr-4 button-primary tracking-[0.2rem] uppercase backdrop-blur shadow-lg shadow-hyperblue-900/75 bg-black/50"
							on:click={() => window.open('http://nuphory.bandcamp.com', '_blank')}
						>
							<span>Buy Now</span>
						</button>
						<span class="block -mb-16 mt-1 text-xs text-right font-montserrat lowercase"
							>or <a href="/">stream elsewhere</a></span
						>
					</li>
				</ul>
				<div class="container flex md:justify-center gap-2 lg:-mt-20 mb-">
					<div
						class="flex-1 md:basis-1/3 sm:scale-50 origin-top-right text-right text-[3rem] leading-[2.85rem] select-none"
					>
						<span aria-hidden="true">]</span>
					</div>
					<div
						class="basis-72 sm:basis-72 md:basis-2/3 sm:scale-50 origin-top-left text-[0.75rem]  uppercase tracking-[0.2rem] select-none pointer-events-none"
					>
						<span class="block w-fit select-text pointer-events-auto">Brought to you</span>
						<span class="block w-fit select-text pointer-events-auto">by various artists.</span>
						<span class="select-none pointer-events-none" aria-hidden="true"><br />2K3.R</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div id="content" class="from-neutral via-neutral bg-gradient-to-t">
		<article class="container sm:-mb-24 grid lg:grid-cols-2 gap-8 auto-rows-max">
			<section class="p-0 -mb-8 lg:col-start-2">
				<iframe
					allow="fullscreen"
					allowfullscreen
					class="transition-opacity duration-default ease-out aspect-video opacity-0"
					frameborder="0"
					title="Hypertrance 2"
					data-src="https://www.youtube-nocookie.com/embed/nONsDtHZk5Y?&controls=1&showinfo=1&start=9"
				/>
			</section>
			<section class="lg:row-start-1 row-span-2" id="about">
				<h2 aria-level={2} >what is hypertrance?</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam placeat hic quisquam
					culpa omnis non dicta sequi, dolore possimus, eligendi officiis nostrum. Placeat provident
					deleniti culpa totam recusandae, voluptates aperiam!
				</p>
				<p>
					Quae ducimus a dolore ex molestiae cupiditate ipsum fuga tempore, quam quasi voluptate,
					perferendis et enim nam fugit eius harum! Non aspernatur explicabo tenetur similique
					obcaecati. Error rerum sunt ipsa.
				</p>
				<p>
					Quaerat illo repudiandae sit placeat dolor. Quos, magni consequatur, autem quo facere
					assumenda dolorem ducimus modi illo voluptate ad praesentium repudiandae, esse aperiam
					labore accusamus consequuntur nostrum. Temporibus, molestias pariatur!
				</p>
				<p>
					Natus doloribus eius fugit quis expedita nihil hic excepturi quam dolorem aut quos numquam
					sint explicabo animi, aspernatur commodi amet quia, repellendus similique quidem? Sapiente
					quasi quos accusamus quia praesentium!
				</p>
				<p>
					Vero sit omnis molestiae dolore temporibus! Animi praesentium eligendi veritatis, eaque
					voluptatem consequuntur laborum in laboriosam saepe veniam neque itaque officiis rerum
					est? Sapiente tempore dolores obcaecati nobis suscipit odio!
				</p>
			</section>
			<section class="" id="tracklist">
				<h2>tracklist</h2>
				<ol class="list-decimal max-w-lg">
					{#each tracklist as track}
						<li class="ml-8">
							<div class="flex gap-1">
								<div class="tracklist__artists flex-1 text-left">
									{#each track.artists as artist, i}
										{#if artist}
											{#if i !== 0}
												<span class="tracklist__combinator">&nbsp&</span>
											{/if}
											{#if artist.links.length > 0}
												<a
													class="tracklist__artist"
													href={(
														artist.links.find((link) => link.name === 'bandcamp') ??
														artist.links.find((link) => link.name === 'spotify') ??
														artist.links.find((link) => link.name === 'soundcloud') ??
														artist.links[0]
													).url}
												>
													{artist.name}
												</a>
											{:else}
												<span class="tracklist__artist">{artist.name}</span>
											{/if}
										{/if}
									{/each}
								</div>
								<span class="tracklist__separator">-</span>
								<span class="tracklist__title flex-1">
									{#if track.links.length > 0}
										<a
											class="tracklist__artist"
											href={(
												track.links.find((link) => link.name === 'bandcamp') ??
												track.links.find((link) => link.name === 'spotify') ??
												track.links.find((link) => link.name === 'soundcloud') ??
												track.links[0]
											).url}
										>
											{track.title}
										</a>
									{:else}
										<span class="tracklist__artist">{track.title}</span>
									{/if}
								</span>
							</div>
						</li>
					{/each}
				</ol>
			</section>
		</article>
	</div>
	<section
		class="sticky bottom-0 max-w-none sm:h-0 sm:p-0 sm:m-0 sm:translate-y-full overflow-clip font-comsat-navy"
	>
		<ul class="container flex justify-between xs:justify-end items-start gap-8">
			<li class="max-xs:flex-1">
				<button
					class=" w-full mr-4 sm:mr-0 md:mr-4  button-neutral tracking-[0.2rem] uppercase backdrop-blur backdrop-brightness-95"
					on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
				>
					<span>Discord</span>
				</button>
			</li>
			<li class="max-xs:flex-1 ">
				<button
					class=" w-full mr-4 sm:mr-0 md:mr-4 button-primary tracking-[0.2rem] uppercase backdrop-blur backdrop-brightness-95"
					on:click={() => window.open('http://nuphory.bandcamp.com', '_blank')}
				>
					<span>Buy Now</span>
				</button>
				<span class="block -mb-16 mt-1 text-xs text-right font-montserrat lowercase"
					>or <a href="/">stream elsewhere</a></span
				>
			</li>
		</ul>
	</section>
</main>

<style lang="scss">
	span.cutout {
		clip-path: polygon(100% 33%, 0 33%, 0 0, 100% 0%, 100% 100%, 0 100%, 0 60%, 100% 60%);
	}
</style>
