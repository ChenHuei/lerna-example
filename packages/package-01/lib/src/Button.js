"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = (props) => {
    return ((0, jsx_runtime_1.jsxs)("button", Object.assign({ style: { color: props.textColor } }, { children: [props.children, " from packages"] })));
};
exports.default = Button;
