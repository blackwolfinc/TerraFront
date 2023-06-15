import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "utils/api-endpoints";
import http from "../../utils/http";

const createCustomerData = async (input) => {
  return await http.post(API_ENDPOINTS.CREATE_CUSTOMER, input);
};

const useCreateCustomerMutation = () => {
  return useMutation(createCustomerData);
};

export { useCreateCustomerMutation, createCustomerData };
