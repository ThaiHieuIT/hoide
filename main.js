var yes = document.getElementById("yes");
var no = document.getElementById("no");
var suscces = document.getElementById("ketqua");
var boxchua = document.getElementById("boxchua");

function mOver(obj) {
    obj.style.marginLeft = Math.floor(Math.random() * 1000) + 100 + "px";
    obj.style.marginTop = Math.floor(Math.random() * 200) + Math.floor(Math.random() * 300) + "px";
    obj.style.marginRight = Math.floor(Math.random() * 1000) + 100 + "px";
}

function mOut(obj) {
    obj.style.marginLeft = Math.floor(Math.random() * 300) + 100 + "px";
    obj.style.marginTop = Math.floor(Math.random() * 200) + Math.floor(Math.random() * 300) + "px";
    obj.style.marginRight = Math.floor(Math.random() * 300) + 100 + "px";
}

function box() {
    suscces.style.display = "block";
    boxchua.style.display = "none";
}