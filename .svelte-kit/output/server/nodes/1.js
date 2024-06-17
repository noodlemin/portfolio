

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.12ee27dc.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/index.28409b7f.js","_app/immutable/chunks/stores.7129c7d6.js","_app/immutable/chunks/singletons.45d504f7.js","_app/immutable/chunks/paths.0aee987b.js"];
export const stylesheets = [];
export const fonts = [];
