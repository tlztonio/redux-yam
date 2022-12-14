import Chart from "../components/Chart";
import { useSelector } from "react-redux";
import { GamesContainer } from "../styles/GamesContainer.style";

function Stats() {
    const { games } = useSelector(state => state.yam);
    console.log('games', games);

    return (
        <>
            <Chart />
            <GamesContainer>
                {games.map((game, index) => {
                    return (
                        <div key={index}>
                            <p>Game {index + 1}</p>
                            <p>Points : {game.points}</p>
                            <p>Iterations : {game.iterations.length}</p>
                            <ul>
                                <li>brelans : {game.combinaisons.brelans}</li>
                                <li>carres : {game.combinaisons.carres}</li>
                                <li>fulls : {game.combinaisons.fulls}</li>
                                <li>petiteSuites : {game.combinaisons.petiteSuites}</li>
                                <li>grandeSuites : {game.combinaisons.grandeSuites}</li>
                                <li>yams : {game.combinaisons.yams}</li>
                                <li>chances : {game.combinaisons.chances}</li>
                            </ul>
                            <br />
                        </div>
                    )
                })}
            </GamesContainer>
        </>
    );
}

export default Stats;