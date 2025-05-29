// Quiz data
const questions = [
    {
        id: '1',
        question: 'Which command is used to initialize a new Git repository?',
        answers: [
            { id: 'a', text: 'git start', isCorrect: false },
            { id: 'b', text: 'git init', isCorrect: true },
            { id: 'c', text: 'git create', isCorrect: false },
            { id: 'd', text: 'git new', isCorrect: false }
        ],
        explanation: 'git init creates a new Git repository in the current directory.'
    },
    {
        id: '2',
        question: 'What does the "ls -la" command do in Linux?',
        answers: [
            { id: 'a', text: 'Lists files with detailed information including hidden files', isCorrect: true },
            { id: 'b', text: 'Lists only directories', isCorrect: false },
            { id: 'c', text: 'Lists files in alphabetical order', isCorrect: false },
            { id: 'd', text: 'Lists large files only', isCorrect: false }
        ],
        explanation: 'ls -la shows all files (including hidden ones starting with .) in long format with detailed information.'
    },
    {
        id: '3',
        question: 'Which command moves you to the home directory in bash/zsh?',
        answers: [
            { id: 'a', text: 'cd ~', isCorrect: true },
            { id: 'b', text: 'cd home', isCorrect: false },
            { id: 'c', text: 'cd /home', isCorrect: false },
            { id: 'd', text: 'cd back', isCorrect: false }
        ],
        explanation: 'cd ~ or just cd without arguments will take you to your home directory.'
    },
    {
        id: '4',
        question: 'What does "git status" show you?',
        answers: [
            { id: 'a', text: 'The current branch and working directory status', isCorrect: true },
            { id: 'b', text: 'The commit history', isCorrect: false },
            { id: 'c', text: 'Remote repository information', isCorrect: false },
            { id: 'd', text: 'User configuration', isCorrect: false }
        ],
        explanation: 'git status shows the current branch, staged changes, unstaged changes, and untracked files.'
    },
    {
        id: '5',
        question: 'Which command is used to create a new directory in Linux?',
        answers: [
            { id: 'a', text: 'create dir', isCorrect: false },
            { id: 'b', text: 'mkdir', isCorrect: true },
            { id: 'c', text: 'new folder', isCorrect: false },
            { id: 'd', text: 'make dir', isCorrect: false }
        ],
        explanation: 'mkdir (make directory) creates new directories in Linux/Unix systems.'
    },
    {
        id: '6',
        question: 'What does "git add ." do?',
        answers: [
            { id: 'a', text: 'Adds all changes in current directory to staging area', isCorrect: true },
            { id: 'b', text: 'Adds a single file to staging area', isCorrect: false },
            { id: 'c', text: 'Adds changes to the previous commit', isCorrect: false },
            { id: 'd', text: 'Adds files to the repository', isCorrect: false }
        ],
        explanation: 'git add . stages all changes (new, modified, deleted files) in the current directory and subdirectories.'
    },
    {
        id: '7',
        question: 'Which command displays the current working directory?',
        answers: [
            { id: 'a', text: 'cwd', isCorrect: false },
            { id: 'b', text: 'pwd', isCorrect: true },
            { id: 'c', text: 'dir', isCorrect: false },
            { id: 'd', text: 'path', isCorrect: false }
        ],
        explanation: 'pwd (print working directory) shows the full path of your current location in the filesystem.'
    },
    {
        id: '8',
        question: 'What is the difference between bash and zsh?',
        answers: [
            { id: 'a', text: 'zsh has better autocompletion and customization features', isCorrect: true },
            { id: 'b', text: 'bash is newer than zsh', isCorrect: false },
            { id: 'c', text: 'zsh only works on macOS', isCorrect: false },
            { id: 'd', text: 'There is no difference', isCorrect: false }
        ],
        explanation: 'zsh (Z shell) offers enhanced features like better tab completion, themes, plugins, and improved scripting capabilities compared to bash.'
    },
    {
        id: '9',
        question: 'Which command removes a file in Linux?',
        answers: [
            { id: 'a', text: 'delete', isCorrect: false },
            { id: 'b', text: 'remove', isCorrect: false },
            { id: 'c', text: 'rm', isCorrect: true },
            { id: 'd', text: 'del', isCorrect: false }
        ],
        explanation: 'rm (remove) deletes files and directories in Linux. Use rm -r for directories and rm -f to force deletion.'
    },
    {
        id: '10',
        question: 'What does "git clone" do?',
        answers: [
            { id: 'a', text: 'Creates a copy of a remote repository locally', isCorrect: true },
            { id: 'b', text: 'Creates a new branch', isCorrect: false },
            { id: 'c', text: 'Copies files between directories', isCorrect: false },
            { id: 'd', text: 'Duplicates the current repository', isCorrect: false }
        ],
        explanation: 'git clone downloads a complete copy of a remote repository to your local machine, including all history and branches.'
    }
];

