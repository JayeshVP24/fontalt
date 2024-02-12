<script lang="ts">
    import Hero from '$lib/components/Hero.svelte';
    import { page } from '$app/stores';
    import Search from '$lib/components/Search.svelte';
    import { fly } from 'svelte/transition';
    import fonts from '$lib/fonts';
    import FontCard from '$lib/components/ui/FontCard.svelte';
    import { onMount } from 'svelte';
    import { fontsLoaded } from '$lib';
    import { cn } from '$lib/utils';
    import type { PageData } from './$types';

    $: style = $page.url.searchParams.get('style') || 'all';
    export let data: PageData;

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
    });

    $: if ($fontsLoaded) {
        console.log('All fonts in the loading phase have loaded');
    }
</script>

<main class="p-4 md:p-8 lg:p-12">
    <Hero />
    <Search bind:style />
    <div
        class="relative grid w-full grid-cols-1 gap-4 overflow-hidden
		sm:grid-cols-2 md:grid-cols-3 lg:gap-8"
    >
        {#each data.randomFonts as font}
            <FontCard {font} />
        {/each}
        <!-- <p -->
        <!--     class={cn( -->
        <!--         `absolute left-1 translate-y-0 text-4xl transition-transform duration-700`, -->
        <!--         $fontsLoaded && `-translate-y-21` -->
        <!--     )} -->
        <!-- > -->
        <!--     Astonpoliz -->
        <!-- </p> -->
        <!-- <p -->
        <!--     style="font-family: 'Astonpoliz', sans; font-display: swap;" -->
        <!--     class={cn( -->
        <!--         `relative translate-y-20 text-4xl transition-transform duration-700`, -->
        <!--         $fontsLoaded && `translate-y-0` -->
        <!--     )} -->
        <!-- > -->
        <!--     Astonpoliz -->
        <!-- </p> -->
    </div>
</main>
