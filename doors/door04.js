const door04 = {

    number: 4,

    name: "IDENTITY DATABASE",

    briefing:
        "Has visto una sombra. No quieres quedarte aquí. Completa el nivel para avanzar.",

    digits: ["7", "3", "9"],

    code: "739",

    challengeA: {

        name: "LEVEL 04",

        questions: [

            {
                q: "Sarah has a laptop. ___ laptop is new.",
                answers: ["His", "Her", "Our"],
                correct: 1
            },

            {
                q: "Tom and I are in the control room. ___ mission starts now.",
                answers: ["Our", "Their", "His"],
                correct: 0
            },

            {
                q: "The robot has a code. ___ code is encrypted.",
                answers: ["Our", "Her", "Its"],
                correct: 2
            },

            {
                q: "Jack has a keycard. ___ keycard is missing.",
                answers: ["His", "Their", "Your"],
                correct: 0
            },

            {
                q: "My sister and I have a puzzle map. ___ map is complete.",
                answers: ["Their", "Our", "His"],
                correct: 1
            },

            {
                q: "The players finished the level. ___ score is excellent.",
                answers: ["Its", "His", "Their"],
                correct: 2
            },

            {
                q: "You have a mission file. ___ file is on the desk.",
                answers: ["Your", "Our", "Their"],
                correct: 0
            },

            {
                q: "Emma has a chess board. ___ chess board is in the archive.",
                answers: ["Our", "Her", "Your"],
                correct: 1
            },

            {
                q: "The drone lost ___ signal.",
                answers: ["Its", "His", "Our"],
                correct: 0
            },

            {
                q: "We entered the vault. ___ access code worked.",
                answers: ["Their", "His", "Our"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "FAMILY DATABASE",

        questions: [

            { spanish: "MADRE", english: "mother" },
            { spanish: "PADRE", english: "father" },
            { spanish: "HERMANO", english: "brother" },
            { spanish: "HERMANA", english: "sister" },
            { spanish: "ABUELO", english: "grandfather" },
            { spanish: "ABUELA", english: "grandmother" },
            { spanish: "TÍO", english: "uncle" },
            { spanish: "TÍA", english: "aunt" },
            { spanish: "PRIMO", english: "cousin" },
            { spanish: "BEBÉ", english: "baby" }

        ]

    },

    challengeC: {

        name: "PERSONNEL FILE ANALYSIS",

        readingText: `

PERSONNEL FILE REPORT

Three trainees are registered in the Puzzle Facility.

Leo is the youngest trainee. He spends most of his time solving logic puzzles and usually finishes missions quickly.

Mia prefers chess challenges. She often helps other trainees when they get stuck and rarely leaves a task unfinished.

Ryan enjoys exploring new training zones. He has visited more areas than the other two trainees, but he sometimes forgets important details.

Last week, a difficult mission was completed successfully. The report says that one trainee solved the final puzzle, another provided useful advice, and another discovered a hidden route. No trainee worked alone during the mission.

`,

        questions: [

            {
                q: "Who is most likely to help a teammate with a difficult puzzle?",
                answers: [
                    "Ryan",
                    "Mia",
                    "Leo"
                ],
                correct: 1
            },

            {
                q: "Why might Ryan make more mistakes than the others?",
                answers: [
                    "He forgets important details",
                    "He dislikes missions",
                    "He avoids training zones"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about Leo?",
                answers: [
                    "He is older than Mia",
                    "He dislikes puzzles",
                    "He is good at solving challenges"
                ],
                correct: 2
            },

            {
                q: "Which trainee probably discovered the hidden route?",
                answers: [
                    "Ryan",
                    "Leo",
                    "Mia"
                ],
                correct: 0
            },

            {
                q: "What is suggested about the successful mission?",
                answers: [
                    "Only one trainee worked on it",
                    "Teamwork was important",
                    "The mission was easy"
                ],
                correct: 1
            },

            {
                q: "Who would most likely give useful advice during a mission?",
                answers: [
                    "Ryan",
                    "Leo",
                    "Mia"
                ],
                correct: 2
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "Ryan has explored many areas",
                    "Leo rarely completes missions",
                    "Mia dislikes chess"
                ],
                correct: 0
            },

            {
                q: "Who probably solved the final puzzle?",
                answers: [
                    "Mia",
                    "Leo",
                    "Ryan"
                ],
                correct: 1
            }

        ]

    }

};