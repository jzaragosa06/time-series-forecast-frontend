import { useEffect, useState } from "react"
import { forecastTimeSeries } from "../services/forecast.service";
import { explainForecastWithAI } from "../services/ai.service";

export const useAnalyze = (formData, preprocessedSeries) => {
    const [metric, setMetric] = useState();
    const [inSampleForecastTest, setInSampleForecastTest] = useState([]);
    const [outSampleForecast, setOutSampleForecast] = useState([]);
    const [forecastExplanation, setForecastExplanation] = useState();

    const forecast = async () => {
        try {
            const response = await forecastTimeSeries({ ...formData, series: preprocessedSeries });
            setMetric(response.data.metric);
            setInSampleForecastTest(response.data.in_sample_forecast_test);
            setOutSampleForecast(response.data.out_sample_forecast);
            console.log('forecast', response);
        } catch (error) {
            console.log('forecast error', error);
        }
    }

    useEffect(() => {
        if (!outSampleForecast) return;

        const explainForecast = async () => {
            try {
                const response = await explainForecastWithAI({
                    prompt: 'financial stock data of a company',
                    series: outSampleForecast,
                }); 

                setForecastExplanation(response.data.explanation);
            } catch (error) {
                console.log(error);
            }

        }

        explainForecast();
    }, [outSampleForecast]);

    return {
        metric, setMetric,
        inSampleForecastTest, setInSampleForecastTest,
        outSampleForecast, setOutSampleForecast,
        forecast,
        forecastExplanation, setForecastExplanation
    }
}