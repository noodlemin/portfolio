import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";
import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
dayjs.extend(duration);
const countMonths = (from, to = new Date()) => {
  let firstYear = 0;
  let wholeYears = 0;
  let newYear = 0;
  if (to.getFullYear() !== from.getFullYear()) {
    newYear = to.getMonth();
    wholeYears = (to.getFullYear() - from.getFullYear() - 1) * 12;
    firstYear = 12 - from.getMonth();
  } else {
    firstYear = to.getMonth() - from.getMonth();
  }
  return firstYear + wholeYears + newYear + 1;
};
const getMonthName = (index) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return monthNames[index];
};
const useTitle = (title, suffix) => `${title} | ${suffix}`;
function getTimeDiff(date1, date2 = new Date(Date.now() + 1e3 * 60 * 60 * 24)) {
  const d1 = dayjs(date1);
  const d2 = dayjs(date2);
  const duration2 = dayjs.duration(d2.diff(d1));
  let n = 0;
  let u = "day";
  if (duration2.as("days") <= 7) {
    u = "day";
    n = duration2.as("days");
  } else if (duration2.as("months") <= 1) {
    u = "week";
    n = duration2.as("weeks");
  } else if (duration2.as("years") <= 1) {
    u = "month";
    n = duration2.as("months");
  } else {
    u = "year";
    n = duration2.as("years");
  }
  n = Math.trunc(n);
  return `${Math.trunc(n)} ${u}${n > 1 ? "s" : ""}`;
}
function filterItemsByQuery(items, query) {
  const ignoredProperties = ["logo", "links", "color", "screenshots"];
  query = query.toLowerCase();
  return items.filter((item) => doesQueryExistInItemOrAttributes(item, query, ignoredProperties));
}
function doesQueryExistInItemOrAttributes(item, query, ignoredProperties = []) {
  if (Array.isArray(item)) {
    return item.some((subItem) => doesQueryExistInItemOrAttributes(subItem, query));
  } else if (typeof item === "object" && item !== null) {
    if (item instanceof Date) {
      const dateFormats = [
        item.toString().toLowerCase(),
        // Full date string
        item.toLocaleDateString("default", { month: "long", year: "numeric" }).toLowerCase(),
        // "January 2023"
        item.toLocaleDateString("default", { day: "numeric", month: "long", year: "numeric" }).toLowerCase(),
        // "15 January 2023"
        item.toLocaleDateString("en-US").toLowerCase(),
        // "1/15/2023"
        item.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toLowerCase()
        // "Jan 15, 2023"
      ];
      return dateFormats.some((dateStr) => dateStr.includes(query));
    } else {
      return Object.keys(item).some(
        (key) => !ignoredProperties.includes(key) && doesQueryExistInItemOrAttributes(item[key], query)
      );
    }
  } else {
    return item.toString().toLowerCase().includes(query);
  }
}
const MainTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes = "" } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `<h1${add_attribute("class", `font-[var(--title-f)] font-black tracking-[4px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${classes}`, 0)} style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;">${slots.default ? slots.default({}) : ``}</h1>`;
});
const titleSuffix = "Slick template with Svelte";
export {
  MainTitle as M,
  getMonthName as a,
  countMonths as c,
  filterItemsByQuery as f,
  getTimeDiff as g,
  titleSuffix as t,
  useTitle as u
};
