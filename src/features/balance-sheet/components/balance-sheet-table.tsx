import React from 'react';

import { Spinner } from '@/components/ui/spinner';
import {
  TableElement,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
} from '@/components/ui/table';
import { Row } from '@/types/balance-sheet';

import { useBalanceSheet } from '../api/get-balance-sheet';

import { HeaderRow, SummaryRow, DataRow, SectionRow } from './table-rows';

const renderRows = (
  rows: Row[],
  isRowCategory: boolean = false,
): React.ReactNode => {
  return rows.map((row, rowIndex) => {
    switch (row.RowType) {
      case 'Header':
        return <HeaderRow key={rowIndex} row={row} index={rowIndex} />;
      case 'SummaryRow':
        return (
          <SummaryRow
            key={rowIndex}
            row={row}
            index={rowIndex}
            isRowCategory={isRowCategory}
          />
        );
      case 'Row':
        return (
          <DataRow
            key={rowIndex}
            row={row}
            index={rowIndex}
            isRowCategory={isRowCategory}
          />
        );
      case 'Section':
        return (
          <SectionRow
            key={rowIndex}
            row={row}
            index={rowIndex}
            renderRows={renderRows}
          />
        );
      default:
        return null;
    }
  });
};

export const BalanceSheetTable = () => {
  const sheetQuery = useBalanceSheet();

  if (sheetQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!sheetQuery.data) return null;

  return (
    <>
      {sheetQuery.data.Reports.map((report, reportIndex) => (
        <TableElement key={`report-${reportIndex}`}>
          <TableHeader>
            <div className="mx-auto max-w-7xl ">
              <h2 className="text-lg font-semibold text-gray-700">
                {report.ReportTitles?.join(' - ')}
              </h2>
            </div>
            <TableRow>
              <TableHead className="text-left">Title</TableHead>
              <TableHead className="text-right">Current Period</TableHead>
              <TableHead className="text-right">Previous Period</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{renderRows(report.Rows)}</TableBody>
        </TableElement>
      ))}
    </>
  );
};
