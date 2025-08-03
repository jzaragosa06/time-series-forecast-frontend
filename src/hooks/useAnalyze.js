import { useEffect, useState } from "react"
import { forecastTimeSeries } from "../services/forecast.service";
import { explainForecastWithAI } from "../services/ai.service";

export const useAnalyze = (formData, preprocessedSeries) => {
    const [metric, setMetric] = useState();
    const [inSampleForecastTest, setInSampleForecastTest] = useState([]);
    const [outSampleForecast, setOutSampleForecast] = useState([]);
    const [forecastExplanation, setForecastExplanation] = useState();
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState();

    const checkSeries = () => {
        if (preprocessedSeries.length <= 100) {
            setIsValid(false);
            setErrorMessage("The series must contain more than 100 entries.");
            return false;
        }

        const allFilled = preprocessedSeries.every(item => item.value !== null);
        if (!allFilled) {
            setIsValid(false);
            setErrorMessage("All series values must be filled.");
            return false;
        }

        return true;
    };
    const forecast = async () => {
        try {
            if (checkSeries() == false) return;
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
                    prompt: formData.prompt,
                    description: formData.description,
                    series: outSampleForecast,
                });

                setForecastExplanation(response.data.explanation);
            } catch (error) {
                console.log(error);
            }

        }

        if (outSampleForecast && outSampleForecast.length > 0) {
            explainForecast();
        }
    }, [outSampleForecast]);

    return {
        metric, setMetric,
        inSampleForecastTest, setInSampleForecastTest,
        outSampleForecast, setOutSampleForecast,
        forecast,
        forecastExplanation, setForecastExplanation,
        isValid, setIsValid,
        errorMessage, setErrorMessage
    }
}