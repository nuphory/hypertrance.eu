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
	import { description, name, tagline, url } from '$lib/identity';
	import HypertranceTwo from '$src/lib/components/HypertranceTwo.svelte';

	let isHeroOpen = false;

	function toggleHero(event: Event) {
		event.preventDefault();

		if (isHeroOpen) {
			history.pushState(null, '', '/');
		} else {
			history.pushState(null, '', '/hypertrance-2');
			document.querySelectorAll('iframe').forEach((el) => {
				el.setAttribute('src', `${el.dataset.src}`);
				setTimeout(async () => {
					el.classList.remove('opacity-0');
				}, 200);
			});
		}

		isHeroOpen = !isHeroOpen;
	}

	onMount(async () => {
		if (!browser) return;
		document.documentElement.style.setProperty('--page-height', `${document.body.clientHeight}px`);

		setTimeout(async () => {
			document.querySelectorAll('iframe').forEach((el) => {
				el.setAttribute('src', `${el.dataset.src}`);
				setTimeout(async () => {
					el.classList.remove('opacity-0');
				}, 200);
			});
			document.querySelectorAll('video').forEach((el: HTMLVideoElement) => {
				el.play();
				setTimeout(async () => {
					el.classList.remove('opacity-0');
				}, 200);
			});
		}, 0);

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
	<section
		id="hero"
		class="relative top-0 w-full {isHeroOpen
			? 'h-[100lvh] -mb-[100lvh]'
			: 'h-[50lvh] -mb-[50lvh]'} font-comsat-navy pointer-events-none"
	>
		<a
			href="/hypertrance-2"
			on:click={toggleHero}
			class="mix-blend-normal absolute origin-top -translate-z-40 scale-[200%] [&>*]:hover:scale-[102.5%] h-full w-full overflow-clip [&>*]:pointer-events-none pointer-events-auto"
		>
			<img
				srcset={backgroundImgSrcSet}
				class="transition-quick duration-default ease-out absolute top-0 origin-top min-h-full min-w-full object-cover"
				alt="Background"
				loading="lazy"
			/>
			<!-- Video -->
			<video
				class="transition-quick duration-default ease-out absolute top-0 origin-top min-h-full min-w-full opacity-0 object-cover"
				preload="none"
				muted
				loop
			>
				<source src={backgroundVideoSrc} class="" type="video/mp4" />
			</video>
		</a>
		<div
			id="background"
			class="absolute top-0 h-full w-full origin-top -translate-z-40 scale-[200%] pointer-events-none"
		>
			<div class="h-full w-full bg-gradient-to-t from-neutral via-transparent" />
			<div class="h-half w-full bg-neutral" />
		</div>
		<div
			class="relative transition-sizing duration-default ease-out perspective-origin-bottom perspective-40 transform-style-3d origin-bottom translate-y-40 -translate-z-20 scale-150 h-48 text-white pointer-events-none"
		>
			<div class="origin-bottom rotate-x-[3deg]">
				<div
					class="container relative flex justify-end select-none pointer-events-none"
					aria-hidden="true"
				>
					<span
						class="
                                                        inline-block
                                                        origin-top-right scale-50
        
                                                        [-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:2px]
                                                        font-extralight
                                                        text-[32rem] md:text-[48rem] lg:text-[64rem]
                                                        leading-[32rem] md:leading-[48rem] lg:leading-[64rem]
        
                                                        cutout
                                                "
					>
						02
					</span>
				</div>
				<div
					class="
                                                relative flex justify-between 
                                                -mt-[25.5rem] md:-mt-[38.5rem] lg:-mt-[51rem]
                                                uppercase 
                                        "
					aria-label="hypertrance 2"
				>
					<div class="grow -ml-96 -mr-4 h-1 md:h-[0.325rem] lg:h-[0.45rem] bg-white" />
					<div
						class="
                                                        container relative
                                                        flex justify-end
                                                        text-left
                                                "
					>
						<h1
							class="
                                                                w-min
                                                                origin-top-right scale-50
                                                                -mr-1 -mt-2 md:-mt-[0.65rem] lg:-mt-4 -mb-14 md:-mb-[4.65rem] lg:-mb-28
                                                                text-[1.5rem] md:text-[2rem] lg:text-[3rem] 
                                                                leading-[3rem] md:leading-[4rem] lg:leading-[6rem] 
                                                                tracking-[1.825rem] md:tracking-[2.85rem] lg:tracking-[3.6rem]
                                                                before:content-[''] pointer-events-auto
                                                        "
						>
							<span aria-hidden="true" class="select-none pointer-events-none">[</span
							>HYPERTRANCE<span class="-tracking-[1rem]">&nbsp;</span>2
							<span aria-hidden="true" class="block select-none pointer-events-none">[.</span>
						</h1>
					</div>
					<div class="grow -ml-4 -mr-96 h-2 md:h-[0.65rem] lg:h-[0.9rem] bg-white" />
				</div>
				<ul class="z-50 container hidden md:flex justify-end gap-12 mt-36 lg:mt-48 [&>li]:w-48">
					<li class="order-2 mr-5 ">
						<button
							class="w-full tracking-[0.2rem] uppercase backdrop-blur shadow-lg button-primary"
							on:click={() => window.open('http://nuphory.bandcamp.com', '_blank')}
						>
							<span>Buy Now</span>
						</button>
						<span class="block -mb-16 mt-1 text-[0.5rem] leading-[0.5rem] text-right font-yeysk tracking-widest lowercase"
							>or <a href="/">stream elsewhere</a></span
						>
					</li>
					<li class="order-1 ">
						<button
							class="w-full tracking-[0.2rem] uppercase backdrop-blur shadow-lg button-neutral "
							on:click={toggleHero}
						>
							<span>Watch</span>
						</button>
					</li>
				</ul>
			</div>
			<div
				class="container relative flex justify-center gap-2 origin-bottom -translate-z-20 scale-150 rotate-x-[3deg] mt-64 md:mt-32 lg:mt-72 tracking-widest uppercase opacity-50 "
				aria-label="brought to you by various artists"
			>
				<span
					aria-hidden="true"
					class="grow origin-top-right scale-50 text-right font-extralight text-[6rem] leading-[5rem] select-none pointer-events-none"
					>]</span
				>
				<span
					class="basis-[16.25rem] md:basis-[48rem] lg:basis-[48rem] origin-top-left scale-50 text-[1rem]"
				>
					Brought to you<br />by various artists
					<span aria-hidden="true" class="block select-none pointer-events-none"><br />2K3.R</span>
				</span>
			</div>
		</div>
	</section>

	<HypertranceTwo class="{isHeroOpen ? 'max-h-[100rem]' : 'max-h-0'}" />

	<section id="about" class="transition-quick duration-default ease-out container">
		<h2>what is hypertrance?</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad provident voluptatum.
			Fuga ipsam quas excepturi maiores maxime mollitia? Doloribus nisi consequatur quos sequi iusto
			vero consequuntur neque harum. Ipsa.
		</p>
		<h3>what do we do?</h3>
		<p>
			Aut magnam nam, rerum vitae a commodi officia aspernatur debitis quo veritatis laborum quod
			unde, sint eius inventore qui corrupti, voluptatum quae. A excepturi alias laudantium, atque
			impedit incidunt nesciunt.
		</p>
		<p>
			Veniam, magnam molestias. Exercitationem asperiores eveniet quia qui blanditiis molestias iure
			sed reprehenderit veniam! Sit sint error distinctio iste voluptatem nisi quisquam explicabo
			quam eos repudiandae alias amet, minus quo?
		</p>
		<p>
			Suscipit sapiente labore optio, possimus voluptas quae esse? Sed possimus earum, rem
			voluptatum culpa corrupti quod aut nostrum in, temporibus, soluta a quo? Accusantium
			repellendus qui ad optio rem? Tenetur?
		</p>
		<p>
			Modi architecto impedit expedita sit, quam, neque, magni fugiat deleniti dolores aspernatur
			dicta voluptatem officia quisquam nemo assumenda? Obcaecati dolores velit pariatur culpa
			minus? Pariatur, iure perferendis. Totam, vitae dolorum.
		</p>
		<button
			class="w-full button-neutral mt-8"
			on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
		>
			<span>Join our Discord</span>
		</button>
	</section>
	<section
		class="sticky bottom-0 md:h-0 md:!p-0 md:m-0 md:translate-y-full overflow-clip font-comsat-navy"
	>
		<ul class="container flex justify-evenly items-start gap-8">
			<li class="flex-1 order-2">
				<button
					class="w-full tracking-[0.2rem] uppercase backdrop-blur shadow-lg button-primary"
					on:click={() => window.open('http://nuphory.bandcamp.com', '_blank')}
				>
					<span>Buy Now</span>
				</button>
				<span class="block -mb-16 mt-1 text-[0.5rem] leading-[0.5rem] text-right font-yeysk tracking-widest lowercase"
					>or <a href="/">stream elsewhere</a></span
				>
			</li>
			<li class="flex-1 order-1">
				<button
					class="w-full tracking-[0.2rem] uppercase backdrop-blur shadow-lg button-neutral "
					on:click={toggleHero}
				>
					<span>Watch</span>
				</button>
			</li>
		</ul>
	</section>
</main>

<style lang="scss">
	span.cutout {
		clip-path: polygon(100% 33%, 0 33%, 0 0, 100% 0%, 100% 100%, 0 100%, 0 60%, 100% 60%);
	}
</style>
