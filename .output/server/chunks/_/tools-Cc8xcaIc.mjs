import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

const tools = ["Notion", "Obsidian", "Cursor"];
const SplitComponent = function Tools() {
  return /* @__PURE__ */ jsxs("section", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold", children: "Tools & Productivity" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-2", children: "Apps and platforms that super-charge my workflow" })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { className: "flex flex-wrap justify-center gap-4", initial: "hidden", animate: "visible", variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }, children: tools.map((tool) => /* @__PURE__ */ jsx(motion.div, { variants: {
      hidden: {
        opacity: 0,
        scale: 0.9
      },
      visible: {
        opacity: 1,
        scale: 1
      }
    }, className: "bg-white dark:bg-slate-800 rounded shadow px-6 py-3 text-sm font-medium", children: tool }, tool)) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=tools-Cc8xcaIc.mjs.map
