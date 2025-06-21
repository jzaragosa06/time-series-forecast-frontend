import api from "../config/api"

export const checkSeriesForMissingValues = async (formData) => {
    return await api.post('/api/preprocess/check-series', formData, );
}

