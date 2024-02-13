<script>
    import { Github } from 'lucide-svelte';
    import { Button } from './ui/button';
</script>

<footer
    class="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center place-content-center justify-center p-4 md:p-8 lg:p-12"
>
    <p class="text-muted-foreground">© 2024 FontAlt. All rights reserved.</p>
    <p class="place-self-center">
        Made with ❤️ by
        <a
            target="_blank"
            class="hover:underline underline-offset-2"
            href="https:///twitter.com/kuxshl">@kuxshl</a
        >
        &
        <a
            target="_blank"
            class="hover:underline underline-offset-2"
            href="https:///twitter.com/jayeshvp24">@jayeshvp24</a
        >
    </p>
    <span class="place-self-end">
        <Button
            class="text-muted-foreground"
            size="icon"
            variant="ghost"
            target="_blank"
            href="https://github.com/jayeshvp24/fontalt"
        >
            <Github />
        </Button>
    </span>
</footer>
