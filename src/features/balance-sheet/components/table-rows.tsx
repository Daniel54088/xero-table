import React from 'react';

import { TableRow, TableCell } from '@/components/ui/table';
import { Row } from '@/types/balance-sheet';
import { isEmptyString } from '@/utils/is-empty-string';

import SheetTableRow from './sheet-table-row';

// Define props for each row type component
interface RowProps {
  row: Row;
  index: number;
  isRowCategory?: boolean;
  renderRows?: (rows: Row[], isRowCategory?: boolean) => React.ReactNode;
}

export const HeaderRow: React.FC<RowProps> = ({ row, index }) => (
  <SheetTableRow key={`header-${index}`} cells={row.Cells} />
);

export const SummaryRow: React.FC<RowProps> = ({
  row,
  index,
  isRowCategory,
}) => (
  <SheetTableRow
    key={`summary-${index}`}
    cells={row.Cells}
    rowClassName={isRowCategory ? 'border-t-2' : ''}
    cellClassName={isRowCategory ? ' text-base font-bold ' : 'font-bold'}
  />
);

export const DataRow: React.FC<RowProps> = ({ row, index, isRowCategory }) => (
  <SheetTableRow
    key={`row-${index}`}
    cells={row.Cells}
    rowClassName={isRowCategory ? 'border-t-2' : ''}
    cellClassName={isRowCategory ? ' text-base font-bold ' : ''}
  />
);

export const SectionRow: React.FC<RowProps> = ({ row, index, renderRows }) => (
  <React.Fragment key={`section-${index}`}>
    {row.Title ? (
      <TableRow>
        <TableCell colSpan={3} className="bg-gray-200 font-bold">
          {row.Title}
        </TableCell>
      </TableRow>
    ) : null}
    {row.Rows.length > 0 ? (
      renderRows!(row.Rows, isEmptyString(row.Title))
    ) : (
      <TableRow>
        <TableCell colSpan={3}> N/A</TableCell>
      </TableRow>
    )}
  </React.Fragment>
);
