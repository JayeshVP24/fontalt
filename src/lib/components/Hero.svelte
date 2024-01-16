<script>
	import { Button } from './ui/button';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<section class="flex flex-wrap justify-between gap-6">
	<div class="max-w-3xl lg:space-y-4">
		<h1
			class=" text-2xl font-medium md:text-4xl
			lg:text-5xl xl:text-6xl"
		>
			We have alternatives of all your favourite fonts.
		</h1>
		<p
			class="pt-2 text-sm text-[#616161]
			md:text-base lg:text-xl"
		>
			Tired of using the same boring font? Here are alternatives for your favourite fonts – whether
			it's Inter or Comic Sans.
		</p>
	</div>
	<div class="flex gap-4">
		<Button on:click={toggleMode} variant="outline" size="iconLg">
			<Sun
				class="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>

		<Button size="lg">Submit fonts</Button>
	</div>
</section>
