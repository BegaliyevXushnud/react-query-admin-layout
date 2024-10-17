import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory, deleteCategory, updateCategory } from "../service";
import { CategoryType } from "../type";
import { Notification } from "../../../utils/notification";

// ======= create category ================
export function useCreateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: CategoryType) => createCategory(data),
        onSuccess: async (response) => {
            Notification("success", response.data?.message || "Category created successfully");
            await queryClient.invalidateQueries({ queryKey: ['category'] });
        },
        onError: (error: any) => {
            Notification("error", error?.response?.data?.message || "An error occurred");
        },
    });
}

// ======= update category ================
export function useUpdateCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: { id: string; category: CategoryType }) => updateCategory(data.id, data.category),
        onSuccess: (response) => {
            Notification("success", response.data?.message || "Category updated successfully");
        },
        onError: (error: any) => {
            Notification("error", error?.response?.data?.message || "An error occurred");
        },
        onSettled: async (_, __, variables) => {
            if (variables && variables.id) {
                await queryClient.invalidateQueries({ queryKey: ["category", { id: variables.id }] });
            } else {
                await queryClient.invalidateQueries({ queryKey: ["category"] });
            }
        },
    });
}

// ======= delete category ================
export function useDeleteCategory() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteCategory(id),
        onSuccess: (response) => {
            Notification("success", response.data?.message || "Category deleted successfully");
        },
        onError: (error: any) => {
            Notification("error", error?.response?.data?.message || "An error occurred");
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({ queryKey: ['category'] });
        },
    });
}
