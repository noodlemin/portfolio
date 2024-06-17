import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.c740df47.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/index.28409b7f.js","_app/immutable/chunks/UIcon.9ef5a02d.js","_app/immutable/chunks/paths.0aee987b.js","_app/immutable/chunks/stores.7129c7d6.js","_app/immutable/chunks/singletons.45d504f7.js","_app/immutable/chunks/home.caaa927c.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/skills.a006fd3b.js"];
export const stylesheets = ["_app/immutable/assets/0.bd4d6f71.css"];
export const fonts = [];
