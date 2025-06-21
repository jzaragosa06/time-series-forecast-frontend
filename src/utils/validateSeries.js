//check if it is number using regex
export const validateSeriesValue = (value) => {
    return /^-?\d*\.?\d*$/.test(value.trim());
}

export const coundValidValues = (series) => {
    if (!series) return false;

    const filtered = series.filter(s => s.value != null);
    if (filtered.length > 0) {
        return true;
    }
    return false;
}