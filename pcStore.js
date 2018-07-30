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