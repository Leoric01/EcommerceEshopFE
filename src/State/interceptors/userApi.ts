import { Configuration, UserControllerApi } from "../../Api";
import { TokenService } from "./TokenService";

const tokenService = new TokenService();
const token = tokenService.getToken();

const configuration = new Configuration({
  baseOptions: {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
});

export const userApi = new UserControllerApi(configuration);
