import { ProductModelDTO } from '../product.model';

export interface ProductStateModel {
    products: ProductModelDTO[];
    isLoading: boolean;
    error: string | null;
}
