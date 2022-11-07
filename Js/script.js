//  Constructor object for Html elements(Ui file)
let quiz = new Quiz(questions);
let ui = new UI();

// Icon Assign a value
let correctIcon = `<img class="cancel-icon" src="Images/tick-icon.svg" alt="CancelIcon">`;
let incorrectIcon = `<img class="cancel-icon" src="Images/close-line-icon.svg" alt="CancelIcon">`;


addEventListeners();

// ---------------------EventListeners 
function addEventListeners() {
    // Click start button 
    ui.btn_start.addEventListener("click", function (e) {

        //  Set time every question
        timerForAnswers(10);
        //  Hide start button and Display quiz card
        displayQuizCard();

        // Display quiz on screen
        displayQuiz(quiz.getQuestion());

        // Display question order
        displayScore(quiz.questionIndex + 1, quiz.questions.length);


        e.preventDefault();
    })

    // Click Restart button 
    ui.btn_restart.addEventListener("click", () => {
        window.location.reload();
    })
    // Click Next Question button
    ui.question_next.addEventListener("click", () => {
        // Condition 
        if (quiz.questions.length != quiz.questionIndex + 1) {

            // Increase index for next question
            quiz.questionIndex++;
            // Clear Time
            clearInterval(myTimerInterval);
            // Set new time for question
            timerForAnswers(10);

            // // Display quiz on screen
            displayQuiz(quiz.getQuestion());

            displayScore(quiz.questionIndex + 1, quiz.questions.length);

            ui.quiz_exit.classList.add("show");
        } else {
            // Clear Time
            clearInterval(myTimerInterval);
            //    Show score card
            scoreCard();
        }
        // Change color next question
        ui.body_.classList.remove('trueAnswer');
        ui.body_.classList.remove('wrongAnswer');
    });
    // Click Exit button
    ui.quiz_exit.addEventListener("click", scoreCard);
}
//---------------------Hide start button and Display quiz card
function displayQuizCard() {

    // Hide start button
    ui.btn_start.classList.add('d-none');

    // Show quiz card
    ui.quiz_card.classList.add("active");

    ui.question_next.classList.remove("show");
}
//-----------------------Display quiz on screen
function displayQuiz(questions) {

    let question = `<p id="question-content">${questions.title}</p> `;

    let option = '';

    for (let sual in questions.answers) {
        option += `
        <button id="option" class="optionBtn col-5 d-flex justify-content-between align-items-center">
        <span id="option-var"> <b>${sual}</b> : ${questions.answers[sual]}</span>
        </button>`
    }
    // Display question
    ui.question_content.innerHTML = question;
    // Display answers
    ui.answer_list.innerHTML = option;

    // Select answer buttons
    answerBtn();
}



function answerBtn() {

    let btnList = ui.answer_list.querySelectorAll(".optionBtn");
    for (let btn of btnList) {

        btn.setAttribute("onclick", "controlAnswer(this)");
    }

};

// Control : user select  true or false answer
function controlAnswer(b) {

    // Get variants from answers
    let cavab = b.querySelector("span b").textContent;

    // Dublicate question
    let sual = quiz.getQuestion();

    // Condition true or false variant
    if (sual.findTrue(cavab)) {
        // Change background color for true 
        ui.body_.classList.add("trueAnswer");

        // Change button color for true
        b.classList.add("trueAnswer");

        //   Put true icon
        b.insertAdjacentHTML("beforeend", correctIcon);
        // Answer score increase
        quiz.questionScore++;
    } else {
        // Change background color for wrong 
        ui.body_.classList.add("wrongAnswer");

        // Change button color for wrong
        b.classList.add("wrongAnswer");

        //   Put wrong icon
        b.insertAdjacentHTML('beforeend', incorrectIcon);
    }

    // Turn off click other buttons
    disabledBtn();
    clearInterval(myTimerInterval);

    ui.question_next.classList.add("show");

};
//Turn off other buttons 
function disabledBtn() {

    for (let i = 0; i < ui.answer_list.children.length; i++) {
        ui.answer_list.children[i].classList.add("disabled");
    }
};
// Display Score on card header
function displayScore(whichQuestion, totalQuestion) {

    let tag = `${whichQuestion} / ${totalQuestion}`;
    console.log(tag);
    ui.quiz_header_score.textContent = tag;
}

// Display score card
function scoreCard() {
    // Hide quiz card
    ui.quiz_card.classList.add('d-none');
    // Show total score
    ui.card_totalPoints.classList.remove("d-none");

    ui.body_.className = "";

    totalAnswersScore(quiz.questionScore);

}
// Total Answers after exit button
function totalAnswersScore(score) {
    let tag = `<p class=" mb-0 tt-p-content ">You answered <span class="score"> ${score}</span> true question(s)</p>`;
    ui.card_totalScore.innerHTML = tag;
}

let myTimerInterval;

// Timer for questions
function timerForAnswers(time) {

    let zaman = time;
    ui.quiz_header_timer_content.textContent = "Time :"
    myTimerInterval = setInterval(setTimeInterval, 1000);

    function setTimeInterval() {

        ui.quiz_header_timer.textContent = zaman;

        zaman--;

        // When time is end
        isTimeOver(zaman);
    }
};

function isTimeOver(time) {

    if (time < 0) {

        // Stop timer 
        clearInterval(myTimerInterval);

        // Change text when time is end
        ui.quiz_header_timer_content.textContent = `Time is Over :`;
        // Show "Next Button" when time is end
        ui.question_next.classList.add("show");

        //.............AutoFind true variant
        let cavab = quiz.getQuestion().trueVariant;

        // All button select and find true variant
        for (let option of ui.answer_list.children) {

            if (option.querySelector("span b").textContent == cavab) {

                // Change button color for true
                option.classList.add("trueAnswer");

                //   Put true icon
                option.insertAdjacentHTML("beforeend", correctIcon);

                // Turn off other buttons
                disabledBtn();
            }
        }
    }
}