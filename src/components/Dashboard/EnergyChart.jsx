import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * EnergyChart component for displaying energy consumption data in a line chart.
 * @param {Object} props - Component props.
 * @param {Array} props.data - Data to be displayed in the chart.
 */
const EnergyChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="consumption"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          name="Energy Consumption"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EnergyChart;
