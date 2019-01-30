// using this file is optional
// you can also load the code snippets in using your browser's console





let divs = document.querySelectorAll('div');

function bubble(event) { 
  console.log(this.firstChild.nodeValue.trim() + 'captured');
} 

for (let i = 0; i < divs.length; i++) {
  
  divs[i].addEventListener('click', capture, true);
}