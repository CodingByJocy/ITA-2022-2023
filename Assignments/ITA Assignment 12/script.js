fetch('https://cors-anywhere.herokuapp.com/https://www.link-elearning.com/linkdl/coursefiles/1470/quiz.json', { //temp server
  mode: 'cors',
})
  .then(function (response) {
    if (response.status !== 200) {
      throw Error('Unable to fetch data');
    }
    return response.json();
  })
  .then(function (data) {
    var quizContainer = document.getElementById('quiz-container');
    var quiz = data.quiz;

    for (var key in quiz) {
      if (quiz.hasOwnProperty(key)) {
        var questionData = quiz[key];

        var questionTitle = document.createElement('p');
        questionTitle.classList.add('quiz-question'); //this is the line for css 

        questionTitle.textContent = questionData.question;
        quizContainer.appendChild(questionTitle);

        for (var j = 0; j < questionData.options.length; j++) {
          var optionLabel = document.createElement('label');
          optionLabel.classList.add('quiz-option') //line for css

          var optionRadio = document.createElement('input');
          optionRadio.classList.add('radio-input')
          optionRadio.type = 'radio';
          optionRadio.name = 'quiz-option-' + key;
          optionRadio.value = questionData.options[j];
          optionLabel.appendChild(optionRadio);

          optionLabel.append(questionData.options[j]);

          quizContainer.appendChild(optionLabel);
        }
      }
    }

  })
  .catch(function (error) {
    console.error('Error:', error);
  });

function submitQuiz() {
  var quizContainer = document.getElementById('quiz-container');
  var radioInputs = quizContainer.querySelectorAll('input[type="radio"]');
  var userAnswers = [];

  for (var k = 0; k < radioInputs.length; k++) {
    if (radioInputs[k].checked) {
      userAnswers.push(radioInputs[k].value);
    }
  }

  localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  alert('Answers submitted successfully!')
};

window.onload = function () {
  var savedAnswers = localStorage.getItem('userAnswers');

  if (savedAnswers) {
    var userAnswers = JSON.parse(savedAnswers);

    var radioInputs = document.querySelectorAll('input[type="radio"]');

    for (var i = 0; i < radioInputs.length; i++) {
      if (userAnswers.includes(radioInputs[i].value)) {
        radioInputs[i].checked = true;
      }
    }
  }
};
