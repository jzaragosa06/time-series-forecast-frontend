import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const LinesGraph = ({ series1, series2 }) => {
    if (!series1 || !Array.isArray(series1) || series1.length === 0) {
        return (
            <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
                No data to display.
            </div>
        );
    }

    // Merge series1 and series2 by index
    const dataMap = {};

    series1.forEach(s => {
        dataMap[s.index] = {
            name: s.index,
            series1: s.value === "" || s.value === null ? null : Number(s.value).toFixed(4),
        };
    });

    if (series2 && Array.isArray(series2)) {
        series2.forEach(s => {
            if (!dataMap[s.index]) {
                dataMap[s.index] = { name: s.index };
            }
            dataMap[s.index].series2 = s.value === "" || s.value === null ? null : Number(s.value).toFixed(4);
        });
    }

    const formattedData = Object.values(dataMap).sort((a, b) => a.name - b.name);

    // Calculate Y-axis domain from both series
    const allValues = formattedData.flatMap(d => [d.series1, d.series2]).filter(v => v !== null && !isNaN(v));
    const minY = Math.min(...allValues);
    const maxY = Math.max(...allValues);

    return (
        <ResponsiveContainer width="100%" height={260}>
            <LineChart
                data={formattedData}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
            >
                <XAxis
                    dataKey="name"
                    tick={{ fill: '#888', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    domain={[minY, maxY]}
                    tick={{ fill: '#888', fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        border: '1px solid #ddd',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                    itemStyle={{ color: '#555' }}
                />
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    wrapperStyle={{ fontSize: 12, color: '#888' }}
                />
                <Line
                    type="monotone"
                    dataKey="series1"
                    name="True Value"
                    stroke="#1e40af"
                    strokeWidth={2}
                    dot={{ r: 2, stroke: '#1e40af', strokeWidth: 1, fill: '#fff' }}
                    activeDot={{ r: 4 }}
                />
                <Line
                    type="monotone"
                    dataKey="series2"
                    name="Forecasted Value"
                    stroke="#dc2626"
                    strokeWidth={2}
                    dot={{ r: 2, stroke: '#dc2626', strokeWidth: 1, fill: '#fff' }}
                    activeDot={{ r: 4 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LinesGraph;
