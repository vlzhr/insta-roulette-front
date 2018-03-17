function loadItems() {
    return Array(18).fill("https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/zoom_alt_image_1/920x/17f82f742ffe127f42dca9de82fb58b1/C/A/1508399849_CAL44550_N0_E01_Z.jpg");
}

function loadWin() {
    const name = window.location.href.split("?q=")[1];
    return Math.floor(Math.random()*items.length);
}


