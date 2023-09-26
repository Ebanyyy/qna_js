const questions = [
	{
	question: "What country has won the most World Cups?",
	options: ['Brazil', 'France', 'Korea', 'Spain'],
	correctAnswer: 'Brazil'
	},

	{
	question: "How many bones do we have in an ear?",
	options: ['4', '6', '3', '7'],
	correctAnswer: '3'
	},

	{
	question: "What is acrophobia a fear of?",
	options: ['Ocean', 'Height', 'Small Space', 'Spider'],
	correctAnswer: 'Height'
	}
]

let questionNumber = 0

const questionElement = document.getElementById('question')
const optionsElements = document.querySelectorAll('.option')
const feedbackElement = document.getElementById('feedback')
const nextElement = document.getElementById('next')

function displayQuestion() {
	questionElement.textContent = questions[questionNumber].question;
	optionsElements.forEach((option, index) => 
		{option.textContent = questions[questionNumber].options[index];
		option.addEventListener('click', checkAnswer);
	})
}

function checkAnswer(event)
	{
		const selectedOption = event.target.textContent;
		if (selectedOption === questions[questionNumber].correctAnswer){
			feedbackElement.textContent = 'Correct!';
		} else {
			feedbackElement.textContent = 'Wrong!';
		}
	}

nextElement.addEventListener('click', () => 
		{questionNumber +=1;
	if (questionNumber < questions.length){
		displayQuestion();
		} feedbackElement.textContent = "";
	});

displayQuestion();

