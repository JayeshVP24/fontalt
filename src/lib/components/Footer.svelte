<script>
	import { Github } from 'lucide-svelte';
	import { Button } from './ui/button';
</script>

<footer class="flex justify-between p-4 md:p-8 lg:p-12">
	<p>© 2023 FontAlt. All rights reserved.</p>
	<p>
		Made with ❤️ by
		<a target="_blank" class="underline" href="https:///twitter.com/kuxshl">@kuxshl</a> &
		<a target="_blank" class="underline" href="https:///twitter.com/jayeshvp24">@jayeshvp24</a>
	</p>
	<span>
		<Button
			size="icon"
			variant="ghost"
			target="_blank"
			href="https://github.com/jayeshvp24/fontalt"
		>
			<Github />
		</Button>
	</span>
</footer>

