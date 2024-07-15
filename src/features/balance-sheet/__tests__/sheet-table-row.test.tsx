import { screen, rtlRender } from '@/testing/test-utils';

import SheetTableRow from '../components/sheet-table-row';

const mockCells = [
  {
    Value: 'My Bank Account',
    Attributes: [
      {
        Value: 'd2e3044e-2fb8-42fa-be17-64c8956d5f57',
        Id: 'account',
      },
    ],
  },
  {
    Value: '126.70',
    Attributes: [
      {
        Value: 'd2e3044e-2fb8-42fa-be17-64c8956d5f57',
        Id: 'account',
      },
    ],
  },
  {
    Value: '99.60',
    Attributes: [
      {
        Value: 'd2e3044e-2fb8-42fa-be17-64c8956d5f57',
        Id: 'account',
      },
    ],
  },
];

test('renders SheetTableRow correctly with given default props', async () => {
  await rtlRender(<SheetTableRow key="summary-1" cells={mockCells} />);

  // Check for the presence of each cell value
  await mockCells.forEach((cell) => {
    const cellElement = screen.getByText(cell.Value);
    expect(cellElement).toBeInTheDocument();
  });

  // Check for default row class
  const rowElement = screen.getByRole('row');
  await expect(rowElement).toHaveClass(
    'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
  );

  // Check for default cell classes and colSpan
  const cellElements = screen.getAllByRole('cell');
  await cellElements.forEach((cellElement, cellIndex) => {
    expect(cellElement).toHaveClass(
      'p-2  [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
    );
    const cellColSpan = cellIndex === 0 ? 0 : 1;

    expect(cellElement).toHaveAttribute('colspan', `${cellColSpan}`);
  });
});

test('renders SheetTableRow correctly with given props', async () => {
  await rtlRender(
    <SheetTableRow
      key="summary-1"
      cells={mockCells}
      rowClassName="border-t-2"
      cellClassName=" text-base font-bold "
      fixedColSpan={3}
    />,
  );

  // Check for the presence of each cell value
  await mockCells.forEach((cell) => {
    const cellElement = screen.getByText(cell.Value);
    expect(cellElement).toBeInTheDocument();
  });

  // Check for row class
  const rowElement = screen.getByRole('row');
  await expect(rowElement).toHaveClass('border-t-2');

  // Check for cell classes and colSpan
  const cellElements = screen.getAllByRole('cell');
  await cellElements.forEach((cellElement) => {
    expect(cellElement).toHaveClass('text-base font-bold');
    expect(cellElement).toHaveAttribute('colspan', '3');
  });
});
