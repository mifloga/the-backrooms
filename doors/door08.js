const door08 = {

    number: 8,

    name: "LEVEL 08",

    briefing:
        "Has encontrado una sala llena de cajas apiladas. La siguiente puerta sigue bloqueada. Completa el nivel para avanzar.",

    digits: ["6", "3", "8"],

    code: "638",

    challengeA: {

        name: "LEVEL 08",

        questions: [

            {
                q: "How ___ apples are in the storage room?",
                answers: ["much", "many", "some"],
                correct: 1
            },

            {
                q: "There isn't ___ milk left.",
                answers: ["many", "much", "some"],
                correct: 1
            },

            {
                q: "How ___ books did the trainees bring?",
                answers: ["many", "much", "any"],
                correct: 0
            },

            {
                q: "We don't have ___ water for the trip.",
                answers: ["many", "some", "much"],
                correct: 2
            },

            {
                q: "How ___ cheese is in the fridge?",
                answers: ["much", "many", "some"],
                correct: 0
            },

            {
                q: "There are ___ chairs in the training room.",
                answers: ["much", "many", "any"],
                correct: 1
            },

            {
                q: "How ___ juice did they drink?",
                answers: ["some", "many", "much"],
                correct: 2
            },

            {
                q: "There aren't ___ eggs left.",
                answers: ["many", "much", "some"],
                correct: 0
            },

            {
                q: "How ___ computers are in the control room?",
                answers: ["much", "many", "some"],
                correct: 1
            },

            {
                q: "There isn't ___ bread available.",
                answers: ["many", "some", "much"],
                correct: 2
            }

        ]

    },

    challengeB: {

        name: "FOUNDATION REVIEW",

        questions: [

            { spanish: "AULA", english: "classroom" },
            { spanish: "COCINA", english: "kitchen" },
            { spanish: "ABUELA", english: "grandmother" },
            { spanish: "FÚTBOL", english: "football" },
            { spanish: "LECHE", english: "milk" },
            { spanish: "BIBLIOTECA", english: "library" },
            { spanish: "DORMITORIO", english: "bedroom" },
            { spanish: "PRIMO", english: "cousin" },
            { spanish: "NATACIÓN", english: "swimming" },
            { spanish: "MANZANA", english: "apple" }

        ]

    },

    challengeC: {

        name: "INVENTORY ANALYSIS",

        readingText: `

INVENTORY ANALYSIS REPORT

The exploration team inspected a storage area before continuing deeper into the facility.

Daniel counted boxes of equipment and noticed that some shelves were almost empty. He recorded every missing item carefully.

Olivia checked food supplies and compared them with last week's records. She quickly identified which products needed replacing.

Ethan organised the inventory lists and created a new system that made information easier to find.

After the inspection, the team agreed that one member was best at finding missing items, one was strongest at comparing information, and one improved the organisation of records. Their combined work helped prepare the next stage of the mission.

`,

        questions: [

            {
                q: "Who was most likely best at finding missing items?",
                answers: [
                    "Daniel",
                    "Olivia",
                    "Ethan"
                ],
                correct: 0
            },

            {
                q: "Who seems strongest at comparing information?",
                answers: [
                    "Ethan",
                    "Olivia",
                    "Daniel"
                ],
                correct: 1
            },

            {
                q: "Who improved the organisation of records?",
                answers: [
                    "Olivia",
                    "Daniel",
                    "Ethan"
                ],
                correct: 2
            },

            {
                q: "What can we conclude about Daniel?",
                answers: [
                    "He pays attention to details",
                    "He dislikes records",
                    "He organised the inventory system"
                ],
                correct: 0
            },

            {
                q: "Why was Olivia valuable during the inspection?",
                answers: [
                    "She counted every shelf",
                    "She compared current and past information",
                    "She created a filing system"
                ],
                correct: 1
            },

            {
                q: "What was Ethan's main contribution?",
                answers: [
                    "Finding missing products",
                    "Checking food supplies",
                    "Making information easier to use"
                ],
                correct: 2
            },

            {
                q: "What is the main idea of the report?",
                answers: [
                    "The storage area was empty",
                    "Different skills improved the inspection",
                    "Only food supplies were important"
                ],
                correct: 1
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "The team benefited from different strengths",
                    "Only one person completed the work",
                    "The inspection failed"
                ],
                correct: 0
            }

        ]

    }

};