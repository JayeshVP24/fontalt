import { c as create_ssr_component, v as validate_component, a as add_attribute } from "../../chunks/ssr.js";
import { I as Icon, B as Button, t as themeColors } from "../../chunks/stores.js";
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  return `  ${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "github" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Github$1 = Github;
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex justify-between p-4 md:p-8 lg:p-12"><p class="text-muted-foreground" data-svelte-h="svelte-1ki3zfo">© 2023 FontAlt. All rights reserved.</p> <p class="text-muted-foreground" data-svelte-h="svelte-wfpyol">Made with ❤️ by
        <a target="_blank" class="underline" href="https:///twitter.com/kuxshl">@kuxshl</a> &amp;
        <a target="_blank" class="underline" href="https:///twitter.com/jayeshvp24">@jayeshvp24</a></p> <span>${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "text-muted-foreground",
      size: "icon",
      variant: "ghost",
      target: "_blank",
      href: "https://github.com/jayeshvp24/fontalt"
    },
    {},
    {
      default: () => {
        return `${validate_component(Github$1, "Github").$$render($$result, {}, {}, {})}`;
      }
    }
  )}</span></footer>`;
});
function setInitialMode(defaultMode, themeColors2) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  rootEl.classList[light ? "remove" : "add"]("dark");
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
const Mode_watcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { track = true } = $$props;
  let { defaultMode = "system" } = $$props;
  let { themeColors: themeColors$1 = void 0 } = $$props;
  themeColors.set(themeColors$1);
  const args = `"${defaultMode}"${themeColors$1 ? `, ${JSON.stringify(themeColors$1)}` : ""}`;
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.defaultMode === void 0 && $$bindings.defaultMode && defaultMode !== void 0)
    $$bindings.defaultMode(defaultMode);
  if ($$props.themeColors === void 0 && $$bindings.themeColors && themeColors$1 !== void 0)
    $$bindings.themeColors(themeColors$1);
  return `${$$result.head += `<!-- HEAD_svelte-cpyj77_START -->${themeColors$1 ? `   <meta name="theme-color"${add_attribute("content", themeColors$1.dark, 0)}>` : ``}<!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(` + setInitialMode.toString() + `)(` + args + `);<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-cpyj77_END -->`, ""}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
