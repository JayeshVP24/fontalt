<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = TabsPrimitive.TriggerProps;
	type $$Events = TabsPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'];
	export { className as class };
</script>

<TabsPrimitive.Trigger
	class={cn(
		`inline-flex h-full items-center justify-center whitespace-nowrap
		 bg-background px-3 py-3 text-lg ring-offset-background transition-all
		focus-visible:outline-none focus-visible:ring-2
		focus-visible:ring-ring focus-visible:ring-offset-2
		disabled:pointer-events-none disabled:opacity-50
		  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground `,
		className
	)}
	{value}
	{...$$restProps}
	on:click
>
	<slot />
</TabsPrimitive.Trigger>
