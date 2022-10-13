import styled from 'styled-components';

export const HomeStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    max-width: 500px;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    > h1 {
        font-size: 48px;
        font-weight: 500;
        margin: 0;
        line-height: 72px;
    }

    > p {
        font-size: 24px;
        font-weight: 500;
        color: #7E7E7E;
        width: 100%;
        margin: 0;
        line-height: 36px;
    }

    // Responsive Tablette & Mobile
    @media screen and (max-width: 1024px) {
        max-width: 100%;
        text-align: center;
        font-size: 14px;

        > h1 {
            font-size: 36px;
            line-height: 32px;
            margin-bottom: 8px;
        }

        > p {
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
        }

    }


`;