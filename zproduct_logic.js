let list = document.querySelectorAll("a")
console.log(list)
for (let i = 0; i<12;i++){
    let imgsource = encodeURI(list[i].children[0].src)
    let title = encodeURI(list[i].children[1].innerText)
    let price = encodeURI(list[i].children[3].innerText)
    console.log(title)
    console.log(imgsource)
    console.log(price)
    list[i].href += "?name=" +title + "&img=" + imgsource +"&price=" + price
}
