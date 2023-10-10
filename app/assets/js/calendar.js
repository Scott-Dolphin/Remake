console.log("adfasdf")

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
 
const day = document.querySelector(".calendar-dates");
 
const currDate = document.querySelector(".calendar-date");
 
// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const calendar = () => {
    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month+1, 0).getDate();
    let lastDay = new Date(year, month, lastDate).getDay();
    let prevMonthLastDate = new Date(year, month, 0).getDate();

    let calendarHTML = "";

    for (let i = firstDay; i>0; i--) {
        calendarHTML += `<li class="inactive">${prevMonthLastDate - i + 1}</li>`;

    }
    
    for (let i = 1; i<=lastDate; i++) {
        if (i == date.getDate() && month == new Date().getMonth() && year == new Date().getFullYear()) {
            calendarHTML += `<li class="active">${i}</li>`
        }
        else {
            calendarHTML += `<li>${i}</li>`
        }
    }

    for (let i = lastDay; i<6; i++) {
        calendarHTML += `<li class="inactive">${i - lastDay + 1}</li>`;
    }

    currDate.innerHTML = `${months[month]} ${year}`;

    day.innerHTML = calendarHTML;
}

calendar();

let buttons = document.querySelectorAll('.calendar-button');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id == "calendar-prev") {
            month -= 1;
        }
        else {
            month += 1;
        }
        
        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        }
        else {
            date = new Date();
        }
        calendar();
    })
});