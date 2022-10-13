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

    >.button-wrapper {
        margin: 8px 0 10px;
        
        &.empty {
            cursor: not-allowed;

            > button {
                background-color: #7E7E7E;
                pointer-events: none;
            }
        }

        &.active {
            > button {
                background-color: #4490EB;
            }
        }

        &.clicked {
            // animate to make the background color fill left to right
            cursor: not-allowed;
            > button {
                pointer-events: none;
                background-color: #80A584;

                > span {
                    opacity: 0;
                }

                &:after {
                    opacity: 1;
                }
            }
        }

        > button {
            position: relative;
            top:0;
            left:0;
            cursor: pointer;
            width: 100%;
            padding: 8px;
            border-radius: 5px;
            border: none;
            color: white;
            font-weight: 500;
            transition: all 0.3s ease-in-out;
            background-color: #7E7E7E;

            > span {
                opacity: 1;
                transition: all 0.3s ease-in-out;
            }

            &:hover {
                background-color: #2F6FCC;
            }

            &:after {
                    content: '✔';
                    opacity: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: all 0.3s ease-in-out;
                }

        }   
    }

`;