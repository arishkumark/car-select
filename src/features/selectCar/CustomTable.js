import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { withStyles } from '@mui/styles';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TablePagination, TableRow, CircularProgress, Dialog} from '@mui/material';
import InfoCard from './InfoCard';


const Styles = () => ({
  contentWrapper: {
    marginTop: 50,
    textAlign: 'center'
  },
  noData: {
    marginBottom: 20
  },
  tableRowRoot: {
    cursor: 'pointer'
  }
})

const columns = [
  { id: 'make', label: <FormattedMessage id="select.table.MAKE" />, minWidth: 100 },
  { id: 'model', label: <FormattedMessage id="select.table.MODEL" />, minWidth: 100 },
  {
    id: 'enginePowerPS',
    label: <FormattedMessage id="select.table.ENGINE_POWER_PS" />,
    minWidth: 70,
  },
  { id: 'enginePowerKW', label: <FormattedMessage id="select.table.ENGINE_POWER_KV" />, minWidth: 70 },
  { id: 'fuelType', label: <FormattedMessage id="select.table.FUEL_TYPE" />, minWidth: 100 },
  { id: 'bodyType', label: <FormattedMessage id="select.table.BODY_TYPE" />, minWidth: 100 },
  { id: 'engineCapacity', label: <FormattedMessage id="select.table.ENGINE_CAPACITY" />, minWidth: 100 },
];


const CustomTable = ({ classes, onConfirm }) =>  {
  const cars = useSelector(store => store.cars);

  const [page, setPage] = useState(0);
  const [selectedData, setSelectedData] = useState(null);
  const [open, setOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (data) => {
    setOpen(true);
    setSelectedData(data);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleConfirm = () => {
    setOpen(false);
    onConfirm(selectedData)
  }

  if (cars.status === 'pending') {
    return (<Box className={classes.contentWrapper}>
      <CircularProgress />
    </Box>)
  }

  if (cars.vehicles.length === 0) {
    return (<Box className={classes.contentWrapper}>
      <Typography variant="h4" className={classes.noData}>
        <FormattedMessage id="select.NO_DATA_FOUND" />
      </Typography>
      <Typography variant="h6">
        <FormattedMessage id="select.RETRY" />
      </Typography>
    </Box>)
  }

  return (
    <Box className={classes.contentWrapper}>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
              {cars.vehicles
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      classes={{ root: classes.tableRowRoot}}
                      onClick={() => handleRowClick(row)}
                      hover
                      tabIndex={-1} key={`row${index}`}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            { value }
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
          count={cars.vehicles.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={<FormattedMessage id="select.table.ROWS_PER_PAGE" />}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog open={open} onClose={handleClose}>
        <InfoCard data={selectedData} onConfirm={handleConfirm} showConfirm />
      </Dialog>
    </Box>
  );
}

export default withStyles(Styles)(CustomTable);
