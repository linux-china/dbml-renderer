"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDbml = renderDbml;
exports.dot2svg = dot2svg;
const checker_1 = require("./checker");
const parser_1 = require("./parser");
const renderer_1 = require("./renderer");
const viz_1 = require("@viz-js/viz");
const vizPromise = (0, viz_1.instance)();
async function renderDbml(dbmlText, format) {
    return await (0, renderer_1.render)((0, checker_1.check)((0, parser_1.parse)(dbmlText)), format);
}
async function dot2svg(dotText) {
    return (await vizPromise).renderString(dotText, { format: "svg" });
}
