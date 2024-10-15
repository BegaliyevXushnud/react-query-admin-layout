// import { useQueryClient, useMutation } from 'react-query';
// import  createCategory  from '../service';
// // import { CategoryType } from '../type';

// export function useCreateCategory() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (data: CategoryType) => createCategory(data),
//     onSuccess: async (data) => {
//       console.log('Category created:', data);
//       queryClient.invalidateQueries('category'); 
//     },
//     onSettled: () => {
//       console.log('Mutation has settled.');
//     },
//   });
// }
