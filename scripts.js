AOS.init({
    duration: 1000,
});

const moreBtn = document.querySelector('.more-btn');
const expandBtn = document.getElementById('expand-btn');
const moreBtnIcon = document.getElementById('more-btn-icon');


expandBtn.addEventListener('click', () => {

  const isExpanded = moreBtn.classList.contains('expanded-list');

  if (!isExpanded) {
    moreBtnIcon.classList.add('fa-xmark');
    moreBtnIcon.classList.remove('fa-bars');
    moreBtn.classList.add('expanded-list');
  } else {
    moreBtn.classList.remove('expanded-list');
    moreBtnIcon.classList.remove('fa-xmark');
    moreBtnIcon.classList.add('fa-bars');
  }
 
});

const nightNode = document.getElementById('night-mode');

nightNode.addEventListener('click', () => {
   const isLightMode =  document.body.classList.contains('light-mode');
    if (isLightMode) {
        document.body.classList.remove('light-mode');   
        nightNode.innerHTML = ' <i class="fa-solid fa-moon"></i>';
    } else {  
        document.body.classList.add('light-mode');  
        nightNode.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});


const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const textArray = ['Software Developer',"Web Developer", 'MEAN Stack', 'Tech Enthusiast', 'Telugu Guy'];
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