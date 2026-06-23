const door12 = {

    number: 12,

    name: "LEVEL 12",

    briefing:
        "Has encontrado una sala de observación silenciosa. La siguiente puerta permanece bloqueada. Completa el nivel para avanzar.",

    digits: ["6", "1", "8"],

    code: "618",

    challengeA: {

        name: "LEVEL 12",

        questions: [

            {
                q: "A lion is ___ than a cat.",
                answers: ["big", "bigger", "biggest"],
                correct: 1
            },

            {
                q: "A rabbit is ___ than a horse.",
                answers: ["smaller", "small", "smallest"],
                correct: 0
            },

            {
                q: "An elephant is ___ than a zebra.",
                answers: ["more big", "big", "bigger"],
                correct: 2
            },

            {
                q: "A turtle is ___ than a cheetah.",
                answers: ["slower", "slow", "slowest"],
                correct: 0
            },

            {
                q: "A giraffe is ___ than a monkey.",
                answers: ["tall", "taller", "tallest"],
                correct: 1
            },

            {
                q: "A mouse is ___ than a dog.",
                answers: ["small", "smaller", "smallest"],
                correct: 1
            },

            {
                q: "A dolphin is ___ than a shark in this report.",
                answers: ["friendlier", "friendly", "friendliest"],
                correct: 0
            },

            {
                q: "A crocodile is ___ than a lizard.",
                answers: ["long", "longest", "longer"],
                correct: 2
            },

            {
                q: "A bee is ___ than an elephant.",
                answers: ["smaller", "smallest", "small"],
                correct: 0
            },

            {
                q: "A whale is ___ than a dolphin.",
                answers: ["biggest", "bigger", "big"],
                correct: 1
            }

        ]

    },

    challengeB: {

        name: "SPECIES DATABASE",

        questions: [

            { spanish: "LEÓN", english: "lion" },
            { spanish: "ELEFANTE", english: "elephant" },
            { spanish: "JIRAFA", english: "giraffe" },
            { spanish: "MONO", english: "monkey" },
            { spanish: "TIGRE", english: "tiger" },
            { spanish: "OSO", english: "bear" },
            { spanish: "DELFÍN", english: "dolphin" },
            { spanish: "TIBURÓN", english: "shark" },
            { spanish: "ÁGUILA", english: "eagle" },
            { spanish: "SERPIENTE", english: "snake" }

        ]

    },

    challengeC: {

        name: "SPECIES ANALYSIS",

        readingText: `

SPECIES ANALYSIS

A research team compared several animals observed near the facility.

The eagle was able to reach high areas quickly and helped the team inspect large sections of land. The bear moved more slowly but could travel through difficult terrain without problems.

The dolphin explored nearby water routes and located places that other animals could not reach. Meanwhile, the snake entered narrow spaces and discovered useful information hidden inside small tunnels.

The final report explains that each animal was effective in different situations. The team concluded that success depended on choosing the right animal for each task rather than searching for a single perfect species.

`,

        questions: [

            {
                q: "Which animal was most useful for reaching high places?",
                answers: [
                    "Bear",
                    "Snake",
                    "Eagle"
                ],
                correct: 2
            },

            {
                q: "Why was the dolphin valuable?",
                answers: [
                    "It explored water routes",
                    "It climbed mountains",
                    "It entered tunnels"
                ],
                correct: 0
            },

            {
                q: "What advantage did the snake have?",
                answers: [
                    "Great speed",
                    "Access to narrow spaces",
                    "Strong swimming ability"
                ],
                correct: 1
            },

            {
                q: "What can we conclude about the bear?",
                answers: [
                    "It was unable to help",
                    "It preferred water missions",
                    "It handled difficult terrain well"
                ],
                correct: 2
            },

            {
                q: "Why did the eagle help the team?",
                answers: [
                    "It could inspect large areas",
                    "It carried supplies",
                    "It explored tunnels"
                ],
                correct: 0
            },

            {
                q: "What idea is supported by the report?",
                answers: [
                    "One animal was best at everything",
                    "Different animals had different strengths",
                    "Only fast animals were useful"
                ],
                correct: 1
            },

            {
                q: "What was the team's main conclusion?",
                answers: [
                    "Choosing the right animal matters",
                    "Bears should lead all missions",
                    "Water exploration is unnecessary"
                ],
                correct: 0
            },

            {
                q: "What is the overall purpose of the report?",
                answers: [
                    "To compare how animals perform different tasks",
                    "To describe a zoo",
                    "To rank animals by popularity"
                ],
                correct: 0
            }

        ]

    }

};