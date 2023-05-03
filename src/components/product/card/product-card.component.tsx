import { memo, FC } from 'react';
import { ProductModelDTO } from '../../../models/product.model';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { DiscriptionCard } from './discription-card/discription-card.component';

type ProductCardProps = {
    productCard: ProductModelDTO;
};

const ProductCard: FC<ProductCardProps> = ({ productCard }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                padding: '20px',
                width: '90%',

                justifyContent: 'space-around',
            }}
        >
            <CardMedia
                component='img'
                sx={{ width: 150, height: 'auto', objectFit: 'contain' }}
                image={productCard.image}
                alt='Live from space album cover'
            />
            <Box sx={{ display: 'flex', width: '100%', minHeight: '100%', justifyContent: 'space-around' }}>
                <CardContent
                    sx={{
                        width: '90%',
                        padding: 0,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'start',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                    }}
                >
                    <Typography sx={{ fontSize: '13px', textAlign: 'center' }} component='div' variant='h5'>
                        {productCard.title}
                    </Typography>
                    <DiscriptionCard text={productCard.description} maxLength={150} />
                    <Typography sx={{ fontSize: '13px', textAlign: 'center' }} component='div' variant='h5'>
                        {productCard.price}$
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};
export default memo(ProductCard);
