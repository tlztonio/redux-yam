import styled from 'styled-components';

export const HomeStyled = styled.div`

    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;

    > h1 {
        font-size: 48px;
        font-weight: 500;
    }

    > p {
        color: #7E7E7E;
        width: 30%;
    }

    > .nb-container {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        width: 30%;
        padding: 16px 24px;
        background-color: #1F1F21;
        border-radius: 20px;

        > label {
            font-weight: 500;
        }

        > input {
            margin-top: 10px;
            padding: 10px;
            border: 1px solid transparent;
            background-color: #151515;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;

            /* Chrome, Safari, Edge, Opera */
             > input::-webkit-outer-spin-button,
             > input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
            }

            /* Firefox */
            input[type=number] {
            -moz-appearance: textfield;
            }

            &:focus {
                outline: none;
                border: 1px solid #4490EB;
            }
        }

        > button {
            margin-top: 10px;
            padding: 10px;
            border: 1px solid #7E7E7E;
            border-radius: 5px;
            background-color: #7E7E7E;
            color: white;
            font-weight: 500;
            cursor: pointer;
        }
    }


`;