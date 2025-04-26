const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-button");


addButton.addEventListener("click", () => {
  const item = newItem.value

  console.log(item)
});

