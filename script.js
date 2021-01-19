//------------------------------------------------------Carousel--------------------------------------------------

var count = 3;

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');

const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');
const btnFive = document.getElementById('btn-five');


// ----------------------------------------------------------------------------------------------------------------

const rightClick = document.getElementById('right-carousel-click');
rightClick.addEventListener('click',Increment);


function Increment(){
    three.classList.remove('selected');
    count++;    

    if(count>5){
        count=1
        five.classList.remove('selected');
    }
        switch (count) {
            case 1:
                clickOne();
                break;
            case 2:
                clickTwo();
                break;
            case 3:
                clickThree();
                break;
            case 4:
                clickFour();
                break;
            case 5:
                clickFive();
                break;
        }
}

const leftClick = document.getElementById('left-carousel-click');
leftClick.addEventListener('click',decrement);

function decrement(){
    count--;    
    if(count<1){
        count=5
        five.classList.remove('selected');
    }
        switch (count) {
            case 1:
                clickOne();
                break;
            case 2:
                clickTwo();
                break;
            case 3:
                clickThree();
                break;
            case 4:
                clickFour();
                break;
            case 5:
                clickFive();
                break;
        }
}

btnOne.addEventListener('click',clickOne);
btnTwo.addEventListener('click',clickTwo);
btnThree.addEventListener('click',clickThree);
btnFour.addEventListener('click',clickFour);
btnFive.addEventListener('click',clickFive);

one.addEventListener('click',clickOne);
two.addEventListener('click',clickTwo);
three.addEventListener('click',clickThree);
four.addEventListener('click',clickFour);
five.addEventListener('click',clickFive);

// ----------------------------------------------------------------------------------------------------------------
function clickOne(){
    count=1;
    one.classList.add('selected');
    two.classList.remove('selected');
    three.classList.remove('selected');
    four.classList.remove('selected');
    five.classList.remove('selected');
    btnOne.classList.add('btn-selected');
    btnTwo.classList.remove('btn-selected');
    btnThree.classList.remove('btn-selected');
    btnFour.classList.remove('btn-selected');
    btnFive.classList.remove('btn-selected');
    // one.scrollIntoView();
}

function clickTwo(){
    count=2;
    one.classList.remove('selected');
    two.classList.add('selected');
    three.classList.remove('selected');
    four.classList.remove('selected');
    five.classList.remove('selected');
    btnOne.classList.remove('btn-selected');
    btnTwo.classList.add('btn-selected');
    btnThree.classList.remove('btn-selected');
    btnFour.classList.remove('btn-selected');
    btnFive.classList.remove('btn-selected');
    // two.scrollIntoView();
}

function clickThree(){
    count=3;
    one.classList.remove('selected');
    two.classList.remove('selected');
    three.classList.add('selected');
    four.classList.remove('selected');
    five.classList.remove('selected');
    btnOne.classList.remove('btn-selected');
    btnTwo.classList.remove('btn-selected');
    btnThree.classList.add('btn-selected');
    btnFour.classList.remove('btn-selected');
    btnFive.classList.remove('btn-selected');
    // three.scrollIntoView();
}

function clickFour(){
    count=4;
    one.classList.remove('selected');
    two.classList.remove('selected');
    three.classList.remove('selected');
    four.classList.add('selected');
    five.classList.remove('selected');
    btnOne.classList.remove('btn-selected');
    btnTwo.classList.remove('btn-selected');
    btnThree.classList.remove('btn-selected');
    btnFour.classList.add('btn-selected');
    btnFive.classList.remove('btn-selected');
    // four.scrollIntoView();
}

function clickFive(){
    count=5;
    one.classList.remove('selected');
    two.classList.remove('selected');
    three.classList.remove('selected');
    four.classList.remove('selected');
    five.classList.add('selected');
    btnOne.classList.remove('btn-selected');
    btnTwo.classList.remove('btn-selected');
    btnThree.classList.remove('btn-selected');
    btnFour.classList.remove('btn-selected');
    btnFive.classList.add('btn-selected');
    // five.scrollIntoView();
}

//---------------------------------------------------------Hamburger Menu------------------------------------

const hamBtn=document.getElementById('hamburger-menu-button');
const hamMenu=document.getElementById('hamburger-menu');
const closeHam = document.getElementById('close-ham');


closeHam.addEventListener('click',function(){
    hamMenu.style.display='none';
    hamMenu.classList.remove('hamburger-open');
})

hamBtn.addEventListener('click',function(){
    hamMenu.classList.add('hamburger-open');
    hamMenu.style.display='flex';
})
