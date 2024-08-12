import { useState } from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../Hooks/useCurrencyInfo";


export default function CurrencyConverter() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);
    function convertAmount() {
        setConvertedAmount(amount * currencyInfo[to])
    }
    function swapCurrency() {
        setFrom(to);
        setTo(from);
        setAmount(0);
        setConvertedAmount(0);
    }

    return (
        <div style={{ backgroundColor: "rgba(255,255,255,0.5)" }} className="rounded-3 p-3">
            <h2 >Currency Converter</h2>
            <InputBox label="From" currencyOptions={options} setAmount={setAmount} currentAmount={amount} currentCurrency={from} setCurrency={setFrom} />
            <button className="btn btn-primary rounded-3 w-50" onClick={swapCurrency}>SWAP</button>
            <InputBox label="To" currencyOptions={options} setAmountDisable={true} currentAmount={convertedAmount} currentCurrency={to} setCurrency={setTo} setAmount={setConvertedAmount} />
            <button onClick={convertAmount} className="btn btn-success w-100">Convert {from} to {to}</button>

        </div>
    )
}