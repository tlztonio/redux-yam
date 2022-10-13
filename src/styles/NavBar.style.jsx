import styled from 'styled-components';

export const NavBarStyle = styled.nav`
    position: fixed;
    top:32px;
    left: 80px;
    width: calc(99% - 150px);
    height: 72px;
    background-color: #1F1F21;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        list-style-type: none;
        padding: 0;

        > li {
            cursor: pointer;
            > a {
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 16px;
                color: white;
                text-decoration: none;
                padding: 8px 10px;
                background-color: transparent;
                border-radius: 5px;
                transition: all 0.3s ease-in-out;
            }

            &:hover > a {
                background-color: #151515;
            }

        }
    }
`;