import { Configuration, SellerControllerApi } from "../../Api";
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

export const sellerApi = new SellerControllerApi(configuration);