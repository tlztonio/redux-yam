import styled from 'styled-components';

export const ChartStyled = styled.canvas`
    margin-top: 8em;
    margin-left: 5vw;
    margin-right: 8vw;
`;

export const ButtonStyled = styled.button`
  all: unset;
  font-size: 1em;
  color: white;
  border-radius: 10px;
  transition: 0.4s ease-in-out;
    cursor: pointer;
    background-color: #1F1F21;
    padding: 0.5em;
    margin: 0.5em;
    margin-top: 2em;

  &:hover {
    background-color: #151515;
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;