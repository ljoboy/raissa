var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var suiv = document.getElementById('suiv');
var prec =document.getElementById('prec');
var image = null;
document.getElementById('imgmod').addEventListener("click",function (img) {
    if (img.target.src !== undefined){
        image = img.target;
        imgChange(image);
    }
},false);

span.onclick = function() {
    modal.style.display = "none";
};

prec.onclick = function () {
    image = image.previousElementSibling;
    imgChange(image);
};

suiv.onclick = function () {
    image = image.nextElementSibling;
    imgChange(image);
};

function imgChange(image) {
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML = (image.alt) ? image.alt : "Image" ;
    if (image === image.parentNode.lastElementChild){
        suiv.style = "display: none";
    }else{
        suiv.style = "display: block";
    }
    if (image === image.parentNode.firstElementChild){
        prec.style = "display: none";
    }else{
        prec.style = "display: block";
    }
}