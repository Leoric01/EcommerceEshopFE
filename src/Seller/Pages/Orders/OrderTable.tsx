import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { sellerOrderApi } from "../../../State/confaxios/sellerOrderApi"; // Adjust the path as per your project
import { useState, useEffect } from "react";

// Styled components for table cells and rows
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

export default function OrderTable() {
  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrdersOfConnectedSeller = async () => {
    try {
      const response = await sellerOrderApi.getAllSellersOrders();
      const sellerOrders = response.data?.data || [];
      setOrders(sellerOrders);
      console.log("Successfully fetched this seller's orders:", sellerOrders);
    } catch (err) {
      console.error("Failed to fetch seller orders:", err);
    }
  };

  useEffect(() => {
    fetchOrdersOfConnectedSeller();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="right">Shipping Address</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="right">Update Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order.id}>
              <StyledTableCell component="th" scope="row">
                {order.id}
              </StyledTableCell>

              <StyledTableCell>
                {order.products?.map((product: any, index: number) => (
                  <div key={index}>
                    {product.title} (x{product.quantity})
                  </div>
                ))}
              </StyledTableCell>

              <StyledTableCell align="right">
                {order.shippingAddress?.address}, {order.shippingAddress?.city},{" "}
                {order.shippingAddress?.state} -{" "}
                {order.shippingAddress?.pinCode}
              </StyledTableCell>

              <StyledTableCell align="right">{order.status}</StyledTableCell>

              <StyledTableCell align="right">
                <button>Update</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
