window.addEventListener("DOMContentLoaded", function () {
    console.log("loaded");

    const el = (id) => document.getElementById(id);

    const header = el("homeHeader");
    const gallery = el("gallery");

    const headerWhite = function () {
        header.id = "";
    };

    window.onscroll = function () {
        console.log("scrolling");
        const viewHeight = gallery.offsetTop - 110;
        console.log(viewHeight);
        const distScrolled = header.offsetTop;
        console.log(distScrolled);
        if (viewHeight < distScrolled) {
            headerWhite();
        }
    };

});


