document.getElementById('clearNumber').addEventListener('click', clearPhoneNumber);
document.getElementById('submitNumber').addEventListener('click', submitPhoneNumber);

var num = 0;
function getRandomPosition() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  }
  function createFloatingNumber(number) {
    const numberElement = document.createElement('div');
    numberElement.className = 'floatingNumber';
    numberElement.textContent = number;
    const position = getRandomPosition();
    numberElement.style.left = position.x + 'px';
    numberElement.style.top = position.y + 'px';
    numberElement.addEventListener('click', function() {
      const phoneNumberField = document.getElementById('phoneNumber');
      if(num <10){
        phoneNumberField.value += number;
        num = num + 1;
      }  
    });
    return numberElement;
  }
  function startAnimation() {
    const numberContainer = document.getElementById('numberContainer');
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 50);
      const floatingNumber = createFloatingNumber(randomNumber);
      numberContainer.appendChild(floatingNumber);
      setTimeout(() => {
        floatingNumber.remove();
      }, 5000);
    }, 700);
  }
  function clearPhoneNumber() {
    document.getElementById('phoneNumber').value = '';
    num = 0;
  }
  function submitPhoneNumber() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    alert('Submitted phone number: ' + phoneNumber);
    clearPhoneNumber();
  }

  startAnimation();