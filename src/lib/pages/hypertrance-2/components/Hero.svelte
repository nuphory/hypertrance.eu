<script lang="ts">
	// Assets
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	import backgroundImgSrcSet from '$lib/assets/img/hypertrance-2-background-still.png?jpg&srcset&h=360;667;720;768;800;1024;1050;1080;1200;1440;1600;2160';
	import backgroundVideoSrc from '$lib/assets/vid/hypertrance-2-background-1440p9M.mp4';
</script>

<section id="hero" class={$$restProps.class}>
	<figure
		class="absolute origin-top -translate-z-40 scale-[200%] min-h-screen-small w-full overflow-clip [&>*]:pointer-events-none pointer-events-auto"
	>
		<img
			srcset={backgroundImgSrcSet}
			class="absolute top-0 min-h-full min-w-full object-cover"
			alt="Background"
		/>
		<!-- Video -->
		<video
			class="absolute top-0 min-h-full min-w-full transition-opacity duration-default ease-out opacity-0 object-cover"
			preload="none"
			playsinline
			muted
			loop
		>
			<source src={backgroundVideoSrc} class="" type="video/mp4" />
		</video>
	</figure>
	<div
		id="background"
		class="absolute top-0 h-screen-dynamic w-full origin-top -translate-z-40 scale-[200%] pointer-events-none"
	>
		<div class="h-screen-dynamic w-full bg-gradient-to-t from-neutral via-transparent" />
		<div class="min-h-[25dvh] w-full bg-neutral" />
	</div>
	<div
		class="relative transition-sizing duration-default ease-out perspective-origin-bottom perspective-40 transform-style-3d origin-bottom translate-y-40 -translate-z-20 scale-150 h-48 text-white pointer-events-auto"
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
							before:content-['']
						"
					>
						<span aria-hidden="true" class="select-none pointer-events-none">[</span
						>HYPERTRANCE<span class="-tracking-[1rem]">&nbsp;</span>2
						<span aria-hidden="true" class="block select-none pointer-events-none">[.</span>
					</h1>
				</div>
				<div class="grow -ml-4 -mr-96 h-2 md:h-[0.65rem] lg:h-[0.9rem] bg-white" />
			</div>
			<ul
				class="z-50 container hidden md:flex justify-end gap-12 mt-36 lg:mt-48 [&>li]:w-48 list-none"
			>
				<li class="order-2 mr-5 ">
					<button
						class="w-full backdrop-blur shadow-lg  button-primary"
						on:click={() => window.open('http://hypertrance.bandcamp.com', '_blank')}
						on:auxclick={() => window.open('http://hypertrance.bandcamp.com', '_blank')}
					>
						<span>Buy Now</span>
					</button>
					<span
						class="block -mb-16 mt-1 font-inter text-[0.75rem] leading-[0.75rem] text-right tracking-widest lowercase"
						>or <span class="group relative inline-block transform-style-3d"
							><a href="https://fanlink.to/hypertrance2" target="_blank">stream elsewhere</a></span
						></span
					>
				</li>
				<li class="order-1 ">
					<button
						class="w-full backdrop-blur shadow-lg button-neutral "
						on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
						on:auxclick={() => window.open('http://discord.gg/673AfPB', '_blank')}
					>
						<span>Discord</span>
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

<style lang="scss">
	span.cutout {
		clip-path: polygon(100% 33%, 0 33%, 0 0, 100% 0%, 100% 100%, 0 100%, 0 60%, 100% 60%);
	}
</style>
