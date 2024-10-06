
const quizData = [
    {
        question: "What is the main purpose of the James Webb Space Telescope?",
        a: "Study exoplanets",
        b: "Observe distant galaxies",
        c: "Both A and B",
        d: "Study black holes",
        correct: "c",
    },
    {
        question: "When was the James Webb Space Telescope launched?",
        a: "2020",
        b: "2021",
        c: "2022",
        d: "2023",
        correct: "b",
    },
    {
        question: "What is the main advantage of JWST compared to Hubble?",
        a: "Larger mirror",
        b: "Closer to Earth",
        c: "Faster processing",
        d: "Solar-powered",
        correct: "a",
    },
	{
        question: "What is the diameter of JWST's primary mirror?",
        a: "4 meters",        b: "6.5 meters",
        c: "8 meters",
        d: "10 meters",
        correct: "b",
    },
	{
        question: " What are the main instruments on board JWST?",
        a: "Camera, Spectrograph, and Polarimeter",        b: "Near-Infrared Camera, Near-Infrared Spectrograph, Mid-Infrared Instrument, and Fine Guidance Sensor",
        c: "Radio Telescope and Ultraviolet Spectrometer",
        d: "X-ray Telescope and Gamma-Ray Detector",
        correct: "b",
    },
	{
        question: "Where is JWST located?",
        a: "Low Earth Orbit",        b: "Geosynchronous Orbit",
        c: "Lagrange point 2 (L2)",
        d: "Mars Orbit",
        correct: "c",
    },
	 {
        question: "What is JWST's expected operational lifetime?",
        a: "2 years",
        b: "5 years",
        c: "10 years",
        d: "20 years",
        correct: "b",
    },
	 {
        question: " What is the estimated cost of JWST?",
        a: "$1 billion",
        b: "$5 billion",
        c: "$8.7 billion",
        d: "$10 billion",
        correct: "c",
    },
	 {
        question: "What type of light does JWST primarily observe?",
        a: "Visible light",
        b: "Ultraviolet light",
        c: "Infrared light",
        d: "X-ray light",
        correct: "c",
    },
	 {
        question: "Who is the James Webb Space Telescope named after?",
        a: "A renowned astronomer",
        b: "A NASA engineer",
        c: " A space industry pioneer",
        d: "James E. Webb, NASA's second administrator",
        correct: "d",
    },






];

const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestionIndex];
    
    quiz.innerHTML = `
        <h2>${currentQuizData.question}</h2>

        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}
        </label>
    `;
}
 

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer;
    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.value;
        }
    });
    return answer;
}

submitButton.addEventListener("click", () => {
    const answer = getSelectedAnswer();
    if (answer === quizData[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
    } else {
        result.innerHTML = `You scored ${score} out of ${quizData.length}!`;
        quiz.style.display = "none";
        submitButton.style.display = "none";
    }
});

loadQuiz();
