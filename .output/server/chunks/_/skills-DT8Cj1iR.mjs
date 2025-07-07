import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

const skills = {
  "Frontend": ["JavaScript", "TypeScript", "React", "React Native", "TanStack Router", "TanStack Start", "Vite", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Express", "System Design"],
  "Databases": ["MongoDB", "PostgreSQL", "Drizzle ORM"],
  "DevOps & Cloud": ["AWS", "Docker", "GitHub"],
  "Security": ["OWASP", "Reverse Engineering"]
};
const SplitComponent = function Skills() {
  return /* @__PURE__ */ jsxs("section", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold", children: "Technical Skills" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-2", children: "A snapshot of the technologies I work with day-to-day" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-10", children: Object.entries(skills).map(([category, list]) => /* @__PURE__ */ jsxs(motion.section, { layout: true, children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: category }),
      /* @__PURE__ */ jsx(motion.div, { className: "flex flex-wrap gap-3", initial: "hidden", animate: "visible", variants: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05
          }
        }
      }, children: list.map((skill) => /* @__PURE__ */ jsx(motion.span, { variants: {
        hidden: {
          opacity: 0,
          y: 8
        },
        visible: {
          opacity: 1,
          y: 0
        }
      }, className: "px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-300 rounded text-sm", children: skill }, skill)) })
    ] }, category)) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=skills-DT8Cj1iR.mjs.map
