const inputEl = document.querySelector('.inputEl');
const dateEl = document.querySelector('.dateEl');
const btnAddEl = document.querySelector('.btnAdd');
let toDoContentsEl = document.querySelector('.todoContents');
const todoItemEl = document.querySelector('.todoItem');
const todoDateEl = document.querySelector('.todoDate');

// const getToDoItems = JSON.parse(localStorage.getItem('toDoItem'));

let toDoItems = [
  {
    toDoName: 'Wash Dishes',
    toDoDate: '2024-09-20'
  },
  {
    toDoName: 'Online Class',
    toDoDate: '2024-09-20'
  }
];

const renderToDoItems = function() {
  let htmlContents = '';
  
  for(let i = 0; i < toDoItems.length; i++){
    const toDoObject = toDoItems[i];
    const {toDoName, toDoDate} = toDoObject;

    htmlContents += `
    <div class="flexContainer">
      <p class="todoItem">${toDoName}</p>
      <p class="todoDate">${toDoDate}</p>
      <button class="btn btnDelete" onclick="
        toDoItems.splice(${i}, 1);
        renderToDoItems();
      ">Delete</button>
    </div>`
  }
  
  toDoContentsEl.innerHTML = htmlContents;
  inputEl.value = '';
  dateEl.value = '';
  // console.log(toDoItems);
  // localStorage.setItem('toDoItem', JSON.stringify(toDoItems));
}

const addToDo =  function () {
  const toDoName = inputEl.value;
  const toDoDate = dateEl.value;

  toDoItems.push(
    {
      toDoName,
      toDoDate
    }
  );
  renderToDoItems();
}

btnAddEl.addEventListener('click', addToDo);
renderToDoItems();







// localStorage.clear('toDoItem');



