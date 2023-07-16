/* function for menu's user */
function menuToggle() {

    const toggleMenu = document.querySelector('.menu')
    toggleMenu.classList.toggle('active')
}

function deactBorder() {
    const btnClick = document.querySelector('.btn-one');
    btnClick.classList.toggle('bdrActive');
}

const btns = document.querySelectorAll(".btn-one");

btns.forEach((btn) => {
    btn.addEventListener("mousemove", function(e) {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        btn.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px" + ");";
        console.log(btn.style.transform);
    });
});