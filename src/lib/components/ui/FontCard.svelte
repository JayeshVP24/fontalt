<script lang="ts">
	import type { fontAlt } from '$lib/fonts';
	import { Separator } from '$lib/components/ui/separator';

	export let font: fontAlt;
</script>

<div class="flex flex-col items-center border sm:flex-row">
	<h2 class="py-6 text-center text-xl sm:w-2/4 lg:py-12 lg:text-3xl">{font.main}</h2>
	<Separator class="sm:hidden" />
	<Separator class="hidden sm:block" orientation="vertical" />
	<ul class="flex w-full min-w-44 flex-col items-center sm:w-2/4">
		<li class="py-2 lg:py-3">{font.alternativeOne}</li>
		<Separator />
		<li class="py-2 lg:py-3">{font.alternativeTwo}</li>
		<Separator />
		<li class="py-2 lg:py-3">{font.alternativeThree}</li>
	</ul>
</div>
