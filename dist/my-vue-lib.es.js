import { createElementBlock as c, openBlock as s, normalizeClass as l, renderSlot as r } from "vue";
const a = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, d] of e)
    n[o] = d;
  return n;
}, u = {
  __name: "MyButton",
  props: {
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(t) {
    const e = () => {
      console.log("Button clicked!");
    };
    return (n, o) => (s(), c("button", {
      class: l(["my-button", t.type]),
      onClick: e
    }, [
      r(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}, _ = /* @__PURE__ */ a(u, [["__scopeId", "data-v-f4cbc5c9"]]), i = {}, f = { class: "my-card" };
function p(t, e) {
  return s(), c("div", f, [
    r(t.$slots, "default", {}, void 0, !0)
  ]);
}
const m = /* @__PURE__ */ a(i, [["render", p], ["__scopeId", "data-v-79891298"]]), k = {
  install(t) {
    t.component("MyButton", _), t.component("MyCard", m);
  }
};
export {
  _ as MyButton,
  m as MyCard,
  k as default
};
