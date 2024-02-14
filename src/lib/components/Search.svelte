<script lang="ts">
    import { Menu, Search } from 'lucide-svelte';
    import * as Tabs from '$lib/components/ui/tabs';
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
    import { goto } from '$app/navigation';
    import { cn } from '$lib/utils';
    import { queryParam } from 'sveltekit-search-params';
    import { Button } from './ui/button';

    let query = queryParam('query');
    let style = queryParam('style');

    let inputElement: HTMLInputElement;

    const styles: { label: string; href: string; value: string }[] = [
        {
            label: 'All',
            href: '/?style=all',
            value: 'all'
        },
        {
            label: 'Sans-Serif',
            href: '/?style=sans-serif',
            value: 'sans-serif'
        },
        {
            label: 'Serif',
            href: '/?style=serif',
            value: 'serif'
        },
        {
            label: 'Handwritten',
            href: '/?style=handwritten',
            value: 'handwritten'
        }
    ];
</script>

<section
    class="my-6 flex flex-row gap-2 lg:my-12
		lg:gap-6"
>
    <button
        class="flex flex-1 items-center gap-2 border px-3"
        on:click={() => inputElement.focus()}
        data-sveltekit-keepfocus
    >
        <span class=" py-2 pr-1">
            <Search class="" />
        </span>
        <input
            id="search"
            bind:value={$query}
            bind:this={inputElement}
            class="min-w-0 flex-1 text-ellipsis bg-transparent
			text-lg outline-none"
            placeholder="Search your Favourite Font"
        />
    </button>
    <Tabs.Root value={$style || 'all'} class="hidden sm:block">
        <Tabs.List class="flex w-fit flex-wrap ">
            {#each styles as style}
                <span class={cn('h-full w-fit ')}>
                    <Tabs.Trigger
                        value={style.value}
                        on:click={() => goto(style.href, { replaceState: true })}
                        >{style.label}</Tabs.Trigger
                    >
                </span>
            {/each}
        </Tabs.List>
    </Tabs.Root>
    <DropdownMenu.Root>
        <DropdownMenu.Trigger class="sm:hidden">
            <Button variant="outline" size="icon">
                <Menu />
            </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
            <DropdownMenu.Group>
                {#each styles as style}
                    <DropdownMenu.Item on:click={() => goto(style.href, { replaceState: true })}
                        >{style.label}</DropdownMenu.Item
                    >
                {/each}
            </DropdownMenu.Group>
        </DropdownMenu.Content>
    </DropdownMenu.Root>
</section>
