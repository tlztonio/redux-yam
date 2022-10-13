import { React, useEffect, useRef, useState } from "react";
import { ChartStyled } from "../styles/Chart.style.jsx";
import Chart from 'chart.js/auto';
import { useSelector } from "react-redux";

const ChartComponent = ({ className, data }) => {
    const myRef = useRef(null)

    const games = useSelector(state => state.yam.games)
    const [chartMode, setChartMode] = useState('points'); // ou points

    const handlePoints = () => {
        setChartMode('points');
    }

    const handleCombinaisons = () => {
        setChartMode('combinaisons');
    }

    useEffect(() => {

        const combinaisonsLabels = ['brelan', 'carre', 'full', 'petiteSuite', 'grandeSuite', 'yams', 'chance']
        const totalCombinaisons = {
            brelans: 0,
            carres: 0,
            fulls: 0,
            petiteSuites: 0,
            grandeSuites: 0,
            yamss: 0,
            chances: 0
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
            totalCombinaisons.chances += game.combinaisons.chances

            pointsLabels.push('game ' + index)
            pointsData.push(game.points)
        });

        const combinaisonsData = Object.values(totalCombinaisons)

        const myChart = new Chart(myRef.current, {
            type: 'line',
            data: {
                labels: chartMode === 'combinaisons' ? combinaisonsLabels : pointsLabels,
                datasets: [{
                    label: 'brelans de 6',
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
            // options: {
            //     scales: {
            //         y: {
            //             beginAtZero: true
            //         }
            //     }
            // }
        })

        return () => myChart.destroy();
    }, [games, chartMode]);

    return (
        <>
            <button onClick={handlePoints}>Points</button>
            <button onClick={handleCombinaisons}>Combinaisons</button>
            <ChartStyled ref={myRef} id='myChart'>
            </ChartStyled>
        </>
    );
};

export default ChartComponent;