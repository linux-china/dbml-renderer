import z from "zod";
export declare const Comment: z.ZodObject<{
    type: z.ZodLiteral<"comment">;
    comment: z.ZodString;
}, z.core.$strip>;
export type Comment = z.infer<typeof Comment>;
export declare const Settings: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>;
export type Settings = z.infer<typeof Settings>;
export declare const Options: z.ZodRecord<z.ZodString, z.ZodString>;
export type Options = z.infer<typeof Options>;
export declare const Project: z.ZodObject<{
    type: z.ZodLiteral<"project">;
    name: z.ZodNullable<z.ZodString>;
    options: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>, z.ZodTransform<Record<string, string>, Record<string, string> | null>>;
}, z.core.$strip>;
export type Project = z.infer<typeof Project>;
export declare const StickyNote: z.ZodObject<{
    type: z.ZodLiteral<"note">;
    name: z.ZodString;
    note: z.ZodString;
}, z.core.$strip>;
export type StickyNote = z.infer<typeof StickyNote>;
export declare const Column: z.ZodObject<{
    type: z.ZodLiteral<"column">;
    name: z.ZodString;
    data: z.ZodString;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>;
export type Column = z.infer<typeof Column>;
export declare const TableOption: z.ZodObject<{
    type: z.ZodLiteral<"option">;
    option: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type TableOption = z.infer<typeof TableOption>;
export declare const TableIndices: z.ZodObject<{
    type: z.ZodLiteral<"indices">;
    indices: z.ZodArray<z.ZodObject<{
        columns: z.ZodArray<z.ZodString>;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TableIndices = z.infer<typeof TableIndices>;
export declare const TableChecks: z.ZodObject<{
    type: z.ZodLiteral<"checks">;
    checks: z.ZodArray<z.ZodObject<{
        expression: z.ZodString;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TableChecks = z.infer<typeof TableChecks>;
export declare const RecordValue: z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"string">;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"number">;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"boolean">;
    value: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"null">;
    value: z.ZodNull;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"expression">;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"identifier">;
    value: z.ZodString;
}, z.core.$strip>], "kind">;
export type RecordValue = z.infer<typeof RecordValue>;
export declare const RecordRow: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
    kind: z.ZodLiteral<"string">;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"number">;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"boolean">;
    value: z.ZodBoolean;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"null">;
    value: z.ZodNull;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"expression">;
    value: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    kind: z.ZodLiteral<"identifier">;
    value: z.ZodString;
}, z.core.$strip>], "kind">>;
export type RecordRow = z.infer<typeof RecordRow>;
export declare const TableRecords: z.ZodObject<{
    type: z.ZodLiteral<"records">;
    columns: z.ZodNullable<z.ZodArray<z.ZodString>>;
    rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"number">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"boolean">;
        value: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"null">;
        value: z.ZodNull;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"expression">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"identifier">;
        value: z.ZodString;
    }, z.core.$strip>], "kind">>>;
}, z.core.$strip>;
export type TableRecords = z.infer<typeof TableRecords>;
export declare const Records: z.ZodObject<{
    type: z.ZodLiteral<"records">;
    rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"number">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"boolean">;
        value: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"null">;
        value: z.ZodNull;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"expression">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"identifier">;
        value: z.ZodString;
    }, z.core.$strip>], "kind">>>;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Records = z.infer<typeof Records>;
export declare const Table: z.ZodObject<{
    type: z.ZodLiteral<"table">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    alias: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"column">;
        name: z.ZodString;
        data: z.ZodString;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"indices">;
        indices: z.ZodArray<z.ZodObject<{
            columns: z.ZodArray<z.ZodString>;
            settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"checks">;
        checks: z.ZodArray<z.ZodObject<{
            expression: z.ZodString;
            settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"records">;
        columns: z.ZodNullable<z.ZodArray<z.ZodString>>;
        rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"number">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"boolean">;
            value: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"null">;
            value: z.ZodNull;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"expression">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"identifier">;
            value: z.ZodString;
        }, z.core.$strip>], "kind">>>;
    }, z.core.$strip>]>>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>;
