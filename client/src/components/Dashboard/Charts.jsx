import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register the components needed for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ['Rent', 'Food', 'Entertainment', 'Transport'],
    datasets: [
      {
        data: [500, 200, 300, 100],
        backgroundColor: ['#4CAF50', '#FFC107', '#2196F3', '#FF5722'],
      },
    ],
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Expense Distribution</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Charts;
