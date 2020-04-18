const mainContent = document.querySelector(".main-content");
const navItems = document.querySelectorAll(".btns");
let urlHome = "./partials/home.html";
let urlPortfolio = "./partials/portfolio.html";


function pageload() {
    fetch(urlHome)
        .then(function (response) {
            return response.text();
        })
        .then(function (homeContent) {
            mainContent.innerHTML = homeContent;
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", showContent);
}

function showContent(ev) {
    ev.preventDefault();

    let eventTargetObject = ev.target;


    for (let i = 0; i < navItems.length; i++) {
        if (navItems[i].hasAttribute("id")) {
            navItems[i].removeAttribute("id");
        }
    }

    eventTargetObject.setAttribute("id", "active-menu");




    let navLabel = eventTargetObject.textContent;
    if (navLabel === "HOME") {

        fetch(urlHome)
            .then(function (response) {
                return response.text();
            })
            .then(function (homeContent) {
                mainContent.innerHTML = homeContent;
            })
            .catch(function (error) {
                console.log(error.message);
            });
    } else if (navLabel === "PORTFOLIO") {
        fetch(urlPortfolio)
            .then(function (response) {
                return response.text();
            })
            .then(function (portfolioContent) {
                mainContent.innerHTML = portfolioContent;
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }
}

for (let navItem of navItems) {
    navItem.addEventListener("click", showContent);
}
