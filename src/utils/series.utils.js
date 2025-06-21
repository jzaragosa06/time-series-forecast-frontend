export const nullEmptyStringValues = (series) => {
    return series.map(s => ({
        index: s.index,
        value: s.value === "" ? null : s.value,
    }));
}