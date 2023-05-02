import { memo, FC } from 'react';

import ProductCard from '../card/product-card.component';
import { SWrapperList } from '../../../assets/styles/app.styles';
import { useProducts } from '../../../hooks/products.hook';
import { Alert, AlertTitle, CircularProgress } from '@mui/material';

import { ProductCreationContainer } from '../../createCard/ProductCreationContainer ';

interface ProductListProps {
    //products: ProductModelDTO[];
}
const ProductList: FC<ProductListProps> = () => {
    const { products, error, isLoading } = useProducts();
    return (
        <>
            <SWrapperList isLoading={isLoading}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    products && products.map(product => <ProductCard key={product.id} productCard={product} />)
                )}
                {error && (
                    <Alert severity='error'>
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>
                )}
            </SWrapperList>
            <ProductCreationContainer />
        </>
    );
};
export default memo(ProductList);
