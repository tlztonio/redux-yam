import { React, useEffect, useRef, useState } from "react";
import { ChartStyled, ButtonStyled, ButtonContainer } from "../styles/Chart.style.jsx";
import Chart from 'chart.js/auto';
import { useSelector } from "react-redux";

const ChartComponent = ({ className, data }) => {
    const myRef = useRef(null)

    const games = useSelector(state => state.yam.games)
    const [chartMode, setChartMode] = useState('combinaisons'); // ou points

    const handlePoints = () => {
        setChartMode('points');
    }

    const handleCombinaisons = () => {
        setChartMode('combinaisons');
    }

    useEffect(() => {

        const combinaisonsLabels = ['brelan', 'carre', 'full', 'petiteSuite', 'grandeSuite', 'yams']
        const totalCombinaisons = {
            brelans: 0,
            carres: 0,
            fulls: 0,
            petiteSuites: 0,
            grandeSuites: 0,
            yams: 0
        }
        const pointsLabels = []
        const pointsData = []

        games.forEach((game, index) => {
            totalCombinaisons.brelans += game.combinaisons.brelans
            totalCombinaisons.carres += game.combinaisons.carres
            totalCombinaisons.fulls += game.combinaisons.fulls
            totalCombinaisons.petiteSuites += game.combinaisons.petiteSuites
            totalCombinaisons.grandeSuites += game.combinaisons.grandeSuites
            totalCombinaisons.yams += game.combinaisons.yams

            pointsLabels.push('game ' + index)
            pointsData.push(game.points)
        });

        const combinaisonsData = Object.values(totalCombinaisons)

        const myChart = new Chart(myRef.current, {
            type: 'line',
            data: {
                labels: chartMode === 'combinaisons' ? combinaisonsLabels : pointsLabels,
                datasets: [{
                    label: 'nombre',
                    data: chartMode === 'combinaisons' ? combinaisonsData : pointsData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
        })

        return () => myChart.destroy();
    }, [games, chartMode]);

    return (
        <>
            <ChartStyled ref={myRef} id='myChart'>
            </ChartStyled>
            <ButtonContainer>
                <ButtonStyled onClick={handlePoints}>Points</ButtonStyled>
                <ButtonStyled onClick={handleCombinaisons}>Combinaisons</ButtonStyled>
            </ButtonContainer>
        </>
    );
};

export default ChartComponent;