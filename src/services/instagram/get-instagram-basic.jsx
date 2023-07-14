import { useQuery } from "@tanstack/react-query";
import http from "utils/http";

const fetchInstagramBasicData = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useInstagramBasicDataQuery = ({
  id = null,
  params = null,
  settings = null,
}) => {
  const accessToken = process.env.REACT_APP_IG_ACCESS_TOKEN;

  return useQuery(
    [
      `https://graph.instagram.com/me/media`,
      { ...params, access_token: accessToken },
    ],
    fetchInstagramBasicData,
    settings
  );
};

export { useInstagramBasicDataQuery, fetchInstagramBasicData };
