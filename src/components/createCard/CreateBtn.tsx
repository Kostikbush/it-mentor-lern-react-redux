import { Button, Typography } from '@mui/material';
import { ReactNode, memo } from 'react';

interface CreateBtnProps {
    onClick: () => void;
    style?: { [key: string]: string };
    icons?: ReactNode;
    text?: string;
}
export const CreateBtn = memo<CreateBtnProps>(({ onClick, style, icons, text = '' }) => {
    return (
        <Button
            onClick={onClick}
            sx={{ transform: 'rotate(45deg)', height: 'auto', width: 'auto', padding: 0, minWidth: 25, ...style }}
        >
            {text}
            <Typography sx={{ maxWidth: '50px' }}>{icons}</Typography>
        </Button>
    );
});
