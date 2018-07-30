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