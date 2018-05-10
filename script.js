const size = 800;
const offset = 20;

const interval = 8;
let run;
let name;
let items;
let win_n;

loadItems().then(function(val) {
    items = val.items;
    if (val.already) {
        alreadyMessage(val.already);
        return;
    }
    loadWin().then(function(val) {
        win_n = val;
        afterPromises(items, win_n);
    })
});


function afterPromises (items, win_n) {

    for (const item_n in items) {
        console.log(item_n);
        const el = to_element(item_n);
        document.querySelector("#playground").appendChild(el);
    }



    run = function() {
        document.querySelector("#roulette").style.display = "block";
        document.querySelector("#runner").style.display = "none";
        const items_n = win_n;
        console.log(items_n);
        document.documentElement.style.setProperty('--spin', 3600 + 180 + 360 * (+items_n / items.length) + "deg", "important");
        document.querySelector("#roulette").classList.add("spinning");

        window.setTimeout(function () {
            document.querySelectorAll(".item")[items_n].classList.add("wins");
            document.querySelector(".win-message").innerHTML = getQName()+":, Вы выиграли этот приз! Напишите организатору, чтобы забрать его."
            document.querySelector(".win-message").style.display = "block";
        }, interval * 1000 + 1000)
    }


    document.documentElement.style.setProperty('--spin', 3600 + Math.random() * 1080 + "deg", "important");
    document.documentElement.style.setProperty('--interval', interval + "s");

}

function alreadyMessage(val) {
    const message = document.createElement("div.already-message");
    message.innerHTML = "Вы уже выиграли: <img src='" + val + "' alt='выигрыш'>";
    document.querySelector("p").remove();
    document.querySelector("#playground").querySelector("#roulette-container").remove();
    document.querySelector("#playground").appendChild(message);

}