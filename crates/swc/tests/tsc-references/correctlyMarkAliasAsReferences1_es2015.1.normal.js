import * as swcHelpers from "@swc/helpers";
// @filename: 0.tsx
///<reference path="declaration.d.ts" />
import * as cx from 'classnames';
import * as React from "react";
let buttonProps; // any
let k = /*#__PURE__*/ React.createElement("button", swcHelpers.extends({}, buttonProps), /*#__PURE__*/ React.createElement("span", {
    className: cx('class1', {
        class2: true
    })
}));
