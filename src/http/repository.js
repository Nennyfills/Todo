import { useQuery } from "react-query";
import { ApiClient } from "./api-client";

export const useGetTodos = ({ limit }) => {
  return useQuery(
    ["todos", limit],
    () => {
      console.info("server request sent.");
      return ApiClient.get(`https://randomuser.me/api/?results=${limit}`);
    },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  );
};
