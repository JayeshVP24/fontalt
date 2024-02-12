import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.hCYCDQs-.js","_app/immutable/chunks/scheduler.6mbSpQn_.js","_app/immutable/chunks/index.BirMtNv6.js","_app/immutable/chunks/mode.NG1oO3Hq.js","_app/immutable/chunks/index.DPvC6PAi.js","_app/immutable/chunks/stores.Ceq0H1jr.js","_app/immutable/chunks/entry.DxKf1aMz.js"];
export const stylesheets = [];
export const fonts = [];
