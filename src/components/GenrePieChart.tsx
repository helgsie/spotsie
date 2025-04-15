'use client';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function GenrePieChart({ genres }: { genres: { genre: string, count: number }[] }) {
    const topGenres = genres.slice(0, 6);

    const data = {
        labels: topGenres.map(g => g.genre),
        datasets: [
            {
                data: topGenres.map(g => g.count),
                backgroundColor: ['#ff9f1c', '#2ec4b6', '#e71d36', '#011627', '#ffbf69', '#cbf3f0'],
            }
        ],
    }

    return (
        <div className="max-w-md mx-auto my-8">
            <h2 className="text-xl font-semibold mb-2">Uppáhalds stefnurnar mínar</h2>
            <Pie data={data} />
        </div>
    )
}