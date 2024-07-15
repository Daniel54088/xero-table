import { z } from 'zod';

const attributeSchema = z.object({
  Value: z.string(),
  Id: z.string(),
});

const cellSchema = z.object({
  Value: z.string(),
  Attributes: z.array(attributeSchema).optional(),
});

const rowSchema: z.ZodSchema = z.lazy(() =>
  z.object({
    RowType: z.string(),
    Cells: z.array(cellSchema).optional(),
    Title: z.string().optional(),
    Rows: z.array(rowSchema).optional(),
  }),
);

const reportSchema = z.object({
  ReportID: z.string(),
  ReportName: z.string(),
  ReportType: z.string(),
  ReportTitles: z.array(z.string()),
  ReportDate: z.string(),
  UpdatedDateUTC: z.string(),
  Rows: z.array(rowSchema),
});

export const reportsSchema = z.object({
  Reports: z.array(reportSchema),
});

// Infer TypeScript types
export type Cell = z.infer<typeof cellSchema>;
export type Row = z.infer<typeof rowSchema>;
export type Report = z.infer<typeof reportSchema>;
export type Reports = z.infer<typeof reportsSchema>;
