import { jsxs, jsx } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

const SplitComponent = function Contact() {
  return /* @__PURE__ */ jsxs(motion.section, { className: "max-w-xl mx-auto text-center", initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Get in touch" }),
    /* @__PURE__ */ jsxs("p", { className: "mb-6", children: [
      "Shoot me an email at",
      " ",
      /* @__PURE__ */ jsx("a", { href: "mailto:your.email@example.com", className: "text-blue-600 underline", children: "your.email@example.com" }),
      " ",
      "or find me on",
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://github.com/your-github", className: "text-blue-600 underline", target: "_blank", rel: "noreferrer", children: "GitHub" }),
      "."
    ] })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=contact-CUV7N4Uo.mjs.map
