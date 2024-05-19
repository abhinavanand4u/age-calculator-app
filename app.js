// get results 
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let resultdiv = document.getElementById("results");
    let results = document.getElementById("white");
    let dob = document.querySelector("#inpt-date");
    let today = new Date();
    let inputDate = new Date(dob.value);
    let birthDate = inputDate.getDate();
    let birthMonth = inputDate.getMonth() + 1;
    let birthYear = inputDate.getFullYear();
    let currentDate = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();
    // console.log(currentDate, currentMonth, currentYear)
    // console.log(birthDate, birthMonth, birthYear)
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (birthDate > currentDate) {
        currentDate = currentDate + month[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    if (birthMonth > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }
    let mm = currentMonth - birthMonth;
    let dd = currentDate - birthDate;
    let yyyy = currentYear - birthYear;

    if (!dob.value) {
        alert("Please enter date of birth...")
    }
    else {
        if (yyyy >= 0) {
            results.innerHTML = `<span style="color:yellow;">${yyyy}</span> Years <span style="color:yellow;">${mm}</span> Months and <span style="color:yellow;">${dd}</span> Days`
            resultdiv.style.animation = "drop 1s"
            resultdiv.style.transform = "translateY(0px) scale(0.9)"
            resultdiv.style.display = "block";
        }
        else if (yyyy < 0) {
            alert("Your are yet to born...")
        }
    }
});


// hide result div
let resultdiv = document.getElementById("results");
let dob = document.querySelector("#inpt-date");
dob.addEventListener("click", () => {
    resultdiv.style.transform = "translateY(-110px) scale(0)";
    resultdiv.style.animation = "revdrop 1s"
    setTimeout(() => {
        resultdiv.style.display = "none";
    }, 1000);


});