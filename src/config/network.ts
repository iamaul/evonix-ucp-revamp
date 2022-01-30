/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";

import { BASE_API_URL } from "@/config/env";

export const main = axios.create({
  baseURL: BASE_API_URL,
});

export const get = <ResType>(path: string, params?: any) =>
  main.get(path, { params }).then((res: AxiosResponse<ResType>) => res.data);
