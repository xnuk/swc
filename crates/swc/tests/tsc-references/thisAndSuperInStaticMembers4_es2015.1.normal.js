import * as swcHelpers from "@swc/helpers";
class C extends B {
    constructor(...args){
        super(...args);
        // these should be unaffected
        this.x = 1;
        this.y = this.x;
        this.z = super.f();
    }
}
C.x = undefined;
C.y1 = C.x;
C.y2 = C.x();
C.y3 = C === null || C === void 0 ? void 0 : C.x();
C.y4 = C["x"]();
C.y5 = C === null || C === void 0 ? void 0 : C["x"]();
C.z3 = swcHelpers.get(swcHelpers.getPrototypeOf(C), "f", C).call(C);
C.z4 = swcHelpers.get(swcHelpers.getPrototypeOf(C), "f", C).call(C);
