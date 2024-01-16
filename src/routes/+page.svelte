<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { page } from '$app/stores';
	import Search from '$lib/components/Search.svelte';
	import fonts from '$lib/fonts';
	import FontCard from '$lib/components/ui/FontCard.svelte';

	$: style = $page.url.searchParams.get('style') || 'all';
</script>

<main class="p-4 md:p-8 lg:p-12">
	<Hero />
	<Search bind:style />
	<div
		class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3
		lg:gap-8"
	>
		{#each fonts as font}
			<FontCard {font} />
		{/each}
	</div>
</main>
