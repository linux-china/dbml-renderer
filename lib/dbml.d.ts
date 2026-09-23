declare const _exports: {
    StartRules: string[];
    SyntaxError: typeof peg$SyntaxError;
    parse: typeof peg$parse;
};
export = _exports;
declare class peg$SyntaxError extends SyntaxError {
    expected: any;
    found: any;
    location: any;
    constructor(message: any, expected: any, found: any, location: any);
    format(sources: any): string;
    static buildMessage(expected: any, found: any): string;
}
declare function peg$parse(input: any, options: any): any;
