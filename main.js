//...............................................................Button.................................................................
const btn1 = document.querySelector('.first-btn');
const btn2_1 = document.querySelector('.back');
const btn2_2 = document.querySelector('.next');
const lastbtn = document.querySelector('.btn-3');
const timecount = document.querySelector('.seconds');

btn1.addEventListener('click', () => {
    document.querySelector('.first-page').style.display = 'none';
    document.querySelector('.page-2').style.display = 'block';
})

btn2_1.addEventListener('click', () => {
    document.querySelector('.first-page').style.display = 'block';
    document.querySelector('.page-2').style.display = 'none';

})

btn2_2.addEventListener('click', () => {
    document.querySelector('.page-3').style.display = 'block';
    document.querySelector('.page-2').style.display = 'none';
    showquiz(0);
    startTime(10);
})

document.querySelector('.back_2').addEventListener('click', () => {
    document.querySelector('.page-3').style.display = 'none';
    document.querySelector('.page-2').style.display = 'block';
})

//...................................Quize part.........................................................................................
function showquiz(index) {
    let quiz = document.querySelector('.quize');
    let quizetext = '<span>' + array[index].number + '.' + array[index].quiz + '</span>';
    quiz.innerHTML = quizetext;

    let myOption = document.querySelector('.myoption');
    let optionText =
        '<div class ="option">' + '<span>' + array[index].Option[0] + '<span>' + '</div>' +
        '<div class ="option">' + '<span>' + array[index].Option[1] + '<span>' + '</div>' +
        '<div class ="option">' + '<span>' + array[index].Option[2] + '<span>' + '</div>' +
        '<div class ="option">' + '<span>' + array[index].Option[3] + '<span>' + '</div>';
    myOption.innerHTML = optionText;

    let countp = document.querySelector('.count-number');
    let countNumber = '<p>' + array[index].number + '  - 3' + '</p>';
    countp.innerHTML = countNumber;


    let option = myOption.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionselected(this)');
    }

};


let rightIcon = '<div class="right-icon"><img src="img/right.jpg" class="icon"></div>';
let wrongIcon = '<div class="wrong-icon"><img src="img/false.jpg" class="icon"></div>';


function optionselected(answer) {
    let useranswer = answer.textContent;
    let rightans = array[count].answer;
    clearInterval(counter);
    const rightOption = document.querySelectorAll('.myoption .option');


    if (useranswer == rightans) {
        score += 1;
        console.log(score);
        console.log('Answer is correct!');
        answer.classList.toggle('right');
        answer.insertAdjacentHTML('beforeend', rightIcon);
    } else {
        console.log('Wrong Answer, try again!');
        answer.classList.toggle('wrong');
        answer.insertAdjacentHTML('beforeend', wrongIcon);

        for (let i = 0; i < rightOption.length; i++) {
            if (rightOption[i].textContent == rightans) {
                rightOption[i].setAttribute('class', 'right .option')
            }
        }

    }


    for (let i = 0; i < rightOption.length; i++) {
        rightOption[i].classList.toggle('puss')
    }

    lastbtn.style.opacity = '1';
}


let score = 0;
function scoree() {
    let scoreee = document.querySelector('.score');
    if (score > 1) {
        let tagscore = '<span> Your score: <p>' + score + '</p> out of <p>3</p></span>';
        scoreee.innerHTML = tagscore;
    } else {
        let tagscore = '<span> You have lost, score: <p>' + score + '</p> out of <p>3</p></span>';
        scoreee.innerHTML = tagscore;
    }
}



let count = 0;
lastbtn.onclick = () => {
    if (count < showquiz.length + 1) {
        count++
        showquiz(count);
        clearInterval(counter);
        startTime(timevalue);
        lastbtn.style.opacity = '0';
    } else {
        console.log('Congrats!');
        document.querySelector('.page-3').style.display = 'none';
        document.querySelector('.last-page').style.display = 'block';
        scoree();
    }
}


let counter;
let timevalue = 10;
function startTime(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timecount.textContent = time;
        time--

        if (time < 9) {
            let add = timecount.textContent;
            timecount.textContent = 0 + add;
        }

        if (time < 0) {
            clearInterval(counter);
            timecount.textContent = '00';
        }
    }
}

document.querySelector('.restart').addEventListener('click', () => {
    window.location.reload();
});
document.querySelector('.exit').addEventListener('click', () => {
    document.querySelector('.page-2').style.display = 'block';
    document.querySelector('.last-page').style.display = 'none';
});