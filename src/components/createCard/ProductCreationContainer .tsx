import { useState } from 'react';
import { CreateBtn } from './CreateBtn';
import { ModalCreate } from './ModalCreate';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';
import { InputCreate } from './CreateInput';
import { createProducts } from '../../services/product-api.service';
import { useAppDispatch } from '../../store/store';

export const ProductCreationContainer = () => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDiscription] = useState('');
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        if (title.trim() === '') return;
        dispatch(createProducts({ title, description }));
        setTitle('');
        setDiscription('');
        setIsVisibleModal(false);
    };
    return (
        <>
            <ModalCreate visible={isVisibleModal} setVisible={setIsVisibleModal}>
                <InputCreate
                    style={{ marginBottom: '20px', width: '300px' }}
                    titleLable='title'
                    value={title}
                    handleChange={setTitle}
                />
                <InputCreate
                    style={{ marginBottom: '40px', width: '300px' }}
                    titleLable='description '
                    value={description}
                    handleChange={setDiscription}
                />

                <CreateBtn style={{ transform: 'rotate(0deg)' }} onClick={handleSubmit} text='Create' />
            </ModalCreate>
            <CreateBtn icons={<CloseIcon />} onClick={() => setIsVisibleModal(true)} />
        </>
    );
};
