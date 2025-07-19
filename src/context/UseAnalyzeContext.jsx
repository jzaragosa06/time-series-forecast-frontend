import { createContext, useContext, useState } from "react";
import { useSeriesInput } from "../hooks/useSeriesInput";
import { usePreprocessing } from "../hooks/usePreprocessing";
import { useAnalyze } from "../hooks/useAnalyze";

const AnalysisContext = createContext();

//provider
export const AnalysisProvider = ({ children }) => {
    const seriesInput = useSeriesInput();
    const preprocessing = usePreprocessing(seriesInput.series);
    const analyze = useAnalyze(preprocessing.formData, preprocessing.preprocessedSeries);
    const [processingEnabled, setProcessingEnabled] = useState(false);

    return (
        <AnalysisContext.Provider value={{
            ...seriesInput,
            ...preprocessing,
            ...analyze,
            processingEnabled,
            setProcessingEnabled,
        }}>
            {children}
        </AnalysisContext.Provider>
    );
}

//for easily using the provider (import on specific component)
export const useAnalysis = () => useContext(AnalysisContext);