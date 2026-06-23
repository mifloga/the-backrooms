const door09 = {

    number: 9,

    name: "LEVEL 09",

    briefing:
        "Has encontrado una puerta con mensajes extraños en las paredes. La siguiente puerta sigue bloqueada. Completa el nivel para avanzar.",

    digits: ["5", "7", "1"],

    code: "571",

    challengeA: {

        name: "LEVEL 09",

        questions: [

            {
                q: "___ is your favourite sport?",
                answers: ["Where", "What", "When"],
                correct: 0
            },

            {
                q: "___ do you usually train?",
                answers: ["What", "Where", "Who"],
                correct: 1
            },

            {
                q: "___ is that person standing near the door?",
                answers: ["Who", "When", "Where"],
                correct: 0
            },

            {
                q: "___ do the lights turn off every evening?",
                answers: ["Who", "What", "When"],
                correct: 2
            },

            {
                q: "___ are you carrying that box?",
                answers: ["Why", "Who", "Where"],
                correct: 0
            },

            {
                q: "___ is the control room located?",
                answers: ["What", "Where", "When"],
                correct: 1
            },

            {
                q: "___ do you need to complete the challenge?",
                answers: ["What", "Who", "Why"],
                correct: 0
            },

            {
                q: "___ helps new trainees understand the rules?",
                answers: ["Where", "When", "Who"],
                correct: 2
            },

            {
                q: "___ are the emergency exits marked in red?",
                answers: ["Why", "What", "Where"],
                correct: 0
            },

            {
                q: "___ do you check the activity logs?",
                answers: ["When", "Who", "Where"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "FOUNDATION REVIEW",

        questions: [

            { spanish: "PROFESOR", english: "teacher" },
            { spanish: "SALÓN", english: "living room" },
            { spanish: "TÍA", english: "aunt" },
            { spanish: "TENIS", english: "tennis" },
            { spanish: "QUESO", english: "cheese" },
            { spanish: "ESTUDIANTE", english: "student" },
            { spanish: "BAÑO", english: "bathroom" },
            { spanish: "PADRE", english: "father" },
            { spanish: "BALONCESTO", english: "basketball" },
            { spanish: "AGUA", english: "water" }

        ]

    },

    challengeC: {

        name: "INTERVIEW FILE",

        readingText: `

INTERVIEW FILE

Three trainees were questioned after successfully completing an exploration mission.

Alex explained how he studied maps before entering unfamiliar areas. He believed good preparation reduced mistakes.

Mia preferred observing her surroundings carefully. She often noticed details that other trainees missed.

Ryan focused on communicating with the team. During difficult situations, he shared information and helped coordinate decisions.

The interviewer concluded that each trainee contributed in a different way. One relied on preparation, one on observation, and one on communication. Together, these strengths helped the mission succeed.

`,

        questions: [

            {
                q: "Who relied most on preparation?",
                answers: [
                    "Ryan",
                    "Alex",
                    "Mia"
                ],
                correct: 1
            },

            {
                q: "Who was most likely to notice a small clue?",
                answers: [
                    "Mia",
                    "Ryan",
                    "Alex"
                ],
                correct: 0
            },

            {
                q: "Who seems strongest at keeping a team informed?",
                answers: [
                    "Alex",
                    "Mia",
                    "Ryan"
                ],
                correct: 2
            },

            {
                q: "What can we conclude about Alex?",
                answers: [
                    "He values planning",
                    "He dislikes maps",
                    "He prefers working alone"
                ],
                correct: 0
            },

            {
                q: "Why was Mia useful during missions?",
                answers: [
                    "She coordinated the team",
                    "She noticed important details",
                    "She created mission maps"
                ],
                correct: 1
            },

            {
                q: "What was Ryan's main strength?",
                answers: [
                    "Observation",
                    "Preparation",
                    "Communication"
                ],
                correct: 2
            },

            {
                q: "What is the main idea of the interview?",
                answers: [
                    "Different strengths helped the mission succeed",
                    "Only one trainee was successful",
                    "The mission was cancelled"
                ],
                correct: 0
            },

            {
                q: "Which statement is supported by the file?",
                answers: [
                    "All trainees used the same strategy",
                    "Each trainee contributed differently",
                    "Nobody worked together"
                ],
                correct: 1
            }

        ]

    }

};