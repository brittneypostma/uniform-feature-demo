<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import { getCompositionData } from '$lib/helper';
	export let composition;

	let data = [];

	// getCompositionData(composition);
	console.log(composition);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="welcome">
		<picture>
			<source srcset="svelte-welcome.webp" type="image/webp" />
			<img src="svelte-welcome.png" alt="Welcome" />
		</picture>
	</div>
	<h1>{composition.slots.content[0].slots.pz[0].parameters.title.value}</h1>

	<pre>{JSON.stringify(composition, null, 2)}</pre>

	<Counter />
</section>

<style>
	pre {
		white-space: pre-wrap;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		margin: 2rem 0 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
