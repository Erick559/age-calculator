const submitButton = document.querySelector('.submit');
const fieldColumnDay = document.querySelector('.day')
const fieldColumnMonth = document.querySelector('.month')
const fieldColumnYear = document.querySelector('.year')
let yearError = document.querySelector('.year-error')
let monthError = document.querySelector('.month-error')
let dayError = document.querySelector('.day-error')


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

    emptyFormValidation(calcYears,year);
    appendAge(calcYears,calcMonths,calcDays,year,month,day);
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

function appendAge(calcYears,calcMonths,calcDays,year,month,day) {
    if(yearError.textContent !== '' || monthError.textContent !== '' || dayError.textContent !== ''){
        resultYear.textContent ='_ _'
        resultMonth.textContent = '_ _'
        resultDay.textContent ='_ _'
    }
    else{
        resultYear.textContent = calcYears;
        resultMonth.textContent = calcMonths;
        resultDay.textContent = calcDays;
    }
        
    
}

function emptyFormValidation(){
    let yearInput = document.querySelector('#year')
    let monthInput = document.querySelector('#month')
    let dayInput = document.querySelector('#day')
    
    if(yearInput.value === ''){
        if(!yearError){
            yearError = document.createElement('p')
            yearError.textContent = 'field is required';
            yearError.classList.add('year-error');
        }
        else{
            yearError.textContent = 'field is required';
        }
        fieldColumnYear.appendChild(yearError);
        yearInput.classList.add('error');
        yearInput.classList.remove('success');
    }
    else{
        if(yearError){
            yearError.textContent = '';
            yearInput.classList.remove('error');
        }
        yearInput.classList.add('success');
    }

    if(monthInput.value === ''){
        if(!monthError){
            monthError = document.createElement('p')
            monthError.textContent = 'field is required';
            monthError.classList.add('month-error');
        }
        else{
            monthError.textContent = 'field is required';
        }
        fieldColumnMonth.appendChild(monthError);
        monthInput.classList.add('error');
        monthInput.classList.remove('success');
    }
    else{
        if(monthError){
            monthError.textContent = '';
            yearInput.classList.remove('error');
        }
        monthInput.classList.add('success');
    }

    if(dayInput.value === ''){
        if(!dayError){
            dayError = document.createElement('p')
            dayError.textContent = 'field is required';
            dayError.classList.add('day-error');
        }
        else{
            dayError.textContent = 'field is required';
        }
        fieldColumnDay.appendChild(dayError);
        dayInput.classList.add('error');
        dayInput.classList.remove('success');
    }
    else{
        if(dayError){
            dayError.textContent = '';
            yearInput.classList.remove('error');
        }
        dayInput.classList.add('success');
    }
}