export default function InputBox({
    label,
    setCurrency,
    setAmount,
    currentAmount,
    currentCurrency,
    setAmountDisable = false,
    currencyOptions = []
}) {
    return (
        <div className="d-md-flex text-start justify-content-between p-3 rounded-3 my-2" style={{ maxWidth: "400px", backgroundColor: "white" }}>
            <div className="me-md-5">
                <label className="text-muted mb-4" htmlFor={label}>{label}</label>

                <input type="Number" className="form-control rounded-5" id={label} value={currentAmount} disabled={setAmountDisable} onChange={(e) => setAmount && setAmount(Number(e.target.value))} />
            </div>
            <div>
                <label className="text-muted mb-4" htmlFor={label + "currency"}>Currency</label>
                <select className="form-select rounded-5" id={label + "currency"} value={currentCurrency} onChange={(e) => setCurrency && setCurrency(e.target.value)}>
                    {currencyOptions.map((curr) => <option key={curr} value={curr}>{curr}</option>)}
                </select>
            </div>
        </div >
    )
}