import api from "../config/api"

export const handleMissingValues = async (formData) => {
    return await api.post(`/api/preprocess/handle-missing-values`, formData);
}