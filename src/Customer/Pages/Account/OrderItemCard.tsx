import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import teal from "@mui/material/colors/teal";
import {
  OrderItem as OrderItemInterface,
  Order as OrderInterface,
} from "../../../Api/models";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

interface OrderItemCardProps {
  item: OrderItemInterface;
  order: OrderInterface;
}
const OrderItemCard: React.FC<OrderItemCardProps> = ({ item, order }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${order.id}/${item.id}`)}
      className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-teal-600">{order.orderStatus}</h1>
          <p>Arriving by {formatDate(order.deliverDate)}</p>
        </div>
      </div>
      <div className="p-5 bg-teal-50 flex gap-3 ">
        <div className="">
          <img
            className="w-[70px]"
            src={item.product?.image?.[0] ?? ""}
            alt={item.product?.title ?? ""}
          />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">
            {item.product?.seller?.businessDetails?.businessName ??
              "N/A (business name)"}
          </h1>
          <p>{item.product?.title}</p>
          <p>
            <strong>size : </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItemCard;
