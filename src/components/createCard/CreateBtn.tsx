import { Button } from '@mui/material';
import { FC, ReactNode, memo } from 'react';

interface CreateBtnProps {
    onClick: () => void;
    style?: { [key: string]: string };
    icons?: ReactNode;
    text?: string;
}
// No FC
export const CreateBtn = memo<CreateBtnProps>(({ onClick, style, icons, text = '' }) => {
    return (
        <Button
            onClick={onClick}
            sx={{ transform: 'rotate(45deg)', height: 'auto', width: 'auto', padding: 0, minWidth: 25, ...style }}
        >
            {text}
            {icons}
        </Button>
    );
});
// <span>icons<span>
