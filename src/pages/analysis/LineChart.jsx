import { ResponsiveLine } from '@nivo/line'

const LineChart = ({ series }) => {
    if (!series) return null;

    const formattedData = [
        {
            id: 'Time Series',
            data: series.map(s => ({
                x: s.index,
                y: s.value === "" || s.value === null ? null : Number(s.value)
            }))
        }
    ]

    return (
        <div className='h-full w-full'>
            <ResponsiveLine
                data={formattedData}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                axisBottom={{ legend: 'Time Index', legendOffset: 36 }}
                axisLeft={{ legend: 'Value', legendOffset: -40 }}
                enableGridX={false}
                enableGridY={false}
                colors={{ scheme: 'category10' }}
                lineWidth={1}
                enablePoints={false}
                pointSize={10}
                pointColor={{ theme: 'labels.text.fill' }}
                pointBorderColor={{ from: 'seriesColor' }}
                pointLabelYOffset={-12}
                enableTouchCrosshair={true}
                useMesh={true}
                motionConfig="default"
            />
        </div>

    );
}

export default LineChart; 