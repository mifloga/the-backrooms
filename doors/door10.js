const door10 = {

    number: 10,

    name: "LEVEL 10",

    briefing:
        "Has llegado a una intersección de corredores vacíos. La siguiente puerta sigue bloqueada. Completa el nivel para avanzar.",

    digits: ["8", "5", "3"],

    code: "853",

    challengeA: {

        name: "LEVEL 10",

        questions: [

            {
                q: "My brother is in the classroom. ___ is studying English.",
                answers: ["He", "She", "They"],
                correct: 0
            },

            {
                q: "There ___ two computers in the control room.",
                answers: ["is", "are", "am"],
                correct: 1
            },

            {
                q: "The map is ___ the table.",
                answers: ["under", "between", "on"],
                correct: 2
            },

            {
                q: "This is Emma's notebook. It is ___.",
                answers: ["hers", "his", "ours"],
                correct: 0
            },

            {
                q: "We ___ train in the puzzle room after school.",
				answers: ["never", "often", "always"],
				correct: 1
            },

            {
                q: "Is there ___ water in the bottle?",
                answers: ["some", "many", "any"],
                correct: 2
            },

            {
                q: "How ___ chairs are in the room?",
                answers: ["many", "much", "some"],
                correct: 0
            },

            {
                q: "___ is the emergency exit?",
                answers: ["Who", "When", "Where"],
                correct: 2
            },

            {
                q: "Those access cards belong to us. They are ___.",
                answers: ["ours", "theirs", "hers"],
                correct: 0
            },

            {
                q: "The trainees ___ check the instructions before entering.",
                answers: ["always", "never", "any"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "FOUNDATION REVIEW",

        questions: [

            { spanish: "ESCUELA", english: "school" },
            { spanish: "COCINA", english: "kitchen" },
            { spanish: "MADRE", english: "mother" },
            { spanish: "FÚTBOL", english: "football" },
            { spanish: "PAN", english: "bread" },
            { spanish: "BIBLIOTECA", english: "library" },
            { spanish: "ABUELO", english: "grandfather" },
            { spanish: "NATACIÓN", english: "swimming" },
            { spanish: "LECHE", english: "milk" },
            { spanish: "AULA", english: "classroom" }

        ]

    },

    challengeC: {

        name: "INVESTIGATION REPORT",

        readingText: `

INVESTIGATION REPORT

A team explored several sections of the facility before reaching a locked gate.

Sophie studied maps and previous reports before every decision. Her preparation helped the group avoid unnecessary mistakes.

Jake moved through different rooms and checked every area carefully. He discovered useful information that others had overlooked.

Mason communicated with the rest of the team and shared updates whenever conditions changed. His messages helped everyone stay coordinated.

The final report states that planning, observation and communication were all important. No single trainee could have completed the mission alone. The team's success depended on combining different strengths.

`,

        questions: [

            {
                q: "Who relied most on preparation?",
                answers: [
                    "Jake",
                    "Mason",
                    "Sophie"
                ],
                correct: 2
            },

            {
                q: "Who was most likely to discover a hidden clue?",
                answers: [
                    "Jake",
                    "Sophie",
                    "Mason"
                ],
                correct: 0
            },

            {
                q: "Who helped the team stay coordinated?",
                answers: [
                    "Sophie",
                    "Jake",
                    "Mason"
                ],
                correct: 2
            },

            {
                q: "What can we conclude about Sophie?",
                answers: [
                    "She values preparation",
                    "She dislikes reports",
                    "She avoids planning"
                ],
                correct: 0
            },

            {
                q: "Why was Jake useful during the mission?",
                answers: [
                    "He communicated with headquarters",
                    "He noticed important information",
                    "He created new maps"
                ],
                correct: 1
            },

            {
                q: "What was Mason's main contribution?",
                answers: [
                    "Finding clues",
                    "Studying reports",
                    "Sharing information"
                ],
                correct: 2
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "Different strengths helped the team succeed",
                    "Only one trainee completed the mission",
                    "The gate remained closed forever"
                ],
                correct: 0
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "The mission required teamwork",
                    "Observation was unnecessary",
                    "Only planning mattered"
                ],
                correct: 0
            }

        ]

    }

};