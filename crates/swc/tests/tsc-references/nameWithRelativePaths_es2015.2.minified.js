var M2, M21, foo = 42;
export { M21 as M2 };
export function f() {
    return 42;
}
M2 = M21 || (M21 = {}), M2.x = !0;
const foo0 = require("../foo_0"), foo1 = require("./test/foo_1"), foo2 = require("./.././test/foo_2");
foo2.M2.x && foo0.foo + foo1.f();
