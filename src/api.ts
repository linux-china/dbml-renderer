import {check} from "./checker";
import {parse} from "./parser";
import {Format, render} from "./renderer";
import {instance} from "@viz-js/viz";

const vizPromise = instance();

export async function renderDbml(dbmlText: string, format: Format): Promise<string> {
    return await render(check(parse(dbmlText)), format);
}

export async function dot2svg(dotText: string) {
    return (await vizPromise).renderString(dotText, {format: "svg"});
}