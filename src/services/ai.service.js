import api from "../config/api"

export const explainSeriesWithAI = async (formData) => {
    return await api.post('/api/ai/explain/series', formData);
}

export const explainForecastWithAI = async (formData) => {
    return await api.post('/api/ai/explain/forecast', formData);
}