import axiosInstance from "../../../api";
import { ParamsType } from "@types";
import { CategoryType } from "../type";

//========= get category =========
export async function getCategory(params: ParamsType) {
    return await axiosInstance.get("category/search", { params });
}

// ============= create category =========
export async function createCategory(data: CategoryType) {
    return await axiosInstance.post("category/create", data);
}

// ============= update category =========
export async function updateCategory(id: string, data: CategoryType) {
    return await axiosInstance.put(`category/update/${id}`, data);
}

// ============= delete category =========
export async function deleteCategory(id: string) {
    return await axiosInstance.delete(`category/delete/${id}`);
}
