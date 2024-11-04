import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { sellerOrderApi } from "../../../State/configAxios/sellerOrderApi";
import { useState, useEffect, MouseEvent } from "react";
import { Order as OrderInterface, OrderItem as OrderItemInterface } from "../../../Api/models";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const orderStatus = [
  { color: "#FFA500", label: "PENDING" },
  { color: "#F5BCBA", label: "PLACED" },
  { color: "#F5BCBA", label: "CONFIRMED" },
  { color: "#1E90FF", label: "SHIPPED" },
  { color: "#32CD32", label: "DELIVERED" },
  { color: "#FF0000", label: "CANCELLED" },
];
const orderStatusColor = {
  PENDING: { color: "#FFA500", label: "PENDING" }, // Orange
  CONFIRMED: { color: "#F5BCBA", label: "CONFIRMED" },
  PLACED: { color: "#F5BCBA", label: "PLACED" },
  SHIPPED: { color: "#1E90FF", label: "SHIPPED" }, // DodgerBlue
  DELIVERED: { color: "#32CD32", label: "DELIVERED" }, // LimeGreen
  CANCELLED: { color: "#FF0000", label: "CANCELLED" }, // Red
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function OrderTable() {
  const [orders, setOrders] = useState<OrderInterface[]>([]);

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

  const [anchorEl, setAnchorEl] = useState<{
    [key: number]: HTMLElement | null;
  }>({});

  const handleClick = (event: MouseEvent<HTMLButtonElement>, orderId: number) => {
    setAnchorEl((prev) => ({
      ...prev,
      [orderId]: event.currentTarget,
    }));
  };

  const handleUpdateOrder = async (orderId: number, orderStatus: any) => {
    try {
      const response = await sellerOrderApi.updateOrderStatus(orderId, orderStatus);
      console.log("Successfully updated order status:", response);
      fetchOrdersOfConnectedSeller();
    } catch (err) {
      console.error("Failed to update order status:", err);
    }
  };

  const handleClose = (orderId: number) => {
    setAnchorEl((prev) => ({ ...prev, [orderId]: null }));
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
            <StyledTableCell align="left">Shipping Address</StyledTableCell>
            <StyledTableCell align="right">Order Status</StyledTableCell>
            <StyledTableCell align="right">Update Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((item: OrderInterface) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell align="left">{item.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <div className="flex gap-1 flex-wrap">
                  {item?.orderItems?.map((orderItem: OrderItemInterface) => (
                    <div key={orderItem.id} className="flex gap-5">
                      <img className="w-20 rounded-md" src={orderItem?.product?.image?.[0]} alt="" />
                      <div className="flex flex-col justify-between py-2">
                        <h1>Title: {orderItem?.product?.title}</h1>
                        <h1>Price: € {orderItem?.sellingPrice}</h1>
                        <h1>Color: {orderItem?.product?.color}</h1>
                        {orderItem?.size ? <h1>Size: {orderItem.size}</h1> : null}{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div className="flex flex-col gap-y-2">
                  <h1>{item?.shippingAddress?.name}</h1>
                  <h1>
                    {item?.shippingAddress?.street}, {item?.shippingAddress?.city}
                  </h1>
                  <h1>
                    {item?.shippingAddress?.country} - {item?.shippingAddress?.zip}
                  </h1>
                  <h1>
                    <strong>Mobile:</strong> {item?.shippingAddress?.mobile}
                  </h1>
                </div>
              </StyledTableCell>
              <StyledTableCell
                sx={{
                  color: item.orderStatus ? orderStatusColor[item.orderStatus].color : "inherit",
                }}
                align="center"
              >
                {" "}
                <Box
                  sx={{
                    borderColor: item.orderStatus ? orderStatusColor[item.orderStatus].color : "inherit",
                  }}
                  className={`border px-2 py-1 rounded-full text-xs`}
                >
                  {item.orderStatus}
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  size="small"
                  onClick={(e) => item.id !== undefined && handleClick(e, item.id)}
                  color="primary"
                  className="bg-primary-color"
                >
                  Status
                </Button>
                <Menu
                  id={`status-menu ${item.id}`}
                  anchorEl={item.id !== undefined ? anchorEl[item.id] : null}
                  open={item.id !== undefined && Boolean(anchorEl[item.id])}
                  onClose={() => item.id !== undefined && handleClose(item.id)}
                  MenuListProps={{
                    "aria-labelledby": `status-menu ${item.id}`,
                  }}
                >
                  {orderStatus.map((status) => (
                    <MenuItem
                      key={status.label}
                      onClick={() => item.id !== undefined && handleUpdateOrder(item.id, status.label)}
                    >
                      {status.label}
                    </MenuItem>
                  ))}
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
