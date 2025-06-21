// import { useEffect, useState } from "react"
// import { handleMissingValues } from "../services/preprocessing.service";
// import { nullEmptyStringValues } from "../utils/series.utils";

// export const usePreprocessing = (series) => {
//     const [preprocessedSeries, setPreprocessedSeries] = useState();

//     const [formData, setFormData] = useState({
//         method: 'none',
//         value: 0,
//         frequency: 'D',
//         steps: '',
//         forecast_method: 'without_refit',
//     });

//     const [debouncedSeries, setDebouncedSeries] = useState(series);

//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setDebouncedSeries(series);
//         }, 1000);

//         return () => clearTimeout(handler);
//     }, [series]);

//     useEffect(() => {
//         const seriesPreprocessing = async () => {
//             try {
//                 const nulledSeries = nullEmptyStringValues(series);
//                 const response = await handleMissingValues({ ...formData, series: nulledSeries });
//                 if (response.data?.series) {
//                     console.log('preprocessed', response.data.series);
//                     setPreprocessedSeries(response.data.series);
//                 }
//             } catch (error) {
//                 console.error('Preprocessing error:', error);
//             }
//         }

//         if (formData.method !== 'none') {
//             seriesPreprocessing();
//         }
//     }, [formData.method, formData.value, debouncedSeries]);

//     return {
//         preprocessedSeries,
//         setPreprocessedSeries,
//         formData, setFormData
//     }
// }

import { useEffect, useState } from "react";
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

    const [debouncedSeries, setDebouncedSeries] = useState(series);

    // debounce series changes
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSeries(series);
        }, 3000);

        return () => clearTimeout(handler);
    }, [series]);

    useEffect(() => {
        const seriesPreprocessing = async () => {
            try {
                const nulledSeries = nullEmptyStringValues(debouncedSeries);
                const response = await handleMissingValues({ ...formData, series: nulledSeries });
                if (response.data?.series) {
                    console.log('preprocessed', response.data.series);
                    setPreprocessedSeries(response.data.series);
                }
            } catch (error) {
                console.error('Preprocessing error:', error);
            }
        };

        // if (formData.method !== 'none') {
        //     seriesPreprocessing();
        // }
        seriesPreprocessing(); 
    }, [formData.method, formData.value, debouncedSeries]);

    return {
        preprocessedSeries,
        setPreprocessedSeries,
        formData, setFormData
    };
};
