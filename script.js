const items = loadItems();
const win_n = loadWin();
const size = 800;
const offset = 20;
const interval = 8;

window.onload = function () {
    for (const item_n in items) {
        el = to_element(item_n);
        document.querySelector("#playground").appendChild(el);
    }
};

function run () {
    document.querySelector("#roulette").style.display = "block";
    document.querySelector("#runner").style.display = "none";
    const items_n = win_n;
    console.log(items_n);
    document.documentElement.style.setProperty('--spin', 3600 + 180 + 360*(+items_n/items.length) + "deg", "important");
    document.querySelector("#roulette").classList.add("spinning");

    window.setTimeout(function () {
        document.querySelectorAll(".item")[items_n].classList.add("wins");
        document.querySelector(".win-message").style.display = "block";
    }, interval*1000+1000)
}


document.documentElement.style.setProperty('--spin', 3600 + Math.random() * 1080 + "deg", "important");
document.documentElement.style.setProperty('--interval', interval+"s");

