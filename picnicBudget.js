let picnicBudget = (persons) => {

    let totalPrice = 0;
    let first100PersonPrice = 5000;
    let second100PersonPrice = 4000;
    let after200PersonPrice = 3000;

    if(persons <= 100){
        totalPrice = persons * first100PersonPrice;
        return totalPrice;
    }
    else if(persons <= 200){
        let first100PersonCost = 100 * first100PersonPrice;
        let newPerson = persons - 100;
        let newPersonCost = newPerson * second100PersonPrice;
        totalPrice = first100PersonCost + newPersonCost;
        return totalPrice
    }
    else{
        let first100PersonCost = 100 * first100PersonPrice;
        let second100PersonCost = 100 * second100PersonPrice;
        let newPerson = persons - 200;
        let newPersonCost = newPerson * after200PersonPrice;
        totalPrice = first100PersonCost + second100PersonCost + newPersonCost;
        return totalPrice;
    }
}


const allPersonPrice = picnicBudget(240);
console.log(allPersonPrice);
// console result: 