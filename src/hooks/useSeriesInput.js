import { useState } from "react"
import { checkSeriesForMissingValues } from "../services/series.service";

export const useSeriesInput = () => {
    const [series, setSeries] = useState([
        { index: 1, value: "" },
        { index: 2, value: "" },
        { index: 3, value: "" },
    ]);

    const addNewRow = () => {
        setSeries(prev => [...prev, { index: series.length + 1, value: "" }]);
    }

    const deleteRow = (index) => {
        setSeries(prev => {
            const filtered = prev.filter(s => s.index !== index);
            //reindex the series
            return filtered.map((s, idx) => ({
                index: idx + 1,
                value: s.value,
            }));
        })
    }

    const updateValue = (index, value) => {
        setSeries(prev => prev.map(s =>
            s.index === index ? { ...s, value } : s
        ));
    }

    const handleBulkPaste = (csvString) => {
        const values = csvString.split(',')
            .map(v => v.trim())
            .filter(v => v !== '');

        if (values.length > 0) {
            setSeries(values.map((value, idx) => ({
                index: idx + 1,
                value
            })));
        }
    }


    // const handleBulkPaste = (csvString) => {
    //     const values = csvString.split(',')
    //         .map(v => v.trim())
    //         .filter(v => v !== '');

    //     if (values.length > 0) {
    //         setSeries(prev => [
    //             ...prev,
    //             ...values.map((value, idx) => ({
    //                 index: prev.length + idx + 1,
    //                 value
    //             })),
    //         ])
    //     }
    // }


    const checkSeries = async () => {
        const response = await checkSeriesForMissingValues({ series });
        console.log('checked series', response);

    }




    return {
        series,
        checkSeries,
        addNewRow,
        deleteRow,
        updateValue,
        handleBulkPaste
    }
}