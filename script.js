let numberColumn=10;
let numberRow=10;
const divContainer = document.querySelector(".container");
function createContainer(){
    for (let i=0;i<numberRow;i++){
        const divRow=document.createElement('div');
        divRow.setAttribute('class','containerRow')
        for (let j=0;j<numberColumn;j++){
            const div=document.createElement('div');
            div.setAttribute('class','containerElement')
            div.style.backgroundColor = "white";  
            divRow.appendChild(div);
        }
        divContainer.appendChild(divRow);
    }
}

function deleteContainer(){
    const rows=document.querySelectorAll(".containerRow");
    rows.forEach(e => {
        divContainer.removeChild(e);
    });
}

function initializeContainer(){
    const divs=document.querySelectorAll(".containerElement");
    
    divs.forEach(element => {
        element.style.backgroundColor="white";
    });
}

function changeColor(){
    let colors=["white","red","yellow","green","blue","purple","black"];
    let currentColor=this.style.backgroundColor;
    console.log(currentColor);
    let newIndex=(colors.indexOf(currentColor)+1);
    if (newIndex>6){
        newIndex=0;
    }
    this.style.backgroundColor=colors[newIndex];
}

function addElementEventListeners(){
    const divs=document.querySelectorAll(".containerElement");
    divs.forEach(element => {
        element.addEventListener('click',changeColor);
        
    });
}


createContainer();
initializeContainer();
addElementEventListeners();
// const stylesheet = document.styleSheets[0];
// console.log(stylesheet);
// let elementRules;

// // looping through all its rules and getting your rule
// for(let i = 0; i < stylesheet.cssRules.length; i++) {
//   if(stylesheet.cssRules[i].selectorText === '.containerElement') {
//     elementRules = stylesheet.cssRules[i];
//   }
// }
// let elementDimension=960/numberColumn;
// elementRules.style.setProperty('width', elementDimension);


