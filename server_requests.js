function loadItems() {
    return new Promise((resolve, reject) => {
        function reqListener() {
            const obj = JSON.parse(this.responseText);
            let li =[];
            for (const n in obj) {
                li.push(n);
            }
            resolve(li);
        }
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "http://win.vkbc.ru/get_items");
        oReq.send();
    });


    // return Array(18).fill("https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/zoom_alt_image_1/920x/17f82f742ffe127f42dca9de82fb58b1/C/A/1508399849_CAL44550_N0_E01_Z.jpg");
}

function loadWin() {
    name = window.location.href.split("&q=")[window.location.href.split("&q=").length - 1];
    name == undefined ? name = "vova" : name = name;
    return new Promise((resolve, reject) => {
        function reqListener() {
            const answer = this.responseText;
            resolve(items.indexOf(answer));
        }
        const oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "http://win.vkbc.ru/get_win?q="+name);
        oReq.send();
    });

    // return Math.floor(Math.random()*items.length);
}


loadItems();