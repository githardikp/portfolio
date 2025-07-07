import { jsx, jsxs } from 'react/jsx-runtime';
import { d as dsaProblems } from './dsaProblems-Bxb4btEx.mjs';
import { R as Route } from './ssr.mjs';
import '@tanstack/react-router';
import '@tanstack/react-router-devtools';
import 'framer-motion';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import '@tanstack/router-core/ssr/server';
import 'node:async_hooks';
import 'tiny-invariant';
import '@tanstack/react-router/ssr/server';

const SplitComponent = function ProblemDetail() {
  const {
    problemId
  } = Route.useParams();
  const problem = dsaProblems.find((p) => p.id === problemId);
  if (!problem) {
    return /* @__PURE__ */ jsx("p", { children: "Problem not found." });
  }
  return /* @__PURE__ */ jsxs("article", { className: "prose lg:prose-lg dark:prose-invert", children: [
    /* @__PURE__ */ jsx("h1", { children: problem.title }),
    /* @__PURE__ */ jsxs("p", { className: "italic text-slate-600 dark:text-slate-400", children: [
      "Scenario: ",
      problem.realLifeScenario
    ] }),
    /* @__PURE__ */ jsxs("h2", { children: [
      "Why ",
      problem.dsAlgo,
      "?"
    ] }),
    /* @__PURE__ */ jsx("p", { children: problem.description }),
    /* @__PURE__ */ jsx("h3", { children: "Complexity" }),
    /* @__PURE__ */ jsx("p", { children: problem.complexity }),
    /* @__PURE__ */ jsx("h3", { children: "Step-by-Step Solution" }),
    /* @__PURE__ */ jsx("ol", { children: problem.steps.map((s, i) => /* @__PURE__ */ jsx("li", { children: s }, i)) })
  ] });
};

export { SplitComponent as component };
//# sourceMappingURL=_problemId-BGaBf07X.mjs.map
