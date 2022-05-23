console.log('hello tasks');

// task 1

const task1Text = document.querySelector(".task-1__text");
const task1Cursor = document.querySelector(".task-1__cursor");
const task1Words = ['HTML', 'CSS', 'JavaScript', 'React'];

let activeLetter = 0;
let activeWord = 0;

const addLetter = () => {
    if (activeLetter >=0) {
        task1Text.textContent += task1Words[activeWord][activeLetter];
    }
    activeLetter++;
    if (activeLetter === task1Words[activeWord].length) {
        activeWord++;
        if (activeWord === task1Words.length) {
            activeWord = 0;
        };
    return setTimeout(() => {
        activeLetter = 0;
        task1Text.textContent = '';
        addLetter();
    },4000)
    }
    setTimeout(addLetter, 200)
}

addLetter();

const cursorAnimation = () => {
    task1Cursor.classList.toggle('task-1__active');
}
setInterval(cursorAnimation, 500);