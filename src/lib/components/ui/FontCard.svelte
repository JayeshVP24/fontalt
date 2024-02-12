<script lang="ts">
    import type { FontAlt } from '$lib/fonts';
    import { Separator } from '$lib/components/ui/separator';
    import { fontsLoaded } from '$lib';
    import { onMount } from 'svelte';
    import { applyFont, cn } from '$lib/utils';

    export let font: FontAlt;
    // onMount(async () => {
    //     const fontArray = [
    //         font.main,
    //         font.alternativeOne,
    //         font.alternativeTwo,
    //         font.alternativeThree
    //     ];
    //     try {
    //         for (const font of fontArray) {
    //             applyFont(font.title, fontUrl);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching font:', error);
    //     }
    // });
</script>

<div class="flex flex-col items-center border sm:flex-row">
    <h2
        class={`relative overflow-hidden py-6 sm:py-12 text-center text-xl sm:w-2/4
		md:text-3xl fontalt-${font.main.title}`}
    >
        <span
            class={cn(
                `absolute left-2/4 top-2/4 block
-translate-x-2/4 -translate-y-2/4 transition-transform duration-700`,
                $fontsLoaded && `-translate-y-72`
            )}
        >
            {font.main.title}
        </span>
        <span
            style={`font-family: ${font.main.fileName}, sans; font-display: swap;`}
            class={cn(
                `relative block translate-y-72 transition-transform duration-700`,
                $fontsLoaded && `translate-y-0`
            )}
        >
            {font.main.title}
        </span>
    </h2>
    <Separator class="sm:hidden" />
    <Separator class="hidden sm:block" orientation="vertical" />
    <ul class="flex w-full min-w-44 flex-col items-center sm:w-2/4">
        <li class={`relative overflow-hidden py-2 lg:py-3 ${font.alternativeOne.title}`}>
            <span
                class={cn(
                    `absolute left-2/4 top-2/4 block w-max
-translate-x-2/4 -translate-y-2/4 transition-transform duration-700`,
                    $fontsLoaded && `-translate-y-72`
                )}
            >
                {font.alternativeOne.title}
            </span>
            <span
                style={`font-family: ${font.alternativeOne.fileName}, sans; font-display: swap;`}
                class={cn(
                    `relative block translate-y-72 transition-transform duration-700`,
                    $fontsLoaded && `translate-y-0`
                )}
            >
                {font.alternativeOne.title}
            </span>
        </li>
        <Separator />
        <li class={`relative overflow-hidden py-2 lg:py-3 ${font.alternativeTwo.title}`}>
            <span
                class={cn(
                    `absolute left-2/4 top-2/4 block w-max
-translate-x-2/4 -translate-y-2/4 transition-transform duration-700`,
                    $fontsLoaded && `-translate-y-72`
                )}
            >
                {font.alternativeTwo.title}
            </span>
            <span
                style={`font-family: ${font.alternativeTwo.fileName}, sans; font-display: swap;`}
                class={cn(
                    `relative block translate-y-72 transition-transform duration-700`,
                    $fontsLoaded && `translate-y-0`
                )}
            >
                {font.alternativeTwo.title}
            </span>
        </li>

        <Separator />
        <li class={`relative overflow-hidden py-2 lg:py-3 ${font.alternativeThree.title}`}>
            <span
                class={cn(
                    `absolute left-2/4 top-2/4 block w-max
-translate-x-2/4 -translate-y-2/4 transition-transform duration-700`,
                    $fontsLoaded && `-translate-y-72`
                )}
            >
                {font.alternativeThree.title}
            </span>
            <span
                style={`font-family: ${font.alternativeThree.fileName}, sans; font-display: swap;`}
                class={cn(
                    `relative block translate-y-72 transition-transform duration-700`,
                    $fontsLoaded && `translate-y-0`
                )}
            >
                {font.alternativeThree.title}
            </span>
        </li>
    </ul>
</div>
