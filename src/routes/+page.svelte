<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import { page } from '$app/stores';
    import Search from '$lib/components/Search.svelte';
    import FontCard from '$lib/components/ui/FontCard.svelte';
    import { onMount } from 'svelte';
    import { fontsLoaded } from '$lib';
    import type { PageData } from './$types';
    import { queryParam } from 'sveltekit-search-params';

    let query = queryParam('query');
    let style = queryParam('style');
    export let data: PageData;

    let filteredFonts = data.randomFonts;

    $: filteredFonts = data.randomFonts.filter((font) => {
        if (!$query || $query === '') return font;
        if (
            font.alternativeOne.title?.toLowerCase().includes($query.toLowerCase()) ||
            font.alternativeTwo.title?.toLowerCase().includes($query.toLowerCase()) ||
            font.alternativeThree.title?.toLowerCase().includes($query.toLowerCase()) ||
            font.main.title?.toLowerCase().includes($query.toLowerCase())
        ) {
            $style = 'all';
            return font;
        }
    });
    $: filteredFonts = data.randomFonts.filter((font) => {
        if (!$style || $style === 'all') return font;
        if (font.main.type?.toLowerCase() === $style.toLowerCase()) return font;
    });

    onMount(async () => {
        try {
            // url.searchParams.set('font', 'Astonpoliz');
            // url.searchParams.set('name', 'Astonpoliz');
            // console.log('url - ', url);
            const styleElement = document.createElement('style');
            styleElement.textContent = await data.cssText;
            document.head.appendChild(styleElement);
        } catch (error) {
            console.error('Error fetching the CSS file:', error);
        }
        document.fonts.addEventListener('loadingdone', function () {
            $fontsLoaded = true;
        });
        setTimeout(() => {
            $fontsLoaded = true;
        }, 3000);
    });

    $: if ($fontsLoaded) {
        console.log('All fonts in the loading phase have loaded');
    }
</script>

<main class="p-4 md:p-8 lg:p-12">
    <Hero />
    <Search />
    <div
        class="relative grid w-full grid-cols-1 gap-4 overflow-hidden
		sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
    >
        {#each filteredFonts as font}
            <FontCard {font} />
        {/each}
    </div>
</main>
