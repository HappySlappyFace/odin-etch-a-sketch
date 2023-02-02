let numberColumn=4;
let numberRow=4;
const divContainer = document.querySelector(".container");
for (var i=0;i<numberRow;i++){
    const divRow=document.createElement('div');
    divRow.setAttribute('class','containerRow')
    for (var j=0;j<numberColumn;j++){
        const div=document.createElement('div');
        div.setAttribute('class','containerElement')
        div.style.backgroundColor = "white";  
        divRow.appendChild(div);
    }
    divContainer.appendChild(divRow);
}

const divs=document.querySelectorAll(".containerElement");
var colors=["white","red","yellow","green","blue","purple","black"];
function changeColor(){
    let currentColor=this.style.backgroundColor;
    let newIndex=(colors.indexOf(currentColor)+1);
    if (newIndex>6){
        newIndex=0;
    }
    this.style.backgroundColor=colors[newIndex];
}
divs.forEach(element => {
    element.addEventListener('click',changeColor)
});