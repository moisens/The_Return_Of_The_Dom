let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter =  document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete itemList eventListener
itemList.addEventListener('click', removeItem);
//filter EVENT
filter.addEventListener('keyup', filterItems);

//Add Item()
function addItem(e){
   e.preventDefault();
   //Get input value
   let newItem = document.getElementById('item').value;

   //create new li
   let li = document.createElement('li');
   //Add a class
   li.className = 'list-group-item';
   //Add text node with the input value
   li.appendChild(document.createTextNode(newItem));
   //Create delete button element
   let deleteBtn = document.createElement('button');
   //Add classes to delelete button
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   //Append text node to deleteBtn
    deleteBtn.appendChild(document.createTextNode('X'));
    //Append deleteBtn to li
    li.appendChild(deleteBtn);

   //append li to itemList
   itemList.appendChild(li) 
   
}

//Revove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
      if(confirm('Are you sure ?')){
         let li = e.target.parentElement; //here the parentElement is the li
         itemList.removeChild(li); //itemList(ul) is the parent and we want to remove his child (li)
      }
   }
}


//Filter Items
function filterItems(e){
   //convert text to lowercase
   let text = e.target.value.toLowerCase();
   //Get list item
   let items = itemList.getElementsByTagName('li');
   //convert the htmlcollection to an array then loop through...
   Array.from(items).forEach((item) => {
      let itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
         item.style.display = 'block';
      }else{
         item.style.display = 'none';
      }
   });
    
}