const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load", function() {
    // showPopup();

    /* Another way to do it euh ... to show popup */
    setTimeout(function() {
        loginPopup.classList.add("show");
    }, 3000)
})

// function showPopup() {
//     const timeLimit = 3
//     let i = 0;
//     const timer = setInterval(function() {
//         i++;
//         if (i == timeLimit) {
//             clearInterval(timer);
//             loginPopup.classList.add("show");

//         }
//         console.log(i)
//     }, 1000);
// }



close.addEventListener("click", function() {
    loginPopup.classList.remove("show");
})