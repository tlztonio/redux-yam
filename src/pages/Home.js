import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_game } from '../store/actions/actions-types';
import { HomeStyled } from '../styles/Home.style';
import Game from '../components/Game';

function Home() {

    return (
        <HomeStyled>
            <h1>Jouez au Yam.</h1>
            <p>Le but du jeu est de faire le plus de points possible en faisant des combinaisons de dés.</p>
            <Game />
        </HomeStyled>
    );
}

export default Home;