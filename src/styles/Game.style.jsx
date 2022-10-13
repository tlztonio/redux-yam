import styled from 'styled-components';

export const GameStyled = styled.div`

    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background-color: #1F1F21;
    border-radius: 10px;
    margin-top: 5px;

    > label {
        font-weight: 500;
    }

    > input {
        color: white;
        padding: 10px;
        border: 1px solid transparent;
        background-color: #151515;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;

        /* Chrome, Safari, Edge, Opera */
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        &[type=number] {
        -moz-appearance: textfield;
        }

        &:focus {
            outline: none;
            border: 1px solid #4490EB;
        }

        &::placeholder {
            color: #1F1F21;
        }
    }

    > button {
        margin-top: 8px;
        padding: 8px;
        border-radius: 5px;
        border: none;
        background-color: #4490EB;
        color: white;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        margin-bottom: 10px;
        &:hover {
            background-color: #2F6FCC;
        }

    }


`;