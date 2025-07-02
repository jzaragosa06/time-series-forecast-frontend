import api from "../config/api"

// We're using axios that is configured already with the backend_baseurl
// export const explainSeriesWithAI = async (formData) => {
//     return await api.post('/api/ai/explain/series', formData)
// }

export const explainForecastWithAI = async (formData) => {
    return await api.post('/api/ai/explain/forecast', formData);
}