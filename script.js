document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "Qual é a capital do Brasil?",
            options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
            answer: "Brasília"
        },
        {
            question: "Quem pintou a Mona Lisa?",
            options: ["Michelangelo", "Leonardo da Vinci", "Van Gogh", "Pablo Picasso"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "Qual é o maior planeta do sistema solar?",
            options: ["Terra", "Júpiter", "Saturno", "Marte"],
            answer: "Júpiter"
        }
    ];

    const questionContainer = document.getElementById("question-container");
    const nextButton = document.createElement("button");
    nextButton.id = "next-button";
    nextButton.textContent = "Próxima";
    document.body.appendChild(nextButton);

    let currentQuestionIndex = 0;

    function showQuestion() {
        questionContainer.innerHTML = "";
        const currentQuestion = questions[currentQuestionIndex];

        const questionEl = document.createElement("p");
        questionEl.className = "question";
        questionEl.textContent = currentQuestion.question;
        questionContainer.appendChild(questionEl);

        const optionsList = document.createElement("ul");
        optionsList.className = "options";

        currentQuestion.options.forEach(optionText => {
            const optionEl = document.createElement("li");
            optionEl.className = "option";
            optionEl.textContent = optionText;
            optionEl.addEventListener("click", () => selectOption(optionEl, currentQuestion.answer));
            optionsList.appendChild(optionEl);
        });

        questionContainer.appendChild(optionsList);
        nextButton.style.display = "none";
    }

    function selectOption(selectedOption, correctAnswer) {
        const options = document.querySelectorAll(".option");

        options.forEach(option => {
            option.classList.remove("correct", "incorrect");
            option.style.pointerEvents = "none";
            if (option.textContent === correctAnswer) {
                option.classList.add("correct");
            } else if (option === selectedOption) {
                option.classList.add("incorrect");
            }
        });

        nextButton.style.display = "inline-block";
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showFinalMessage();
        }
    });

    function showFinalMessage() {
        questionContainer.innerHTML = "<h2>Você concluiu o quiz! 🎉</h2>";
        nextButton.style.display = "none";
    }

    showQuestion();
});
