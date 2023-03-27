function addItem() {
    const inputText = document.getElementById("input-text");
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.innerText = inputText.value;
    list.appendChild(item);
    inputText.value = "";
  }

  function sortList() {
    const list = document.getElementById("list");
    const items = list.getElementsByTagName("li");
    const sortedItems = Array.from(items).sort((a, b) => a.innerText.localeCompare(b.innerText));
    for (let item of sortedItems) {
      list.appendChild(item);
    }
  }


  document.getElementById("add-button").addEventListener("click", addItem);
  document.getElementById("sort-button").addEventListener("click", sortList);