import { Configuration, TransactionControllerApi } from "../../Api";
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

export const transactionApi = new TransactionControllerApi(configuration);
