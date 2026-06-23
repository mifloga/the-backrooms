const door06 = {

    number: 6,

    name: "LEVEL 06",

    briefing:
        "Has oído pasos al final del corredor. La siguiente puerta sigue bloqueada. Completa el nivel para avanzar.",

    digits: ["7", "2", "5"],

    code: "725",

    challengeA: {

        name: "LEVEL 06",

        questions: [

            {
                q: "Agent Mia ___ checks the corridor before entering a new room.",
                answers: ["always", "never", "sometimes"],
                correct: 0
            },

            {
                q: "The explorer ___ gets lost because he studies every map carefully.",
                answers: ["sometimes", "usually", "never"],
                correct: 2
            },

            {
                q: "We ___ train in the puzzle room on Fridays.",
                answers: ["never", "always", "often"],
                correct: 1
            },

            {
                q: "Tom ___ arrives late, but not every day.",
                answers: ["often", "always", "never"],
                correct: 0
            },

            {
                q: "The team ___ uses the emergency route because it is only needed occasionally.",
                answers: ["always", "sometimes", "never"],
                correct: 1
            },

            {
                q: "Sarah ___ forgets her access card. It happens many times.",
                answers: ["never", "always", "often"],
                correct: 2
            },

            {
                q: "I ___ read the instructions before starting a challenge.",
                answers: ["always", "never", "sometimes"],
                correct: 0
            },

            {
                 q: "The robot ___ makes mistakes. Its results are usually correct.",
				answers: ["sometimes", "often", "always"],
				correct: 0
            },

            {
                q: "The lights ___ go out during inspections. It is very rare.",
                answers: ["always", "never", "sometimes"],
                correct: 2
            },

            {
                q: "We ___ meet in the training room after school.",
                answers: ["often", "never", "always"],
                correct: 0
            }

        ]

    },

    challengeB: {

        name: "ACTIVITY RECORDS",

        questions: [

            { spanish: "FÚTBOL", english: "football" },
            { spanish: "BALONCESTO", english: "basketball" },
            { spanish: "TENIS", english: "tennis" },
            { spanish: "NATACIÓN", english: "swimming" },
            { spanish: "CICLISMO", english: "cycling" },
            { spanish: "CORRER", english: "running" },
            { spanish: "AJEDREZ", english: "chess" },
            { spanish: "VOLEIBOL", english: "volleyball" },
            { spanish: "BÉISBOL", english: "baseball" },
            { spanish: "HOCKEY", english: "hockey" }

        ]

    },

    challengeC: {

        name: "ACTIVITY LOG ANALYSIS",

        readingText: `

ACTIVITY LOG REPORT

Several trainees used the facility this week.

Leo spent most of his time playing chess and solving strategy puzzles. He preferred thinking carefully before making decisions.

Maya trained in running and cycling. She moved quickly between different areas and usually finished activities before everyone else.

Noah joined football and basketball sessions. He enjoyed team activities and often helped new trainees understand the rules.

At the end of the week, one trainee completed the most physical activities, one showed the strongest teamwork, and one demonstrated the best planning skills. The log suggests that each trainee had different strengths that helped the group.

`,

        questions: [

            {
                q: "Who most likely demonstrated the best planning skills?",
                answers: [
                    "Maya",
                    "Leo",
                    "Noah"
                ],
                correct: 1
            },

            {
                q: "Who probably completed the most physical activities?",
                answers: [
                    "Noah",
                    "Leo",
                    "Maya"
                ],
                correct: 2
            },

            {
                q: "Who seems most likely to help a new player join a team?",
                answers: [
                    "Noah",
                    "Maya",
                    "Leo"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about Leo?",
                answers: [
                    "He prefers careful thinking",
                    "He enjoys running races",
                    "He dislikes puzzles"
                ],
                correct: 0
            },

            {
                q: "Why was Maya probably successful in physical activities?",
                answers: [
                    "She spent all her time reading",
                    "She moved quickly and trained actively",
                    "She avoided sports"
                ],
                correct: 1
            },

            {
                q: "Which trainee appears strongest at teamwork?",
                answers: [
                    "Leo",
                    "Maya",
                    "Noah"
                ],
                correct: 2
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "The trainees had different strengths",
                    "Only sports were important",
                    "Nobody worked together"
                ],
                correct: 0
            },

            {
                q: "Which statement is supported by the log?",
                answers: [
                    "All trainees enjoyed the same activities",
                    "Different abilities helped the group",
                    "Only one trainee completed challenges"
                ],
                correct: 1
            }

        ]

    }

};