// types.ts or paramsType.ts (file name as per your preference)
export interface ParamsType {
    limit: number;
    page: number;
    search: string;
  }
  export interface ModalPropType {
    id?:number | string
    open:boolean,
    update:any,
    handleCancel: () => void,
  }