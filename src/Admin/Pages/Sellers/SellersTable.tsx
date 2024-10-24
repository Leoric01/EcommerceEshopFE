import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { accountStatuses } from "../../../Data/AccountStatuses";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  email: string,
  mobile: string,
  vat: string,
  businessName: string,
  accountStatus: string
) {
  return { name, email, mobile, vat, businessName, accountStatus };
}

const rows = [
  createData(
    "John Doe",
    "john@example.com",
    "123-456-7890",
    "123456789",
    "John's Bakery",
    "ACTIVE"
  ),
  createData(
    "Jane Smith",
    "jane@example.com",
    "234-567-8901",
    "987654321",
    "Jane's Crafts",
    "SUSPENDED"
  ),
  createData(
    "Bob Johnson",
    "bob@example.com",
    "345-678-9012",
    "456789123",
    "Bob's Tools",
    "DEACTIVATED"
  ),
  createData(
    "Alice Davis",
    "alice@example.com",
    "456-789-0123",
    "654321987",
    "Alice's Fashion",
    "BANNED"
  ),
  createData(
    "Charlie Brown",
    "charlie@example.com",
    "567-890-1234",
    "789123456",
    "Charlie's Pets",
    "CLOSED"
  ),
];

const SellersTable = () => {
  const [accountStatus, setAccountStatus] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAccountStatus(event.target.value);
  };
  return (
    <div className="">
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Account Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={accountStatus}
            label="Account Status"
            onChange={handleChange}
          >
            {accountStatuses.map((item) => (
              <MenuItem key={item.status} value={item.status}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Seller Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell align="right">Mobile</StyledTableCell>
              <StyledTableCell align="right">VAT</StyledTableCell>
              <StyledTableCell align="right">Business Name</StyledTableCell>
              <StyledTableCell align="right">Account Status</StyledTableCell>
              <StyledTableCell align="right">Change Staus</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.mobile}</StyledTableCell>
                <StyledTableCell align="right">{row.vat}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.businessName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.accountStatus}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button>
                    Change
                  </Button>
                  {/* <Select
                    value={row.accountStatus}
                    onChange={(e) =>
                      console.log(
                        "Change status for:",
                        row.name,
                        e.target.value
                      )
                    }
                  >
                    {accountStatuses.map((status) => (
                      <MenuItem key={status.status} value={status.status}>
                        {status.title}
                      </MenuItem>
                    ))}
                  </Select> */}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SellersTable;
