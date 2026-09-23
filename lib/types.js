"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = exports.Entity = exports.Dep = exports.DepEdge = exports.DepEndpoint = exports.Ref = exports.Cardinality = exports.Enum = exports.EnumValue = exports.TableGroup = exports.TableGroupOption = exports.TableRef = exports.Table = exports.Records = exports.TableRecords = exports.RecordRow = exports.RecordValue = exports.TableChecks = exports.TableIndices = exports.TableOption = exports.Column = exports.StickyNote = exports.Project = exports.Options = exports.Settings = exports.Comment = void 0;
const zod_1 = __importDefault(require("zod"));
exports.Comment = zod_1.default.object({
    type: zod_1.default.literal("comment"),
    comment: zod_1.default.string(),
});
exports.Settings = zod_1.default.record(zod_1.default.string(), zod_1.default.string().nullable());
exports.Options = zod_1.default.record(zod_1.default.string(), zod_1.default.string());
exports.Project = zod_1.default.object({
    type: zod_1.default.literal("project"),
    name: zod_1.default.string().nullable(),
    options: exports.Options.nullable().transform((v) => v || {}),
});
exports.StickyNote = zod_1.default.object({
    type: zod_1.default.literal("note"),
    name: zod_1.default.string(),
    note: zod_1.default.string(),
});
exports.Column = zod_1.default.object({
    type: zod_1.default.literal("column"),
    name: zod_1.default.string(),
    data: zod_1.default.string(),
    settings: exports.Settings.nullable().transform((v) => v || {}),
});
exports.TableOption = zod_1.default.object({
    type: zod_1.default.literal("option"),
    option: zod_1.default.record(zod_1.default.string(), zod_1.default.string()),
});
exports.TableIndices = zod_1.default.object({
    type: zod_1.default.literal("indices"),
    indices: zod_1.default.array(zod_1.default.object({
        columns: zod_1.default.array(zod_1.default.string()),
        settings: exports.Settings.nullable().transform((v) => v || {}),
    })),
});
exports.TableChecks = zod_1.default.object({
    type: zod_1.default.literal("checks"),
    checks: zod_1.default.array(zod_1.default.object({
        expression: zod_1.default.string(),
        settings: exports.Settings.nullable().transform((v) => v || {}),
    })),
});
// A single field of a data sample row. `kind` reflects how the value was
// written, not the type of the column it ends up in.
exports.RecordValue = zod_1.default.discriminatedUnion("kind", [
    // A quoted string, without its quotes.
    zod_1.default.object({ kind: zod_1.default.literal("string"), value: zod_1.default.string() }),
    // The literal as written (e.g. "-100", "1.5e10"), so that neither precision
    // nor notation is lost.
    zod_1.default.object({ kind: zod_1.default.literal("number"), value: zod_1.default.string() }),
    zod_1.default.object({ kind: zod_1.default.literal("boolean"), value: zod_1.default.boolean() }),
    // An explicit `null`, or a field left empty by an omitted value.
    zod_1.default.object({ kind: zod_1.default.literal("null"), value: zod_1.default.null() }),
    // A backtick-quoted database expression, without its backticks.
    zod_1.default.object({ kind: zod_1.default.literal("expression"), value: zod_1.default.string() }),
    // A bare identifier, typically an enum constant such as `Status.active`.
    zod_1.default.object({ kind: zod_1.default.literal("identifier"), value: zod_1.default.string() }),
]);
exports.RecordRow = zod_1.default.array(exports.RecordValue);
// Data samples declared inside a table. A null column list means the records
// use all of the table's columns in definition order.
exports.TableRecords = zod_1.default.object({
    type: zod_1.default.literal("records"),
    columns: zod_1.default.array(zod_1.default.string()).nullable(),
    rows: zod_1.default.array(exports.RecordRow),
});
// Data samples declared outside a table, which must name their columns.
exports.Records = exports.TableRecords.extend({
    schema: zod_1.default.string().nullable(),
    name: zod_1.default.string(),
    columns: zod_1.default.array(zod_1.default.string()),
});
exports.Table = zod_1.default.object({
    type: zod_1.default.literal("table"),
    schema: zod_1.default.string().nullable(),
    name: zod_1.default.string(),
    alias: zod_1.default.string().nullable(),
    items: zod_1.default.array(zod_1.default.union([
        exports.Comment,
        exports.Column,
        exports.TableOption,
        exports.TableIndices,
        exports.TableChecks,
        exports.TableRecords,
    ])),
    settings: exports.Settings.nullable().transform((v) => v || {}),
});
exports.TableRef = zod_1.default.object({
    type: zod_1.default.literal("table"),
    schema: zod_1.default.string().nullable(),
    name: zod_1.default.string(),
});
exports.TableGroupOption = zod_1.default.object({
    type: zod_1.default.literal("option"),
    option: zod_1.default.record(zod_1.default.string(), zod_1.default.string()),
});
exports.TableGroup = zod_1.default.object({
    type: zod_1.default.literal("group"),
    name: zod_1.default.string().nullable(),
    items: zod_1.default.array(zod_1.default.union([exports.Comment, exports.TableRef, exports.TableGroupOption])),
    settings: exports.Settings.nullable().transform((v) => v || {}),
});
exports.EnumValue = zod_1.default.object({
    type: zod_1.default.literal("value"),
    name: zod_1.default.string(),
    settings: exports.Settings.nullable().transform((v) => v || {}),
});
exports.Enum = zod_1.default.object({
    type: zod_1.default.literal("enum"),
    schema: zod_1.default.string().nullable(),
    name: zod_1.default.string(),
    items: zod_1.default.array(zod_1.default.union([exports.Comment, exports.EnumValue])),
});
exports.Cardinality = zod_1.default.union([
    zod_1.default.literal("<>"),
    zod_1.default.literal(">"),
    zod_1.default.literal("<"),
    zod_1.default.literal("-"),
]);
const ColumnRef = zod_1.default.object({
    schema: zod_1.default.string().nullable(),
    name: zod_1.default.string(),
    columns: zod_1.default.array(zod_1.default.string()),
});
exports.Ref = zod_1.default.object({
    type: zod_1.default.literal("ref"),
    cardinality: exports.Cardinality,
    from: ColumnRef,
    to: ColumnRef,
    settings: exports.Settings.nullable().transform((v) => v || {}),
});
exports.DepEndpoint = zod_1.default.object({
    schema: zod_1.default.string().nullable(),
    name: zod_1.default.string(),
    column: zod_1.default.string().nullable(),
    // The endpoint as written, e.g. ["public", "orders", "amount"].
    parts: zod_1.default.array(zod_1.default.string()),
});
exports.DepEdge = zod_1.default.object({
    // `from` is always the upstream endpoint, `to` the downstream one.
    from: exports.DepEndpoint,
    to: exports.DepEndpoint,
    settings: exports.Settings.nullable().transform((v) => v || {}),
});
exports.Dep = zod_1.default.object({
    type: zod_1.default.literal("dep"),
    name: zod_1.default.string().nullable(),
    settings: exports.Settings.nullable().transform((v) => v || {}),
    options: exports.Options,
    edges: zod_1.default.array(exports.DepEdge),
});
exports.Entity = zod_1.default.union([
    exports.Comment,
    exports.Project,
    exports.StickyNote,
    exports.Table,
    exports.TableGroup,
    exports.Enum,
    exports.Ref,
    exports.Dep,
    exports.Records,
]);
exports.Output = zod_1.default.array(exports.Entity);
