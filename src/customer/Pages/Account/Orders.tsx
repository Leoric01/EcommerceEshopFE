import OrderItem from "./OrderItem";
import { orderApi } from "../../../State/configAxios/orderApi";
import { useEffect, useState } from "react";
import { ResultListOrder, Order } from "../../../Api";

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const fetchOrders = async () => {
    try {
      const response = await orderApi.usersOrderHistoryHandlers();
      const result = response?.data as ResultListOrder;

      if (result?.data) {
        setOrders(result.data);
      }
      console.log("Orders: ", result.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">All Orders</h1>
        <p>from anytime</p>
      </div>
      <div className="space-y-2">
        {orders.map((order) => (
          <div key={order.id} className="border p-4 rounded-md">
            <p>
              <strong>Order ID:</strong> {order.orderId}
            </p>
            <p>
              <strong>Order Price:</strong> ${order.totalSellingPrice}
            </p>
            <p>
              <strong>Order Status:</strong> {order.orderStatus}
            </p>
            <p>
              <strong>Order Date:</strong>{" "}
              {new Date(order.orderDate ?? "").toLocaleDateString()}
            </p>
            <p>
              <strong>Delivery Date:</strong>{" "}
              {new Date(order.deliverDate ?? "").toLocaleDateString()}
            </p>
            <p>
              <strong>Customer Name:</strong> {order.user?.name}
            </p>
            <p>
              <strong>Customer Email:</strong> {order.user?.email}
            </p>
            <p>
              <strong>Shipping Address:</strong> {order.shippingAddress?.street}
              , {order.shippingAddress?.city}, {order.shippingAddress?.zip},{" "}
              {order.shippingAddress?.country}
            </p>
            <p>
              <strong>Payment Method:</strong> {order.paymentDetails?.status}
            </p>
            <p>
              <strong>Payment Status:</strong> {order.paymentStatus}
            </p>
            <p>
              <strong>Total Items:</strong> {order.totalItem}
            </p>
            <p>
              <strong>Discount:</strong> ${order.discount}
            </p>
            <p>
              <strong>Total Max Price:</strong> ${order.totalMaxPrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
