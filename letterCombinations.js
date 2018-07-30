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