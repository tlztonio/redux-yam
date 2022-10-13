import { React, useEffect, useRef } from "react";
import { ChartStyled } from "../styles/Chart.style.jsx";
import Chart from 'chart.js/auto';

const ChartComponent = ({ className, data }) => {
    const myRef = useRef(null)
    let myChart = null;

    useEffect(() => {
        // console.log('test')
        console.log(myRef.current)
        // const ctx = document.getElementById('myChart');

        const myChart = new Chart(myRef.current, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
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
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
        // console.log(ctx)
        return () => myChart.destroy();
    }, []);

    return (
        <ChartStyled ref={myRef} id='myChart'>
        </ChartStyled>
    );
};

export default ChartComponent;