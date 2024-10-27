import { Configuration, SellerOrderControllerApi } from "../../Api";
import { TokenService } from "../interceptors/TokenService";

const tokenService = new TokenService();
const token = tokenService.getToken();

const configuration = new Configuration({
  baseOptions: {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
});

export const sellerOrderApi = new SellerOrderControllerApi(configuration);
