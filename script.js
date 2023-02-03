let numberColumn=10;
let numberRow=10;
let rainbow=0;
let mode=0;
let modeString='mousedown';
let WheelColor='black';
const divContainer = document.querySelector(".container");
const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", setWheelColor);
function createContainer(){
    for (let i=0;i<numberRow;i++){
        const divRow=document.createElement('div');
        divRow.setAttribute('class','containerRow')
        for (let j=0;j<numberColumn;j++){
            const div=document.createElement('div');
            div.setAttribute('class','containerElement');
            div.setAttribute('draggable', 'false');
            div.style.backgroundColor = "white";  
            
            divRow.appendChild(div);
        }
        divContainer.setAttribute('draggable', 'false');
        divContainer.appendChild(divRow);
    }
}

function setWheelColor(event){
    WheelColor=event.target.value;
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
function switchRainbow(){
    rainbow=(rainbow+1)%3;

    switch (rainbow) {
        case 0:
            document.querySelector("#colorText").textContent="Predefined"
            break;
        case 1:
            document.querySelector("#colorText").textContent="Rainbow"
            break;
        case 2:
            document.querySelector("#colorText").textContent="Color Picker"
            break;
    }
}
function changeColor(){
    let colors=["white","red","yellow","green","blue","purple","black"];
    switch(rainbow){
        case 0:
            let currentColor=this.style.backgroundColor;
            // console.log(currentColor);
            let newIndex=(colors.indexOf(currentColor)+1);
            if (newIndex>6 || newIndex==-1){
                newIndex=0;
            }
            this.style.backgroundColor=colors[newIndex];
            break;
        case 1:
            this.style.backgroundColor="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
            break;
        case 2:
            this.style.backgroundColor=WheelColor;
    }
}

function addElementEventListeners(type){
    const divs=document.querySelectorAll(".containerElement");
    divs.forEach(element => {
        element.addEventListener(type,changeColor);
        
    });
}
function deleteElementEventListeners(){
    const divs=document.querySelectorAll(".containerElement");
    divs.forEach(element => {
        element.removeEventListener('mousedown',changeColor);
        element.removeEventListener('mouseenter',changeColor);
    });
}

function changeContainerSize(){
    numberColumn = prompt("Width");
    numberRow = prompt("Height");
    deleteContainer();
    createContainer();
    initializeContainer();
    addElementEventListeners(modeString);
}
function switchMode(){
    mode=Math.abs(mode-1);
    switch (mode) {
        case 0:
            document.querySelector("#paintText").textContent="Click"
            break;
        case 1:
            document.querySelector("#paintText").textContent="Hover"
            break;
    }
    deleteElementEventListeners();
    if (mode===0) {modeString='mousedown'}
    else {modeString='mouseenter'}
    addElementEventListeners(modeString);
}

createContainer();
initializeContainer();
addElementEventListeners(modeString);
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


