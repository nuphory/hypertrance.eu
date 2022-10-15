<script lang="ts">
	import {siteName, siteDescription, tagLine} from "./+layout";
	import './styles.css';
</script>

<svelte:head>
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="194x194" href="/assets/favicon/favicon-194x194.png" />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/assets/favicon/android-chrome-192x192.png"
  />
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
  <link rel="manifest" href="/assets/favicon/site.webmanifest" />
  <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#272d3b" />
  <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
  <meta name="apple-mobile-web-app-title" content="nuphory" />
  <meta name="application-name" content="nuphory" />
  <meta name="msapplication-TileColor" content="#272d3b" />
  <meta name="msapplication-TileImage" content="/assets/favicon/mstile-144x144.png" />
  <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
  <meta name="theme-color" content="#fffaf7" />

  <meta property="og:site_name" content={siteName} />
</svelte:head>


<div class="app">
	<header />
	<main>
		<slot />
	</main>
	<footer />
</div>


<style>
</style>
