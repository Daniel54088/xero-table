import React from 'react';

import { TableRow, TableCell } from '@/components/ui/table';
import { Cell } from '@/types/balance-sheet';

interface SheetTableRowProps {
  key: string;
  cells: Cell[];
  rowClassName?: string;
  cellClassName?: string;
  fixedColSpan?: number;
}

const SheetTableRow: React.FC<SheetTableRowProps> = ({
  key,
  cells,
  rowClassName,
  cellClassName,
  fixedColSpan,
}) => {
  const cellColSpan = (cellIndex: number) => {
    if (fixedColSpan) {
      return fixedColSpan;
    }
    return cellIndex === 0 ? 0 : 1;
  };

  return (
    <TableRow key={key} className={rowClassName}>
      {cells?.map((cell: Cell, cellIndex: number) => (
        <TableCell
          key={`header-cell-${cellIndex}`}
          className={cellClassName}
          align={cellIndex === 0 ? 'left' : 'right'}
          colSpan={cellColSpan(cellIndex)}
        >
          {cell.Value}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default SheetTableRow;
