if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
            if (reg.installing) {
                console.log("Service worker installing");
            } else if (reg.waiting) {
                console.log("Service worker installed");
            } else if (reg.active) {
                console.log("Service worker active");
            }
        })
        .catch((err) => {
            console.error("Service worker failed: ", err);
        });
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

let pp = getCookie("pp");
try {
    var bsAlert = new bootstrap.Toast(document.getElementById("privacypolicy"));

    if (pp == "") {
        bsAlert.show();
        document.getElementById("accpt").onclick = function () {
            bsAlert.hide();
            setCookie("pp", "pp", 365);
        };
    }
} catch (err) {}

window.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
        document.body.style.setProperty("user-select", "none");
        document.body.style.setProperty("-webkit-user-select", "none");
        document.body.style.setProperty("-ms-user-select", "none");
        document.onkeydown = (e) => {
            if (e.key == 123 || (e.ctrlKey && e.shiftKey && e.key == "I") || (e.ctrlKey && e.shiftKey && e.key == "C") || (e.ctrlKey && e.shiftKey && e.key == "J") || (e.ctrlKey && e.key == "U")) {
                e.preventDefault();
            }
        };
        document.addEventListener("contextmenu", (e) => e.preventDefault());
        let footer = document.getElementsByTagName("footer")[0];
        footer.style.setProperty("display", "none");
    }
    el_autohide = document.querySelector(".autohide");
    navbar_height = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = navbar_height + "px";
    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener("scroll", function () {
            let scroll_top = window.scrollY;
            if (scroll_top == 0) {
                el_autohide.classList.add("scrolled-up-tr");
            } else {
                el_autohide.classList.remove("scrolled-up-tr");
            }
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove("scrolled-down");
                el_autohide.classList.add("scrolled-up");
            } else {
                el_autohide.classList.remove("scrolled-up");
                el_autohide.classList.add("scrolled-down");
            }
            last_scroll_top = scroll_top;
        });
    }
});
