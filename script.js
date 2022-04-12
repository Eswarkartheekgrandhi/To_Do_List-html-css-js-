var enterButton = document.getElementById("enter");
var input=document.getElementById("userInput");
var ul=document.querySelector("ul");
var item=document.getElementsByTagName("li");

function inputLenght(){
    return input.value.length;
}

function listLength(){
    return item.length; 
}

function createListElement(){
    var li=document.createElement("li"); //creates an element "li"
    li.appendChild(document.createTextNode(input.value)); //makes text from the input
    ul.appendChild(li); //adds li to ul
    input.value=''; //reset text input field

    function crossOut(){
        li.classList.toggle('done');
    }
    li.addEventListener("click",crossOut);

    //add delete button
    var dBtn=document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dBtn);
    dBtn.addEventListener('click',deleteListItem);

    function deleteListItem(){
        li.classList.add('delete')
    }
}

function addListAfterClick(){
    if(inputLenght()>0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLenght()>0 && event.which==13){
        createListElement();
    }
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);