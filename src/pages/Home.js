import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add_game } from '../store/actions/actions-types';
import { HomeStyled } from '../styles/Home.style';

const BRELAN_NB = 6;

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Home() {

    const [error, setError] = useState(false);

    // lecture du store de la source de vérité read-only
    const { games } = useSelector(state => state);

    // actions dispatch dans le reducer => newState 
    const dispatch = useDispatch();

    return(
        <HomeStyled>
            <h1>Jouez au Yam.</h1>
            <p>Le but du jeu est de faire le plus de points possible en faisant des combinaisons de dés.</p>

            <div className='nb-container'>
                <label htmlFor="iterations">Nombre d'expériences</label>
                <input autoComplete="off" type="number" id="iterations" />
                {error && <p>Le nombre d'expériences doit être un nombre valide. </p>}
                <button onClick={() => {

                    // if input is empty or not a number

                    if(!document.getElementById('iterations').value && isNaN(document.getElementById('iterations').value && document.getElementById('iterations').value < 1)) {
                        setError(true);
                    }
                    else {
                        setError(false);

                        // Déclaration items
                        const iterationsInput = document.getElementById('iterations').value;

                        // Structure de données
                        const gameModel = {
                                brelans: 0,
                                iterations: [
                                    {
                                        total: 0,
                                        de1: 0,
                                        de2: 0,
                                        de3: 0,
                                    }
                                ]
                        };

                        const iterations = [];
                        const iterationModel = {
                            de1: 0,
                            de2: 0,
                            de3: 0,
                            total: 0
                        };
                        let totalBrelans = 0;

                        if (iterationsInput) {

                            for (let i = 0; i < iterationsInput; i++) {

                                const dice1 = randomNumbers(1, 6);
                                const dice2 = randomNumbers(1, 6);
                                const dice3 = randomNumbers(1, 6);

                                const total = dice1 + dice2 + dice3;

                                iterations.push({
                                    ...iterationModel,
                                    de1: dice1,
                                    de2: dice2,
                                    de3: dice3,
                                    total
                                });

                                // Si on a un brelan 6
                                if (total === BRELAN_NB * 3) {
                                    totalBrelans++;
                                }
                            }

                            // Construction du jeu
                            const game = {
                                ...gameModel,
                                brelans: totalBrelans,
                                iterations
                            };

                            dispatch(add_game({type: 'ADD_GAME', game}));

                            // log du store
                            console.log(games);

                        }
                    }

                }}>Jouer</button>
            </div>
            

        
        </HomeStyled>
    );
}

export default Home;