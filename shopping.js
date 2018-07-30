function shopping(input) {
    let budget = Number(input[0]);
    let amountChoco = Number(input[1]);
    let priceChoco = amountChoco * 0.65;
    let amountMilk = Number(input[2]);
    let priceMilk = amountMilk * 2.70;
    let amountTangerine = Math.floor(amountChoco - (amountChoco * 0.35));
    let priceTangerine = amountTangerine * 0.20;
    let sum = priceChoco + priceMilk + priceTangerine;
    let moneyLeft = Math.abs(budget - sum);
    if(sum <= budget) {
       console.log("You got this, " + moneyLeft.toFixed(2) + " money left!");
    }else {
       console.log("Not enough money, you need " + moneyLeft.toFixed(2) + " more!");
    }
}
shopping([10, 5, 1.5])