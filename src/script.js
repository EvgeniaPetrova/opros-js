import "./style.scss";
import JSConfetti from 'js-confetti'

// авторизация

const divLogin = document.createElement("div");
divLogin.className = "login";

const form = document.createElement("form");
form.className = "form";

let divInputs = document.createElement("div");
divInputs.className = "inputs";

const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "user_name";
nameInput.id = "user_name1";
nameInput.placeholder = 'Имя';
nameInput.required = true;

const surnameInput = document.createElement("input");
surnameInput.type = "text";
surnameInput.name = "user_surname";
surnameInput.id = "user_surname1";
surnameInput.placeholder = 'Фамилия';
surnameInput.required = true;

const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.name = "user_age";
ageInput.id = "user_age1";
ageInput.placeholder = 'Возраст';
ageInput.required = true;

const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.className = "btn";

const repeatBtn = document.createElement("button");
repeatBtn.className = "btn";
repeatBtn.textContent = "Ввести данные о себе снова";

let error = document.createElement('p');
error.innerText = "Пожалуйста, заполните все поля формы";
error.classList = "form-error";

//localStorage.clear();

function authorization () {
    document.body.prepend(divLogin);
    divLogin.prepend(form);
    form.prepend(divInputs);
    divInputs.append(nameInput);
    divInputs.append(surnameInput);
    divInputs.append(ageInput);
    form.append(submitBtn);
    submitBtn.innerText = "Продолжить";

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        validate() 
      })
  }

function login () {
    document.body.prepend(divLogin);
    divLogin.prepend(form);
    form.append(submitBtn);
    form.append(repeatBtn);
    submitBtn.innerText = "Продолжить как " + user.name;
   
    submitBtn.addEventListener('click', (event) => {
       event.preventDefault();
      divLogin.classList.add('close');
      divContainer.style.display = "block"
    });
  
    repeatBtn.addEventListener('click', () => {
        localStorage.clear();
       document.location.reload();
        authorization();        
  })
  }

let user = JSON.parse(localStorage.getItem("user"));

function validate() {
    if (!form.checkValidity())  {
        submitBtn.before(error);
      } else { 
        localStorage.setItem("user", JSON.stringify({ name: nameInput.value, surname: surnameInput.value, age: ageInput.value}));
        divLogin.classList.add("close");
        divContainer.style.display = "block"
      }
}


document.addEventListener('DOMContentLoaded', () => {
    if (!user) {
        authorization();

    } else {
        login();
        }
})

// тест

const questions = [
    {
        question: 'Выберите фразу, которая описывает вас лучше всего:',
        type:  "radio",
        options: [
           {
            id: '1',
            value: 'Взгляд кошки, грация картошки',
           },
           {
            id: '2',
            value: 'Понимать меня не обязательно. Обязательно любить и кормить',
           },
           {
            id: '3',
            value: 'Меня трудно найти, легко потерять и невозможно забыть',
           },
           {
            id: '4',
            value: 'Если немного подождать, все само упадет в лапы',
           }
        ],
    },
    {
        question: 'Какие уловки вы используете, чтобы добиться желаемого?',
        type:  "checkbox",
        options: [
            {
                id: '5',
                value: 'Смотрю большими несчастными глазами',
               },
               {
                id: '6',
                value: 'Самые грязные. Могу и шантаж устроить',
               },
               {
                id: '7',
                value: 'У меня отличный дар убеждения',
               }
        ],
    },
    {
        question: 'У всех есть слабые стороны. У вас какие?',
        type:  "checkbox",
        options: [
            {
                id: '8',
                value: 'Постоянно бурчу',
               },
               {
                id: '9',
                value: 'Иронизирую по делу и без',
               },
               {
                id: '10',
                value: 'Требую слишком много внимания',
               },
               {
                id: '11',
                value: 'Везде ищу врагов',
               }
        ],
    },
    {
        question: 'А что раздражает вас больше всего?',
        type:  "radio",
        options: [
            {
                id: '12',
                value: 'Несправедливость',
               },
               {
                id: '13',
                value: 'То, что у меня лапки',
               },
               {
                id: '14',
                value: 'Пассивная агрессия',
               },
               {
                id: '15',
                value: 'Пустой кошелек',
               },
               {
                id: '16',
                value: 'Примерно все',
               }
        ],
    },
    {
        question: 'И последнее. Главный кошачий грех — это…',
        type:  "radio",
        options: [
            {
                id: '17',
                value: 'Орать в 4 утра',
               },
               {
                id: '18',
                value: 'Тревожно смотреть в угол, как будто бы там что-то есть',
               },
               {
                id: '19',
                value: 'Долго просить чтобы открыли дверь, а потом сразу же проситься обратно',
               },
               {
                id: '20',
                value: 'Казаться милее, чем есть',
               },
        ],
    },
]


