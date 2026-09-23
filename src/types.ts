import z from "zod";

export const Comment = z.object({
  type: z.literal("comment"),
  comment: z.string(),
});
export type Comment = z.infer<typeof Comment>;

export const Settings = z.record(z.string(), z.string().nullable());
export type Settings = z.infer<typeof Settings>;

export const Options = z.record(z.string(), z.string());
export type Options = z.infer<typeof Options>;

export const Project = z.object({
  type: z.literal("project"),
  name: z.string().nullable(),
  options: Options.nullable().transform((v) => v || {}),
});
export type Project = z.infer<typeof Project>;

export const StickyNote = z.object({
  type: z.literal("note"),
  name: z.string(),
  note: z.string(),
});
export type StickyNote = z.infer<typeof StickyNote>;

export const Column = z.object({
  type: z.literal("column"),
  name: z.string(),
  data: z.string(),
  settings: Settings.nullable().transform((v) => v || {}),
});
export type Column = z.infer<typeof Column>;

export const TableOption = z.object({
  type: z.literal("option"),
  option: z.record(z.string(), z.string()),
});
export type TableOption = z.infer<typeof TableOption>;

export const TableIndices = z.object({
  type: z.literal("indices"),
  indices: z.array(
    z.object({
      columns: z.array(z.string()),
      settings: Settings.nullable().transform((v) => v || {}),
    }),
  ),
});
export type TableIndices = z.infer<typeof TableIndices>;

export const TableChecks = z.object({
  type: z.literal("checks"),
  checks: z.array(
    z.object({
      expression: z.string(),
      settings: Settings.nullable().transform((v) => v || {}),
    }),
  ),
});
export type TableChecks = z.infer<typeof TableChecks>;

// A single field of a data sample row. `kind` reflects how the value was
// written, not the type of the column it ends up in.
export const RecordValue = z.discriminatedUnion("kind", [
  // A quoted string, without its quotes.
  z.object({ kind: z.literal("string"), value: z.string() }),
  // The literal as written (e.g. "-100", "1.5e10"), so that neither precision
  // nor notation is lost.
  z.object({ kind: z.literal("number"), value: z.string() }),
  z.object({ kind: z.literal("boolean"), value: z.boolean() }),
  // An explicit `null`, or a field left empty by an omitted value.
  z.object({ kind: z.literal("null"), value: z.null() }),
  // A backtick-quoted database expression, without its backticks.
  z.object({ kind: z.literal("expression"), value: z.string() }),
  // A bare identifier, typically an enum constant such as `Status.active`.
  z.object({ kind: z.literal("identifier"), value: z.string() }),
]);
export type RecordValue = z.infer<typeof RecordValue>;

export const RecordRow = z.array(RecordValue);
export type RecordRow = z.infer<typeof RecordRow>;

// Data samples declared inside a table. A null column list means the records
// use all of the table's columns in definition order.
export const TableRecords = z.object({
  type: z.literal("records"),
  columns: z.array(z.string()).nullable(),
  rows: z.array(RecordRow),
});
export type TableRecords = z.infer<typeof TableRecords>;

// Data samples declared outside a table, which must name their columns.
export const Records = TableRecords.extend({
  schema: z.string().nullable(),
  name: z.string(),
  columns: z.array(z.string()),
});
export type Records = z.infer<typeof Records>;

export const Table = z.object({
  type: z.literal("table"),
  schema: z.string().nullable(),
  name: z.string(),
  alias: z.string().nullable(),
  items: z.array(
    z.union([
      Comment,
      Column,
      TableOption,
      TableIndices,
      TableChecks,
      TableRecords,
    ]),
  ),
  settings: Settings.nullable().transform((v) => v || {}),
});
export type Table = z.infer<typeof Table>;

export const TableRef = z.object({
  type: z.literal("table"),
  schema: z.string().nullable(),
  name: z.string(),
});
export type TableRef = z.infer<typeof TableRef>;

export const TableGroupOption = z.object({
  type: z.literal("option"),
  option: z.record(z.string(), z.string()),
});
export type TableGroupOption = z.infer<typeof TableGroupOption>;

export const TableGroup = z.object({
  type: z.literal("group"),
  name: z.string().nullable(),
  items: z.array(z.union([Comment, TableRef, TableGroupOption])),
  settings: Settings.nullable().transform((v) => v || {}),
});
export type TableGroup = z.infer<typeof TableGroup>;

export const EnumValue = z.object({
  type: z.literal("value"),
  name: z.string(),
  settings: Settings.nullable().transform((v) => v || {}),
});
export type EnumValue = z.infer<typeof EnumValue>;

export const Enum = z.object({
  type: z.literal("enum"),
  schema: z.string().nullable(),
  name: z.string(),
  items: z.array(z.union([Comment, EnumValue])),
});
export type Enum = z.infer<typeof Enum>;

export const Cardinality = z.union([
  z.literal("<>"),
  z.literal(">"),
  z.literal("<"),
  z.literal("-"),
]);
export type Cardinality = z.infer<typeof Cardinality>;

const ColumnRef = z.object({
  schema: z.string().nullable(),
  name: z.string(),
  columns: z.array(z.string()),
});
export type ColumnRef = z.infer<typeof ColumnRef>;

export const Ref = z.object({
  type: z.literal("ref"),
  cardinality: Cardinality,
  from: ColumnRef,
  to: ColumnRef,
  settings: Settings.nullable().transform((v) => v || {}),
});
export type Ref = z.infer<typeof Ref>;

export const DepEndpoint = z.object({
  schema: z.string().nullable(),
  name: z.string(),
  column: z.string().nullable(),
  // The endpoint as written, e.g. ["public", "orders", "amount"].
  parts: z.array(z.string()),
});
export type DepEndpoint = z.infer<typeof DepEndpoint>;

export const DepEdge = z.object({
  // `from` is always the upstream endpoint, `to` the downstream one.
  from: DepEndpoint,
  to: DepEndpoint,
  settings: Settings.nullable().transform((v) => v || {}),
});
export type DepEdge = z.infer<typeof DepEdge>;

export const Dep = z.object({
  type: z.literal("dep"),
  name: z.string().nullable(),
  settings: Settings.nullable().transform((v) => v || {}),
  options: Options,
  edges: z.array(DepEdge),
});
export type Dep = z.infer<typeof Dep>;

export const Entity = z.union([
  Comment,
  Project,
  StickyNote,
  Table,
  TableGroup,
  Enum,
  Ref,
  Dep,
  Records,
]);
export type Entity = z.infer<typeof Entity>;

export const Output = z.array(Entity);
export type Output = z.infer<typeof Output>;
