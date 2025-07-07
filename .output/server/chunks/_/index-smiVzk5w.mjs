import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

const NAME = "Alex Johnson";
const ROLE = "Full-Stack JavaScript Engineer";
const highlights = ["Full-Stack JavaScript Engineer", "React & React Native Specialist", "Security-minded (OWASP)", "Cloud-native on AWS & Docker"];
const SplitComponent = function Home() {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center gap-10 py-10", children: [
    /* @__PURE__ */ jsxs("header", { className: "space-y-6 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxs(motion.h1, { className: "text-5xl sm:text-7xl font-extrabold leading-tight", initial: {
        opacity: 0,
        y: -40
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, children: [
        "Hey, I'm ",
        /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: NAME })
      ] }),
      /* @__PURE__ */ jsxs(motion.p, { className: "text-xl text-slate-700 dark:text-slate-300", initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.3,
        duration: 0.6
      }, children: [
        ROLE,
        " crafting secure, scalable & delightful web and mobile experiences."
      ] })
    ] }),
    /* @__PURE__ */ jsx(motion.ul, { className: "flex flex-wrap justify-center gap-4 max-w-2xl", initial: "hidden", animate: "visible", variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }, children: highlights.map((h) => /* @__PURE__ */ jsx(motion.li, { variants: {
      hidden: {
        opacity: 0,
        y: 10
      },
      visible: {
        opacity: 1,
        y: 0
      }
    }, className: "px-4 py-2 bg-blue-100 text-blue-600 dark:bg-blue-700/20 dark:text-blue-300 rounded text-sm", children: h }, h)) }),
    /* @__PURE__ */ jsx(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      delay: 0.8,
      duration: 0.6
    }, children: /* @__PURE__ */ jsx("a", { href: "/projects", className: "inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition-colors", children: "View My Work" }) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=index-smiVzk5w.mjs.map