let divContainer = document.createElement("div");
divContainer.className = "container";
divContainer.style.display = "none";

let title = document.createElement("h1");
title.innerText = "Какой вы кинокотик?"

let divTreker = document.createElement("div");
divTreker.className = "question-number";
divTreker.innerHTML = `<h3 class="treker"> Вопрос <span id="number-of-question"></span> из <span id="number-of-all-questions"></span> </h3>`;

let question = document.createElement("h2");
question.className = "question";

let divOptions = document.createElement("div");
divOptions.className = "options";

let btnNext = document.createElement("button");
btnNext.className = "btn-next";
btnNext.innerText = "Дальше";


let divResults = document.createElement("div");
divResults.className = "results";
divResults.style.display = "none";

document.body.prepend(divContainer);
divContainer.prepend(title);
divContainer.append(divTreker);
divTreker.after(question);
question.after(divOptions);
divOptions.after(btnNext);
divContainer.after(divResults);

let numberOfQuestion = document.getElementById('number-of-question'),
    amountOfQuestions = document.getElementById('number-of-all-questions');

const jsConfetti = new JSConfetti();

amountOfQuestions.innerHTML = questions.length;

// в функции renderQuestions не получается рендерить разные типы ответов radio/checkbox

const renderQuestions = (index) => {
    question.dataset.currentStep = index; 
   if (questions[index].type = "radio") {
     const renderAnswers = () => questions[index].options.map((answer) => 
     `
         <li>
             <label>
                 <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                 ${answer.value}
             </label>
         </li>
     `)
     .join('');
     question.innerHTML = questions[index].question;
     divOptions.innerHTML = `
     <ul class="answers"> ${renderAnswers()} </ul> ` ;
 
   } else if (questions[index].type = "checkbox") {
     const renderAnswers = () => questions[index].options.map((answer) => 
     `
         <li>
             <label>
                 <input class="answer-input" type="checkbox" name=${index} value=${answer.id}>
                 ${answer.value}
             </label>
         </li>
     `)
     .join('');
     question.innerHTML = questions[index].question;
     divOptions.innerHTML = `
     <ul class="answers"> ${renderAnswers()} </ul> ` ;
   }
 
 numberOfQuestion.innerHTML = index + 1;
 btnNext.disabled = true;
 btnNext.classList.remove('active');  
 }


btnNext.addEventListener('click', () => {
   const nextQuestionIndex = Number(question.dataset.currentStep) + 1;
   if (questions.length === nextQuestionIndex) {
    renderResults();
   } else {
    renderQuestions(nextQuestionIndex);
   }
} )

renderQuestions(0);

// в renderResults сейчас выводятся все ответы, не понимаю как вывести именно чекнутые, 

const renderResults = () => {
  let content = '';

  const getAnswers = (questionIndex) => questions[questionIndex].options
  .map((answer) => `<li>  ${answer.value} </li>`).join('');

  
  questions.forEach((question, index) => {
      content += 
      ` 
          <h3 class="result-q"> ${question.question} </h3>
          <ul class="result-list"> ${getAnswers(index)} </ul>
        
     ` ;  
  });

divResults.innerHTML = content;
divContainer.style.display = "none";
divResults.style.display = "block";
jsConfetti.addConfetti({
  emojis: ['🌈', '⚡️','💫', '🌸'],
  emojiSize: 30,
  confettiNumber: 150,
})
}

divContainer.addEventListener('change', (event) => {
    if (event.target.classList.contains("answer-input")) { 
        btnNext.disabled = false;
        btnNext.classList.add('active');
    }
}
);



