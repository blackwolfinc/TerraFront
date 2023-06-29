import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "utils/api-endpoints";
import http from "utils/http";

const fetchPromoData = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const usePromoDataQuery = ({ id = null, params = null, settings = null }) => {
  return useQuery(
    [`${API_ENDPOINTS.GET_PROMO}/${id ? id : ""}`, params],
    fetchPromoData,
    settings
  );
};

export { usePromoDataQuery, fetchPromoData };
