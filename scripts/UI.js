
const UI = Object.create(null);

UI.init = function () {

    const el = (id) => document.getElementById(id);

    const cvButton = el("cvButton");

    cvButton.onClick = window.open("www.google.com");


};

export default Object.freeze(UI);
