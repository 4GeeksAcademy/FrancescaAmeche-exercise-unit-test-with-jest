const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar = (euros) => {
    return (euros * 1.2);
}

const fromDollarToYen = (dollars) => {
    let valueInEuro = dollars / 1.2
    return (valueInEuro * 127.9);
}

const fromYenToPound = (yens) => {
    let valueInEuro = yens / 127.9
    return (valueInEuro * 0.8);
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };