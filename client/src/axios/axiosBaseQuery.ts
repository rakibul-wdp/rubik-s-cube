import type { BaseQueryFn } from "@reduxjs/toolkit/query";

import type { AxiosError, AxiosRequestConfig } from "axios";
import { instance as axiosInstace } from "./axiosInstance";
export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      contentType?: string;
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, contentType }) => {
    try {
      const result = await axiosInstace({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          contentType: contentType || "application/json",
        },
      });

      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };