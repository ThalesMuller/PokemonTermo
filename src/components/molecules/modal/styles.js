import styled from "styled-components";

const Container = styled.div`
    position: relative;
    z-index: 0;
    height: 100%;
`;

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: white;
    border-radius: ${({ theme }) => theme.borderRadius.SM};

    width: 30vw;
    height: 30vw;
`;
export const ModalBackground = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.grayscale.medium};
    opacity: ${({ theme }) => theme.opacities.intense};
`;

export default Container;
