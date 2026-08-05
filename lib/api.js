"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDbml = renderDbml;
const checker_1 = require("./checker");
const parser_1 = require("./parser");
const renderer_1 = require("./renderer");
async function renderDbml(input, format) {
    return await (0, renderer_1.render)((0, checker_1.check)((0, parser_1.parse)(input)), format);
}
