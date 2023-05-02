import { Box, Modal, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { CreateBtn } from './CreateBtn';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';

interface ModalProps {
    children?: ReactNode;
    visible: boolean;
    setVisible: Function;
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};
export const ModalCreate: FC<ModalProps> = ({ children, visible, setVisible }) => {
    return (
        <Modal
            keepMounted
            open={visible}
            onClose={() => setVisible(false)}
            aria-labelledby='keep-mounted-modal-title'
            aria-describedby='keep-mounted-modal-description'
        >
            <Box sx={style}>
                <CreateBtn
                    icons={<CloseIcon />}
                    style={{ transform: 'rotate(90deg)', alignSelf: 'end' }}
                    onClick={() => setVisible(false)}
                />
                <Typography sx={{ marginBottom: '30px' }}>Craete new Product</Typography>

                {children}
            </Box>
        </Modal>
    );
};
