const door01 = {

    number: 1,

    name: "ACCESS TERMINAL",

    briefing:
        "Acabas de entrar. La salida está bloqueada. Completa el nivel para avanzar.",

    digits: ["4", "7", "2"],

    code: "472",

    challengeA: {

        name: "LEVEL 01",

        questions: [

            {
                q: "She ___ to school every day.",
                answers: ["go", "goes", "going"],
                correct: 1
            },

            {
                q: "My father ___ in an office.",
                answers: ["work", "works", "working"],
                correct: 1
            },

            {
                q: "We ___ English on Mondays.",
                answers: ["study", "studies", "studying"],
                correct: 0
            },

            {
                q: "Tom ___ homework after school.",
                answers: ["do", "does", "doing"],
                correct: 1
            },

            {
                q: "I ___ science every week.",
                answers: ["have", "has", "having"],
                correct: 0
            },

            {
                q: "My friends ___ football after class.",
                answers: ["plays", "play", "playing"],
                correct: 1
            },

            {
                q: "The teacher ___ geography.",
                answers: ["teach", "teaches", "teaching"],
                correct: 1
            },

            {
                q: "We ___ in a classroom.",
                answers: ["learn", "learns", "learning"],
                correct: 0
            },

            {
                q: "My brother ___ maths.",
                answers: ["like", "likes", "liking"],
                correct: 1
            },

            {
                q: "Students ___ exams.",
                answers: ["take", "takes", "taking"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "SCHOOL DATABASE RECOVERY",

        questions: [

            { spanish: "AULA", english: "classroom" },
            { spanish: "MESA", english: "desk" },
            { spanish: "DICCIONARIO", english: "dictionary" },
            { spanish: "REGLA", english: "ruler" },
            { spanish: "PEGAMENTO", english: "glue" },
            { spanish: "TIJERAS", english: "scissors" },
            { spanish: "ESTANTERÍA", english: "shelf" },
            { spanish: "DEBERES", english: "homework" },
            { spanish: "EXAMEN", english: "exam" },
            { spanish: "CIENCIAS", english: "science" }

        ]

    },

    challengeC: {

        name: "SECURITY REPORT",

        readingText: `

Tom is eleven years old.

He goes to Green School.

His favourite subject is science.

He has English on Monday and Wednesday.

After school he usually does his homework.

On Fridays he plays football with his friends.

Tom likes school because he learns new things every day.

`,

        questions: [

            {
                q: "Does Tom have English on Friday?",
                answers: ["Yes", "No", "Not mentioned"],
                correct: 1
            },

            {
                q: "How many days per week does Tom have English?",
                answers: ["1", "2", "3"],
                correct: 1
            },

            {
                q: "Which subject would Tom probably choose first?",
                answers: ["Maths", "Science", "History"],
                correct: 1
            },

            {
                q: "Tom plays football after school every day.",
                answers: ["True", "False", "Not mentioned"],
                correct: 1
            },

            {
                q: "Which statement is correct?",
                answers: [
                    "Tom studies at Green School",
                    "Tom studies at Blue School",
                    "Tom studies at Red School"
                ],
                correct: 0
            },

            {
                q: "Why does Tom enjoy school?",
                answers: [
                    "Because he learns new things",
                    "Because he gets presents",
                    "Because he finishes early"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about Tom?",
                answers: [
                    "He dislikes studying",
                    "He enjoys learning",
                    "He never does homework"
                ],
                correct: 1
            },

            {
                q: "Which statement is NOT supported by the report?",
                answers: [
                    "Tom plays football",
                    "Tom has English twice a week",
                    "Tom studies history every day"
                ],
                correct: 2
            }

        ]

    }

};