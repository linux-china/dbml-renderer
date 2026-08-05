import { check } from "./checker";
import { parse } from "./parser";
import { Format, render } from "./renderer";

export const run = async (input: string, format: Format): Promise<string> => {
  return await render(check(parse(input)), format);
};
