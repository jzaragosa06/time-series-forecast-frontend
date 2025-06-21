const methods = [
    { key: "none", value: "None" }, //this will default to dropna in the backend
    { key: "fill_with_value", value: "Fill with Number" },
    { key: "ffill", value: "Forwared Fill" },
    { key: "bfill", value: "Backward Fill" },
    { key: "mean", value: "Mean" },
    { key: "median", value: "Median" },
    { key: "mode", value: "Mode" },
    { key: "dropna", value: "Drop missing values" }
]

const PreprocessingOption = ({ formData, setFormData }) => {
    return (
        <div className="flex flex-col">
            <div>
                {/* options */}
                <select
                    value={formData.method} onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                    className="border"
                >
                    {methods.map((method, idx) => (
                        <option key={idx} value={method.key}>{method.value}</option>
                    ))}
                </select>
                {formData.method === "fill_with_value" &&
                    <div>Value to be used<input type="number" value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} /></div>
                }
                {
                    formData.method === "none" && <div>Note: This will drop all the missing values before forecasting</div>
                }
            </div>
        </div >
    );
}

export default PreprocessingOption; 