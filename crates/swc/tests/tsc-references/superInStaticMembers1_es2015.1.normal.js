import * as swcHelpers from "@swc/helpers";
class Reflect1 {
}
// @target: es5, es2015, es2021, es2022, esnext
// @noTypesAndSymbols: true
// @filename: external.ts
export { Reflect1 as Reflect };
export var Baz;
(function(Baz) {})(Baz || (Baz = {}));
class _class {
}
export { _class as default };
class C extends B {
}
C._ = [
    (()=>{
        var Reflect; // collision (es2015-es2021 only)
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        var { Reflect  } = {
            Reflect: null
        }; // collision (es2015-es2021 only)
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        var [Reflect] = [
            null
        ]; // collision (es2015-es2021 only)
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        class Reflect {
        } // collision (es2015-es2021 only)
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        function Reflect() {} // collision (es2015-es2021 only)
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        let Reflect// collision (es2015-es2021 only)
        ;
        (function(Reflect) {})(Reflect || (Reflect = {}));
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        let Reflect// collision (es2015-es2021 only)
        ;
        (function(Reflect) {})(Reflect || (Reflect = {}));
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        (class Reflect {
        }); // no collision
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(),
    (()=>{
        (function Reflect() {}); // no collision
        swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
    })(), 
];
var __32 = {
    writable: true,
    value: (()=>{
        var { Reflect  } = {
            Reflect: null
        }; // collision (es2015-es2021 only)
        super.w();
    })()
};
var __1 = {
    writable: true,
    value: (()=>{
        var [Reflect] = [
            null
        ]; // collision (es2015-es2021 only)
        super.w();
    })()
};
var __2 = {
    writable: true,
    value: (()=>{
        var Reflect; // collision (es2015-es2021 only)
        super.w();
    })()
};
var __3 = {
    writable: true,
    value: (()=>{
        class Reflect {
        } // collision (es2015-es2021 only)
        super.w();
    })()
};
var __4 = {
    writable: true,
    value: (()=>{
        function Reflect() {} // collision (es2015-es2021 only)
        super.w();
    })()
};
var __5 = {
    writable: true,
    value: (()=>{
        let Reflect// collision (es2015-es2021 only)
        ;
        (function(Reflect) {})(Reflect || (Reflect = {}));
        super.w();
    })()
};
var __6 = {
    writable: true,
    value: (()=>{
        let Reflect// collision (es2015-es2021 only)
        ;
        (function(Reflect) {})(Reflect || (Reflect = {}));
        super.w();
    })()
};
var __7 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
var __8 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
var __9 = {
    writable: true,
    value: (()=>{
        (class Reflect {
        }) // no collision
        ;
        super.w();
    })()
};
var __10 = {
    writable: true,
    value: (()=>{
        (function Reflect() {}) // no collision
        ;
        super.w();
    })()
};
var Reflect1 = null; // collision (es2015-es2021 only)
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
var { Reflect: Reflect1  } = {
    Reflect: null
}; // collision (es2015-es2021 only)
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
var [Reflect1] = [
    null
]; // collision (es2015-es2021 only)
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
var Reflect1 = null; // collision (es2015-es2021 only)
class C extends B {
}
var __11 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
var { Reflect: Reflect1  } = {
    Reflect: null
}; // collision (es2015-es2021 only)
class C extends B {
}
var __12 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
var [Reflect1] = [
    null
]; // collision (es2015-es2021 only)
class C extends B {
}
var __13 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class Reflect1 {
} // collision (es2015-es2021 only)
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class Reflect1 {
} // collision (es2015-es2021 only)
class C extends B {
}
var __14 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
function Reflect1() {} // collision (es2015-es2021 only)
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
function Reflect1() {} // collision (es2015-es2021 only)
class C extends B {
}
var __15 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __16 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
(function(Reflect1) {})(Reflect1 || (Reflect1 = {}));
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
(function(Reflect1) {})(Reflect1 || (Reflect1 = {}));
class C extends B {
}
var __17 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
(function(Reflect1) {})(Reflect1 || (Reflect1 = {}));
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
(function(Reflect1) {})(Reflect1 || (Reflect1 = {}));
class C extends B {
}
var __18 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __19 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __20 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __21 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __22 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __23 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __24 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __25 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __26 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __27 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __28 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
class C extends B {
}
var __29 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
(class Reflect {
}); // no collision
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
(class Reflect {
}); // no collision
class C extends B {
}
var __30 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
_Reflect = class Reflect {
}, __ = {
    writable: true,
    value: (()=>{
        class C1 extends B {
        }
        C1._ = swcHelpers.get(swcHelpers.getPrototypeOf(C1), "w", C1).call(C1);
    })()
}, _Reflect;
_Reflect = class Reflect {
}, __ = {
    writable: true,
    value: (()=>{
        var _Reflect, __;
        class C extends B {
        }
        var __33 = {
            writable: true,
            value: (()=>{
                super.w();
            })()
        };
    })()
}, _Reflect;
(function Reflect() {}); // no collision
class C extends B {
}
C._ = swcHelpers.get(swcHelpers.getPrototypeOf(C), "w", C).call(C);
(function Reflect() {}); // no collision
class C extends B {
}
var __31 = {
    writable: true,
    value: (()=>{
        super.w();
    })()
};
(function Reflect() {
    var _Reflect, __;
    class C2 extends B {
    }
    C2._ = swcHelpers.get(swcHelpers.getPrototypeOf(C2), "w", C2).call(C2);
});
(function Reflect() {
    class C extends B {
    }
    var __ = {
        writable: true,
        value: (()=>{
            super.w();
        })()
    };
});
