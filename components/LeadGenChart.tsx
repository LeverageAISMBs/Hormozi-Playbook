
import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Legend, Tooltip, CategoryScale } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Legend, Tooltip, CategoryScale);

const LeadGenChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // Destroy previous chart instance if it exists
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                chartInstance.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Cold Outreach', 'Content Creation', 'Referrals'],
                        datasets: [{
                            label: 'Lead Gen Mix',
                            data: [60, 25, 15],
                            backgroundColor: [
                                'rgb(15, 118, 110)',
                                'rgb(13, 148, 136)',
                                'rgb(55, 234, 206)'
                            ],
                            borderColor: '#fdfbf7',
                            borderWidth: 4,
                            hoverOffset: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    font: {
                                        family: "'Inter', sans-serif"
                                    }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context: any) {
                                        return `${context.label}: ${context.raw}%`;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Cleanup function to destroy chart on component unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="relative w-full max-w-sm mx-auto h-72">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default LeadGenChart;
