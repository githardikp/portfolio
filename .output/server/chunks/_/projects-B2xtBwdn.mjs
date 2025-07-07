import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

const projects = [{
  name: "DevOps Dashboard",
  description: "Real-time monitoring dashboard deployed on AWS ECS showing container metrics and system health.",
  link: "#",
  tech: ["React", "TypeScript", "AWS", "Docker"]
}, {
  name: "Secure Notes",
  description: "End-to-end encrypted note-taking Progressive Web App following OWASP guidelines.",
  link: "#",
  tech: ["Vite", "Tailwind CSS", "OWASP"]
}, {
  name: "Trellaux Clone",
  description: "Kanban productivity board built with TanStack Start + Convex (inspired by TanStack example).",
  link: "#",
  tech: ["TanStack Start", "Convex", "Framer Motion"]
}];
const SplitComponent = function Projects() {
  return /* @__PURE__ */ jsxs("section", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold", children: "Selected Projects" }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400 mt-2", children: "A quick glance at things I've built recently" })
    ] }),
    /* @__PURE__ */ jsx(motion.div, { className: "grid md:grid-cols-2 gap-6", initial: "hidden", animate: "visible", variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }, children: projects.map((project) => /* @__PURE__ */ jsxs(motion.article, { variants: {
      hidden: {
        opacity: 0,
        y: 10
      },
      visible: {
        opacity: 1,
        y: 0
      }
    }, className: "bg-white dark:bg-slate-800 rounded shadow p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: project.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-700 dark:text-slate-300", children: project.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-4", children: project.tech.map((t) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-300 px-2 py-1 rounded", children: t }, t)) }),
      project.link && /* @__PURE__ */ jsx("a", { href: project.link, target: "_blank", rel: "noreferrer", className: "inline-block mt-4 text-blue-600 hover:underline", children: "View Project \u2192" })
    ] }, project.name)) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=projects-B2xtBwdn.mjs.map
