var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_hello = __commonJS({
  "src/hello.ts"(exports, module) {
    function hello(name) {
      console.log(`Hello, ${name}!`);
    }
    module.exports = {
      hello
    };
  }
});
export default require_hello();
