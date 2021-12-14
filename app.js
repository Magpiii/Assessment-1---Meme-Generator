// Use query selector since there's only one form. 
const form = document.querySelector('form');
// Prevent me from having to type "document.body" over and over again. 
const body = document.body;
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const url = document.querySelector('#url');
const masterDiv = document.querySelector('#meme-list');

form.addEventListener('submit', function(event) {
    // Prevent page from refreshing. 
    event.preventDefault();

    // Create elements (including new div). 
    let div = document.createElement('div');
    let newTopText = document.createElement('p');
    let newBottomText = document.createElement('p');
    let img = document.createElement('img');
    let rmBtn = document.createElement('button');

    // Assign attributes to dev elements. 
    newTopText.innerText = topText.value;
    newBottomText.innerText = bottomText.value;
    img.setAttribute('src', url.value);
    rmBtn.innerText = 'Remove';

    // Append elements to new div. 
    div.appendChild(newTopText);
    div.appendChild(newBottomText);
    div.appendChild(img);
    div.appendChild(rmBtn);

    // Append new div to master div. 
    masterDiv.appendChild(div);
});

// Delegate masterDiv. 
masterDiv.addEventListener('click', function(event) {
   if (event.target.tagName === 'BUTTON') {
       // Remove meme when remove button is clicked. 
       event.target.parentElement.remove();
   } 
});