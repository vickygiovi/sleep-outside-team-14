const e = "http://server-nodejs.cit.byui.edu:3000/";
function o(a) {
  if (a.ok) return a.json();
  throw new Error("Bad Response");
}
class n {
  constructor(t) {}
  async getData(t) {
    const s = await fetch(e + `products/search/${t}`);
    return (await o(s)).Result;
  }
  async findProductById(t) {
    const s = await fetch(e + `product/${t}`);
    return (await o(s)).Result;
  }
}
export { n as P };
