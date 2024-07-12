const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('name');
const myImage = urlParams.get('img')
const myPrice = urlParams.get('price')
document.getElementById("title").innerText = myParam
document.getElementById("product_image").src= myImage
document.getElementById("price").innerText = myPrice

