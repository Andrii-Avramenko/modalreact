import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
`

export const ModalContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translate(-50%, -50%);
    min-height: 300px;
    max-width: 400px;
    width: 100%;
    padding: 12px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow:
        0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;  

export const ModalClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    padding: 0;
    height: 20px;
    border: 0;
    background: transparent;
    color: #f00;

    svg {
        width: 100%;
        height: 100%;
    }

    &:hover,
    &:focus {
        color: rgb(183, 0, 0);
    }
`

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    align-items: center;
`

export const ModalLabel = styled.label`
    display: flex;
    flex-direction: column;
`