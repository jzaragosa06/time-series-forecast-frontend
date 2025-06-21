import { useEffect, useState } from "react"
import { handleMissingValues } from "../services/preprocessing.service";
import { nullEmptyStringValues } from "../utils/series.utils";

export const usePreprocessing = (series) => {
    const [preprocessedSeries, setPreprocessedSeries] = useState();

    const [formData, setFormData] = useState({
        method: 'none',
        value: 0,
        frequency: 'D',
        steps: '',
        forecast_method: 'without_refit',
    });

    useEffect(() => {
        setTimeout(() => {
            //wait 3 secs before processing. 
        }, 3000);
        const seriesPreprocessing = async () => {
            try {
                const nulledSeries = nullEmptyStringValues(series);
                const response = await handleMissingValues({ ...formData, series: nulledSeries });
                if (response.data?.series) {
                    setPreprocessedSeries(response.data.series);
                }
            } catch (error) {
                console.error('Preprocessing error:', error);
            }
        }

        seriesPreprocessing();
    }, [formData.method, formData.value, series]);

    return {
        preprocessedSeries,
        setPreprocessedSeries,
        formData, setFormData
    }
}