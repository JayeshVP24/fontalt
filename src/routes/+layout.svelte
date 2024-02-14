<script lang="ts">
    import SvelteSeo from 'svelte-seo';
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

<SvelteSeo
    title="FontAlt | Alternatives for your favorite fonts"
    description="Tired of using the same boring font? Here are alternatives for your favourite fonts – whether it's Inter or Comic Sans"
    canonical="https://fontalt.com/"
    keywords="fonts, alternative fonts, font alternatives, alternative, best fonts"
    openGraph={{
        title: 'FontAlt | Alternatives for your favorite fonts',
        description:
            "Tired of using the same boring font? Here are alternatives for your favourite fonts – whether it's Inter or Comic Sans",
        image: 'https://fontalt.com/fontalt-og.png',
        url: 'https://fontalt.com/',
        type: 'website',
        images: [
            {
                url: 'https://fontalt.com/fontalt-og.png',
                width: 1200,
                height: 630,
                alt: 'Alternative to your favorite fonts'
            }
        ],
        site_name: 'Font Alt'
    }}
    twitter={{
        card: 'summary_large_image',
        site: '@kuxshl',
        title: 'FontAlt | Alternatives for your favorite fonts',
        description:
            "Tired of using the same boring font? Here are alternatives for your favourite fonts – whether it's Inter or Comic Sans",
        image: 'https://fontalt.com/fontalt-og.png'
    }}
/>

<ModeWatcher />
<slot />
<Footer />
