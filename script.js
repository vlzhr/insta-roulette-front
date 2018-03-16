const items = Array(18).fill("https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/zoom_alt_image_1/920x/17f82f742ffe127f42dca9de82fb58b1/C/A/1508399849_CAL44550_N0_E01_Z.jpg")
const size = 800;
const offset = 20;
const interval = 0.01;

window.onload = function () {
    for (const item_n in items) {
        el = to_element(item_n);
        document.querySelector("#playground").appendChild(el);
    }
}

function run () {
    document.querySelector("#roulette").style.display = "block";
    document.querySelector("#runner").style.display = "none";
    const items_n = Math.floor(Math.random()*items.length);
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

