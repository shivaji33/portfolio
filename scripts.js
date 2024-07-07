AOS.init({
    duration: 1000,
});

const speedDialBtn = document.getElementById('speedDialBtn');
const navigationList = document.getElementById('navigationList');
const moreBtn = document.getElementById('more-btn-icon');

speedDialBtn.addEventListener('click', () => {
  if (navigationList.style.display === 'block') {
    navigationList.style.display = 'none';
    moreBtn.classList.remove('fa-times');
    moreBtn.classList.add('fa-plus');
  } else {
    navigationList.style.display = 'block';
    moreBtn.classList.remove('fa-plus');
    moreBtn.classList.add('fa-times');
  }
});

const nightNode = document.getElementById('night-mode');

nightNode.addEventListener('click', () => {
   const isLightMode =  document.body.classList.contains('light-mode');
    if (isLightMode) {
        document.body.classList.remove('light-mode');   
        document.body.classList.add('dark-mode');   
        nightNode.innerHTML = ' <i class="fa-solid fa-moon"></i>';
    } else {  
        document.body.classList.add('light-mode');  
        document.body.classList.remove('dark-mode');   
        nightNode.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});


const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const textArray = ['Software Developer',"Web Developer", 'Tech Enthusiast', 'తెలుగు (Telugu)'];
charIndex = 0;
textArrayIndex = 0;

function type() {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
      cursor.classList.remove("blink");
      typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 120);
    } else {
      cursor.classList.add("blink");
      setTimeout(erase, 1000);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      cursor.classList.remove("blink");
      typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 80);
    } else {
      cursor.classList.add("blink");
      textArrayIndex++;
  
      if (textArrayIndex > textArray.length - 1) {
        textArrayIndex = 0;
      }
      setTimeout(type, 1000);
    }
  }

  type();