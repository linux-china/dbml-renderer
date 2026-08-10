import { Format } from "./renderer";
export declare function renderDbml(dbmlText: string, format: Format): Promise<string>;
export declare function dot2svg(dotText: string): Promise<string>;
