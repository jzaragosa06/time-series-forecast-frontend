import api from "../config/api"

export const forecastTimeSeries = async (formData) => {
    return await api.post('/api/forecast/univariate', formData);
}