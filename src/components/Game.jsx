import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { add_game } from '../store/actions/actions-types';
import { GameStyled } from '../styles/Game.style';

const BRELAN_NB = 6;

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkPetiteSuite(arrayCount) {
    let nbSuite = 0;
    let sommeSuite = 0;
    for (let k = arrayCount.length - 1; k >= 0; k--) {
        if (arrayCount[k] > 0) {
            nbSuite++;
            sommeSuite += k + 1;
            if (nbSuite == 4) {
                return true;
            }
        } else { // suite brisée
            nbSuite = 0;
            sommeSuite = 0;
        }
    }
    return false;
}

const GameComponent = () => {
    const inputRef = useRef(null)

    // lecture du store de la source de vérité read-only
    const { games } = useSelector(state => state);

    // actions dispatch dans le reducer => newState 
    const dispatch = useDispatch();

    const handleGame = () => {

        // Déclaration items
        const iterationsCount = inputRef.current.value;
        console.log(iterationsCount);

        // Structure de données
        const gameModel = {
            combinaisons: {
                brelans: 0,
                carres: 0,
                fulls: 0,
                petiteSuites: 0,
                grandeSuites: 0,
                yams: 0,
                chances: 0
            },
            iterations: [
                {
                    de1: 0,
                    de2: 0,
                    de3: 0,
                    de4: 0,
                    de5: 0,
                }
            ],
            points: 0
        };

        const combinaisons = {
            brelans: 0,
            carres: 0,
            fulls: 0,
            petiteSuites: 0,
            grandeSuites: 0,
            yams: 0,
            chances: 0
        };

        const iterations = [];


        if (iterationsCount) {

            let points = 0;

            for (let i = 0; i < iterationsCount; i++) {

                const dice1 = randomNumbers(1, 6);
                const dice2 = randomNumbers(1, 6);
                const dice3 = randomNumbers(1, 6);
                const dice4 = randomNumbers(1, 6);
                const dice5 = randomNumbers(1, 6);

                iterations.push({
                    de1: dice1,
                    de2: dice2,
                    de3: dice3,
                    de4: dice4,
                    de5: dice5,
                });

                // brelan // carre // full // petite suite // grande suite // yams // chance

                const dicesArray = [dice1, dice2, dice3, dice4, dice5];
                const countArray = [0, 0, 0, 0, 0, 0]; // 1, 2, 3, 4, 5, 6

                for (let j = 0; j < dicesArray.length; j++) {
                    const indice = dicesArray[j] - 1;
                    countArray[indice] += 1;
                }

                const dicesSum = dicesArray.reduce((acc, curr) => {
                    return acc + curr;
                });

                if (countArray.includes(3) && countArray.includes(2)) { // full
                    combinaisons.fulls++
                    points += 25;
                } else if (countArray.includes(3)) { // brelan
                    combinaisons.brelans++
                    points += dicesSum;
                } else if (countArray.includes(4)) { // carre
                    combinaisons.carres++
                    points += dicesSum;
                } else if (countArray.includes(5)) { // yams
                    combinaisons.yams++
                    points += 50;
                } else if ((countArray + "" === [1, 1, 1, 1, 1, 0] + "") || (countArray + "" === [0, 1, 1, 1, 1, 1] + "")) { // grande suite
                    combinaisons.grandeSuites++
                    console.log(countArray + "")
                    points += 40;
                } else if (checkPetiteSuite(countArray)) { // petite suite
                    combinaisons.petiteSuites++
                    points += 25;
                } else { // chance
                    combinaisons.chances++
                    points += dicesSum;
                }

            }

            // Construction du jeu
            const game = {
                ...gameModel,
                combinaisons,
                iterations,
                points
            };

            dispatch(add_game({ type: 'ADD_GAME', game }));

            // log du store
            console.log(game);
        }
    };

    useEffect(() => {

    }, []);

    return (
        <GameStyled >
            <label htmlFor="iterations">Nombre de lancés</label>
            <input ref={inputRef} autoComplete="off" type="number" />
            <button onClick={handleGame}>Lancer</button>
        </GameStyled>
    );
};

export default GameComponent;