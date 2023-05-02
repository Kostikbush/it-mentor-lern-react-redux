import styled from 'styled-components';
interface TextProps {
    isLoading: boolean;
}
export const SApp = styled.div`
    display: flex;
    align-items: start;
    text-align: center;
    padding: 10px;
`;
export const SWrapperList = styled.article<TextProps>`
    width: ${({ isLoading }) => {
        return `${isLoading ? '100vw' : '100%'}`;
    }};
    height: ${({ isLoading }) => {
        return `${isLoading ? '100vh' : '100%'}`;
    }};

    display: ${({ isLoading }) => {
        return `${isLoading ? 'flex' : 'grid'}`;
    }};
    gap: 20px;
    justify-items: center;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;
