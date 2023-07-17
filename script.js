/***** EXERCICE 1 : DIFFERENTS ONGLETS  */
const tabs = document.querySelectorAll('.tab');

const pages = document.querySelectorAll('.center');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');
    pages.forEach(page => {
      if (page.id === target) {
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    });
  });
});


/***** EXERCICE 2 : GENERATEUR DE MENU  */
const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];


// on chope le bouton pour changer
changeButton = document.getElementById("changeButton");

// on chope l'endroit où s'affiche le menu salé
const oldDishes = document.getElementsByClassName("dish")
const oldSides = document.getElementsByClassName("side")

//on code la fonction
const generateNewDish = () =>{
  for (let i = 0; i < oldDishes.length ; i++){
    const newDish = `${getRandom(mainCourses)} ${getRandom(techniques)}`
    const newSide = `avec ${getRandom(sides)} ${getRandom(seasonings)}`
    oldDishes[i].innerHTML = newDish;
    oldSides[i].innerHTML = newSide;
  }
}

changeButton.addEventListener('click', generateNewDish);

/***** EXERCICE 3 EXIT-POPUP ****/
const body = document.getElementsByTagName("body")[0];
const popup = document.getElementsByClassName("popup")[0];
const image = document.getElementsByTagName("img")[0];
const closeTag = document.getElementsByClassName("cancel-icon")[0];
const foodImages = document.getElementsByClassName("food-img");

const openPopup = () => {
  popup.classList.add("open-popup");
  body.classList.add("body-popup");
  image.classList.add("image-popup");
  Array.from(foodImages).forEach(image => {
    image.classList.add("image-popup");
  })
}

const closePopup = () => {
  popup.classList.remove("open-popup");
  image.classList.remove("image-popup");
  body.classList.remove("body-popup");
  Array.from(foodImages).forEach(image => {
    image.classList.remove("image-popup");
  })
}
body.addEventListener('mouseleave', openPopup);
body.addEventListener('click', closePopup);
closeTag.addEventListener('click', closePopup);

/***** EXERCICE 4 DRAG AND DROP ****/
function dragStart(e) {
  beingDragged = e.target;
  console.log(beingDragged)
}

function dragOver(e){
  e.preventDefault();
}

function dragDrop (e) {
  let temp = e.target.src;
  e.target.src = beingDragged.src;
  beingDragged.src = temp;
}

Array.from(foodImages).forEach(image => {
  image.addEventListener('dragstart', dragStart);
  image.addEventListener('dragover', dragOver);
  image.addEventListener('drop', dragDrop);
});
