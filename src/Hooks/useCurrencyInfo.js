import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        async function getCurrencyData() {
            const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            const variable = await response.json()
            return variable[currency];
        }
        getCurrencyData().then((result) => setData(result))
    }, [currency])
    return data;

}