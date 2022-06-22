"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = __importDefault(require("."));
exports.default = {
    title: "Example/Header",
    component: _1.default,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
};
const Template = (args) => (0, jsx_runtime_1.jsx)(_1.default, Object.assign({}, args));
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = {
    user: {
        name: "Jane Doe",
    },
};
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = {};
