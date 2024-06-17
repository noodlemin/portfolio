

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.29341e4c.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/index.28409b7f.js","_app/immutable/chunks/UIcon.9ef5a02d.js","_app/immutable/chunks/paths.0aee987b.js","_app/immutable/chunks/skills.a006fd3b.js","_app/immutable/chunks/SearchPage.aecbe585.js","_app/immutable/chunks/CommonPage.84719b1c.js","_app/immutable/chunks/app.950c8fad.js","_app/immutable/chunks/TabTitle.d4f67d08.js","_app/immutable/chunks/stores.7129c7d6.js","_app/immutable/chunks/singletons.45d504f7.js","_app/immutable/chunks/Card.e1357829.js","_app/immutable/chunks/index.f7be2cf8.js"];
export const stylesheets = ["_app/immutable/assets/SearchPage.d63b558a.css","_app/immutable/assets/Card.7a6abfc5.css"];
export const fonts = [];
