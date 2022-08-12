import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Component } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

class StatusTable extends Component {
    render() {
        return (
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Horse name</StyledTableCell>
            <StyledTableCell align="center">Distance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.horses.map(horse=> (
            <StyledTableRow>
              <StyledTableCell align="center">{horse.name}</StyledTableCell>
              <StyledTableCell align="center">{horse.distance}</StyledTableCell>
            </StyledTableRow>
          ))}          
        </TableBody>
      </Table>
      </TableContainer>
        )
    }
}

    const mapStateToProps = state => ({
        horses: state.betting
    })

export default connect(mapStateToProps, 0)(StatusTable);
