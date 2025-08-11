let user_input = document.getElementById("userinput")

let btn = document.querySelector("button")

let final_result = document.querySelector('.result');

user_input.max = new Date().toISOString().split('T')[0];

function calculateage() {

    // get original date of birth


    let birthDate = new Date(user_input.value)

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // get today dates

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();


    let age_year = y2 - y1;
    let age_month = m2 - m1;
    let age_day = d2 - d1;

    if (age_day < 0) {
        age_month--;
        age_day += 30;
    }

    if (age_month < 0) {
        age_year--;
        age_month += 12;
    }

    return `${age_year} Years, ${age_month} Months, ${age_day} Days`;
}

btn.addEventListener("click", function () {
    final_result.textContent = calculateage();
});



