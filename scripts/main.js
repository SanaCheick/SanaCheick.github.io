/*let myHeading = document.querySelector('h1');
myHeading.textContent ='Hello, World !';

document.querySelector('html').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});
*/

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox.png') {
      myImage.setAttribute('src', 'images/safari.png');
    } else {
      myImage.setAttribute('src', 'images/firefox.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
  }
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
  }
  myButton.addEventListener('click', function() {
    setUserName();
  });

  
/*let
myVariable = 3+10;

console.log (myVariable);*/

/*function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

  console.log (multiply(5, 2));*/

