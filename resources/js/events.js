//000
var timeout;

function setName(a) {
    if (a === "links") {
        timeout = window.setTimeout(function () {
            document.getElementById("actuallink").innerHTML = a;
        }, 300);
    } else {
        window.clearTimeout(timeout);
        document.getElementById("actuallink").innerHTML = a;
    }
}

function onIconExit() {
    setName("links");
}
