import { Configuration, AuthControllerApi } from "../../Api";
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

export const authApi = new AuthControllerApi(configuration);
