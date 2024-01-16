<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<slot />
<Footer />
