function e(s) {
  if (s.ok) return s.json();
  throw new Error("Bad Response");
}
class o {
  constructor(t) {}
  async getData(t) {
    const a = await fetch(`undefinedproducts/search/${t}`);
    return (await e(a)).Result;
  }
  async findProductById(t) {
    const a = await fetch(`undefinedproduct/${t}`);
    return (await e(a)).Result;
  }
  async getData(t) {
    const a = await fetch(`undefinedproducts/search/${t}`);
    return (await e(a)).Result;
  }
}
export { o as P };
