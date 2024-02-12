<script lang="ts">
    import { Search } from 'lucide-svelte';
    import * as Tabs from '$lib/components/ui/tabs';
    import { goto } from '$app/navigation';
    import { cn } from '$lib/utils';
    export let style = 'all';
</script>

<section
    class="my-6 flex flex-col gap-4 sm:flex-row lg:my-12
		lg:gap-6"
>
    <div class="flex flex-1 items-center gap-2 border px-3">
        <span class=" py-2 pr-1">
            <Search class="" />
        </span>
        <input
            class="min-w-0 flex-1 text-ellipsis bg-transparent
			text-lg outline-none"
            placeholder="Search your Favourite Font"
        />
    </div>
    <Tabs.Root value={style} class="">
        <Tabs.List class="flex w-fit flex-wrap ">
            <a href="/?style=all" class={cn('h-full w-fit ')}>
                <Tabs.Trigger
                    value="all"
                    on:click={() => goto('/?style=all', { replaceState: true })}>All</Tabs.Trigger
                >
            </a>
            <a href="/?style=sans-serif" class="h-full w-fit">
                <Tabs.Trigger
                    value="sans-serif"
                    on:click={() => goto('/?style=sans-serif', { replaceState: true })}
                    >Sans Serif</Tabs.Trigger
                >
            </a>
            <a href="/?style=serif" class="h-full w-fit">
                <Tabs.Trigger
                    value="serif"
                    on:click={() => goto('/?style=serif', { replaceState: true })}
                    >Serif</Tabs.Trigger
                >
            </a>
            <a href="/?style=handwritten" class="h-full w-fit">
                <Tabs.Trigger
                    value="handwritten"
                    on:click={() => goto('/?style=handwritten', { replaceState: true })}
                    >Handwritten</Tabs.Trigger
                >
            </a>
            <a href="/?display" class="h-full w-fit">
                <Tabs.Trigger
                    value="display"
                    on:click={() => goto('/?style=display', { replaceState: true })}
                    >Display</Tabs.Trigger
                >
            </a>
        </Tabs.List>
    </Tabs.Root>
</section>
