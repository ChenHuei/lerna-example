"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = (props) => {
    const { textColor, children, onClick } = props;
    return ((0, jsx_runtime_1.jsx)("button", Object.assign({ style: { color: textColor }, onClick: onClick }, { children: children })));
};
exports.default = Button;
