const door02 = {

    number: 2,

    name: "ROOM DIRECTORY",

    briefing:
        "Las luces parpadean. No encuentras el camino. Completa el nivel para avanzar.",

    digits: ["3", "8", "5"],

    code: "385",

    challengeA: {

        name: "LEVEL 02",

        questions: [

            {
                q: "There ___ a kitchen on the ground floor.",
                answers: ["is","are","am"],
                correct: 0
            },

            {
                q: "There ___ three bedrooms upstairs.",
                answers: ["is","are","am"],
                correct: 1
            },

            {
                q: "There ___ a bathroom next to the bedroom.",
                answers: ["is","are","am"],
                correct: 0
            },

            {
                q: "There ___ two windows in the living room.",
                answers: ["is","are","am"],
                correct: 1
            },

            {
                q: "There ___ a garage behind the house.",
                answers: ["is","are","am"],
                correct: 0
            },

            {
                q: "There ___ four chairs in the dining room.",
                answers: ["is","are","am"],
                correct: 1
            },

            {
                q: "There ___ a garden at the back.",
                answers: ["is","are","am"],
                correct: 0
            },

            {
                q: "There ___ two doors on this floor.",
                answers: ["is","are","am"],
                correct: 1
            },

            {
                q: "There ___ a staircase near reception.",
                answers: ["is","are","am"],
                correct: 0
            },

            {
                q: "There ___ five rooms in the directory.",
                answers: ["is","are","am"],
                correct: 1
            }

        ]

    },

    challengeB: {

        name: "BUILDING DATABASE",

        questions: [

            { spanish: "COCINA", english: "kitchen" },
            { spanish: "SALÓN", english: "living room" },
            { spanish: "DORMITORIO", english: "bedroom" },
            { spanish: "BAÑO", english: "bathroom" },
            { spanish: "COMEDOR", english: "dining room" },
            { spanish: "GARAJE", english: "garage" },
            { spanish: "JARDÍN", english: "garden" },
            { spanish: "ESCALERAS", english: "stairs" },
            { spanish: "PUERTA", english: "door" },
            { spanish: "VENTANA", english: "window" }

        ]

    },

    challengeC: {

        name: "BUILDING MAP ANALYSIS",

        readingText: `

BUILDING DIRECTORY REPORT

The building has three floors.

The ground floor contains the reception area, a kitchen and a large living room where visitors usually wait.

The first floor contains two bedrooms and a bathroom.

The second floor contains a storage room and a small office.

There is one emergency exit near the reception area.

Employees usually work on the second floor, while visitors stay mostly on the ground floor.

The building is open every day except Sunday.

`,

        questions: [

            {
                q: "Where would visitors probably spend most of their time?",
                answers: [
                    "Ground floor",
                    "Second floor",
                    "Storage room"
                ],
                correct: 0
            },

            {
                q: "Which floor is most likely used for work?",
                answers: [
                    "Ground floor",
                    "First floor",
                    "Second floor"
                ],
                correct: 2
            },

            {
                q: "Which room is probably private?",
                answers: [
                    "Reception",
                    "Office",
                    "Living room"
                ],
                correct: 1
            },

            {
                q: "If someone needs to leave quickly, where should they go?",
                answers: [
                    "Emergency exit",
                    "Bedroom",
                    "Storage room"
                ],
                correct: 0
            },

            {
                q: "What can we conclude about the building?",
                answers: [
                    "It is a public building",
                    "It is a zoo",
                    "It is a sports centre"
                ],
                correct: 0
            },

            {
                q: "Who probably uses the office most?",
                answers: [
                    "Employees",
                    "Visitors",
                    "Tourists"
                ],
                correct: 0
            },

            {
                q: "Which statement is supported by the report?",
                answers: [
                    "The building closes on Sunday",
                    "The building closes on Saturday",
                    "The building never closes"
                ],
                correct: 0
            },

            {
                q: "Which statement is NOT supported by the report?",
                answers: [
                    "There is a bathroom",
                    "There is a kitchen",
                    "There is a cinema"
                ],
                correct: 2
            }

        ]

    }

};
