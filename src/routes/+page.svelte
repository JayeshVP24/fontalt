<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { Search } from 'lucide-svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils';

	$: style = $page.url.searchParams.get('style') || 'all';
</script>

<main class="p-4 md:p-8 lg:p-12">
	<Hero />
	<section
		class="my-6 flex flex-col gap-4 sm:flex-row lg:my-12
		lg:gap-6"
	>
		<span class="flex flex-1 items-center gap-2 border">
			<span class="px-3 py-2 pr-1">
				<Search class="" />
			</span>
			<input
				class="flex-1 bg-transparent text-lg outline-none"
				placeholder="Search your Favourite Font"
			/>
		</span>
		<Tabs.Root value={style}>
			<Tabs.List class="flex w-full ">
				<a
					href="/?style=all"
					class={cn('h-full w-full border-l-2', style === 'all' ? 'border-l-0' : 'border-l-2')}
				>
					<Tabs.Trigger value="all" on:click={() => goto('/?style=all', { replaceState: true })}
						>All</Tabs.Trigger
					>
				</a>
				<a href="/?style=sans-serif" class="h-full w-full">
					<Tabs.Trigger
						value="sans-serif"
						on:click={() => goto('/?style=sans-serif', { replaceState: true })}
						>Sans Serif</Tabs.Trigger
					>
				</a>
				<a href="/?style=serif" class="h-full w-full">
					<Tabs.Trigger value="serif" on:click={() => goto('/?style=serif', { replaceState: true })}
						>Serif</Tabs.Trigger
					>
				</a>
				<a href="/?style=handwritten" class="h-full w-full">
					<Tabs.Trigger
						value="handwritten"
						on:click={() => goto('/?style=handwritten', { replaceState: true })}
						>Handwritten</Tabs.Trigger
					>
				</a>
				<a href="/?display" class="h-full w-full">
					<Tabs.Trigger
						value="display"
						on:click={() => goto('/?style=display', { replaceState: true })}>Display</Tabs.Trigger
					>
				</a>
			</Tabs.List>
		</Tabs.Root>
	</section>
</main>
