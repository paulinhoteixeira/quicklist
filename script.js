const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list")
let listItens = ""

addButton.addEventListener("click", (e) => {
  e.preventDefault()
  
  makingList(newItem.value)
  clearInput()
  

  console.log(listItens)
});

shoppingList.addEventListener("click", deleteItem)

function makingList(newItem){
  let item = `<li>
            <div class="select-item">
              <div class="checkmark"></div>
              <input class="checkbox" type="checkbox">
              <p>${newItem}</p>
            </div>
            <img class="deleteButton" src="./assets/delete.svg" alt="">
          </li>`  

  listItens = listItens + item

  shoppingList.innerHTML = listItens
  
}

function clearInput(){
  newItem.value = ""
}

function deleteItem(index){
  if (event.target.classList.contains("deleteButton")) { 
    const item = event.target.closest('li'); // acha o <li> mais próximo
    if (item) {
      item.remove(); // remove o <li>
    }
  }
}

