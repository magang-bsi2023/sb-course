import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import "classnames";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                          */const Parag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="dark:text-white">${slots.default ? slots.default({}) : ``}</p>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".video-container{max-width:1250px;margin-inline:auto;padding:1.5rem}.iframe-container{position:relative;overflow:hidden;width:100%;padding-top:56.25%}.responsive-iframe{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      class: "mb-5",
      "aria-label": "Solid background breadcrumb",
      solid: true
    },
    {},
    {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })}
	${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/courses" }, {}, {
          default: () => {
            return `Courses`;
          }
        })}
	${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `1.1 Asal Hukum Syariah`;
          }
        })}`;
      }
    }
  )}

<h1 class="capitalize text-2xl text-green-500 font-bold dark:text-white mb-1">1.1 asal hukum syariah
</h1>
${validate_component(Parag, "Parag").$$render($$result, {}, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, impedit in. Impedit expedita
	reprehenderit inventore. Placeat unde quibusdam voluptas cum quam? Ut soluta, explicabo numquam
	neque quidem placeat cupiditate fuga?
`;
    }
  })}

<div class="video-container my-5 border bg-gray-50 dark:bg-gray-800 rounded-lg border-gray-200 dark:border-gray-700"><div class="iframe-container"><iframe title="video1" class="responsive-iframe" src="https://drive.google.com/file/d/1-9ZKjicBRw0ysRC_sjFhi0BUonOz0wIu/preview"></iframe></div></div>

<div class="video-container my-5 border bg-gray-50 dark:bg-gray-800 rounded-lg border-gray-200 dark:border-gray-700"><div class="iframe-container"><iframe title="multimedia1" class="responsive-iframe" src="https://augussst.github.io/AS-LuasdanVolume-BangunRuang/"></iframe></div></div>

<div class="flex justify-around">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/",
      class: "bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
    },
    {},
    {
      default: () => {
        return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path></svg>
		Kembali
	`;
      }
    }
  )}
	${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/",
      class: "bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
    },
    {},
    {
      default: () => {
        return `Selanjutnya <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg>`;
      }
    }
  )}
</div>`;
});
export {
  Page as default
};
