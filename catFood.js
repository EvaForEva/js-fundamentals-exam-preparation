function catFood(input) {
    let suppliedFood = Number(input[0]) * 1000;
    let consumedFood = 0;
    let i = 1;
    while(input[i] !== "Adopted") {
        consumedFood = consumedFood + Number(input[i]);
        i++;
    }
    if(suppliedFood >= consumedFood) {
        console.log("Food is enough! Leftovers: " + (suppliedFood - consumedFood) + " grams.");    
    }else {
        console.log("Food is not enough. You need " + (consumedFood - suppliedFood) + " grams more." )
    }
}
catFood([4, 130, 345, 400, 180, 230, 120, "Adopted"])