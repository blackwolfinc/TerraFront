import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "utils/api-endpoints";
import http from "utils/http";

const fetchGalleryData = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useGalleryDataQuery = ({ id = null, params = null, settings = null }) => {
  return useQuery(
    [`${API_ENDPOINTS.GET_ALL_GALLERY}`, params],
    fetchGalleryData,
    settings
  );
};

export { useGalleryDataQuery, fetchGalleryData };
