import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getAllTxns } from '../../../utils/alchemy';


const columns = [
  { id: 'hash', label: 'Txn Hash', minWidth: 170 },
  { id: 'asset', label: 'Asset', minWidth: 40 },
  {
    id: 'block',
    label: 'Block',
    minWidth: 200
  },
  {
    id: 'from',
    label: 'From',
    minWidth: 200
  },
  {
    id: 'to',
    label: 'To',
    minWidth: 170
  },
  {
    id: 'value',
    label: 'Value',
    minWidth: 170
  },
];

export default function TransactionList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {getAllTxns.transfers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((txn) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={txn.hash}>
                    {columns.map((column) => {
                      const value = txn[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={getAllTxns.transfers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
