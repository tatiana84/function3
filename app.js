//STEPS 1, 2, 3
function getSleepHours(day) {
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday') {
        return 8;
    }
    else if (day === 'Friday') {
        return 10;
    }
    else if (day === 'Saturday') {
        return 5;
    }
    else if (day === 'Sunday') {
        return 6;
    }
    else {
        return 'Sorry, we do not recognise this day!'
    }
}
console.log(getSleepHours('Friday'));


// STEPS 4, 5
const getActualSleepHours = () => getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+ getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');

console.log(getActualSleepHours());


//STEP 6
/*function getIdealSleepHours() { 
    let idealHours = 9;
    return idealHours*7;
}
console.log(getIdealSleepHours());*/

//STEPS 8, 9, 10, 11

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours(53);
    let idealSleepHours = getIdealSleepHours(8);
    //let idealSleepHours = getIdealSleepHours(63);

    if (actualSleepHours === idealSleepHours) {
        console.log('User got the perfect amount of sleep!');
    }
    else if (actualSleepHours > idealSleepHours) {
        console.log('User got more sleep than needed!');
    }
    else if (actualSleepHours < idealSleepHours) {
        console.log('User should get some rest!');
    }
}
calculateSleepDebt();

// STEP 12
/*
const getActualSleepHours = () => (8 + 8 + 8 + 8 + 10 + 5 + 6);
console.log(getActualSleepHours());*/

function getIdealSleepHours(idealHours) {
    return idealHours*7;
}
console.log(getIdealSleepHours(8));