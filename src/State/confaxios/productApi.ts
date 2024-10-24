import { Configuration, ProductControllerApi } from "../../Api";
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

export const productApi = new ProductControllerApi(configuration);
