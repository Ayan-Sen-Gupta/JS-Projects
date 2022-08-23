//Examine the DOCUMENT object//

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = '123';
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GET ELEMENT BY ID//
console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
let header = document.getElementById('main-header');
console.log(header);
//console.log(document.getElementById(''))


//headerTitle.textContent='Hello';
//headerTitle.innerText='GoodBye';

console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
headerTitle.innerHTML='<h3>Hello</h3>'; //If you lok at the elements tab,it will put this below the <h1> tag inside the <head> element.
//headerTitle.style.borderBottom='solid 3px #000';
header.style.borderBottom='solid 3px #000';

 let head=document.querySelector('.title');
 console.log(head);
 head.style.color='#008000';
 head.style.fontWeight='bold';

