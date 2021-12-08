
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
let id = 0;
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item_row');
    itemRow.innerHTML = `
        <div class = "item" data-id = ${id};
            <span class="text">${text}</span>
            <button class="item" data-id =${id};
                <i class="fas fa-trash-alt"></i>
            </button>
        </li> 
       <div class="itemDivider"></div>;`
       id++;
       return itemRow;
/*
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

*/

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


list.addEventListener('click', event => {
    console.log('he');
});
    


textInput.addEventListener('keypress', event => {
    if(event.key === 'Enter') {
        onAdd();
    }
}) 