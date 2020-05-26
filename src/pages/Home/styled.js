import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333333;
    
`;

export const Item = styled.div`
    display: flex;
    align-itens: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 30px;
    padding: 0 .25rem;
    margin-top: 40vh;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 1px solid #ddd;
    border-radius: 0 .25rem .25rem 0;
    height: 32px;
    padding: 0 .25rem;
    color: #eee;
    background: #3385ff;
    margin-top: 40vh;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Erro = styled.p`
    color: red;
    text-align: center;
    font-size: 12px;
    font-family: sans-serif;
    margin-top: 20px;
`;