// Game state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedAnswer = null;
let showingFeedback = false;

// DOM elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

// Quiz elements
const progressText = document.getElementById('progress-text');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const explanation = document.getElementById('explanation');
const explanationText = document.getElementById('explanation-text');

// Results elements
const scoreMessage = document.getElementById('score-message');
const correctCount = document.getElementById('correct-count');
const scorePercent = document.getElementById('score-percent');
const resultsDetails = document.getElementById('results-details');

// Event listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);

// Initialize app
function init() {
    showScreen('welcome');
}

// Screen management
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });

    const targetScreen = document.getElementById(`${screenName}-screen`);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Start quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedAnswer = null;
    showingFeedback = false;

    showScreen('quiz');
    displayQuestion();
}

// Display current question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

    // Update progress
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    progressPercent.textContent = `${Math.round(progressPercentage)}% Complete`;
    progressFill.style.width = `${progressPercentage}%`;

    // Update question
    questionText.textContent = question.question;

    // Clear and populate answers
    answersContainer.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.innerHTML = `<span>${answer.text}</span>`;
        button.addEventListener('click', () => selectAnswer(answer.id));
        answersContainer.appendChild(button);
    });

    // Hide explanation
    explanation.classList.add('hidden');
    selectedAnswer = null;
    showingFeedback = false;
}

// Handle answer selection
function selectAnswer(answerId) {
    if (showingFeedback) return;

    selectedAnswer = answerId;
    showingFeedback = true;

    const question = questions[currentQuestionIndex];
    const selectedAnswerObj = question.answers.find(answer => answer.id === answerId);
    const correctAnswer = question.answers.find(answer => answer.isCorrect);

    // Update button styles
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    buttons.forEach((button, index) => {
        const answer = question.answers[index];
        button.classList.add('disabled');

        if (answer.id === selectedAnswer) {
            if (answer.isCorrect) {
                button.classList.add('correct');
                button.innerHTML += '<span class="status-icon">✅</span>';
            } else {
                button.classList.add('incorrect');
                button.innerHTML += '<span class="status-icon">❌</span>';
            }
        } else if (answer.isCorrect) {
            button.classList.add('correct');
            button.innerHTML += '<span class="status-icon">✅</span>';
        }
    });

    // Show explanation
    explanationText.textContent = question.explanation;
    explanation.classList.remove('hidden');

    // Update score and answers
    if (selectedAnswerObj?.isCorrect) {
        score++;
    }
    userAnswers.push(answerId);

    // Move to next question after delay
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            showResults();
        }
    }, 2500);
}

// Show results
function showResults() {
    const percentage = Math.round((score / questions.length) * 100);

    // Update score display
    correctCount.textContent = score;
    scorePercent.textContent = `${percentage}%`;

    // Set score message and color
    let message, messageClass;
    if (percentage >= 90) {
        message = "Terminal Master! 🚀";
        messageClass = "excellent";
    } else if (percentage >= 80) {
        message = "Command Line Expert! 💻";
        messageClass = "good";
    } else if (percentage >= 70) {
        message = "Good Job! 👍";
        messageClass = "average";
    } else if (percentage >= 60) {
        message = "Keep Learning! 📚";
        messageClass = "poor";
    } else {
        message = "Practice More! 💪";
        messageClass = "fail";
    }

    scoreMessage.textContent = message;
    scoreMessage.className = `score-message ${messageClass}`;

    // Generate detailed results
    resultsDetails.innerHTML = '';
    questions.forEach((question, index) => {
        const userAnswerId = userAnswers[index];
        const userAnswer = question.answers.find(answer => answer.id === userAnswerId);
        const correctAnswer = question.answers.find(answer => answer.isCorrect);
        const isCorrect = userAnswer?.isCorrect || false;

        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        resultItem.innerHTML = `
            <div class="result-header">
                <div class="result-question">${index + 1}. ${question.question}</div>
                <div class="result-status">${isCorrect ? '✅' : '❌'}</div>
            </div>
            <div class="result-answers">
                <div class="user-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    Your answer: ${userAnswer?.text}
                </div>
                ${!isCorrect ? `<div class="correct-answer">Correct answer: ${correctAnswer?.text}</div>` : ''}
            </div>
            <div class="result-explanation">
                <div class="explanation-label">Explanation:</div>
                <div class="explanation-text">${question.explanation}</div>
            </div>
        `;

        resultsDetails.appendChild(resultItem);
    });

    showScreen('results');
}

// Restart quiz
function restartQuiz() {
    showScreen('welcome');
}

// Initialize the app
init();

