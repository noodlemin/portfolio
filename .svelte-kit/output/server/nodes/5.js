import * as universal from '../entries/pages/experience/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experience/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.5b0bee53.js","_app/immutable/chunks/experience.4c58c7b6.js","_app/immutable/chunks/UIcon.9ef5a02d.js","_app/immutable/chunks/index.28409b7f.js","_app/immutable/chunks/scheduler.7a274a43.js","_app/immutable/chunks/paths.0aee987b.js","_app/immutable/chunks/skills.a006fd3b.js","_app/immutable/chunks/types.1ebf2f37.js","_app/immutable/chunks/app.950c8fad.js","_app/immutable/chunks/CardLogo.ffd18bf4.js","_app/immutable/chunks/Banner.7b84fde3.js","_app/immutable/chunks/TabTitle.d4f67d08.js","_app/immutable/chunks/Chip.52ead758.js","_app/immutable/chunks/CardDivider.09b854d8.js"];
export const stylesheets = ["_app/immutable/assets/Banner.79dec521.css"];
export const fonts = [];
