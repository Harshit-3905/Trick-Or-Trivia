const quiz = [
  {
    question:
      "What is the traditional Halloween practice of dressing up in costumes called?",
    optionA: "Harvesting",
    optionB: "Costume Carnival",
    optionC: "Trick-or-Treating",
    optionD: "Masquerade",
    correctOption: "Masquerade",
  },
  {
    question:
      "Which vegetable is commonly carved into lanterns for Halloween, often with scary faces?",
    optionA: "Watermelon",
    optionB: "Turnip",
    optionC: "Butternut Squash",
    optionD: "Pumpkin",
    correctOption: "Pumpkin",
  },
  {
    question:
      "In Irish folklore, Halloween is believed to be the night when the boundary between the living and the dead is blurred. What is this night called?",
    optionA: "All Saints' Day",
    optionB: "Day of the Dead",
    optionC: "Samhain",
    optionD: "Ghost Night",
    correctOption: "Samhain",
  },
  {
    question:
      "What candy is often associated with Halloween and is given to trick-or-treaters?",
    optionA: "Candy Canes",
    optionB: "Chocolate Easter Eggs",
    optionC: "Candy Corn",
    optionD: "Lollipops",
    correctOption: "Candy Corn",
  },
  {
    question:
      "In Mexico, a colorful and festive holiday is celebrated around the same time as Halloween. What is this holiday called?",
    optionA: "Cinco de Mayo",
    optionB: "Dia de los Muertos",
    optionC: "Fiesta de Halloween",
    optionD: "Carnival de los Fantasmas",
    correctOption: "Dia de los Muertos",
  },
];
let index = 0;
let score = 0;
let question = document.querySelector(".question");
let optionA = document.querySelector(".optionA");
let optionB = document.querySelector(".optionB");
let optionC = document.querySelector(".optionC");
let optionD = document.querySelector(".optionD");

question.innerHTML = quiz[index].question;
optionA.innerHTML = quiz[index].optionA;
optionB.innerHTML = quiz[index].optionB;
optionC.innerHTML = quiz[index].optionC;
optionD.innerHTML = quiz[index].optionD;

let option = document.querySelectorAll(".option");
option.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.innerHTML === quiz[index].correctOption) {
      option.classList.add("correct");
      score++;
    } else {
      option.classList.add("wrong");
    }
    setTimeout(() => {
      option.classList.remove("correct");
      option.classList.remove("wrong");
      index++;
      if (index < quiz.length) {
        question.innerHTML = quiz[index].question;
        optionA.innerHTML = quiz[index].optionA;
        optionB.innerHTML = quiz[index].optionB;
        optionC.innerHTML = quiz[index].optionC;
        optionD.innerHTML = quiz[index].optionD;
      } else {
        document.querySelector(".quizsection").innerHTML = `
        <h2>You answered ${score}/${quiz.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
        `;
      }
    }, 1000);
  });
});
