import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { formatDate } from "../../../Customer/utils/formatDate";
import { Transaction as TransactionInterface } from "../../../Api/models";
import { transactionApi } from "../../../State/configAxios/transactionApi";
import { useEffect, useState } from "react";

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

const orderStatusColor = {
  PENDING: { color: "#FFA500", label: "PENDING" }, // Orange
  SHIPPED: { color: "#1E90FF", label: "SHIPPED" }, // DodgerBlue
  DELIVERED: { color: "#32CD32", label: "DELIVERED" }, // LimeGreen
  CANCELLED: { color: "#FF0000", label: "CANCELLED" }, // Red
};
export default function TransactionTable() {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);

  const fetchTransactionsBySeller = async () => {
    try {
      const response = await transactionApi.getTransactionsBySeller();
      const sellerTransactions = response.data || [];
      setTransactions(sellerTransactions);
      console.log("Successfully fetched seller transactions:", sellerTransactions);
    } catch (err) {
      console.error("Failed to fetch seller transactions:", err);
    }
  };

  useEffect(() => {
    fetchTransactionsBySeller();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="right">Customer Detail</StyledTableCell>
            <StyledTableCell align="right">Order</StyledTableCell>
            <StyledTableCell align="right">Total Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((item: TransactionInterface) => (
            <TableRow key={item.id}>
              <TableCell align="left">
                <div className="space-y-1">
                  <h1 className="font-medium">{formatDate(item.date).split("at")[0]}</h1>
                  <h1 className="text-xs text-gray-600 font-semibold">{formatDate(item.date).split("at")[1]}</h1>
                </div>
              </TableCell>
              <TableCell component="th" scope="row">
                <div className="space-y-2">
                  <h1>{item.customer?.name}</h1>
                  <h1 className="font-semibold">{item.customer?.email}</h1>
                  <h1 className="font-bold text-gray-600">{item.customer?.mobile}</h1>
                </div>
              </TableCell>
              <TableCell>
                Order Id : <strong> {item.order?.id} </strong>
              </TableCell>
              <TableCell align="right">€ {item.order?.totalSellingPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
