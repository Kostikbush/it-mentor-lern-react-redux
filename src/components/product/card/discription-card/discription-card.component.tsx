import { Button, Stack, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { sliceStringForLength } from '../../../../utils/sliceStringForLength';
interface DiscriptionCardProps {
    maxLength?: number;
    text: string;
}

export const DiscriptionCard: FC<DiscriptionCardProps> = ({ text, maxLength = 150 }) => {
    const [visible, setVisible] = useState(false);
    let isShowText = visible || text.length < maxLength;

    return (
        <Stack direction='column' height={150}>
            <Typography
                height={140}
                sx={{ fontSize: '13px', textAlign: 'center', overflowY: visible ? 'scroll' : 'hidden' }}
                component='div'
                variant='h5'
            >
                {sliceStringForLength(text, maxLength)}
                {isShowText && text}
                {!isShowText && ' ...'}
            </Typography>
            {text.length > maxLength && (
                <Button onClick={() => setVisible(!visible)}>{visible ? 'Hide Details' : 'Show Details'}</Button>
            )}
        </Stack>
    );
};
