const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText='On a snowy day, the :insertx: went for a walk. When they got to :inserty: they stopped in their tracks, then :insertz: Chip was very happy and very excited — The :insertx: had a great day!';

const insertx=['undergrads', 'graduates', 'professors'];
const inserty=['Stadium','ATLS building','Engineering Center'];
const insertz=['had a surprise birthday for Ralphie','had free pizza from Cosmos','had a snow day!']


randomize.addEventListener('click', result);
    function result() {
    let newStory = storyText;
        const xItem = randomValueFromArray(insertx);
        const yItem = randomValueFromArray(inserty);
        const zItem = randomValueFromArray(insertz);
        newStory = newStory.replaceAll(':insertx', xItem);
        newStory = newStory.replaceAll(':inserty', yItem);
        newStory = newStory.replaceAll(':insertz', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Chip', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature = `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}