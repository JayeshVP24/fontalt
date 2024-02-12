<script lang="ts">
    import { Tabs as TabsPrimitive } from 'bits-ui';
    import { cn } from '$lib/utils';

    type $$Props = TabsPrimitive.ListProps;

    let className: $$Props['class'] = undefined;
    export { className as class };
</script>

<TabsPrimitive.List
    class={cn(
        'inline-flex w-fit items-center  justify-center gap-0.5 bg-muted p-0.5 text-muted-foreground',
        className
    )}
    {...$$restProps}
>
    <slot />
</TabsPrimitive.List>
