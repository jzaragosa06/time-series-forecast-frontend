import { useState } from "react"
import { forecastTimeSeries } from "../services/forecast.service";
import { explainForecastWithAI, explainSeriesWithAI } from "../services/ai.service";

export const useAnalyze = (formData, preprocessedSeries) => {
    const [metric, setMetric] = useState();
    const [inSampleForecastTest, setInSampleForecastTest] = useState([]);
    const [outSampleForecast, setOutSampleForecast] = useState([]);

    const forecast = async () => {
        const response = await forecastTimeSeries({ ...formData, series: preprocessedSeries });
        setMetric(response.data.metric);
        setInSampleForecastTest(response.data.in_sample_forecast_test);
        setOutSampleForecast(response.data.out_sample_forecast);

        console.log('forecast', response);
    }

    const explainSeries = async () => {
        const response = await explainSeriesWithAI({
            series: preprocessedSeries,
        });
        return;
    }

    const explainForecast = async () => {
        const response = await explainForecastWithAI({
            forcast: outSampleForecast,
        });
        return;
    }




    return {
        metric, setMetric,
        inSampleForecastTest, setInSampleForecastTest,
        outSampleForecast, setOutSampleForecast,
        forecast,
        explainSeries,
        explainForecast,
    }
}