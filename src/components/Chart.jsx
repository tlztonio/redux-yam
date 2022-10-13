import { React, useEffect, useRef } from "react";
import { ChartStyled } from "../styles/Chart.style.jsx";
import Chart from 'chart.js/auto';
import { useSelector } from "react-redux";

const ChartComponent = ({ className, data }) => {
    const myRef = useRef(null)

    const games = useSelector(state => state.yam.games)


    useEffect(() => {
        console.log('etst')

        const brelans = []
        const brelanLabels = []
        let i
        games.forEach(game => {
            brelans.push(game.brelans)
            i++
            brelanLabels.push(game.iterations.length + ' iterations')
        });

        console.log(brelans)

        const myChart = new Chart(myRef.current, {
            type: 'line',
            data: {
                labels: brelanLabels,
                datasets: [{
                    label: 'brelans de 6',
                    data: brelans,
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
    }, [games]);

    return (
        <ChartStyled ref={myRef} id='myChart'>
        </ChartStyled>
    );
};

export default ChartComponent;