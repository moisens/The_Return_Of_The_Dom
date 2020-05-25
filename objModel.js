//Examine the document object
//console.dir(document);

//console.log(document.domain)
//console.log(document.URL)
//console.log(document.title)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all[10])
////console.log(document.all[10].textContent = 'Hello')
//console.log(document.forms[0])
//console.log(document.links)
//console.log(document.images)

//GETELEMENTBYID
//console.log(document.getElementById('header-title')); //Or...
//let headerTitle = document.getElementById('header-title');
//let header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Stargate';
//headerTitle.innerText = 'SG-1'
//console.log(headerTitle.innerText)

/**
 * The difference between textContet and innerText is that,
 * innerText pay attention to the style.
 * But in general, they are basically the same
 */

 //headerTitle.innerHTML = '<h3>Hello</h3>'
 //header.style.borderBottom = 'solid 3px #000';


 //GETELEMENTSBYCLASSNAME
 //let items = document.getElementsByClassName('list-group-item');
 //console.log(items);
 //console.log(items[1]);
 //items[1].textContent = 'Hello 2';
 //items[1].style.fontWeight = 'bold';
 //items[1].style.backgroundColor = 'yellow';
//
 ////This gives an error
 ////items.style.backgroundColor = '#f2f2f2f2';
//
 ////Must loop through the collection which is an array
 //for(let i=0; i<items.length; i++){
 //  items[i].style.backgroundColor = '#f2f2f2f2';
 //}

 //GETELEMENTSBYTAGNAME
 //let li = document.getElementsByTagName('li');
 //console.log(li);
 //console.log(li[1]);
 //li[1].textContent = 'Hello 2';
 //li[1].style.fontWeight = 'bold';
 //li[1].style.backgroundColor = 'yellow';
//
 ////This gives an error
 ////items.style.backgroundColor = '#f2f2f2f2';
//
 ////Must loop through the collection which is an array
 //for(let i=0; i<li.length; i++){
 //  li[i].style.backgroundColor = '#f2f2f2f2';
 //}

 //QUERYSELECTOR
//let header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 3px #017b1d';
//
//let input = document.querySelector('input');
//input.value = 'Hello little fella';  
//let submit = document.querySelector('input[type="submit"]');
//submit.value = 'SEND';
//
//let item = document.querySelector('.list-group-item');
//item.style.color = 'red';
//et lastChild = document.querySelector('.list-group-item:last-child');
//astChild.style.color = 'blue';
//
//et secondChild = document.querySelector('.list-group-item:nth-child(2)');
//econdChild.style.color = 'coral';


//QUERYSELECTORALL
//let titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent = 'Hello';
//titles[1].innerHTML = 'Hello 2'
//
//let odd = document.querySelectorAll('li:nth-child(odd)');
//let even = document.querySelectorAll('li:nth-child(even)');
//for(let i=0; i<odd.length; i++){
//   odd[i].style.backgroundColor = 'lightgrey';
//   even[i].style.backgroundColor = 'darkgrey';
//}
/*Attention, the nth element must be in pairs, 
*if no it'll return an erron in the console, even though it works.
*/


//TRAVERSING THE DOM - PARENT NODE - CHILD NODE
let itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement);

//ParentNode and parentElement are interchangeble

//childNode
//console.log(itemList.childNodes); //childNodes add also a text (line break) in the element list, that can be problematic

//The best is to use .children, which return a list element without the breaking line (text).
//It's also an HTMLCollection, no longer a node list.
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';


//firstChild will return a textNode beacause of the white space it encouter. Like chilNode
//console.log(itemList.firstChild);

//lastChild return olso a textNode
//console.log(itemList.lastChild);


//It'll be best to use firstElementChild, it'll return a siple element 
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';

//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 6';


//Siblings elements
//Next sibling return a textNode Because of the white space
//console.log(itemList.nextSibling);
//
////We can use the nextElementSibiling
//console.log(itemList.nextElementSibling);
//
////previous sibiling return also a textNode
//console.log(itemList.previousSibling);
//
////previousElementSibiling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'red';
//itemList.previousElementSibling.innerText = 'Liste element';


//createElement
 let newDiv = document.createElement('div');
//add a class to the div
 newDiv.className = 'hello';
 //add id to the div
 newDiv.id = 'hello1';
 //add attribute
 newDiv.setAttribute('title', 'Hello Div');

 //create a text node
 newDivText = document.createTextNode('Hello world');
 newDiv.appendChild(newDivText);
 
 //Add the new div in the dom
 let container = document.querySelector('header .container')
 let h1 = document.querySelector('header h1');
 container.insertBefore(newDiv, h1);

 newDiv.style.fontSize = '30px';

 console.log(newDiv);




