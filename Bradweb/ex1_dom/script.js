// Alterando uma página HTML com JS, utilizando do DOM
function init(){
//   const planet = document.getElementById ("greenplanet");
//    planet.innerHTML = "Red Alert: hit by a phaser fire!";

// // Criar um h1
// const h1 = document.createElement("h1");
// h1.innerHTML = "Primeira página HTML";
// document.body.appendChild(h1);
// // Criara e adicionar um parágrafo
// const p = document.createElement("p");
// p.innerHTML = "Aprendendo HTML básico com exercício prático";
// document.body.appendChild(p);
// // Criar e adicionar um span
// const span = document.createElement("span");
// span.innerHTML = "Menu";
// document.body.appendChild(span);
// // Criar um ul
// const ul = document.createElement("ul");
// ul.innerHTML = "";
// document.body.appendChild(ul);
//    //   Criara li "Item 1"
//    const li1 = document.createElement("li");
//    li1.innerHTML = "Item 1";
//    ul.appendChild(li1);
//    //   Criara li "Item 2"
//    const li2 = document.createElement("li");
//    li2.innerHTML = "Item 2";
//    ul.appendChild(li2);
//    //   Criara li "Item 3"
//    const li3 = document.createElement("li");
//    li3.innerHTML = "Item 3";
//    ul.appendChild(li3);
// //    Atenção que para configurar a lista o código dos itens deve ser diferente
// // Ao invés de document.body será usado o li e o número desse item que foi usado para identificá-lo 



// Exercício 3
  const tempsbyHour = [59.2 , 60.1, 63, 65, 62];
console.log('Tamanho array: ${tempsbyHour}');
const ul = document.getElementById("listTemp");
  for (let i = 0; i < tempsbyHour.length; i++){
    const li = document.createElement("li");
    if (i == 0){
        li.innerHTML = 'Temp à meia noite é ${tempsbyHour[i]}';
          } else {
            li.innerHTML = 'Temp às ${i} é ${tempsbyHour[i]}';
          }

          ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
// Usado para dar tempo de carregar toda a página
window.onload = init;