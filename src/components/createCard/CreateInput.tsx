import { TextField } from '@mui/material';
import { FC } from 'react';

interface InputCreateProps {
    value?: string;
    defaultValue?: string;
    titleLable: string;
    handleChange: Function;
    style?: { [key: string]: string };
}

export const InputCreate: FC<InputCreateProps> = ({ value, handleChange, style, titleLable }) => {
    return (
        <TextField
            value={value}
            sx={style}
            onChange={e => handleChange(e.target.value)}
            id='filled-search'
            label={titleLable}
            type='search'
            variant='filled'
        />
    );
};
