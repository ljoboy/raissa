var desc = document.getElementById('descripTxt');
var txt = document.getElementById('desc');
var lien = document.getElementById("lien");
var img = document.getElementById("moi");
var imgs = ["me2.jpg", "php_background.jpg", "raissa.jpg", "raissa_l.jpg"];
var p = null;

function changeTxt(text) {
    p = text;
    if (p.tagName === "P"){
        lienChanger();
        txt.innerHTML = p.innerHTML;
    }
}

setInterval(function () {
    if (p === p.parentNode.lastElementChild) {
        p = p.parentNode.firstElementChild;
    }else{
        p = p.nextElementSibling;
    }
    imgChanger();
    changeTxt(p);
},3000);

function lienChanger() {
    var lv = p.firstElementChild.innerText;
    if (lv === "a propos de moi")
        lv = "moi";
    lien.href = lv + ".html"
}

function imgChanger(){
    img.src = "img/" + imgs[Math.floor(Math.random() * imgs.length)];
}

changeTxt(desc.firstElementChild);