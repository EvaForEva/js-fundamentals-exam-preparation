//1. PC store - 10, 11 mart 2018
function pcStore(input) {
    let processorPrice = Number(input[0]) * 1.57;
    let videoCardPrice = Number(input[1]) * 1.57;
    let singleRamPrice = Number(input[2]) * 1.57;
    let numberOfRam = Number(input[3]);
    let totalRamPrice = singleRamPrice * numberOfRam;
    let discount = Number(input[4]);
    let processorDiscount = processorPrice - (processorPrice * discount);
    let videoCardDiscount = videoCardPrice - (videoCardPrice * discount);
    let sum = processorDiscount + videoCardDiscount + totalRamPrice;
    console.log("Money needed - " + sum.toFixed(2) + " leva.");
    
}
pcStore([500, 200, 80, 2, 0.05])

//2. Shopping
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

//3. Cat life - 80 tochki moje i sus switch
function catLife(input) {
    let breed = input[0];
    let gender = input[1];
    let catMonths = 0;
    if(breed === "British Shorthai" && gender === "m") {
        catMonths = (13 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "Siamese" && gender === "m") {
        catMonths = (15 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "Persian" && gender === "m") {
        catMonths = (14 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "Ragdoll" && gender === "m") {
        catMonths = (16 * 16) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "American Shorthair" && gender === "m") {
        catMonths = (12 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "Siberian" && gender === "m") {
        catMonths = (11 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "British Shorthai" && gender === "f") {
        catMonths = (14 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "Siamese"  && gender === "f") {
        catMonths = (16 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "Persian"  && gender === "f") {
        catMonths = (15 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "Ragdoll"  && gender === "f") {
        catMonths = (17 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "American Shorthair" && gender === "f") {
        catMonths = (13 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else if(breed === "Siberian"  && gender === "f") {
        catMonths = (12 * 12) / 6;
        console.log(Math.round(catMonths) + " cat months");
    }else {
        console.log(breed + " is invalid cat!");
    }
}
catLife(["Siberian", "m"])

// Ili

function catLife(input) {
    let breed = input[0];
    let gender = input[1];
    let catMonths = 0;
    switch(breed) {
        case "British Shorthai":
            if(gender === "m") {
                catMonths = (13 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }else if(gender === "f") {
                catMonths = (14 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }
            break;
        case "Siamese":
            if(gender === "m") {
                catMonths = (15 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }else if(gender === "f") {
                catMonths = (16 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }
            break;
        case "Persian":
            if(gender === "m") {
                catMonths = (14 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }else if(gender === "f") {
                catMonths = (15 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }
            break;
        case "Ragdoll":
            if(gender === "m") {
                catMonths = (16 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }else if(gender === "f") {
                catMonths = (17 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }
            break;
        case "American Shorthair":
            if(gender === "m") {
                catMonths = (12 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }else if(gender === "f") {
                catMonths = (13 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }
            break;
        case "Siberian":
            if(gender === "m") {
                catMonths = (11 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }else if(gender === "f") {
                catMonths = (12 * 12) / 6;
                console.log(Math.round(catMonths) + " cat months");
            }
            break;
        default: console.log(breed + " is invalid cat!");
    }
}
catLife(["Siberian", "m"])

//4. Cat food
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

//5. Credit system
// Math.floor() i delim na 10 za da vzemem purvoto cialo chislo v sluchaia 10
function creditSystem(args) {
    let numberOfCourse = Number(args[0]);
    let credits = 0;
    let grade = 0;
    let sumOfGrades = 0;
    let sumOfCredits = 0;
    for(let currentStudentInfo = 1; currentStudentInfo <= numberOfCourse; currentStudentInfo++) {
        let element = Number(args[currentStudentInfo]); 
        grade = element%10; // delim na %10 za da vzemem krainoto chilso
        sumOfGrades = sumOfGrades + grade;
        credits = Math.floor(element/10);
        switch(grade) {
            case 2: credits = 0; break;
            case 3: credits = credits * 0.5; break;
            case 4: credits = credits * 0.7; break;
            case 5: credits = credits * 0.85; break;
            case 6: credits = credits * 1; break;
        }
        sumOfCredits = sumOfCredits + credits;
    }
    let avarage = sumOfGrades / numberOfCourse;
    console.log(sumOfCredits.toFixed(2));
    console.log(avarage.toFixed(2));
}
creditSystem([3, 103, 103, 103])
    
//Letter Combinations
function letterCombinations(args) {
    let c1 = args[0].charCodeAt();
    let c2 = args[1].charCodeAt();
    let forbiddenSymbol = args[2].charCodeAt();
    let counter = 0; //triabva ni counter za uvelichavane
    let result = ""; // triabva ni prazen sting za rezultata
    for(let i = c1; i <= c2; i++) {
        for(let j = c1; j <= c2; j++) {
            for(let k = c1; k <= c2; k++) {
                if(forbiddenSymbol !== i && forbiddenSymbol !== j && forbiddenSymbol !== k) {
                    counter++;
                    result = result + `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                }
            }
        }  
    }
    console.log(result + "" + counter);
}
letterCombinations(["a", "b", "c"])   
    










function roller() {
    for(let firstLetter = 97; firstLetter <= 122; firstLetter++) {
        for(let secondLetter = 65; secondLetter <= 90; secondLetter++) {
            for(let thirdLetter = 33; thirdLetter <= 47; thirdLetter++) {
                if((String.fromCharCode(firstLetter)==="m") && (String.fromCharCode(secondLetter)==="A") && (String.fromCharCode(thirdLetter)==="//")){
                    console.log("You win!");
                    return
                }else {
                    console.log(String.fromCharCode(firstLetter) + "-" + String.fromCharCode(secondLetter) + "-" + String.fromCharCode(thirdLetter));
                }
            }
        }
    }
}
roller()
















