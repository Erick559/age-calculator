const submitButton = document.querySelector('.submit');
const fieldColumnDay = document.querySelector('.day')
const fieldColumnMonth = document.querySelector('.month')
const fieldColumnYear = document.querySelector('.year')

const resultYear = document.querySelector('.years');
const resultMonth = document.querySelector('.months');
const resultDay = document.querySelector('.days');



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
        calcYears -=1;
        calcMonths +=(12-1);
        calcDays += new Date(currentYear,currentMonth - 1,0).getDate();
    }
    else if(calcDays < 0 && calcMonths === 12) {
        calcYears +=1;
        calcMonths =0;
        calcDays += new Date(currentYear,currentMonth - 1,0).getDate();
    }
    console.log(calcYears,calcMonths,calcDays);
})

let ageInYears = (currentYear,year) => {
    if (year === ''){
        return 0;
    }
    else{
        return parseInt(currentYear-year);
    }
}

let monthDiff = (currentMonth,month) => {
    if (month === ''){
        return 0;
    }
    else{
        return parseInt(currentMonth - month);
    }
} 

let dayDiff= (currentDay,day) => {
    if (day === ''){
        return 0;
    }
    else{
        return parseInt(currentDay - day);
    } 
}

function appendAge(calcYears,calcMonths,calcDays) {

}
