<script lang="ts">
    import { PUBLIC_POSTHOG_API_KEY } from '$env/static/public';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.pcss';
    import { ModeWatcher } from 'mode-watcher';
    import posthog from 'posthog-js';
    import { page } from '$app/stores';
    import { browser, dev } from '$app/environment';

    if (browser && !dev) {
        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: $page.url.origin + '/wegotanalyticsbaby',
            ui_host: 'https://us.posthog.com'
        });
    }
</script>

<ModeWatcher />
<slot />
<Footer />
