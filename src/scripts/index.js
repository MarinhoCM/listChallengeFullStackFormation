import { 
    formElement,
    ulFormElement,
    formInput
} from './components.js';


const insertItems = (item) => {
    const newItemContainer = document.createElement('li');
    let newItemValue = document.createElement('span');
    let newOptionElement = document.createElement('i')
    newOptionElement.classList.add('removeItem');
    newOptionElement.textContent = "iconeApagar"
    
    newItemValue.textContent = item.value;
    newItemContainer.append(newItemValue, newOptionElement)
    ulFormElement.append(newItemContainer);
}

formElement.onsubmit = (event) => {
    event.preventDefault();
    
    const item = {
        id: new Date().getTime(),
        value: formInput.value
    }   

    insertItems(item);
}

ulFormElement.onclick = (event) => {
    if (event.target.classList.contains('removeItem')){
        const elementItem = event.target.closest('li');
        elementItem.remove();
        alert('O item foi removido da lista!')
    }
}