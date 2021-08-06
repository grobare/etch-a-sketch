const box = document.querySelector('.box');

const resolutionBtn = document.querySelector('#btn1');
const blackBtn = document.querySelector('#btn2');
const randomBtn = document.querySelector('#btn3');
const resetBtn = document.querySelector('#btn4');



function createDivs(rows, cols) {
 

  box.style.setProperty('--grid-rows', rows);
  box.style.setProperty('--grid-cols', cols);

  for (let i = 0; i < (rows * cols); i++) {
    const cell = document.createElement('div');
    cell.classList.add('pixel');
    box.appendChild(cell);
  };
};

createDivs(16,16);

function clearBord() {
  const allDivs = document.querySelectorAll('.pixel');
  allDivs.forEach(div => div.remove())
};

function setResolution() {
  resolutionBtn.addEventListener('click', () => {
    
    let resolution = prompt('Please enter number of squares per side: (max 100)')
    if (resolution > 100) {
      resolution = 100;
    }
    clearBord(); 
    createDivs(resolution, resolution);
    paintBlack();
    paintRandom();
    reset();
    startDefault();
    
  });
}
setResolution()

function paintBlack() {
  // const blackBtn = document.querySelector('#btn2');
  const pixels = document.querySelectorAll('.pixel');

  blackBtn.addEventListener('click', () => {
    pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
      pixel.style.background = 'black';
    }))
  })
}  
paintBlack()

//reset all divs
function reset(){
  const pixels = document.querySelectorAll('.pixel');
  resetBtn.addEventListener('click', () => {
    pixels.forEach((pixel) => {
      pixel.style.background = '#fbfbf8';
    });
  })
}

reset()

function ranInt() {
  return Math.floor(Math.random() * 256);
}

function paintRandom() {
  const pixels = document.querySelectorAll('.pixel');
  randomBtn.addEventListener('click', () => {
    pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
      pixel.style.background = `rgb(${ranInt()}, ${ranInt()}, ${ranInt()})`;
    }));
  });
};
paintRandom()

function startDefault() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach(pixel => pixel.addEventListener('mouseover', () => {
    pixel.style.background = '#C0C0C0';
    
  }))
}
//set default gray on load
window.addEventListener('load', startDefault)
