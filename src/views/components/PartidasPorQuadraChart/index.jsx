import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registra os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PartidasPorQuadraChart = ({ partidas, quadras }) => {
    // Certifique-se de que `partidas` e `quadras` são arrays
    const partidasData = Array.isArray(partidas) ? partidas : [];
    const quadrasData = Array.isArray(quadras) ? quadras : [];

    // Agrupa as partidas por quadra
    const partidasPorQuadra = partidasData.reduce((acc, partida) => {
        const quadraId = partida.id_quadra;
        acc[quadraId] = (acc[quadraId] || 0) + 1;
        return acc;
    }, {});

    // Configura os dados do gráfico
    const data = {
        labels: quadrasData.map((quadra) => quadra.nome || `Quadra ${quadra.id_quadra}`),
        datasets: [
            {
                label: "Partidas por Quadra",
                data: quadrasData.map((quadra) => partidasPorQuadra[quadra.id_quadra] || 0),
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Opções do gráfico
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Partidas por Quadra",
            },
        },
    };

    return (
        <div>
            <h2>Partidas por Quadra</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default PartidasPorQuadraChart;
