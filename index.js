const submitButton = document.querySelector('.submit');
const fieldColumn = document.querySelector('.field-column');

submitButton.addEventListener('click', () => {
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;

    const current =new Date();
    const currentDay = current.getDate();
    const currentMonth = current.getMonth()+1;
    const currentYear = current.getFullYear();
    let calcYears=ageInYears(currentYear,year);
    let calcMonths = monthDiff(currentMonth,month)
    let calcDays = dayDiff(currentDay,day);

    if (calcMonths < 0 && calcDays < 0) {
        calcYears -= 1;
        calcMonths += (12-1);
        calcDays += new Date(currentYear,currentMonth - 1,0).getDate();
    }
    else if (calcMonths < 0) {
        calcYears -=1;
        calcMonths += 12;
    }
    else if(calcDays < 0) {
        calcMonths +=(12-1);
        calcDays += new Date(currentYear,currentMonth - 1,0).getDate();
    }

    console.log(calcYears,calcMonths,calcDays);
})

let ageInYears = (currentYear,year) => {
    return parseInt(currentYear-year);
}

let monthDiff = (currentMonth,month) => {
    return parseInt(currentMonth - month);
} 

let dayDiff= (currentDay,day) => {
    return parseInt(currentDay - day);
}