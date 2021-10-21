let root=document.getElementById("root");
let input=document.getElementById("tpdp-input");
let todoList=document.getElementById("todo-list");
let footer=document.getElementById("todo-footer");

let clear=document.getElementsByClassName("todo-app__clean");


let length=0;
let todo=[];
//let left=0;

const done= todo=> todo.firstElementChild.firstElementChild.checked;

const generateList= (I ,T)=>{
    let newItem=document.createElement("li");
    newItem.className="todo-app__item";
    let checkbox=document.createElement("div");
    checkbox.className="todo-app__checkbox";
    let inputCheck=document.createElement("input");
    inputCheck.type="checkbox";
    
    let inputLabel=document.createElement("label");
    let inputText=document.createElement("h1");
    inputText.innerText=T;
    let cross=document.createElement("img");
    cross.src="img/x.png"
    cross.className="todo-app__item-x";
    let crossLable=document.createElement("lable");


    inputCheck.id=I;
    inputCheck.addEventListener('click', event => checkDone(event.currentTarget.id,event.currentTarget.checked));
    
    inputLabel.htmlFor=I;
    checkbox.appendChild(inputCheck);
    checkbox.appendChild(inputLabel);
    newItem.appendChild(checkbox);

    cross.id=I;
    crossLable.htmlFor=I;
    //cross.addEventListener('click',event=>remove(event.currentTarget.id));

    newItem.appendChild(inputText);
    newItem.appendChild(crossLable);
    newItem.appendChild(cross);
    return newItem;
}

const leftItem= ()=>{
    let number=document.getElementById("left_count");
    let left = todo.filter(todo => !done(todo)).length;
    number.innerText=left.toString();
}

const appendList= (text)=>{
    let newList=generateList(length+1,text);
    length+=1;
   // left+=1;
    todo.push(newList);
    view();
    leftItem();
}

// const remove= (I)=>{
//     let index=I-1;
//     todo.splice(index,1);
//     length-=1;
//     console.log(index);
//     //console.log(todo);
//     left();
//     view();
// }

const clearComplete= ()=>{
    let newTodo=todo.filter(todo => !done(todo));
    todo=newTodo;
    view();
    leftItem();
}

const view =()=>{
    if(todo.length){
        if(footer.parentNode !== root) root.appendChild(footer);
    }
    else if(footer.parentNode === root) root.removeChild(footer);
    
    for(i=0;i<todo.length;i++){
        todoList.appendChild(todo[i]);
    }
}

const checkDone= (_id,checked)=>{
    let index=_id-1;
    todo[index].style["textDecoration"]=checked?"line-through":"";
    todo[index].style["opacity"]=checked?0.5:1;
   // left-=1;
    //console.log(index);
    view();
    leftItem();

}

const init =()=>{
    let inputCheck=document.getElementById("todo-input");
    inputCheck.addEventListener('keyup',event=>{
        if(event.keyCode===13 && event.target.value!=='' ){
            appendList(event.target.value);
            //console.log(event.target.value);
            inputCheck.value='';
        }
    }); 

    // let clearButton=document.getElementById("clear_completed");
    // clearButton.addEventListener('click',()=>clearComplete());
    // view();

    // clear.removeChild(clearButton);
}

init();