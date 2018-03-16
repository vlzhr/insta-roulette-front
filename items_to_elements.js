function to_element(item_n) {
    const item = items[item_n];
    const el = document.createElement("div");
    const percent = (+item_n) / items.length;
    const y = offset + size/2 - Math.abs(size * (0.5 - percent));
    let x;
    percent <= 0.5 ? x = -Math.abs(size*(percent-0.25)) : x = -size/2 + Math.abs(size*(0.75-percent));
    x = offset - x;

    el.style.position = "absolute";
    el.style.top = y+"px";
    el.style.left = x+"px";
    el.style.content = 'url('+item+')';
    el.style.width = size / items.length*2 + "px";
    el.classList.add("item");
    return el;
}