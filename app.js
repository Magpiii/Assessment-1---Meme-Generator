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
    let bigDiv = document.createElement('div');
    let topTextDiv = document.createElement('div');
    let bottomTextDiv = document.createElement('div');
    let memeDiv = document.createElement('div');
    let newTopText = document.createElement('div');
    let newBottomText = document.createElement('div');
    let img = document.createElement('img');
    let rmBtn = document.createElement('button');

    // Assign attributes to dev elements. 
    topTextDiv.innerText = topText.value;
    bottomTextDiv.innerText = bottomText.value;
    img.setAttribute('src', url.value);
    rmBtn.innerText = 'Remove';

    // Append respective text to respective divs. 
    topTextDiv.append(newTopText);
    bottomTextDiv.append(newBottomText);

    // Set id's. 
    memeDiv.setAttribute('id', 'meme');
    topTextDiv.setAttribute('id', 'top-text-div');
    bottomTextDiv.setAttribute('id', 'bottom-text-div');

    // Append img, topText and bottomText to memeDiv for styling purposes.
    memeDiv.append(topTextDiv);
    memeDiv.append(bottomTextDiv);
    memeDiv.append(img);

    // Style topTextDiv, bottomTextDiv, and memeDiv. 
    // SOURCE CITED: https://stackoverflow.com/questions/8708945/how-to-position-text-over-an-image-in-css, accessed 13 December 2021. 
    memeDiv.style.position = 'relative';
    topTextDiv.style.position = 'absolute';
    topTextDiv.style.top = '0';
    topTextDiv.style.left = '160px'
    topTextDiv.style.textAlign = 'center';
    topTextDiv.style.fontFamily = '\'Maximum Impact\', sans serif';
    bottomTextDiv.style.position = 'absolute';
    bottomTextDiv.style.bottom = '0';
    bottomTextDiv.style.left = '160px';
    bottomTextDiv.style.textAlign = 'center';
    bottomTextDiv.style.fontFamily = '\'Maximum Impact\', sans serif';

    // Append memeDiv and rmBtn to bigDiv. 
    bigDiv.append(memeDiv);
    bigDiv.append(rmBtn);

    // Append new bigDiv to masterDiv. 
    masterDiv.appendChild(bigDiv);

    // Clear inputs on submit. 
    topText.value = '';
    bottomText.value= '';
    url.value = '';
});

// Delegate masterDiv. 
masterDiv.addEventListener('click', function(event) {
   if (event.target.tagName === 'BUTTON') {
       // Remove meme when remove button is clicked. 
       event.target.parentElement.remove();
   }
});