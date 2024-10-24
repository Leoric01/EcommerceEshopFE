import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Delete } from "@mui/icons-material";

// Styled TableCell and TableRow
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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Create data function for coupons
function createData(
  couponCode: string,
  startDate: string,
  endDate: string,
  minOrderValue: number,
  discountPercentage: number,
  status: string
) {
  return { couponCode, startDate, endDate, minOrderValue, discountPercentage, status };
}

// Dummy data for coupons
const rows = [
  createData("SAVE10", "2024-01-01", "2024-12-31", 50, 10, "ACTIVE"),
  createData("WELCOME20", "2024-02-01", "2024-11-30", 100, 20, "EXPIRED"),
  createData("HOLIDAY30", "2024-03-15", "2024-06-15", 200, 30, "SUSPENDED"),
  createData("SUMMER15", "2024-06-01", "2024-09-01", 150, 15, "ACTIVE"),
  createData("BLACKFRIDAY50", "2024-11-25", "2024-11-30", 500, 50, "EXPIRED"),
];

// Dummy coupon statuses for selection
const couponStatuses = [
  { status: "ACTIVE", title: "Active" },
  { status: "EXPIRED", title: "Expired" },
  { status: "SUSPENDED", title: "Suspended" },
];

const Coupon = () => {
  const [couponStatus, setCouponStatus] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCouponStatus(event.target.value);
  };

  return (
    <div>
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Coupon Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={couponStatus}
            label="Coupon Status"
            onChange={handleChange}
          >
            {couponStatuses.map((item) => (
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
              <StyledTableCell>Coupon Code</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell align="right">End Date</StyledTableCell>
              <StyledTableCell align="right">Min Order Value</StyledTableCell>
              <StyledTableCell align="right">Discount %</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.couponCode}>
                <StyledTableCell component="th" scope="row">
                  {row.couponCode}
                </StyledTableCell>
                <StyledTableCell>{row.startDate}</StyledTableCell>
                <StyledTableCell align="right">{row.endDate}</StyledTableCell>
                <StyledTableCell align="right">${row.minOrderValue}</StyledTableCell>
                <StyledTableCell align="right">{row.discountPercentage}%</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
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
    </div>
  );
};

export default Coupon;
