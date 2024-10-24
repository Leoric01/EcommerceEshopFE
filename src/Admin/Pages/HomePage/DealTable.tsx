import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Delete, Edit } from '@mui/icons-material';

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

function createData(
  no: number,
  orderId: string,
  imageUrl: string,
  category: string,
  discount: string // Adding discount field
) {
  return { no, orderId, imageUrl, category, discount };
}

const rows = [
  createData(1, '001', 'https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826', 'Electronics', '10%'),
  createData(2, '002', 'https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826', 'Fashion', '20%'),
  createData(3, '003', 'https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826', 'Home & Kitchen', '15%'),
  createData(4, '004', 'https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826', 'Sports', '25%'),
  createData(5, '005', 'https://img.freepik.com/premium-photo/logotype-goat-gaming-channel-marvel-style-goat_643382-1192.jpg?w=826', 'Books', '5%'),
];

export default function DealTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Order Id</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.orderId}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell>{row.orderId}</StyledTableCell>
              <StyledTableCell align="right">
                <img src={row.imageUrl} alt={row.category} width="50" />
              </StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.discount}</StyledTableCell> {/* Display Discount */}
              <StyledTableCell align="right">
                <Button variant="text">
                  <Edit sx={{color:"primary-custom"}}/>
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="text" color="error">
                  <Delete/>
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
