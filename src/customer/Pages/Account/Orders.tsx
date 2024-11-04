import { orderApi } from "../../../State/configAxios/orderApi";
import { useEffect, useState } from "react";
import { ResultListOrder, Order as OrderType } from "../../../Api/models";
import OrderItemCard from "./OrderItemCard";

const Orders = () => {
  const [orders, setOrders] = useState<any>([]);
  const fetchOrders = async () => {
    try {
      const response = await orderApi.usersOrderHistoryHandler();
      const result = response?.data as ResultListOrder;

      if (result?.data) {
        setOrders(result.data);
        console.log("Orders fetched successfully", result.data);
      }
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
        <h1 className="font-semibold">Complete Order History</h1>
      </div>
      <div className="space-y-2">
        {orders?.map((order: OrderType) =>
          order?.orderItems?.map((item) => (
            <OrderItemCard item={item} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
