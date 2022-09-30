const logo = document.querySelectorAll(".logo");
const ladoIzquierdo = document.querySelector(".ladoIzq");
const ladoDerecho = document.querySelector(".ladoDer");
const nike = document.querySelector(".nike");
const adidas = document.querySelector(".adidas");
const anderArmour = document.querySelector(".anderArmour");
const skechers = document.querySelector(".skechers");

function cambiarColorLetras () {
    ladoDerecho.style.color = "white";
}
ladoIzquierdo.addEventListener("mouseover", cambiarColorLetras)

nike.addEventListener("click", ocultarResto1)
function ocultarResto1 (){
    divParteArray[1].style.display = "none";
    divParteArray[2].style.display = "none";
    divParteArray[3].style.display = "none";
}
adidas.addEventListener("click", ocultarResto2)
function ocultarResto2 (){
    divParteArray[0].style.display = "none";
    divParteArray[2].style.display = "none";
    divParteArray[3].style.display = "none";
}
anderArmour.addEventListener("click", ocultarResto3)
function ocultarResto3 (){
    divParteArray[0].style.display = "none";
    divParteArray[1].style.display = "none";
    divParteArray[3].style.display = "none";
}
skechers.addEventListener("click", ocultarResto4)
function ocultarResto4 (){
    divParteArray[0].style.display = "none";
    divParteArray[1].style.display = "none";
    divParteArray[2].style.display = "none";
}
