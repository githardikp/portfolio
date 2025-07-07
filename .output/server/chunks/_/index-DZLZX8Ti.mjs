import { jsxs, jsx } from 'react/jsx-runtime';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { d as dsaProblems } from './dsaProblems-Bxb4btEx.mjs';

const SplitComponent = function DSAList() {
  return /* @__PURE__ */ jsxs("section", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold", children: "DSA from Real-Life Problems" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-2", children: "Explore how core algorithms and data structures solve everyday engineering challenges." })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { className: "grid md:grid-cols-2 gap-6", initial: "hidden", animate: "visible", variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }, children: dsaProblems.map((problem) => /* @__PURE__ */ jsxs(motion.article, { variants: {
      hidden: {
        opacity: 0,
        y: 10
      },
      visible: {
        opacity: 1,
        y: 0
      }
    }, className: "bg-white dark:bg-slate-800 rounded shadow p-6 flex flex-col", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: problem.title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-700 dark:text-slate-300 flex-1", children: problem.realLifeScenario }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-300 px-2 py-1 rounded", children: problem.dsAlgo }) }),
      /* @__PURE__ */ jsx(Link, { to: `/dsa/${problem.id}`, className: "inline-block mt-4 text-blue-600 hover:underline", children: "Learn More \u2192" })
    ] }, problem.id)) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-DZLZX8Ti.mjs.map