export type Table = z.infer<typeof Table>;
export declare const TableRef: z.ZodObject<{
    type: z.ZodLiteral<"table">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
}, z.core.$strip>;
export type TableRef = z.infer<typeof TableRef>;
export declare const TableGroupOption: z.ZodObject<{
    type: z.ZodLiteral<"option">;
    option: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type TableGroupOption = z.infer<typeof TableGroupOption>;
export declare const TableGroup: z.ZodObject<{
    type: z.ZodLiteral<"group">;
    name: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"table">;
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>]>>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>;
export type TableGroup = z.infer<typeof TableGroup>;
export declare const EnumValue: z.ZodObject<{
    type: z.ZodLiteral<"value">;
    name: z.ZodString;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>;
export type EnumValue = z.infer<typeof EnumValue>;
export declare const Enum: z.ZodObject<{
    type: z.ZodLiteral<"enum">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"value">;
        name: z.ZodString;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Enum = z.infer<typeof Enum>;
export declare const Cardinality: z.ZodUnion<readonly [z.ZodLiteral<"<>">, z.ZodLiteral<">">, z.ZodLiteral<"<">, z.ZodLiteral<"-">]>;
export type Cardinality = z.infer<typeof Cardinality>;
declare const ColumnRef: z.ZodObject<{
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ColumnRef = z.infer<typeof ColumnRef>;
export declare const Ref: z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    cardinality: z.ZodUnion<readonly [z.ZodLiteral<"<>">, z.ZodLiteral<">">, z.ZodLiteral<"<">, z.ZodLiteral<"-">]>;
    from: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    to: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>;
export type Ref = z.infer<typeof Ref>;
export declare const DepEndpoint: z.ZodObject<{
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    column: z.ZodNullable<z.ZodString>;
    parts: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type DepEndpoint = z.infer<typeof DepEndpoint>;
export declare const DepEdge: z.ZodObject<{
    from: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        column: z.ZodNullable<z.ZodString>;
        parts: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    to: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        column: z.ZodNullable<z.ZodString>;
        parts: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>;
export type DepEdge = z.infer<typeof DepEdge>;
export declare const Dep: z.ZodObject<{
    type: z.ZodLiteral<"dep">;
    name: z.ZodNullable<z.ZodString>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    edges: z.ZodArray<z.ZodObject<{
        from: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        to: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Dep = z.infer<typeof Dep>;
export declare const Entity: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"comment">;
    comment: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"project">;
    name: z.ZodNullable<z.ZodString>;
    options: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>, z.ZodTransform<Record<string, string>, Record<string, string> | null>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"note">;
    name: z.ZodString;
    note: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"table">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    alias: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"column">;
        name: z.ZodString;
        data: z.ZodString;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"indices">;
        indices: z.ZodArray<z.ZodObject<{
            columns: z.ZodArray<z.ZodString>;
            settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"checks">;
        checks: z.ZodArray<z.ZodObject<{
            expression: z.ZodString;
            settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"records">;
        columns: z.ZodNullable<z.ZodArray<z.ZodString>>;
        rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"number">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"boolean">;
            value: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"null">;
            value: z.ZodNull;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"expression">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"identifier">;
            value: z.ZodString;
        }, z.core.$strip>], "kind">>>;
    }, z.core.$strip>]>>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"group">;
    name: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"table">;
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>]>>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"enum">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"value">;
        name: z.ZodString;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>]>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    cardinality: z.ZodUnion<readonly [z.ZodLiteral<"<>">, z.ZodLiteral<">">, z.ZodLiteral<"<">, z.ZodLiteral<"-">]>;
    from: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    to: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"dep">;
    name: z.ZodNullable<z.ZodString>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    edges: z.ZodArray<z.ZodObject<{
        from: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        to: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"records">;
    rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"number">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"boolean">;
        value: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"null">;
        value: z.ZodNull;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"expression">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"identifier">;
        value: z.ZodString;
    }, z.core.$strip>], "kind">>>;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodString>;
}, z.core.$strip>]>;
export type Entity = z.infer<typeof Entity>;
export declare const Output: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"comment">;
    comment: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"project">;
    name: z.ZodNullable<z.ZodString>;
    options: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodString>>, z.ZodTransform<Record<string, string>, Record<string, string> | null>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"note">;
    name: z.ZodString;
    note: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"table">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    alias: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"column">;
        name: z.ZodString;
        data: z.ZodString;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"indices">;
        indices: z.ZodArray<z.ZodObject<{
            columns: z.ZodArray<z.ZodString>;
            settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"checks">;
        checks: z.ZodArray<z.ZodObject<{
            expression: z.ZodString;
            settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"records">;
        columns: z.ZodNullable<z.ZodArray<z.ZodString>>;
        rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            kind: z.ZodLiteral<"string">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"number">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"boolean">;
            value: z.ZodBoolean;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"null">;
            value: z.ZodNull;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"expression">;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            kind: z.ZodLiteral<"identifier">;
            value: z.ZodString;
        }, z.core.$strip>], "kind">>>;
    }, z.core.$strip>]>>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"group">;
    name: z.ZodNullable<z.ZodString>;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"table">;
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"option">;
        option: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>]>>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"enum">;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"comment">;
        comment: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"value">;
        name: z.ZodString;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>]>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ref">;
    cardinality: z.ZodUnion<readonly [z.ZodLiteral<"<>">, z.ZodLiteral<">">, z.ZodLiteral<"<">, z.ZodLiteral<"-">]>;
    from: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    to: z.ZodObject<{
        schema: z.ZodNullable<z.ZodString>;
        name: z.ZodString;
        columns: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"dep">;
    name: z.ZodNullable<z.ZodString>;
    settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    options: z.ZodRecord<z.ZodString, z.ZodString>;
    edges: z.ZodArray<z.ZodObject<{
        from: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        to: z.ZodObject<{
            schema: z.ZodNullable<z.ZodString>;
            name: z.ZodString;
            column: z.ZodNullable<z.ZodString>;
            parts: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        settings: z.ZodPipe<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>, z.ZodTransform<Record<string, string | null>, Record<string, string | null> | null>>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"records">;
    rows: z.ZodArray<z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        kind: z.ZodLiteral<"string">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"number">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"boolean">;
        value: z.ZodBoolean;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"null">;
        value: z.ZodNull;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"expression">;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        kind: z.ZodLiteral<"identifier">;
        value: z.ZodString;
    }, z.core.$strip>], "kind">>>;
    schema: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    columns: z.ZodArray<z.ZodString>;
}, z.core.$strip>]>>;
export type Output = z.infer<typeof Output>;
export {};
