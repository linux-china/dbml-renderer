import z from "zod";
export declare const Comment: z.ZodObject<{
    type: z.ZodLiteral<"comment">;
    comment: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "comment";
    comment: string;
}, {
    type: "comment";
    comment: string;
}>;
export type Comment = z.infer<typeof Comment>;
export declare const Settings: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>;
export type Settings = z.infer<typeof Settings>;
export declare const Options: z.ZodRecord<z.ZodString, z.ZodString>;
export type Options = z.infer<typeof Options>;
export declare const Project: z.ZodObject<{
    type: z.ZodLiteral<"project">;
    name: z.ZodNullable<z.ZodString>;
    options: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>, Record<string, string>, Record<string, string> | null>;
}, "strip", z.ZodTypeAny, {
    type: "project";
    name: string | null;
    options: Record<string, string>;
}, {
    type: "project";
    name: string | null;
    options: Record<string, string> | null;
}>;
export type Project = z.infer<typeof Project>;
export declare const StickyNote: z.ZodObject<{
    type: z.ZodLiteral<"note">;
    name: z.ZodString;
    note: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    note: string;
}, {
    type: "note";
    name: string;
    note: string;
}>;
export type StickyNote = z.infer<typeof StickyNote>;
export declare const Column: z.ZodObject<{
    type: z.ZodLiteral<"column">;
    name: z.ZodString;
    data: z.ZodString;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "column";
    name: string;
    data: string;
    settings: Record<string, string | null>;
}, {
    type: "column";
    name: string;
    data: string;
    settings: Record<string, string | null> | null;
}>;
export type Column = z.infer<typeof Column>;
export declare const TableOption: z.ZodObject<{
    type: z.ZodLiteral<"option">;
    option: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "option";
    option: Record<string, string>;
}, {
    type: "option";
    option: Record<string, string>;
}>;
export type TableOption = z.infer<typeof TableOption>;
export declare const TableIndices: z.ZodObject<{
    type: z.ZodLiteral<"indices">;
    indices: z.ZodArray<z.ZodObject<{
        columns: z.ZodArray<z.ZodString, "many">;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        columns: string[];
        settings: Record<string, string | null>;
    }, {
        columns: string[];
        settings: Record<string, string | null> | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "indices";
    indices: {
        columns: string[];
        settings: Record<string, string | null>;
    }[];
}, {
    type: "indices";
    indices: {
        columns: string[];
        settings: Record<string, string | null> | null;
    }[];
}>;
export type TableIndices = z.infer<typeof TableIndices>;
export declare const TableChecks: z.ZodObject<{
    type: z.ZodLiteral<"checks">;
    checks: z.ZodArray<z.ZodObject<{
        expression: z.ZodString;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        expression: string;
        settings: Record<string, string | null>;
    }, {
        expression: string;
        settings: Record<string, string | null> | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "checks";
    checks: {
        expression: string;
        settings: Record<string, string | null>;
    }[];
}, {
    type: "checks";
    checks: {
        expression: string;
        settings: Record<string, string | null> | null;
    }[];
}>;
export type TableChecks = z.infer<typeof TableChecks>;
export declare const RecordValue: z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"string">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "string";
    value: string;
}, {
    kind: "string";
    value: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"number">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "number";
    value: string;
}, {
    kind: "number";
    value: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"boolean">;
    value: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    kind: "boolean";
    value: boolean;
}, {
    kind: "boolean";
    value: boolean;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"null">;
    value: z.ZodNull;
}, "strip", z.ZodTypeAny, {
    kind: "null";
    value: null;
}, {
    kind: "null";
    value: null;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"expression">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "expression";
    value: string;
}, {
    kind: "expression";
    value: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"identifier">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "identifier";
    value: string;
}, {
    kind: "identifier";
    value: string;
}>]>;
export type RecordValue = z.infer<typeof RecordValue>;
export declare const RecordRow: z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
    kind: z.ZodLiteral<"string">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "string";
    value: string;
}, {
    kind: "string";
    value: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"number">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "number";
    value: string;
}, {
    kind: "number";
    value: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"boolean">;
    value: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    kind: "boolean";
    value: boolean;
}, {
    kind: "boolean";
    value: boolean;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"null">;
    value: z.ZodNull;
}, "strip", z.ZodTypeAny, {
    kind: "null";
    value: null;
}, {
    kind: "null";
    value: null;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"expression">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "expression";
    value: string;
}, {
    kind: "expression";
    value: string;
}>, z.ZodObject<{
    kind: z.ZodLiteral<"identifier">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    kind: "identifier";
    value: string;
}, {
    kind: "identifier";
    value: string;
}>]>, "many">;
export type RecordRow = z.infer<typeof RecordRow>;
export declare const TableRecords: z.ZodObject<{
    type: z.ZodLiteral<"records">;
    columns: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "string";
        value: string;
    }, {
        kind: "string";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"number">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "number";
        value: string;
    }, {
        kind: "number";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"boolean">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        kind: "boolean";
        value: boolean;
    }, {
        kind: "boolean";
        value: boolean;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"null">;
        value: z.ZodNull;
    }, "strip", z.ZodTypeAny, {
        kind: "null";
        value: null;
    }, {
        kind: "null";
        value: null;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"expression">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "expression";
        value: string;
    }, {
        kind: "expression";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"identifier">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "identifier";
        value: string;
    }, {
        kind: "identifier";
        value: string;
    }>]>, "many">, "many">;
}, "strip", z.ZodTypeAny, {
    type: "records";
    columns: string[] | null;
    rows: ({
        kind: "string";
        value: string;
    } | {
        kind: "number";
        value: string;
    } | {
        kind: "boolean";
        value: boolean;
    } | {
        kind: "null";
        value: null;
    } | {
        kind: "expression";
        value: string;
    } | {
        kind: "identifier";
        value: string;
    })[][];
}, {
    type: "records";
    columns: string[] | null;
    rows: ({
        kind: "string";
        value: string;
    } | {
        kind: "number";
        value: string;
    } | {
        kind: "boolean";
        value: boolean;
    } | {
        kind: "null";
        value: null;
    } | {
        kind: "expression";
        value: string;
    } | {
        kind: "identifier";
        value: string;
    })[][];
}>;
export type TableRecords = z.infer<typeof TableRecords>;
export declare const Records: z.ZodObject<{
    type: z.ZodLiteral<"records">;
    rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "string";
        value: string;
    }, {
        kind: "string";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"number">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "number";
        value: string;
    }, {
        kind: "number";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"boolean">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        kind: "boolean";
        value: boolean;
    }, {
        kind: "boolean";
        value: boolean;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"null">;
        value: z.ZodNull;
    }, "strip", z.ZodTypeAny, {
        kind: "null";
        value: null;
    }, {
        kind: "null";
        value: null;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"expression">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "expression";
        value: string;
    }, {
        kind: "expression";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"identifier">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "identifier";
        value: string;
    }, {
        kind: "identifier";
        value: string;
    }>]>, "many">, "many">;
} & {
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "records";
    rows: ({
        kind: "string";
        value: string;
    } | {
        kind: "number";
        value: string;
    } | {
        kind: "boolean";
        value: boolean;
    } | {
        kind: "null";
        value: null;
    } | {
        kind: "expression";
        value: string;
    } | {
        kind: "identifier";
        value: string;
    })[][];
    schema: string | null;
    name: string;
    columns: string[];
}, {
    type: "records";
    rows: ({
        kind: "string";
        value: string;
    } | {
        kind: "number";
        value: string;
    } | {
        kind: "boolean";
        value: boolean;
    } | {
        kind: "null";
        value: null;
    } | {
        kind: "expression";
        value: string;
    } | {
        kind: "identifier";
        value: string;
    })[][];
    schema: string | null;
    name: string;
    columns: string[];
}>;
export type Records = z.infer<typeof Records>;
export declare const Table: z.ZodObject<{
    type: z.ZodLiteral<"table">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    alias: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"column">;
        name: z.ZodString;
        data: z.ZodString;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null>;
    }, {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null> | null;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "option";
        option: Record<string, string>;
    }, {
        type: "option";
        option: Record<string, string>;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"indices">;
        indices: z.ZodArray<z.ZodObject<{
            columns: z.ZodArray<z.ZodString, "many">;
            settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
        }, "strip", z.ZodTypeAny, {
            columns: string[];
            settings: Record<string, string | null>;
        }, {
            columns: string[];
            settings: Record<string, string | null> | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null>;
        }[];
    }, {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null> | null;
        }[];
    }>, z.ZodObject<{
        type: z.ZodLiteral<"checks">;
        checks: z.ZodArray<z.ZodObject<{
            expression: z.ZodString;
            settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
        }, "strip", z.ZodTypeAny, {
            expression: string;
            settings: Record<string, string | null>;
        }, {
            expression: string;
            settings: Record<string, string | null> | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null>;
        }[];
    }, {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null> | null;
        }[];
    }>, z.ZodObject<{
        type: z.ZodLiteral<"records">;
        columns: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
        rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "string";
            value: string;
        }, {
            kind: "string";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"number">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "number";
            value: string;
        }, {
            kind: "number";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"boolean">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            kind: "boolean";
            value: boolean;
        }, {
            kind: "boolean";
            value: boolean;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"null">;
            value: z.ZodNull;
        }, "strip", z.ZodTypeAny, {
            kind: "null";
            value: null;
        }, {
            kind: "null";
            value: null;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"expression">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "expression";
            value: string;
        }, {
            kind: "expression";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"identifier">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "identifier";
            value: string;
        }, {
            kind: "identifier";
            value: string;
        }>]>, "many">, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    }, {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    }>]>, "many">;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "table";
    schema: string | null;
    name: string;
    alias: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null>;
    } | {
        type: "option";
        option: Record<string, string>;
    } | {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null>;
        }[];
    } | {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null>;
        }[];
    } | {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    })[];
    settings: Record<string, string | null>;
}, {
    type: "table";
    schema: string | null;
    name: string;
    alias: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null> | null;
    } | {
        type: "option";
        option: Record<string, string>;
    } | {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null> | null;
        }[];
    } | {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null> | null;
        }[];
    } | {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    })[];
    settings: Record<string, string | null> | null;
}>;
export type Table = z.infer<typeof Table>;
export declare const TableRef: z.ZodObject<{
    type: z.ZodLiteral<"table">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "table";
    schema: string | null;
    name: string;
}, {
    type: "table";
    schema: string | null;
    name: string;
}>;
export type TableRef = z.infer<typeof TableRef>;
export declare const TableGroupOption: z.ZodObject<{
    type: z.ZodLiteral<"option">;
    option: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "option";
    option: Record<string, string>;
}, {
    type: "option";
    option: Record<string, string>;
}>;
export type TableGroupOption = z.infer<typeof TableGroupOption>;
export declare const TableGroup: z.ZodObject<{
    type: z.ZodLiteral<"group">;
    name: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"table">;
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "table";
        schema: string | null;
        name: string;
    }, {
        type: "table";
        schema: string | null;
        name: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "option";
        option: Record<string, string>;
    }, {
        type: "option";
        option: Record<string, string>;
    }>]>, "many">;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "table";
        schema: string | null;
        name: string;
    } | {
        type: "option";
        option: Record<string, string>;
    })[];
    settings: Record<string, string | null>;
}, {
    type: "group";
    name: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "table";
        schema: string | null;
        name: string;
    } | {
        type: "option";
        option: Record<string, string>;
    })[];
    settings: Record<string, string | null> | null;
}>;
export type TableGroup = z.infer<typeof TableGroup>;
export declare const EnumValue: z.ZodObject<{
    type: z.ZodLiteral<"value">;
    name: z.ZodString;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "value";
    name: string;
    settings: Record<string, string | null>;
}, {
    type: "value";
    name: string;
    settings: Record<string, string | null> | null;
}>;
export type EnumValue = z.infer<typeof EnumValue>;
export declare const Enum: z.ZodObject<{
    type: z.ZodLiteral<"enum">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"value">;
        name: z.ZodString;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        type: "value";
        name: string;
        settings: Record<string, string | null>;
    }, {
        type: "value";
        name: string;
        settings: Record<string, string | null> | null;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "enum";
    schema: string | null;
    name: string;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "value";
        name: string;
        settings: Record<string, string | null>;
    })[];
}, {
    type: "enum";
    schema: string | null;
    name: string;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "value";
        name: string;
        settings: Record<string, string | null> | null;
    })[];
}>;
export type Enum = z.infer<typeof Enum>;
export declare const Cardinality: z.ZodUnion<[z.ZodLiteral<"<>">, z.ZodLiteral<">">, z.ZodLiteral<"<">, z.ZodLiteral<"-">]>;
export type Cardinality = z.infer<typeof Cardinality>;
declare const ColumnRef: z.ZodObject<{
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    schema: string | null;
    name: string;
    columns: string[];
}, {
    schema: string | null;
    name: string;
    columns: string[];
}>;
export type ColumnRef = z.infer<typeof ColumnRef>;
export declare const Ref: z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    cardinality: z.ZodUnion<[z.ZodLiteral<"<>">, z.ZodLiteral<">">, z.ZodLiteral<"<">, z.ZodLiteral<"-">]>;
    from: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: string | null;
        name: string;
        columns: string[];
    }, {
        schema: string | null;
        name: string;
        columns: string[];
    }>;
    to: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: string | null;
        name: string;
        columns: string[];
    }, {
        schema: string | null;
        name: string;
        columns: string[];
    }>;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "ref";
    cardinality: "-" | "<" | "<>" | ">";
    from: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    to: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    settings: Record<string, string | null>;
}, {
    type: "ref";
    cardinality: "-" | "<" | "<>" | ">";
    from: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    to: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    settings: Record<string, string | null> | null;
}>;
export type Ref = z.infer<typeof Ref>;
export declare const DepEndpoint: z.ZodObject<{
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    column: z.ZodNullable<z.ZodString>;
    parts: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    schema: string | null;
    name: string;
    column: string | null;
    parts: string[];
}, {
    schema: string | null;
    name: string;
    column: string | null;
    parts: string[];
}>;
export type DepEndpoint = z.infer<typeof DepEndpoint>;
export declare const DepEdge: z.ZodObject<{
    from: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        column: z.ZodNullable<z.ZodString>;
        parts: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: string | null;
        name: string;
        column: string | null;
        parts: string[];
    }, {
        schema: string | null;
        name: string;
        column: string | null;
        parts: string[];
    }>;
    to: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        column: z.ZodNullable<z.ZodString>;
        parts: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: string | null;
        name: string;
        column: string | null;
        parts: string[];
    }, {
        schema: string | null;
        name: string;
        column: string | null;
        parts: string[];
    }>;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    from: {
        schema: string | null;
        name: string;
        column: string | null;
        parts: string[];
    };
    to: {
        schema: string | null;
        name: string;
        column: string | null;
        parts: string[];
    };
    settings: Record<string, string | null>;
}, {
    from: {
        schema: string | null;
        name: string;
        column: string | null;
        parts: string[];
    };
    to: {
        schema: string | null;
        name: string;
        column: string | null;
        parts: string[];
    };
    settings: Record<string, string | null> | null;
}>;
export type DepEdge = z.infer<typeof DepEdge>;
export declare const Dep: z.ZodObject<{
    type: z.ZodLiteral<"dep">;
    name: z.ZodNullable<z.ZodString>;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    edges: z.ZodArray<z.ZodObject<{
        from: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }>;
        to: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }>;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null>;
    }, {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null> | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "dep";
    name: string | null;
    settings: Record<string, string | null>;
    options: Record<string, string>;
    edges: {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null>;
    }[];
}, {
    type: "dep";
    name: string | null;
    settings: Record<string, string | null> | null;
    options: Record<string, string>;
    edges: {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null> | null;
    }[];
}>;
export type Dep = z.infer<typeof Dep>;
export declare const Entity: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"comment">;
    comment: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "comment";
    comment: string;
}, {
    type: "comment";
    comment: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"project">;
    name: z.ZodNullable<z.ZodString>;
    options: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>, Record<string, string>, Record<string, string> | null>;
}, "strip", z.ZodTypeAny, {
    type: "project";
    name: string | null;
    options: Record<string, string>;
}, {
    type: "project";
    name: string | null;
    options: Record<string, string> | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"note">;
    name: z.ZodString;
    note: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    note: string;
}, {
    type: "note";
    name: string;
    note: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"table">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    alias: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"column">;
        name: z.ZodString;
        data: z.ZodString;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null>;
    }, {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null> | null;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "option";
        option: Record<string, string>;
    }, {
        type: "option";
        option: Record<string, string>;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"indices">;
        indices: z.ZodArray<z.ZodObject<{
            columns: z.ZodArray<z.ZodString, "many">;
            settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
        }, "strip", z.ZodTypeAny, {
            columns: string[];
            settings: Record<string, string | null>;
        }, {
            columns: string[];
            settings: Record<string, string | null> | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null>;
        }[];
    }, {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null> | null;
        }[];
    }>, z.ZodObject<{
        type: z.ZodLiteral<"checks">;
        checks: z.ZodArray<z.ZodObject<{
            expression: z.ZodString;
            settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
        }, "strip", z.ZodTypeAny, {
            expression: string;
            settings: Record<string, string | null>;
        }, {
            expression: string;
            settings: Record<string, string | null> | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null>;
        }[];
    }, {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null> | null;
        }[];
    }>, z.ZodObject<{
        type: z.ZodLiteral<"records">;
        columns: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
        rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "string";
            value: string;
        }, {
            kind: "string";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"number">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "number";
            value: string;
        }, {
            kind: "number";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"boolean">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            kind: "boolean";
            value: boolean;
        }, {
            kind: "boolean";
            value: boolean;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"null">;
            value: z.ZodNull;
        }, "strip", z.ZodTypeAny, {
            kind: "null";
            value: null;
        }, {
            kind: "null";
            value: null;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"expression">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "expression";
            value: string;
        }, {
            kind: "expression";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"identifier">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "identifier";
            value: string;
        }, {
            kind: "identifier";
            value: string;
        }>]>, "many">, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    }, {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    }>]>, "many">;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "table";
    schema: string | null;
    name: string;
    alias: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null>;
    } | {
        type: "option";
        option: Record<string, string>;
    } | {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null>;
        }[];
    } | {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null>;
        }[];
    } | {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    })[];
    settings: Record<string, string | null>;
}, {
    type: "table";
    schema: string | null;
    name: string;
    alias: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null> | null;
    } | {
        type: "option";
        option: Record<string, string>;
    } | {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null> | null;
        }[];
    } | {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null> | null;
        }[];
    } | {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    })[];
    settings: Record<string, string | null> | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"group">;
    name: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"table">;
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "table";
        schema: string | null;
        name: string;
    }, {
        type: "table";
        schema: string | null;
        name: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "option";
        option: Record<string, string>;
    }, {
        type: "option";
        option: Record<string, string>;
    }>]>, "many">;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "table";
        schema: string | null;
        name: string;
    } | {
        type: "option";
        option: Record<string, string>;
    })[];
    settings: Record<string, string | null>;
}, {
    type: "group";
    name: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "table";
        schema: string | null;
        name: string;
    } | {
        type: "option";
        option: Record<string, string>;
    })[];
    settings: Record<string, string | null> | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"enum">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"value">;
        name: z.ZodString;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        type: "value";
        name: string;
        settings: Record<string, string | null>;
    }, {
        type: "value";
        name: string;
        settings: Record<string, string | null> | null;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "enum";
    schema: string | null;
    name: string;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "value";
        name: string;
        settings: Record<string, string | null>;
    })[];
}, {
    type: "enum";
    schema: string | null;
    name: string;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "value";
        name: string;
        settings: Record<string, string | null> | null;
    })[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    cardinality: z.ZodUnion<[z.ZodLiteral<"<>">, z.ZodLiteral<">">, z.ZodLiteral<"<">, z.ZodLiteral<"-">]>;
    from: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: string | null;
        name: string;
        columns: string[];
    }, {
        schema: string | null;
        name: string;
        columns: string[];
    }>;
    to: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: string | null;
        name: string;
        columns: string[];
    }, {
        schema: string | null;
        name: string;
        columns: string[];
    }>;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "ref";
    cardinality: "-" | "<" | "<>" | ">";
    from: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    to: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    settings: Record<string, string | null>;
}, {
    type: "ref";
    cardinality: "-" | "<" | "<>" | ">";
    from: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    to: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    settings: Record<string, string | null> | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"dep">;
    name: z.ZodNullable<z.ZodString>;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    edges: z.ZodArray<z.ZodObject<{
        from: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }>;
        to: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }>;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null>;
    }, {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null> | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "dep";
    name: string | null;
    settings: Record<string, string | null>;
    options: Record<string, string>;
    edges: {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null>;
    }[];
}, {
    type: "dep";
    name: string | null;
    settings: Record<string, string | null> | null;
    options: Record<string, string>;
    edges: {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null> | null;
    }[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"records">;
    rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "string";
        value: string;
    }, {
        kind: "string";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"number">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "number";
        value: string;
    }, {
        kind: "number";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"boolean">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        kind: "boolean";
        value: boolean;
    }, {
        kind: "boolean";
        value: boolean;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"null">;
        value: z.ZodNull;
    }, "strip", z.ZodTypeAny, {
        kind: "null";
        value: null;
    }, {
        kind: "null";
        value: null;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"expression">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "expression";
        value: string;
    }, {
        kind: "expression";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"identifier">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "identifier";
        value: string;
    }, {
        kind: "identifier";
        value: string;
    }>]>, "many">, "many">;
} & {
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "records";
    rows: ({
        kind: "string";
        value: string;
    } | {
        kind: "number";
        value: string;
    } | {
        kind: "boolean";
        value: boolean;
    } | {
        kind: "null";
        value: null;
    } | {
        kind: "expression";
        value: string;
    } | {
        kind: "identifier";
        value: string;
    })[][];
    schema: string | null;
    name: string;
    columns: string[];
}, {
    type: "records";
    rows: ({
        kind: "string";
        value: string;
    } | {
        kind: "number";
        value: string;
    } | {
        kind: "boolean";
        value: boolean;
    } | {
        kind: "null";
        value: null;
    } | {
        kind: "expression";
        value: string;
    } | {
        kind: "identifier";
        value: string;
    })[][];
    schema: string | null;
    name: string;
    columns: string[];
}>]>;
export type Entity = z.infer<typeof Entity>;
export declare const Output: z.ZodArray<z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"comment">;
    comment: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "comment";
    comment: string;
}, {
    type: "comment";
    comment: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"project">;
    name: z.ZodNullable<z.ZodString>;
    options: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>, Record<string, string>, Record<string, string> | null>;
}, "strip", z.ZodTypeAny, {
    type: "project";
    name: string | null;
    options: Record<string, string>;
}, {
    type: "project";
    name: string | null;
    options: Record<string, string> | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"note">;
    name: z.ZodString;
    note: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "note";
    name: string;
    note: string;
}, {
    type: "note";
    name: string;
    note: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"table">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    alias: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"column">;
        name: z.ZodString;
        data: z.ZodString;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null>;
    }, {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null> | null;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "option";
        option: Record<string, string>;
    }, {
        type: "option";
        option: Record<string, string>;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"indices">;
        indices: z.ZodArray<z.ZodObject<{
            columns: z.ZodArray<z.ZodString, "many">;
            settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
        }, "strip", z.ZodTypeAny, {
            columns: string[];
            settings: Record<string, string | null>;
        }, {
            columns: string[];
            settings: Record<string, string | null> | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null>;
        }[];
    }, {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null> | null;
        }[];
    }>, z.ZodObject<{
        type: z.ZodLiteral<"checks">;
        checks: z.ZodArray<z.ZodObject<{
            expression: z.ZodString;
            settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
        }, "strip", z.ZodTypeAny, {
            expression: string;
            settings: Record<string, string | null>;
        }, {
            expression: string;
            settings: Record<string, string | null> | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null>;
        }[];
    }, {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null> | null;
        }[];
    }>, z.ZodObject<{
        type: z.ZodLiteral<"records">;
        columns: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
        rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
            kind: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "string";
            value: string;
        }, {
            kind: "string";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"number">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "number";
            value: string;
        }, {
            kind: "number";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"boolean">;
            value: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            kind: "boolean";
            value: boolean;
        }, {
            kind: "boolean";
            value: boolean;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"null">;
            value: z.ZodNull;
        }, "strip", z.ZodTypeAny, {
            kind: "null";
            value: null;
        }, {
            kind: "null";
            value: null;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"expression">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "expression";
            value: string;
        }, {
            kind: "expression";
            value: string;
        }>, z.ZodObject<{
            kind: z.ZodLiteral<"identifier">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            kind: "identifier";
            value: string;
        }, {
            kind: "identifier";
            value: string;
        }>]>, "many">, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    }, {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    }>]>, "many">;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "table";
    schema: string | null;
    name: string;
    alias: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null>;
    } | {
        type: "option";
        option: Record<string, string>;
    } | {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null>;
        }[];
    } | {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null>;
        }[];
    } | {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    })[];
    settings: Record<string, string | null>;
}, {
    type: "table";
    schema: string | null;
    name: string;
    alias: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "column";
        name: string;
        data: string;
        settings: Record<string, string | null> | null;
    } | {
        type: "option";
        option: Record<string, string>;
    } | {
        type: "indices";
        indices: {
            columns: string[];
            settings: Record<string, string | null> | null;
        }[];
    } | {
        type: "checks";
        checks: {
            expression: string;
            settings: Record<string, string | null> | null;
        }[];
    } | {
        type: "records";
        columns: string[] | null;
        rows: ({
            kind: "string";
            value: string;
        } | {
            kind: "number";
            value: string;
        } | {
            kind: "boolean";
            value: boolean;
        } | {
            kind: "null";
            value: null;
        } | {
            kind: "expression";
            value: string;
        } | {
            kind: "identifier";
            value: string;
        })[][];
    })[];
    settings: Record<string, string | null> | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"group">;
    name: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"table">;
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "table";
        schema: string | null;
        name: string;
    }, {
        type: "table";
        schema: string | null;
        name: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "option";
        option: Record<string, string>;
    }, {
        type: "option";
        option: Record<string, string>;
    }>]>, "many">;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "group";
    name: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "table";
        schema: string | null;
        name: string;
    } | {
        type: "option";
        option: Record<string, string>;
    })[];
    settings: Record<string, string | null>;
}, {
    type: "group";
    name: string | null;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "table";
        schema: string | null;
        name: string;
    } | {
        type: "option";
        option: Record<string, string>;
    })[];
    settings: Record<string, string | null> | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"enum">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    items: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "comment";
        comment: string;
    }, {
        type: "comment";
        comment: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"value">;
        name: z.ZodString;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        type: "value";
        name: string;
        settings: Record<string, string | null>;
    }, {
        type: "value";
        name: string;
        settings: Record<string, string | null> | null;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "enum";
    schema: string | null;
    name: string;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "value";
        name: string;
        settings: Record<string, string | null>;
    })[];
}, {
    type: "enum";
    schema: string | null;
    name: string;
    items: ({
        type: "comment";
        comment: string;
    } | {
        type: "value";
        name: string;
        settings: Record<string, string | null> | null;
    })[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    cardinality: z.ZodUnion<[z.ZodLiteral<"<>">, z.ZodLiteral<">">, z.ZodLiteral<"<">, z.ZodLiteral<"-">]>;
    from: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: string | null;
        name: string;
        columns: string[];
    }, {
        schema: string | null;
        name: string;
        columns: string[];
    }>;
    to: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: string | null;
        name: string;
        columns: string[];
    }, {
        schema: string | null;
        name: string;
        columns: string[];
    }>;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
}, "strip", z.ZodTypeAny, {
    type: "ref";
    cardinality: "-" | "<" | "<>" | ">";
    from: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    to: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    settings: Record<string, string | null>;
}, {
    type: "ref";
    cardinality: "-" | "<" | "<>" | ">";
    from: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    to: {
        schema: string | null;
        name: string;
        columns: string[];
    };
    settings: Record<string, string | null> | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"dep">;
    name: z.ZodNullable<z.ZodString>;
    settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    edges: z.ZodArray<z.ZodObject<{
        from: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }>;
        to: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }, {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        }>;
        settings: z.ZodEffects<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, Record<string, string | null>, Record<string, string | null> | null>;
    }, "strip", z.ZodTypeAny, {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null>;
    }, {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null> | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "dep";
    name: string | null;
    settings: Record<string, string | null>;
    options: Record<string, string>;
    edges: {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null>;
    }[];
}, {
    type: "dep";
    name: string | null;
    settings: Record<string, string | null> | null;
    options: Record<string, string>;
    edges: {
        from: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        to: {
            schema: string | null;
            name: string;
            column: string | null;
            parts: string[];
        };
        settings: Record<string, string | null> | null;
    }[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"records">;
    rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<"kind", [z.ZodObject<{
        kind: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "string";
        value: string;
    }, {
        kind: "string";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"number">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "number";
        value: string;
    }, {
        kind: "number";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"boolean">;
        value: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        kind: "boolean";
        value: boolean;
    }, {
        kind: "boolean";
        value: boolean;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"null">;
        value: z.ZodNull;
    }, "strip", z.ZodTypeAny, {
        kind: "null";
        value: null;
    }, {
        kind: "null";
        value: null;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"expression">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "expression";
        value: string;
    }, {
        kind: "expression";
        value: string;
    }>, z.ZodObject<{
        kind: z.ZodLiteral<"identifier">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        kind: "identifier";
        value: string;
    }, {
        kind: "identifier";
        value: string;
    }>]>, "many">, "many">;
} & {
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    type: "records";
    rows: ({
        kind: "string";
        value: string;
    } | {
        kind: "number";
        value: string;
    } | {
        kind: "boolean";
        value: boolean;
    } | {
        kind: "null";
        value: null;
    } | {
        kind: "expression";
        value: string;
    } | {
        kind: "identifier";
        value: string;
    })[][];
    schema: string | null;
    name: string;
    columns: string[];
}, {
    type: "records";
    rows: ({
        kind: "string";
        value: string;
    } | {
        kind: "number";
        value: string;
    } | {
        kind: "boolean";
        value: boolean;
    } | {
        kind: "null";
        value: null;
    } | {
        kind: "expression";
        value: string;
    } | {
        kind: "identifier";
        value: string;
    })[][];
    schema: string | null;
    name: string;
    columns: string[];
}>]>, "many">;
export type Output = z.infer<typeof Output>;
export {};
