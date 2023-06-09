import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "utils/api-endpoints";
import http from "utils/http";

const fetchProductData = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useProductDataQuery = ({ id = null, params = null, settings = null }) => {
  return useQuery(
    [`${API_ENDPOINTS.GET_ALL_PRODUCTS}${id ? `${id}` : ""}`, params],
    fetchProductData,
    settings
  );
};

export { useProductDataQuery, fetchProductData };
