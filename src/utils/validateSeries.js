//check if it is number using regex
export const validateSeriesValue = (value) => {
    return /^-?\d*\.?\d*$/.test(value.trim());
}

export const coundValidValues = (series) => {
    const filtered = series.filter(s => s.value != "");
    if (filtered.length > 0) {
        return true;
    }
    return false;
}