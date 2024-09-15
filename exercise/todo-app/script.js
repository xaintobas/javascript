const inputEl = document.querySelector('.inputEl');
const dateEl = document.querySelector('.dateEl');
const btnAddEl = document.querySelector('.btnAdd');
const toDoContentsEl = document.querySelector('.todoContents');

const toDoItems = [
  {
    name: 'Name One',
    price: 30,
    category: 'TV'
  },

  {
    name: 'Name Two',
    price: 30,
    category: 'TV'
  },

  {
    name: 'Name Three',
    price: 30,
    category: 'TV'
  }
];

toDoItem = '';

const loadToDoItems = function() { 
  toDoHTMLEl = '';
  for(let index = 0; index < toDoItems.length; index++){
    toDoHTMLEl += `
      <div class="grid grid1x3">
        <span class="todoItem">${toDoItems[index].name}
        <span class="todoItem">${toDoItems[index].category}
        <span class="todoItem">${toDoItems[index].price}
        <button class="btn btnDelete">Delete</button>
      </div>
    `;
  }
  toDoContentsEl.innerHTML = toDoHTMLEl;

  const btnDeleteEl = document.querySelectorAll('.btnDelete');

  for(let i = 0; i < btnDeleteEl.length; i++){
    btnDeleteEl[i].addEventListener('click', function(){
      console.log(btnDeleteEl.length);
      toDoItems.splice(i, 1);
      loadToDoItems();
    })
  }
}

btnAddEl.addEventListener('click', function(){
  toDoItems.push(inputEl.value);
  loadToDoItems();
  inputEl.value = ''
});

loadToDoItems();




// btnDeleteEl.addEventListener('click', function(){
//   for(let i = 0; i < toDoItems.length; i++){
//     console.log(i);
//     // toDoItems.splice();
//   }
// });


