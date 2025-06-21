import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Brush,
} from 'recharts';

const LineGraph = ({ series }) => {
    if (!series || !Array.isArray(series) || series.length === 0) return null;

    const formattedData = series.map(s => ({
        name: s.index,
        value: s.value === "" || s.value === null ? null : Number(s.value),
    }));

    // Get min/max for Y-axis
    const values = formattedData.map(d => d.value).filter(v => v !== null && !isNaN(v));
    const minY = Math.min(...values);
    const maxY = Math.max(...values);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={formattedData}
                margin={{ top: 20, right: 30, left: 0, bottom: 40 }}
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
                    dataKey="value"
                    stroke="#4f46e5"
                    strokeWidth={1.5} // thinner line
                    dot={{ r: 2, stroke: '#4f46e5', strokeWidth: 1, fill: '#fff' }} // smaller dot
                    activeDot={{ r: 4 }}
                />
                {/* <Brush
                    dataKey="name"
                    height={20}
                    stroke="#4f46e5"
                    travellerWidth={10}
                /> */}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineGraph;
