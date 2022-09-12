let pandaCost = (shingara, shomucha, jilapi) => {

    const shingaraPrice = 7;
    const shomuchaPrice = 10;
    const jilapiPrice = 15;

    let shingraQuantity = shingara * shingaraPrice;
    let shomuchaQuantity = shomucha * shomuchaPrice;
    let jilapiQuantity = jilapi * jilapiPrice;

    let total = shingraQuantity + shomuchaQuantity + jilapiQuantity;
    return total;
}

const totalprice = pandaCost(2, 3, 1);
console.log(totalprice);
// console result: 