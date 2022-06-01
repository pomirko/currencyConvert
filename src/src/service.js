export const getBaseRate = (setBaseRate) => {
    fetch('https://v6.exchangerate-api.com/v6/77d95eb6c22d1443019d3f5e/latest/UAH')
    .then((res => res.json()))
    .then(res => setBaseRate({
        USD: res.conversion_rates.USD.toFixed(3), 
        EUR: res.conversion_rates.EUR.toFixed(3), 
        PLN: res.conversion_rates.PLN.toFixed(3)}))
    .catch(res => console.log(res))
}

export const getExchange = (from, to, amount, diffValue, setDiffValue) => {
    fetch(`https://v6.exchangerate-api.com/v6/77d95eb6c22d1443019d3f5e/pair/${from}/${to}/${amount}`)
    .then((res => res.json()))
    .then(res => setDiffValue({...diffValue, amountTo: res.conversion_result}))
    .catch(res => console.log(res))
}

export const getReverseExchange = (from, to, result, diffValue, setDiffValue) => {
    fetch(`https://v6.exchangerate-api.com/v6/77d95eb6c22d1443019d3f5e/pair/${to}/${from}/${result}`)
    .then((res => res.json()))
    .then(res => setDiffValue({...diffValue, amountFrom: res.conversion_result}))
    .catch(res => console.log(res))
}
