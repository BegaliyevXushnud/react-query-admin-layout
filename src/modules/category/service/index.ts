import axiosInstance from "../../../api";
import { ParamsType } from '../../../types';

export default async function getCategory(params: ParamsType) {
  return await axiosInstance.get("category/search", { params });
}
