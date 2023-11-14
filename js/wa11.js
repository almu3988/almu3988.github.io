var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');


const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'Ocean waves.',
  'pic2.jpg' : 'Very blue ocean',
  'pic3.jpg' : 'Ocean with fish',
  'pic4.jpg' : 'Ocean with sunny view',
  'pic5.jpg' : 'A perfect wave'
}


/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }
  
  /* Wiring up the Darken/Lighten button */
  
  btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });