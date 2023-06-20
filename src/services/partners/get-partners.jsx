import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "utils/api-endpoints";
import http from "utils/http";

const fetchPartnersData = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const usePartnersDataQuery = ({ params = null, settings = null }) => {
  return useQuery(
    [`${API_ENDPOINTS.GET_ALL_PARTNER}`, params],
    fetchPartnersData,
    settings
  );
};

export { usePartnersDataQuery, fetchPartnersData };
