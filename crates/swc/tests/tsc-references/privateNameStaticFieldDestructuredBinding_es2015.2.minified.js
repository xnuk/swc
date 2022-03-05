import * as swcHelpers from "@swc/helpers";
class A {
    testObject() {
        return {
            x: 10,
            y: 6
        };
    }
    testArray() {
        return [
            10,
            11
        ];
    }
    static test(_a) {
        [swcHelpers.classStaticPrivateFieldDestructureSet(_a, _field).value] = [
            2
        ];
    }
    constructor(){
        this.otherClass = A;
        let y;
        ({ x: swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value , y  } = this.testObject()), [swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value, y] = this.testArray(), ({ a: swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value , b: [swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value]  } = {
            a: 1,
            b: [
                2
            ]
        }), [swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value, [swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value]] = [
            1,
            [
                2
            ]
        ], ({ a: swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value = 1 , b: [swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value = 1]  } = {
            b: []
        }), [swcHelpers.classStaticPrivateFieldDestructureSet(A, _field).value = 2] = [], [swcHelpers.classStaticPrivateFieldDestructureSet(this.otherClass, _field).value = 2] = [];
    }
}
var _field = {
    writable: !0,
    value: 1
};
