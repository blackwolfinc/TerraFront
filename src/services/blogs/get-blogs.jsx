import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "utils/api-endpoints";
import http from "utils/http";

const fetchBlogData = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useBlogDataQuery = ({ id = null, params = null, settings = null }) => {
  return useQuery(
    [`${API_ENDPOINTS.GET_BLOG}/${id ? id : ""}`, params],
    fetchBlogData,
    settings
  );
};

export { useBlogDataQuery, fetchBlogData };
