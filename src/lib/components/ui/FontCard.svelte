<script lang="ts">
    import type { FontAlt } from '$lib/fonts';
    import { Separator } from '$lib/components/ui/separator';
    import { fontsLoaded } from '$lib';
    import { cn } from '$lib/utils';

    export let font: FontAlt;
</script>

<div class="flex flex-col items-center border sm:flex-row">
    <a
        href={font.main.link}
        target="_blank"
        class={`relative overflow-hidden h-full flex items-center
justify-center text-center text-2xl sm:w-2/4
md:text-3xl py-8 hover:bg-accent`}
    >
        <h2
            class={cn(
                `absolute left-2/4 top-2/4 block
-translate-x-2/4 -translate-y-2/4 transition-transform duration-700`,
                $fontsLoaded && `-translate-y-72`,
                !font.main.title && `invisible`
            )}
        >
            {font.main.title}
        </h2>
        <h2
            style={`font-family: ${font.main.fileName}, sans; font-display: swap;`}
            class={cn(
                `relative block translate-y-72 transition-transform duration-700`,
                $fontsLoaded && `translate-y-0`,
                !font.main.title && `invisible`
            )}
        >
            {font.main.title}
        </h2>
    </a>
    <Separator class="sm:hidden" />
    <Separator class="hidden sm:block" orientation="vertical" />
    <ul
        class="flex w-full min-w-44 flex-col items-center sm:w-2/4
        justify-center text-accent-foreground"
    >
        <a
            href={font.alternativeOne.link}
            target="_blank"
            class={`relative py-2 lg:py-3 w-full text-center overflow-hidden block hover:bg-accent`}
        >
            <li
                class={cn(
                    `absolute left-2/4 top-2/4 block w-max
-translate-x-2/4 -translate-y-2/4 transition-transform duration-700`,
                    $fontsLoaded && `-translate-y-72`,
                    !font.alternativeOne.title && `invisible`
                )}
            >
                {font.alternativeOne.title}
            </li>
            <li
                style={`font-family: ${font.alternativeOne.fileName}, sans; font-display: swap;`}
                class={cn(
                    `relative block translate-y-72 transition-transform duration-700`,
                    $fontsLoaded && `translate-y-0`,
                    !font.alternativeOne.title && `invisible`
                )}
            >
                {font.alternativeOne.title}
            </li>
        </a>
        <Separator />
        <a
            href={font.alternativeTwo.link}
            target="_blank"
            class={`relative overflow-hidden w-full text-center py-2 lg:py-3 hover:bg-accent`}
        >
            <li
                class={cn(
                    `absolute left-2/4 top-2/4 block w-max
-translate-x-2/4 -translate-y-2/4 transition-transform duration-700`,
                    $fontsLoaded && `-translate-y-72`,
                    !font.alternativeTwo.title && `invisible`
                )}
            >
                {font.alternativeTwo.title}
            </li>
            <li
                style={`font-family: ${font.alternativeTwo.fileName}, sans; font-display: swap;`}
                class={cn(
                    `relative block translate-y-72 transition-transform duration-700`,
                    $fontsLoaded && `translate-y-0`,
                    !font.alternativeTwo.title && `invisible`
                )}
            >
                {font.alternativeTwo.title}
            </li>
        </a>

        <Separator />
        <a
            href={font.alternativeThree.link}
            target="_blank"
            class={`relative overflow-hidden py-2 lg:py-3 w-full text-center hover:bg-accent`}
        >
            <li
                class={cn(
                    `absolute left-2/4 top-2/4 block w-max
-translate-x-2/4 -translate-y-2/4 transition-transform duration-700`,
                    $fontsLoaded && `-translate-y-72`,
                    !font.alternativeThree.title && `invisible`
                )}
            >
                {font.alternativeThree.title}
            </li>
            <li
                style={`font-family: ${font.alternativeThree.fileName}, sans; font-display: swap;`}
                class={cn(
                    `relative block translate-y-72 transition-transform duration-700`,
                    $fontsLoaded && `translate-y-0`,
                    !font.alternativeThree.title && `invisible`
                )}
            >
                {font.alternativeThree.title}
            </li>
        </a>
    </ul>
</div>
