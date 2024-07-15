import { screen, rtlRender } from '@/testing/test-utils';
import { Row } from '@/types/balance-sheet';

import SheetTableRow from '../components/sheet-table-row';
import {
  HeaderRow,
  SummaryRow,
  DataRow,
  SectionRow,
} from '../components/table-rows';

const mockCells = [
  { Value: 'My Bank Account' },
  { Value: '126.70' },
  { Value: '99.60' },
];

const mockRow: Row = {
  RowType: 'Row',
  Cells: mockCells,
  Title: '',
  Rows: [],
};

describe('Row components', () => {
  test('renders HeaderRow correctly', () => {
    rtlRender(<HeaderRow row={mockRow} index={0} />);

    mockCells.forEach((cell) => {
      const cellElement = screen.getByText(cell.Value);
      expect(cellElement).toBeInTheDocument();
    });
  });

  test('renders SummaryRow correctly with row category', () => {
    rtlRender(<SummaryRow row={mockRow} index={0} isRowCategory />);

    mockCells.forEach((cell) => {
      const cellElement = screen.getByText(cell.Value);
      expect(cellElement).toBeInTheDocument();
    });

    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveClass('border-t-2');

    const cellElements = screen.getAllByRole('cell');
    cellElements.forEach((cellElement) => {
      expect(cellElement).toHaveClass('text-base font-bold');
    });
  });

  test('renders DataRow correctly with row category', () => {
    rtlRender(<DataRow row={mockRow} index={0} isRowCategory />);

    mockCells.forEach((cell) => {
      const cellElement = screen.getByText(cell.Value);
      expect(cellElement).toBeInTheDocument();
    });

    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveClass('border-t-2');

    const cellElements = screen.getAllByRole('cell');
    cellElements.forEach((cellElement) => {
      expect(cellElement).toHaveClass('text-base font-bold');
    });
  });

  test('renders SectionRow correctly with title and nested rows', () => {
    const sectionRow: Row = {
      RowType: 'Section',
      Title: 'Assets',
      Cells: [],
      Rows: [mockRow],
    };

    rtlRender(
      <SectionRow
        row={sectionRow}
        index={0}
        renderRows={() => <SheetTableRow key="nested-row" cells={mockCells} />}
      />,
    );

    const titleElement = screen.getByText('Assets');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('bg-gray-200 font-bold');

    mockCells.forEach((cell) => {
      const cellElement = screen.getByText(cell.Value);
      expect(cellElement).toBeInTheDocument();
    });
  });

  test('renders SectionRow correctly without title and nested rows', () => {
    const sectionRow: Row = {
      RowType: 'Section',
      Title: '',
      Cells: [],
      Rows: [mockRow],
    };

    rtlRender(
      <SectionRow
        row={sectionRow}
        index={0}
        renderRows={() => <SheetTableRow key="nested-row" cells={mockCells} />}
      />,
    );

    mockCells.forEach((cell) => {
      const cellElement = screen.getByText(cell.Value);
      expect(cellElement).toBeInTheDocument();
    });
  });

  test('renders SectionRow correctly with no nested rows', () => {
    const sectionRow: Row = {
      RowType: 'Section',
      Title: 'Assets',
      Cells: [],
      Rows: [],
    };

    rtlRender(
      <SectionRow
        row={sectionRow}
        index={0}
        renderRows={() => <SheetTableRow key="nested-row" cells={mockCells} />}
      />,
    );

    const titleElement = screen.getByText('Assets');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('bg-gray-200 font-bold');

    const noDataElement = screen.getByText('N/A');
    expect(noDataElement).toBeInTheDocument();
  });
});
