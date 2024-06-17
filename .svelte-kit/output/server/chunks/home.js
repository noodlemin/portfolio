import { P as Platform } from "./types.js";
import { g as getSkills } from "./skills.js";
const title = "Home";
const name = "Name";
const lastName = "LastName";
const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos? Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!";
const links = [
  { platform: Platform.GitHub, link: "https://github.com/" },
  {
    platform: Platform.Linkedin,
    link: "https://www.linkedin.com/"
  },
  {
    platform: Platform.Twitter,
    link: "https://twitter.com/"
  },
  {
    platform: Platform.StackOverflow,
    link: "https://stackoverflow.com/"
  },
  {
    platform: Platform.Email,
    link: "riadh_adrani@hotmail.fr"
  },
  {
    platform: Platform.Youtube,
    link: "https://www.youtube.com"
  },
  {
    platform: Platform.Facebook,
    link: "https://www.facebook.com"
  }
];
const skills = getSkills("js", "css", "html", "reactjs", "sass", "svelte", "ts");
export {
  links as a,
  description as d,
  lastName as l,
  name as n,
  skills as s,
  title as t
};
