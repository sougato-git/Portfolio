/* ================================
   SELECT ELEMENTS
================================ */

const body =
    document.body;

const themeBtn =
    document.getElementById("themeBtn");

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");



/* ================================
   LOAD SAVED THEME
================================ */

const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );


if (savedTheme === "light") {

    body.classList.add("light");

}



/* ================================
   DARK / LIGHT MODE
================================ */

themeBtn.addEventListener(
    "click",
    () => {

        body.classList.toggle("light");


        if (
            body.classList.contains("light")
        ) {

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        } else {

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        }

    }
);



/* ================================
   MOBILE MENU
================================ */

menuBtn.addEventListener(
    "click",
    () => {

        const isOpen =
            navLinks.classList.toggle(
                "open"
            );


        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);



/* ================================
   CLOSE MOBILE MENU
================================ */

navLinks
    .querySelectorAll("a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );


                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );



/* ================================
   CONTACT FORM
================================ */

contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        formStatus.textContent =
            `Thanks, ${name || "there"}! ` +
            `This demo form is ready to ` +
            `connect to a real email/backend service.`;


        contactForm.reset();

    }
);



/* ================================
   CURRENT YEAR
================================ */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();