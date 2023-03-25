const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
})
export const currency = (number : number) => {return currencyFormatter.format(number)}