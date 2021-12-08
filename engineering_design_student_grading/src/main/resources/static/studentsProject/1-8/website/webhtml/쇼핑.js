
const addIcon = document.querySelector('.addIcon');
const list = document.querySelector('.list');
const textInput = document.querySelector('.textInput');




    // 1. 사용자가 입력한 것을 받아와야함 

function onAdd(){

const text = textInput.value;
if(text === ''){
    textInput.focus();
    return;
}

const item = createItem(text);
list.appendChild(item);
item.scrollIntoView({block: 'center'});
textInput.value = '';
textInput.focus();

}

function createItem(text) {
   
const items = document.createElement('div');
items.setAttribute('class' , 'list_Items');

items.style.listStyleType ='none';
items.style.display ="flex";
items.style.justifyContent ="space-between";
items.style.margin = "0px 15px 15px 15px";

const itemRow = document.createElement('li');
items.setAttribute('class', 'item_Row');


const stuff = document.createElement('span');
stuff.setAttribute('class', 'Items_Stuff');
stuff.textContent = text;


const deleteIcon = document.createElement('button');
deleteIcon.setAttribute('class', 'fas fa-trash-alt');

const itemDivider = document.createElement('div');
itemDivider.setAttribute('class', 'item_Divider');

itemDivider.style.margin = '0px 20px 0px 20px';
itemDivider.style.width = '90%';
itemDivider.style.height = '1px';
itemDivider.style.backgroundColor ='lightslategray';

itemRow.style.listStyleType = 'none';

items.appendChild(stuff);
items.appendChild(deleteIcon);

itemRow.appendChild(items);
itemRow.appendChild(itemDivider);


return itemRow;

}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',event => {
        if(event.target.className === 'addIcon')
        onAdd();
        
    
        
});
});


textInput.addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        onAdd();
    }
}) 