export interface Producto{
    _id : string;
    name : string;
    description : string;
    sku : number;
    image : string;
    price : number;
    quantity : number;
    category? : {name:string};
    message? : string;
}


export interface ProductoPaginator{
    docs : Producto[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage?: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;
}