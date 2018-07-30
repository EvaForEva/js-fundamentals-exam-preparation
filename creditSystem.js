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