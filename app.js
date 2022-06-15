const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const reset = document.querySelector("#reset");

const playgamesselect =document.querySelector('#playgames')

const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");

let p1score = 0;
let p2score = 0;

let winningscore = 3;
let gamestatus = false;

p1button.addEventListener("click", function () {
  if (!gamestatus) {
    p1score = p1score + 1;

    if (p1score === winningscore) {
      gamestatus = true;
      p1display.classList.add('winner');
      p2display.classList.add('loser');
    }
    p1display.textContent = p1score;
  }
});

p2button.addEventListener("click", function () {
  if (!gamestatus) {
    p2score = p2score + 1;

    if (p2score === winningscore) {
      gamestatus = true;
      p2display.classList.add('winner');
      p1display.classList.add('loser');
    }
    p2display.textContent = p2score;
  }
});

playgamesselect.addEventListener('change', function() {
    winningscore= parseInt(this.value);
    resetfunc()
})


reset.addEventListener('click' , resetfunc)

function resetfunc() {
    gamestatus = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove('winner' , 'loser');
    p2display.classList.remove('winner' , 'loser');
}




