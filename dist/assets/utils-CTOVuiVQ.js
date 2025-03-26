(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) a(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : e.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function a(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = n(e);
    fetch(e.href, o);
  }
})();
function l(r) {
  const t = window.location.search;
  return new URLSearchParams(t).get(r);
}
function u(r, t, n, a = "afterbegin", e = !1) {
  const o = n.map(r);
  e && (t.innerHTML = ""), t.insertAdjacentHTML(a, o.join(""));
}
function c(r, t, n, a) {
  t.innerHTML = r;
}
async function i(r) {
  return await (await fetch(r)).text();
}
async function f() {
  const r = await i("../partials/header.html"),
    t = document.querySelector("#header");
  c(r, t);
  const n = await i("../partials/footer.html"),
    a = document.querySelector("#footer");
  c(n, a);
}
function d(r) {
  return JSON.parse(localStorage.getItem(r));
}
function m(r, t) {
  localStorage.setItem(r, JSON.stringify(t));
}
export { l as a, d as g, f as l, u as r, m as s };
