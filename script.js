let answers = []
let questions = [
    'Ismingiz yozing',
    'Telefon raqamiz',
    'Yoshingiz nechchida',
]

for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i])
}
console.log(answers)